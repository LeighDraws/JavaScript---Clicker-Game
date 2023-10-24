// Cette fonction empêche le menu déroulant de s'ouvrir quand on fait un clic droit sur les boutons bleus et jaunes (et affiche un message pour l'utilisateur)
function preventRightClick(event) {
    event.preventDefault();
    document.getElementById("message").textContent = "Clic droit :( ! Réessayez"
}

// Cette fonction va servir à activer le bouton rouge, en le faisant disparaitre avec la classe 'clicked' et en affichant un message pour l'utilisateur
function redButtonClicked(event) {
    event.preventDefault();
    this.classList.add("clicked");
    document.getElementById("message").textContent = "Bouton rouge cliqué !"
}

// Initialise un timer pour empêcher l'utilisation du clic gauche quand l'utilisateur double clique
let timer

// Liste tous les boutons ayant la classe "blue"
const allBlueButtons = document.querySelectorAll(".blue");

// Pour chaque boutons bleus, cette fonction écoute l'évèment 'click' (gauche) et démarre le timer, si un clic supplémentaire a été entendu après 200ms c'est un double clic, si non c'est un clic gauche normal. La dernière ligne appelle la fonction "preventRightClick" qui empèche le menu déroulant de s'ouvrir.
allBlueButtons.forEach(button => {
    button.addEventListener("click", event => {
        if (event.detail === 1) {
            timer = setTimeout(() => {
                event.target.classList.add("clicked");
                document.getElementById("message").textContent = "Bouton bleu cliqué !"
            }, 200)
        }
    })
    button.addEventListener("dblclick", event => {
        clearTimeout(timer);
        document.getElementById("message").textContent = "Double clic :( ! Réessayez"
    })
    button.addEventListener("contextmenu", preventRightClick)
})

// Liste tous les boutons ayant la classe "red"
const allRedButtons = document.querySelectorAll(".red");


allRedButtons.forEach(button => {
    button.addEventListener("click", event => {
        if (event.detail === 1) {
            timer = setTimeout(() => {
                document.getElementById("message").textContent = "Clic gauche :( ! Réessayez"
            }, 200)
        }
    })
    button.addEventListener("dblclick", event => {
        clearTimeout(timer);
        document.getElementById("message").textContent = "Double clic :( ! Réessayez"
    })
    button.addEventListener("contextmenu", redButtonClicked)
})

// Liste tous les boutons ayant la classe "yellow"
const allYellowButtons = document.querySelectorAll(".yellow");

allYellowButtons.forEach(button => {
    button.addEventListener("click", event => {
        if (event.detail === 1) {
            timer = setTimeout(() => {
                document.getElementById("message").textContent = "Clic gauche :( ! Réessayez"
            }, 200)
        }
    })
    button.addEventListener("dblclick", event => {
        clearTimeout(timer);
        event.target.classList.add("clicked");
        document.getElementById("message").textContent = "Bouton jaune cliqué !"
    })
    button.addEventListener("contextmenu", preventRightClick)
})
