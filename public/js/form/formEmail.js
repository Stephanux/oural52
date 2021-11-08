import {FormControl} from '../class/FormControl.js'

window.addEventListener('load', () => {   
    /**GESTION MSG QUERY**/
    let msgForm = document.querySelector('h4')

    if (msgForm != null && msgForm.innerText.includes("erreur")) {
        msgForm.style.color = "red"
    } else if (msgForm != null) {
        msgForm.style.color = "green"
    }
    
    /**LOGIN**/
    
    let formEmail = document.querySelector('#form-email')
    let email = document.querySelector('#email')
    let mail = document.querySelector('.mail')

    formEmail.addEventListener('submit', (e) => {
        /**Honey pot */
        if(mail.value !== '') {
         e.preventDefault()
        }
        let formControlEmail = new FormControl()
        if(email.value === ''){
            e.preventDefault()
            formControlEmail.showErrMsg(email, 0, "L'email est requis'")
        }
        let validateMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email.value)
        if(email.value !== "" && !validateMail){
            e.preventDefault()
            formControlEmail.checkEmail(email, 0, "Le format de l'email n'est pas bon")
        }
        formControlEmail.hideStyle(email, 0, "") 
        formControlEmail.switchColorMsg()
    })
    
})