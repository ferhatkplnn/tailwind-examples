const themeToggleBtn = document.getElementById("theme-toggle");
const themeToggleDarkIcon = document.getElementById("theme-toggle-dark-icon");
const themeToggleLightIcon = document.getElementById("theme-toggle-light-icon");

const isDarkMode =
  localStorage.getItem("color-theme") === "dark" ||
  (!localStorage.getItem("color-theme") &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

if (isDarkMode) {
  themeToggleLightIcon.classList.remove("hidden");
} else {
  themeToggleDarkIcon.classList.remove("hidden");
}

themeToggleBtn.addEventListener("click", toggleMode);

function toggleMode() {
  const isLightMode = localStorage.getItem("color-theme") === "light";

  themeToggleDarkIcon.classList.toggle("hidden", isLightMode);
  themeToggleLightIcon.classList.toggle("hidden", !isLightMode);

  if (localStorage.getItem("color-theme")) {
    const newTheme = isLightMode ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("color-theme", newTheme);
  } else {
    const isCurrentlyDarkMode =
      document.documentElement.classList.contains("dark");
    const newTheme = isCurrentlyDarkMode ? "light" : "dark";

    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("color-theme", newTheme);
  }
}
