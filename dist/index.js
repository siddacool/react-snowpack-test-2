import * as __SNOWPACK_ENV__ from './env.js';
import.meta.env = __SNOWPACK_ENV__;

import React from "https://cdn.skypack.dev/react@17.0.2";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.2";
import App from "./App.js";
ReactDOM.render(/* @__PURE__ */ React.createElement(React.StrictMode, null, /* @__PURE__ */ React.createElement(App, null)), document.getElementById("root"));
if (undefined /* [snowpack] import.meta.hot */ ) {
  undefined /* [snowpack] import.meta.hot */ .accept();
}
