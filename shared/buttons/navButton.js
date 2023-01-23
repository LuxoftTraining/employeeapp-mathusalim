import { button } from "./button.js";

export const navButton = (label, onclick) => {
  const [navBtn, destroy] = button(label, onclick);
  navBtn.className += " nav-btn";
  return [navBtn, destroy];
};

export const activeNavButton = (label, onClick) => {
  const [navBtn, destroy] = navButton(label, onClick);
  navBtn.className += " nav-btn-active";
  return [navBtn, destroy];
};
