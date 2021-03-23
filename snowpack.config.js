/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: ["@snowpack/plugin-react-refresh"],
  routes: [],
  optimize: {},
  packageOptions: {
    source: "remote",
    cache: ".snowpack",
  },
  devOptions: {},
  alias: {
    // Type 1: Package Import Alias
    react: "https://cdn.skypack.dev/react@17.0.2",
    "react-dom": "https://cdn.skypack.dev/react-dom@17.0.2",
  },
  buildOptions: {
    baseUrl: "/react-snowpack-test-2",
    metaUrlPath: "/dist",
  },
};
