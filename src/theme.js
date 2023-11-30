export function getThemeToggle() {
  const doc = document.documentElement;
  const toggle = document.getElementById("toggle");

  const toggleDarkMode = () => {
    const newTheme = toggle.checked ? "dark" : "light";
    doc.setAttribute("data-theme", newTheme);
  };

  toggle.addEventListener("change", toggleDarkMode);

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggle.checked = true;
  } else {
    toggle.checked = false;
    toggleDarkMode();
  }

  return toggle;
}
