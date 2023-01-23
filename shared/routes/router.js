const routes = [
  {
    name: "module 1",
    pathName: "module1",
    routerHandler: () => (document.createElement("p").innerText = "module1"),
  },
  {
    name: "module 2",
    pathName: "module2",
    routerHandler: () => (document.createElement("p").innerText = "module2"),
  },
  {
    name: "module 3",
    pathName: "module3",
    routerHandler: () => (document.createElement("p").innerText = "module3"),
  },
];

export const getRoutes = (navigationDone) => {
  const isActive = (moduleName) =>
    localStorage.getItem("userActivePageName") === moduleName;

  return routes.map((route) => ({
    name: route.name,
    active: isActive(route.pathName),
    handleClick: () => {
      navigateTo(route.pathName, navigationDone);
    },
  }));
};

export const getActiveRoutePage = () => {
  const activeModuleName =
    localStorage.getItem("userActivePageName") || "module1";
  return routes
    .find((route) => route.pathName === activeModuleName)
    .routerHandler();
};

export const navigateTo = (pathName, done) => {
  localStorage.setItem("userActivePageName", pathName);
  done();
};
