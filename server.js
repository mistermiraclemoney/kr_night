const http = require("http");
const fs = require("fs");
const path = require("path");

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

const server = http.createServer((request, response) => {
  const safePath = decodeURIComponent((request.url || "/").split("?")[0]);
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
  console.log(`KR NIGHT web server running on http://${host}:${port}`);
});
