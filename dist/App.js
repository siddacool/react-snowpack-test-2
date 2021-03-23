import React, {useState, useEffect} from "https://cdn.skypack.dev/react@17.0.2";
import TheHeader from "./components/TheHeader.js";
function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1e3);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement(TheHeader, null), /* @__PURE__ */ React.createElement("header", {
    className: "App-header"
  }, /* @__PURE__ */ React.createElement("p", null, "Page has been open for ", /* @__PURE__ */ React.createElement("code", null, count), " seconds. HHH")));
}
export default App;
