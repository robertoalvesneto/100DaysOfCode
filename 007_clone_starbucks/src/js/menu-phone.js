const element = document.getElementsByClassName("mobile-nav")[0];
const name = "mobile-nav--open";

let showMenu = () =>
  element.className.split(" ").indexOf(name) == -1
    ? (element.className += " " + name)
    : "";

let hiddeMenu = () =>
  (element.className = element.className.replace(/\bmobile-nav--open\b/g, ""));


function handleFooterMenu(name) {
  let element = document.getElementsByClassName(name)[0];

  element.className.split(" ").indexOf("footer-container__links__open") == -1
    ? (element.className += " " + "footer-container__links__open")
    : (element.className = element.className.replace(/\bfooter-container__links__open\b/g, ""));
}