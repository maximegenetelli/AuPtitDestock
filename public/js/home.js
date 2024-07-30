window.addEventListener('DOMContentLoaded', (e) => {
    document.addEventListener('scroll', () => {
        const section1 = document.querySelector('.conteneur');
        if (window.scrollY <= 170) {
            section1.style.transform = "translateX(-150%)";
        }else {
            section1.style.transform = "translateX(0%)";
            section1.style.transition = "0.4s ease-in-out";
        }

        const categorie = document.querySelector('#categorie');
        if (window.scrollY <= 550) {
            categorie.style.transform = "translateY(150%)";
        }else {
            categorie.style.transform = "translateY(0%)";
            categorie.style.transition = "0.4s ease-in";
        }

        const newsletter = document.querySelector('#newsletter');
        if (window.scrollY <= 800) {
            newsletter.style.transform = "translateX(200%)";
        }else {
            newsletter.style.transform = "translateX(0%)";
            newsletter.style.transition = "0.4s ease-in-out";
        }
    })
})


