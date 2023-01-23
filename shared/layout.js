import { navButton, activeNavButton } from "./buttons/navButton.js";
import { getRoutes, getActiveRoutePage } from "./routes/router.js";

let hostElementRef;
export const configure = (rootElementRef) => {
  hostElementRef = rootElementRef;
};

export const renderLayout = () => {
  hostElementRef.replaceChildren();

  let routes = getRoutes(renderLayout);

  const navContainer = document.createElement("nav");
  navContainer.setAttribute("class", "nav-container");
  const routerButtons = routes.map((route) =>
    route.active
      ? activeNavButton(route.name, route.handleClick)[0]
      : navButton(route.name, route.handleClick)[0]
  );

  routerButtons.forEach((routerButton) => {
    navContainer.append(routerButton);
  });
  hostElementRef.append(navContainer);
  renderOutlet();
};

//#region Outlet

const renderOutlet = () => {
  const outletContainer = document.createElement("div");
  outletContainer.setAttribute("class", "main-container");
  outletContainer.append(getActiveRoutePage());

  hostElementRef.append(outletContainer);
};
//#endregion Outlet
