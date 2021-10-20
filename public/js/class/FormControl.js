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
}
