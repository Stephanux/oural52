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

            this.failureIcon[serial].style.opacity = "1"
            this.successIcon[serial].style.opacity = "0"
        } else {
            this.errorMsg[serial].innerHTML = ""
            id.style.border = "2px solid green"

            this.failureIcon[serial].style.opacity = "0"
            this.successIcon[serial].style.opacity = "1"
        }
    }

    confirmPassword(confirmPassword, serial, serialGood){
            confirmPassword.style.border = "2px solid red"
            this.errorMsg[serial].style.display = "block"
            this.errorMsg[serial].innerHTML = "Les mots de passes ne correspondent pas"
            this.failureIcon[serial].style.opacity = "1"
            this.successIcon[serialGood].style.opacity = "1"
            this.successIcon[serial].style.opacity = "0"        
    }

    displayEye(element, eye){
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

    hideStyle(id, serial, message) {
        id.addEventListener('input', () => {
            if(id.value !== "") {
                this.errorMsg[serial].style.display = "block"
                this.errorMsg[serial].innerHTML = message
                id.style.border = "none"
                this.failureIcon[serial].style.opacity = "0"
            }
        })
    }

    switchTypeOfInput(icon, password){
        icon.addEventListener('click', () => {
            let type = password.getAttribute('type') === 'password' ? 'text' : 'password'
            password.setAttribute('type', type)
        })
    }
}
