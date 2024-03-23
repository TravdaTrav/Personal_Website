function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function timeDateStyles() {
  let timedates = document.querySelectorAll(".time-date");
  for (let timedate of timedates) {
    if (timedate.offsetHeight > 40) {
      timedate.classList.remove("button");
    } else {
      timedate.classList.add("button");
    }
  }
}

window.addEventListener("load", timeDateStyles);
window.addEventListener("resize", timeDateStyles);
