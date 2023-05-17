function setTheme() {
  const body = document.querySelector("body");
  if (localStorage.getItem("theme") === "light" || localStorage.getItem("theme") === null) {
    localStorage.setItem("theme", "dark");
    body.classList.add("dark");
  } else {
    localStorage.setItem("theme", "light");
    body.classList.remove("dark");
  }
}

const themeButton = document.getElementById("theme-btn");
themeButton.addEventListener("click", setTheme);

function getTheme() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }

}

getTheme();
