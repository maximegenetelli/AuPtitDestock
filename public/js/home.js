// ---------------------------Animation au scroll--------------------------- //
// Ajoute un écouteur d’événements pour exécuter le code lorsque le contenu du DOM est complètement chargé
window.addEventListener('DOMContentLoaded', (e) => {
    
    // Ajoute un écouteur d’événements pour détecter le défilement de la page
    document.addEventListener('scroll', () => {
        
        // Sélectionne l'élément ayant la classe 'conteneur'
        const section1 = document.querySelector('.conteneur');

        // Vérifie si l'utilisateur a défilé verticalement de 150 pixels ou moins
        if (window.scrollY <= 150) {
            // Si oui, déplace la section vers la gauche hors de la vue
            section1.style.transform = "translateX(-150%)";
        } else {
            // Si l'utilisateur défile au-delà de 150 pixels, repositionne la section
            section1.style.transform = "translateX(0%)";
            // Ajoute une transition pour un effet doux
            section1.style.transition = "0.4s ease-in-out";
        }

        // Sélectionne l'élément ayant l'ID 'categorie'
        const categorie = document.querySelector('#categorie');

        // Vérifie si l'utilisateur a défilé verticalement de 500 pixels ou moins
        if (window.scrollY <= 500) {
            // Si oui, déplace l'élément vers le bas hors de la vue
            categorie.style.transform = "translateY(300%)";
        } else {
            // Si l'utilisateur défile au-delà de 500 pixels, repositionne l'élément
            categorie.style.transform = "translateY(0%)";
            // Ajoute une transition pour un effet doux
            categorie.style.transition = "0.4s ease-in";
        }

        // Sélectionne l'élément ayant l'ID 'newsletter'
        const newsletter = document.querySelector('#newsletter');

        // Vérifie si l'utilisateur a défilé verticalement de 650 pixels ou moins
        if (window.scrollY <= 650) {
            // Si oui, déplace l'élément vers la droite hors de la vue
            newsletter.style.transform = "translateX(200%)";
        } else {
            // Si l'utilisateur défile au-delà de 650 pixels, repositionne l'élément
            newsletter.style.transform = "translateX(0%)";
            // Ajoute une transition pour un effet doux
            newsletter.style.transition = "0.6s ease-in-out";
        }
    })
})

// ---------------------------Carrousel--------------------------- //
let index = 0;

// Fonction pour changer d'image
function changerImage(n) {
    const images = document.querySelectorAll(".carrousel-images img");
    images[index].classList.remove("active"); // Masque l'image actuelle
    index += n;

    // Réinitialiser si on dépasse le nombre d'images
    if (index >= images.length) {
        index = 0;
    } else if (index < 0) {
        index = images.length - 1;
    }

    images[index].classList.add("active"); // Affiche la nouvelle image
}

// Afficher la première image au chargement
window.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".carrousel-images img");
    images[index].classList.add("active");
});