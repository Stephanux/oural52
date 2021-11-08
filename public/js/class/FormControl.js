export class FormControl {

    constructor() {     
        this.errorMsg = document.querySelectorAll('.error')
        this.successIcon = document.querySelectorAll('.success-icon')
        this.failureIcon = document.querySelectorAll('.failure-icon')
    }

    showErrMsg(id, serial, message){

        if(id.value.trim() === "") {
            this.errorMsg[serial].style.display = "block"
            this.errorMsg[serial].innerHTML = message
            id.style.border = "2px solid red"

            this.failureIcon[serial].style.display = "inline-block"
            this.successIcon[serial].style.display = "none"
        } else {
            this.errorMsg[serial].innerHTML = ""
            id.style.border = "2px solid green"

            this.failureIcon[serial].style.display = "none"
            this.successIcon[serial].style.display = "inline-block"
        }
    }

    confirmPassword(confirmPassword, serial, serialGood){
            confirmPassword.style.border = "2px solid red"
            this.errorMsg[serial].style.display = "block"
            this.errorMsg[serial].innerHTML = "Les mots de passes ne correspondent pas"
            this.failureIcon[serial].style.display = "inline-block"
            this.successIcon[serialGood].style.display = "inline-block"
            this.successIcon[serial].style.display = "none"        
    }

    displayEye(element, eye){
        element.addEventListener('input', () => {
            if(element.value !== "") {
                eye.style.display = "block"
                eye.style.cursor = "pointer"
            } else {
                eye.style.display = "none"
                eye.style.cursor = "auto"
            }
        })
    }

    hideStyle(id, serial, message) {
        id.addEventListener('input', () => {
            if(id.value !== "") {
                this.errorMsg[serial].style.display = "block"
                this.errorMsg[serial].innerHTML = message
                id.style.border = "none"
                this.failureIcon[serial].style.display = "none"
            }
        })
    }

    switchTypeOfInput(icon, password){
        icon.addEventListener('click', () => {
            let type = password.getAttribute('type') === 'password' ? 'text' : 'password'
            password.setAttribute('type', type)
        })
    }

    checkEmail(email, serial, message){
        let validateMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)
        if(!validateMail) {
            this.errorMsg[serial].style.display = "block"
            this.errorMsg[serial].innerHTML = message
            this.failureIcon[serial].style.opacity = "1"
            this.successIcon[serial].style.opacity = "0"
            email.style.border = "2px solid red"
        }
    }

    checkPassword(password, serial) {
        this.errorMsg[serial].style.display = "block"
        this.errorMsg[serial].innerHTML = "Le mot de passe doit avoir au minimum 1 majuscule, 1 minuscule, 1 caractère spécial et doit avoir 8 caractères minimums"
        this.failureIcon[serial].style.opacity = "1"
        this.successIcon[serial].style.opacity = "0"
        password.style.border = "2px solid red"
    }
}