import { renderLayout, configure } from "./shared/layout.js";

const rootElement = document.getElementById("root");
configure(rootElement);

const init = () => {
  renderLayout();
};

init();
