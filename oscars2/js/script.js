// Récupère la feuille de style et le bouton (données)
var theme = document.getElementById("theme");
var bouton = document.getElementById("switch");

// Remet le style mémorisé choisi avant
if (localStorage.getItem("style") === "alt") {
  theme.href = theme.href.replace("style.css", "style-alt.css");
}

// change de style et mémorisation
bouton.onclick = function (event) {
  event.preventDefault();
  if (theme.href.includes("style-alt")) {
    theme.href = theme.href.replace("style-alt.css", "style.css");
    localStorage.setItem("style", "default");
  } else {
    theme.href = theme.href.replace("style.css", "style-alt.css");
    localStorage.setItem("style", "alt");
  }
};
