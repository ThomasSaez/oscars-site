var theme = document.getElementById("theme");
var bouton = document.getElementById("switch");

bouton.onclick = function (event) {
  event.preventDefault();
  if (theme.href.includes("style-alt")) {
    theme.href = theme.href.replace("style-alt.css", "style.css");
  } else {
    theme.href = theme.href.replace("style.css", "style-alt.css");
  }
};
