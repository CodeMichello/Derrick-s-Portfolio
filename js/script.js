const menu = document.getElementById("menu");
const mobile = document.getElementById("mobile");

menu.addEventListener("click", () => {
  mobile.classList.toggle("hidden");
  mobile.classList.toggle("flex");
});
