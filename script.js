const themeButton = document.querySelector("#theme-toggle");
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const darkModeEnabled = document.body.classList.toggle("dark-theme");

    themeButton.textContent = darkModeEnabled ? "Light mode" : "Dark mode";
    themeButton.setAttribute(
      "aria-label",
      darkModeEnabled ? "Switch to light theme" : "Switch to dark theme"
    );
  });
}
