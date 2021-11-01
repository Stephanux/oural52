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

    formEmail.addEventListener('submit', (e) => {

        let formControlEmail = new FormControl()
        if(email.value === ''){
            e.preventDefault()
            formControlEmail.showErrMsg(email, 0, "L'email est requis'")
        }
        formControlEmail.hideStyle(email, 0, "")
        formControlEmail.checkEmail(email, 0, "Le format de l'email n'est pas bon")
        formControlEmail.switchColorMsg()
    })
    
})