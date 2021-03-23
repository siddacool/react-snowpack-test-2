/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist",
  },
  plugins: [],
  routes: [],
  optimize: {},
  packageOptions: {
    source: "remote",
  },
  devOptions: {},
  buildOptions: {
    baseUrl: "/react-snowpack-test-2",
  },
};
