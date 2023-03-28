const darkThemeBtn = document.querySelector(".dark-theme-button");
let theme = localStorage.getItem("theme") || "light";

darkThemeBtn.addEventListener("click", () => {
  if (theme === "dark") {
    theme = "light";
    document.body.classList.remove("dark");
  } else {
    theme = "dark";
    document.body.classList.add("dark");
  }
  localStorage.setItem("theme", theme);
});

if (theme === "dark") {
  document.body.classList.add("dark");
}
