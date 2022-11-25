function toggleMenu() {
  let button = document.getElementsByClassName("header__menu-button");
  let items = document.getElementsByClassName("header__menu-items");
  let layout = document.getElementsByClassName("bg__menu-layout");
  button[0].classList.toggle("active");
  items[0].classList.toggle("active");
  layout[0].classList.toggle("active");
}

function makeActive(a) {
  if (window.innerWidth < 768) {
    let parent = a.parentNode;
    let menu = parent.querySelector(".dropdown__menu, .dropdown__submenu");
    a.classList.toggle("active");
    parent.classList.toggle("active");
    menu.classList.toggle("active");
  }
}
