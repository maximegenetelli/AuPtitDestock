// ---------------------------VALIDATION FORMULAIRE--------------------------- //
const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const errors = document.querySelectorAll('.error');

    for(let i = 0; i < errors.length; i++) {
        errors[i].style.display = 'none';
    }

    // EMAIL
    let emailOk = true;
    const email = document.querySelector('#email').value;
    const regexEmail =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!regexEmail.test(email)) {
        emailOk = false;
        document.querySelector('#emailError').innerText = "L'email saisie est incorrect";
        document.querySelector('#emailError').style.display = 'block';
    }
    if (email.length === 0) {
        emailOk = false;
        document.querySelector('#emailError').innerText = "Veuillez saisir votre email";
        document.querySelector('#emailError').style.display = 'block';
    }

    // PRENOM
    let firstnameOk = true;
    const firstname = document.querySelector('#firstname').value;
    
    if (firstname.length < 4) {
        firstnameOk = false;
        document.querySelector('#firstnameError').innerText = "Prénom trop court";
        document.querySelector('#firstnameError').style.display = 'block';
    }else if (firstname.length > 20) {
        firstnameOk = false;
        document.querySelector('#firstnameError').innerText = "Prénom trop long";
        document.querySelector('#firstnameError').style.display = 'block';
    }
    if (firstname.length === 0) {
        firstnameOk = false;
        document.querySelector('#firstnameError').innerText = "Veuillez saisir votre prénom";
        document.querySelector('#firstnameError').style.display = 'block';
    }

    // NOM
    let lastnameOk = true;
    const lastname = document.querySelector('#lastname').value;

    if (lastname.length < 4) {
        lastnameOk = false;
        document.querySelector('#lastnameError').innerText = "Nom trop court";
        document.querySelector('#lastnameError').style.display = 'block';
    }else if (lastname.length > 20) {
        lastnameOk = false;
        document.querySelector('#lastnameError').innerText = "Nom trop long";
        document.querySelector('#lastnameError').style.display = 'block';
    }
    if (lastname.length === 0) {
        lastnameOk = false;
        document.querySelector('#lastnameError').innerText = "Veuillez saisir votre nom";
        document.querySelector('#lastnameError').style.display = 'block';
    }

    // MESSAGE
    let messageOk = true;
    const message = document.querySelector('#message').value;

    if (message.length > 255) {
        messageOk = false;
        document.querySelector('#messageError').innerText = "Votre message doit contenir 255 caractères maximum";
        document.querySelector('#messageError').style.display = 'block';
    }
    if (message.length === 0) {
        messageOk = false;
        document.querySelector('#messageError').innerText = "Veuillez saisir un message";
        document.querySelector('#messageError').style.display = 'block';
    }
})
