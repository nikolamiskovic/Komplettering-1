const menuBtn = document.getElementById("menu-btn");
const menu = document.querySelector("nav ul");
const stylePicker = document.getElementById("style-picker");

menuBtn.addEventListener("click", function () {
  menu.classList.toggle("show");
});

stylePicker.addEventListener("change", function () {
  document.body.className = stylePicker.value;
});