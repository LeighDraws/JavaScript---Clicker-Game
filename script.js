const allBlueButtons = document.querySelectorAll(".blue");
// Liste tous les boutons ayant la classe "blue", chaque bouton est un élement du tableau allBlueButtons (?)

function blueButtonClicked() {
    this.classList.add("clicked");
    console.log("blue button clicked!") 
}
// Cette fonction ajoute la classe "clicked" aux boutons bleus cliqués avec le clic gauche (grâce à "this"), la classe cache les boutons 

function handleRightClick(event) {
    event.preventDefault();
    console.log("Clic droit :(") 
}
// Cette fonction empêche le menu déroulant de s'ouvrir quand on fait un clic droit sur le bouton bleu (et affiche "clic droit" dans la console)
  
function handleDoubleClick(event) {
    console.log("Double clic!");
}
// Cette fonction affiche "double clic" dans la console
// Pour le moment, le clic gauche empêche la possibilité de faire un double clic


allBlueButtons.forEach(button => {
button.addEventListener("click", blueButtonClicked);
button.addEventListener("contextmenu", handleRightClick);
button.addEventListener("dblclick", handleDoubleClick)
});
// Cette méthode execute les fonctions données : blueButtonClicked, handleRightClick et handleDoubleClick; pour chaque élément du tableau "allBlueButtons" 

  
