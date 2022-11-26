function toggleMenu() {
  let menuBurger = document.getElementsByClassName("header__menu-burger");
  let menuItems = document.getElementsByClassName("header__menu-items");
  let menuLayout = document.getElementsByClassName("layout__header-menu");
  menuBurger[0].classList.toggle("active");
  menuItems[0].classList.toggle("active");
  menuLayout[0].classList.toggle("active");
}

function makeActive(a) {
  if (window.innerWidth < 768) {
    let parent = a.parentNode;
    let menu = parent.querySelector(".header__menu-dropdown");
    a.classList.toggle("active");
    parent.classList.toggle("active");
    menu.classList.toggle("active");
  }
}
