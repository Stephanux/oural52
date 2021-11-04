import {FormControl} from '../class/FormControl.js'

window.addEventListener('load', () => {
    /**GESTION MSG QUERY**/
    let msgForm = document.querySelector('h4')

    if (msgForm != null && msgForm.innerText.includes("erreur")) {
        msgForm.style.color = "red"
    } else if (msgForm != null) {
        msgForm.style.color = "green"
    }

    /**ADD USER**/
    let formUser = document.querySelector('#form-user')
    let name = document.querySelector('#userName')
    let firstname = document.querySelector('#userFirstname')
    let pseudo = document.querySelector('#userLogin')
    let email = document.querySelector('#email')

    formUser.addEventListener('submit', (e) => {
        let formControlUser = new FormControl()
        if(name.value === '' || firstname.value === '' || pseudo.value === '' || email.value === ''){
            e.preventDefault()
            formControlUser.showErrMsg(name, 0, "Le nom est requis")
            formControlUser.showErrMsg(firstname, 1 , "Le prénom est requis")
            formControlUser.showErrMsg(email, 2 , "L'email' est requis")
            formControlUser.showErrMsg(pseudo, 3 , "Le pseudo est requis")
        }

        formControlUser.hideStyle(name, 0, "")
        formControlUser.hideStyle(firstname, 1, "") 
        formControlUser.hideStyle(email, 2, "")
        formControlUser.hideStyle(pseudo, 3, "") 
    })
})