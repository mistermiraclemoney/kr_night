// KR NIGHT API client.
// The same static bundle runs in three places: served by our Node server
// (same-origin API), inside the Capacitor iOS/Android shells (remote API),
// and as a local file during development. The API base resolves in that order
// and can always be overridden from Profile → About → server setting.
(function () {
  const TOKEN_KEY = "kr-session-token";
  const BASE_KEY = "kr-api-base";
  // Set this to the real deployed server URL before building store bundles.
  // Empty means "not configured": the app says so honestly instead of
  // pretending a dead host is a demo. Users can also set the URL at runtime
  // via Profile → server line.
  const DEFAULT_REMOTE_BASE = "";

  function resolveBase() {
    const saved = localStorage.getItem(BASE_KEY);
    if (saved) return saved.replace(/\/$/, "");
    if (/^https?:$/.test(location.protocol) && !/^(capacitor|ionic)/.test(location.hostname)) {
      return location.origin;
    }
    return DEFAULT_REMOTE_BASE;
  }

  const state = {
    base: resolveBase(),
    token: localStorage.getItem(TOKEN_KEY) || null,
    online: false,
  };

  async function request(path, options = {}) {
    if (!state.base) {
      state.online = false;
      const error = new Error("Server not configured");
      error.offline = true;
      throw error;
    }
    const headers = { "Content-Type": "application/json" };
    if (state.token) headers.Authorization = `Bearer ${state.token}`;
    let response;
    try {
      response = await fetch(`${state.base}${path}`, {
        method: options.method || "GET",
        headers,
        body: options.body ? JSON.stringify(options.body) : undefined,
      });
    } catch (networkError) {
      state.online = false;
      const error = new Error("offline");
      error.offline = true;
      throw error;
    }
    state.online = true;
    let data = {};
    try {
      data = await response.json();
    } catch {
      /* empty body */
    }
    if (!response.ok) {
      const error = new Error(data.error || `Request failed (${response.status})`);
      error.status = response.status;
      throw error;
    }
    return data;
  }

  function setToken(token) {
    state.token = token;
    if (token) localStorage.setItem(TOKEN_KEY, token);
    else localStorage.removeItem(TOKEN_KEY);
  }

  function setBase(url) {
    if (url) localStorage.setItem(BASE_KEY, url.replace(/\/$/, ""));
    else localStorage.removeItem(BASE_KEY);
    state.base = resolveBase();
  }

  function connectLoungeStream(venueId, onMessage) {
    if (!state.token) return null;
    const source = new EventSource(
      `${state.base}/api/lounges/${encodeURIComponent(venueId)}/stream?token=${encodeURIComponent(state.token)}`
    );
    source.onmessage = (event) => {
      try {
        onMessage(JSON.parse(event.data));
      } catch {
        /* ignore malformed */
      }
    };
    return source;
  }

  async function ping() {
    try {
      await request("/api/health");
      return true;
    } catch {
      return false;
    }
  }

  window.KRApi = {
    get base() {
      return state.base;
    },
    get token() {
      return state.token;
    },
    get online() {
      return state.online;
    },
    request,
    setToken,
    setBase,
    ping,
    connectLoungeStream,
  };
})();
