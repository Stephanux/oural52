window.addEventListener('load', () => {
    /**GESTION MSG QUERY**/
    let msgForm = document.querySelector('h4')

    if (msgForm != null && msgForm.innerText.includes("erreur")) {
        msgForm.style.color = "red"
    } else if (msgForm != null) {
        msgForm.style.color = "green"
    }

    /**GESTION ERROR**/

    let errorMsg = document.querySelectorAll('.error')
    let successIcon = document.querySelectorAll('.success-icon')
    let failureIcon = document.querySelectorAll('.failure-icon')
    let formUser = document.querySelector('#form-user')
    let name = document.querySelector('#name')
    let firstname = document.querySelector('#firstName')
    let pseudo = document.querySelector('#login')
    let password = document.querySelector('#mdp')
    let confirmPassword = document.querySelector('#password-confirm')
    let iconPassword = document.querySelector('.icon-password')
    let iconConfirmPassword = document.querySelector('.icon-confirm-password')

    /**LOGIN**/

    /*
    let usernameLogin = document.querySelector('#usernameLogin')
    let passwordLogin = document.querySelector('#passwordLogin')
    let formLogin = document.querySelector('#form-login')

    console.log(errorMsg)
    console.log(successIcon)
    console.log(failureIcon)

    formLogin.addEventListener('submit', (e) => {
        if(usernameLogin.value === '' || passwordLogin.value === ''){
            e.preventDefault()
            engine(usernameLogin, 0, "Le pseudo est requis")
            engine(passwordLogin, 1, "Le mot de passe est requis")
        }
        displayEye(passwordLogin, iconPassword)
        hideStyle(usernameLogin, 0, "")
        hideStyle(passwordLogin, 1, "")
        switched(iconPassword, passwordLogin)
    })
    */
    //DISPLAY ERROR MSG
    let engine = (id, serial, message) => {
        if (id.value.trim() === "") {
            errorMsg[serial].innerHTML = message
            id.style.border = "2px solid red"

            failureIcon[serial].style.opacity = "1"
            successIcon[serial].style.opacity = "0"

        } else {
            errorMsg[serial].innerHTML = ""
            id.style.border = "2px solid green"

            failureIcon[serial].style.opacity = "0"
            successIcon[serial].style.opacity = "1"
        }
    }
    
    /**USER**/
    formUser.addEventListener('submit', (e) => {

        if(name.value === '' || firstname.value === '' || pseudo.value === '' || password.value === '' || confirmPassword.value === ''){
        e.preventDefault()
        engine(name, 0, "Le nom est requis")
        engine(firstname, 1 , "Le prénom est requis")
        engine(pseudo, 2 , "Le pseudo est requis")
        engine(password, 3, "Le mot de passe est obligatoire")
        engine(confirmPassword, 4, "La confirmation est obligatoire")

        }
        if (password.value !== confirmPassword.value) {
            e.preventDefault()
            confirmPassword.style.border = "2px solid red"
            errorMsg[4].innerHTML = "Les mots de passes ne correspondent pas"
            failureIcon[4].style.opacity = "1"
            successIcon[3].style.opacity = "1"
            successIcon[4].style.opacity = "0"
        }

        /*
         //CHECK EMAIL VALIDATE
         let validateMail = /^[a-zA-Z0-9][a-zA-Z0-9._-]{2,}[@][a-zA-Z0-9]{2,}[.][a-z]{2,3}$/.test(email.value)
         if(!validateMail) {
             errorMsg[1].innerHTML = "Le format de l'email n'est pas le bon"
             failureIcon[1].style.opacity = "1"
             successIcon[1].style.opacity = "0"
             email.style.border = "2px solid red"
         }
     
         //CHECK PASSWORD VALIDATE
         let validatePass = /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9]).{8,}$/.test(password.value)
         if (!validatePass && password.value !== "") {
            errorMsg[2].innerHTML = "Le mot de passe doit avoir au minimum 1 majuscule, 1 minuscule, 1 caractère spécial et doit avoir 8 caractères minimums"
            failureIcon[2].style.opacity = "1"
            successIcon[2].style.opacity = "0"
            password.style.border = "2px solid red"
         }
         */
    })

    //DISPLAY EYE
    let displayEye = (element, eye) => {
        element.addEventListener('input', () => {
            if(element.value !== "") {
                eye.style.opacity = "1"
                eye.style.cursor = "pointer"
            } else {
                eye.style.opacity = "0"
                eye.style.cursor = "auto"
            }
        })
    }

    displayEye(password, iconPassword)
    displayEye(confirmPassword, iconConfirmPassword)

    //HIDE STYLE
    let hideStyle = (id, serial, message) => {
        id.addEventListener('input', () => {
            if (id.value !== "") {
                errorMsg[serial].innerHTML = message
                id.style.border = "none"

                failureIcon[serial].style.opacity = "0"
            }
        })
    }

    hideStyle(name, 0, "")
    hideStyle(firstname, 1, "")
    hideStyle(pseudo, 2, "")
    hideStyle(password, 3, "")
    hideStyle(confirmPassword, 4, "")

    //SWITCH INPUT TYPE
    let switched = (icon, password) => {
        icon.addEventListener('click', () => {
            const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
            password.setAttribute('type', type)
        })
    }

    switched(iconPassword, password)
    switched(iconConfirmPassword, confirmPassword)
})