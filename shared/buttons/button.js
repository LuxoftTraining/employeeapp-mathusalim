export const button = (label, handleClick) => {
  const but = document.createElement("button");
  but.setAttribute("class", "btn");
  but.setAttribute("type", "button");
  but.innerText = label;
  if (handleClick) {
    but.addEventListener("click", handleClick);
    const destroy = () => {
      but.removeEventListener("click", handleClick);
    };
    return [but, destroy];
  }
  return [but, () => {}];
};
