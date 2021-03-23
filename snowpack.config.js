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
  buildOptions: {
    baseUrl: "/react-snowpack-test-2",
    metaUrlPath: "/dist",
  },
};
