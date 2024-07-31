// ---------------------------Animation au scroll--------------------------- //
// Ecoute quand le DOM est chargé
window.addEventListener('DOMContentLoaded', (e) => {
    // Ecoute si l'utilisateur sroll
    document.addEventListener('scroll', () => {
        const section1 = document.querySelector('.conteneur');
        // si l'utilisateur à scrollé de moins de 150px sa ne s'affiche pas
        if (window.scrollY <= 150) {
            section1.style.transform = "translateX(-150%)";
        // sinon s'il à scrollé plus de 150px alors la section s'affiche de gauche vers la droite sur une durée de 0,4 secondes
        }else {
            section1.style.transform = "translateX(0%)";
            section1.style.transition = "0.4s ease-in-out";
        }

        const categorie = document.querySelector('#categorie');
        if (window.scrollY <= 500) {
            categorie.style.transform = "translateY(150%)";
        }else {
            categorie.style.transform = "translateY(0%)";
            categorie.style.transition = "0.4s ease-in";
        }

        const newsletter = document.querySelector('#newsletter');
        if (window.scrollY <= 650) {
            newsletter.style.transform = "translateX(200%)";
        }else {
            newsletter.style.transform = "translateX(0%)";
            newsletter.style.transition = "0.6s ease-in-out";
        }
    })
})


