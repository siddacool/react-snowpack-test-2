/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* ... */
    public: "/",
    src: "/dist",
  },
  plugins: [
    /* ... */
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  optimize: {
    /* Example: Bundle your final build: */
    bundle: true,
    minify: true,
    splitting: true,
    sourcemap: false,
  },
  packageOptions: {
    source: "remote",
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
