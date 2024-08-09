// ---------------------------VALIDATION FORMULAIRE--------------------------- //
// Sélectionne le formulaire à partir de son ID 'form' et le stocke dans la constante 'form'
const form = document.querySelector('#form');

// Écoute l'événement 'submit' sur le formulaire
form.addEventListener('submit', (e) => {
    // Annule l'action par défaut du formulaire (envoi des données) en cas d'erreur
    e.preventDefault();
    
    // Récupère tous les éléments avec la classe 'error' qui seront utilisés pour afficher les messages d'erreur
    const errors = document.querySelectorAll('.error');

    // Boucle pour masquer tous les messages d'erreur au début du traitement
    for (let i = 0; i < errors.length; i++) {
        errors[i].style.display = 'none'; // Masque chaque message d'erreur
    }

    // Validation de l'EMAIL
    let emailOk = true; // Indicateur de validité de l'email
    const email = document.querySelector('#email').value; // Récupère la valeur de l'input email
    
    // Déclaration d'une règle de validation (expression régulière - REGEX) pour l'email
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // Vérifie si l'email saisi ne correspond pas à la règle prédéfinie
    if (!regexEmail.test(email)) {
        emailOk = false; // Met à jour l'indicateur à false si l'email est invalide
        // Affiche le message d'erreur associé à l'email
        document.querySelector('#emailError').innerText = "L'email saisie est incorrect";
        document.querySelector('#emailError').style.display = 'block'; // Affiche l'erreur
    }
    // Vérifie si l'input email est vide
    if (email.length === 0) {
        emailOk = false; // Indique que l'email est invalide
        document.querySelector('#emailError').innerText = "Veuillez saisir votre email";
        document.querySelector('#emailError').style.display = 'block'; // Affiche l'erreur
    }

    // Validation du PRENOM
    let firstnameOk = true; // Indicateur de validité du prénom
    const firstname = document.querySelector('#firstname').value; // Récupère la valeur de l'input prénom
    
    // Vérifie si le prénom est trop court
    if (firstname.length < 4) {
        firstnameOk = false; // Indique que le prénom est invalide
        document.querySelector('#firstnameError').innerText = "Prénom trop court"; // Message d'erreur
        document.querySelector('#firstnameError').style.display = 'block'; // Affiche l'erreur
    } 
    // Vérifie si le prénom est trop long
    else if (firstname.length > 20) {
        firstnameOk = false; // Indique que le prénom est invalide
        document.querySelector('#firstnameError').innerText = "Prénom trop long"; // Message d'erreur
        document.querySelector('#firstnameError').style.display = 'block'; // Affiche l'erreur
    }
    // Vérifie si l'input prénom est vide
    if (firstname.length === 0) {
        firstnameOk = false; // Indique que le prénom est invalide
        document.querySelector('#firstnameError').innerText = "Veuillez saisir votre prénom"; // Message d'erreur
        document.querySelector('#firstnameError').style.display = 'block'; // Affiche l'erreur
    }

    let lastnameOk = true; // Indicateur de validité du nom
    const lastname = document.querySelector("#lastname").value; // Récupère la valeur de l’input nom


    // Vérifie si le nom est trop court
    if (lastname.length < 4) {
    lastnameOk = false; // Met à jour l’indicateur à faux si le nom est invalide
    // Affiche le message d’erreur associé au nom
    document.querySelector("#lastnameError").innerText = "Nom trop court";
    document.querySelector("#lastnameError").style.display = "block"; // Affiche l’erreur
    }
    // Vérifie si le nom est trop long
    else if (lastname.length > 20) {
    lastnameOk = false; // Met à jour l’indicateur à faux si le nom est invalide
    // Affiche le message d’erreur associé au nom
    document.querySelector("#lastnameError").innerText = "Nom trop long";
    document.querySelector("#lastnameError").style.display = "block"; // Affiche l’erreur
    }


    // Vérifie si l’input nom est vide
    if (lastname.length === 0) {
    lastnameOk = false; // Indique que le nom est invalide
    // Affiche le message d’erreur associé au nom
    document.querySelector("#lastnameError").innerText = "Veuillez saisir votre nom";
    document.querySelector("#lastnameError").style.display = "block"; // Affiche l’erreur
    }


    // Validation du MESSAGE
    let messageOk = true; // Indicateur de validité du message
    const message = document.querySelector("#message").value; // Récupère la valeur de l’input message


    // Vérifie si le message dépasse 255 caractères
    if (message.length > 255) {
    messageOk = false; // Met à jour l’indicateur à faux si le message est invalide
    // Affiche le message d’erreur associé au message
    document.querySelector("#messageError").innerText = "Votre message doit contenir 255 caractères maximum";
    document.querySelector("#messageError").style.display = "block"; // Affiche l’erreur
    }


    // Vérifie si l’input message est vide
    if (message.length === 0) {
    messageOk = false; // Indique que le message est invalide
    // Affiche le message d’erreur associé au message
    document.querySelector("#messageError").innerText = "Veuillez saisir un message";
    document.querySelector("#messageError").style.display = "block"; // Affiche l’erreur
    }

    if (messageOk === true && lastnameOk === true && firstnameOk === true && emailOk === true) {
        document.querySelector('#formValid').innerText = "Votre message à bien été envoyé";
        document.querySelector('#formValid').style.display = "block";
        document.querySelector('.divValid').style.display = "block";
    }
});