const http = require("http");
const fs = require("fs");
const path = require("path");
const { handleApi, handleLoungeStream } = require("./server/api");

const port = Number(process.env.PORT || 3000);
const host = process.env.HOST || "0.0.0.0";
const webRoot = fs.existsSync(path.join(__dirname, "mobile-web"))
  ? path.join(__dirname, "mobile-web")
  : __dirname;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const MAX_BODY_BYTES = 64 * 1024;

function sendFile(filePath, response) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
      response.end("Server error");
      return;
    }

    response.writeHead(200, { "Content-Type": contentType });
    response.end(data);
  });
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    request.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY_BYTES) {
        reject(new Error("Body too large"));
        request.destroy();
        return;
      }
      chunks.push(chunk);
    });
    request.on("end", () => {
      if (!chunks.length) return resolve({});
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
      } catch {
        resolve({});
      }
    });
    request.on("error", reject);
  });
}

const server = http.createServer(async (request, response) => {
  const urlObj = new URL(request.url || "/", `http://${request.headers.host || "localhost"}`);

  // CORS for the Capacitor app shells (capacitor://localhost, https://localhost)
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (request.method === "OPTIONS") {
    response.writeHead(204);
    response.end();
    return;
  }

  if (urlObj.pathname.startsWith("/api/")) {
    if (handleLoungeStream(request, response, urlObj)) return;

    let body = {};
    if (request.method === "POST" || request.method === "PATCH") {
      try {
        body = await readBody(request);
      } catch {
        response.writeHead(413, { "Content-Type": "application/json; charset=utf-8" });
        response.end(JSON.stringify({ error: "Body too large" }));
        return;
      }
    }
    const auth = request.headers.authorization || "";
    const token = auth.startsWith("Bearer ") ? auth.slice(7) : urlObj.searchParams.get("token");
    if (handleApi(request, response, urlObj, body, token)) return;

    response.writeHead(404, { "Content-Type": "application/json; charset=utf-8" });
    response.end(JSON.stringify({ error: "Not found" }));
    return;
  }

  const safePath = decodeURIComponent(urlObj.pathname);
  const requestedPath = safePath === "/" ? "/index.html" : safePath;
  const fullPath = path.normalize(path.join(webRoot, requestedPath));

  if (!fullPath.startsWith(webRoot)) {
    response.writeHead(403, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Forbidden");
    return;
  }

  if (fs.existsSync(fullPath) && fs.statSync(fullPath).isFile()) {
    sendFile(fullPath, response);
    return;
  }

  const fallbackPath = path.join(webRoot, "index.html");
  sendFile(fallbackPath, response);
});

server.listen(port, host, () => {
  console.log(`KR NIGHT server (web + API) running on http://${host}:${port}`);
});
