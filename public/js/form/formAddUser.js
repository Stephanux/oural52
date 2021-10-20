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
    let password = document.querySelector('#userMdp')
    let confirmPassword = document.querySelector('#password-confirm')
    let iconPassword = document.querySelector('.icon-password')
    let iconConfirmPassword = document.querySelector('.icon-confirm-password')

    formUser.addEventListener('submit', (e) => {
        let formControlUser = new FormControl()
        if(name.value === '' || firstname.value === '' || pseudo.value === '' || password.value === '' || confirmPassword.value === ''){
            e.preventDefault()
            formControlUser.showErrMsg(name, 0, "Le nom est requis")
            formControlUser.showErrMsg(firstname, 1 , "Le prénom est requis")
            formControlUser.showErrMsg(pseudo, 2 , "Le pseudo est requis")
            formControlUser.showErrMsg(password, 3, "Le mot de passe est obligatoire")
            formControlUser.showErrMsg(confirmPassword, 4, "La confirmation est obligatoire")
        }
        if (password.value !== confirmPassword.value) {
            e.preventDefault()
            formControlUser.confirmPassword(password, confirmPassword, 3, 4)
        }
        formControlUser.displayEye(password, iconPassword)
        formControlUser.displayEye(confirmPassword, iconConfirmPassword)     
        formControlUser.hideStyle(name, 0, "")
        formControlUser.hideStyle(firstname, 1, "") 
        formControlUser.hideStyle(pseudo, 2, "") 
        formControlUser.hideStyle(password, 3, "") 
        formControlUser.hideStyle(confirmPassword, 4, "")
        formControlUser.switchTypeOfInput(iconPassword, password)
        formControlUser.switchTypeOfInput(iconConfirmPassword, confirmPassword)   
    })
})