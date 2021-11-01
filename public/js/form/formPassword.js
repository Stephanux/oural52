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
    let formReset = document.querySelector('#form-reset-password')
    let password = document.querySelector('#reset-pwd')
    let confirmPassword = document.querySelector('#reset-pwd-confirm')
    let iconPassword = document.querySelector('.icon-password')
    let iconConfirmPassword = document.querySelector('.icon-confirm-password')

    formReset.addEventListener('submit', (e) => {
        let formControlReset = new FormControl()
        if(password.value === '' || confirmPassword.value === ''){
            e.preventDefault()
            formControlReset.showErrMsg(password, 0, "Le mot de passe est obligatoire")
            formControlReset.showErrMsg(confirmPassword, 1, "La confirmation est obligatoire")
        }
        if (password.value !== confirmPassword.value) {
            e.preventDefault()
            formControlReset.confirmPassword(confirmPassword, 1, 0)
        }
        formControlReset.displayEye(password, iconPassword)
        formControlReset.displayEye(confirmPassword, iconConfirmPassword)      
        formControlReset.hideStyle(password, 0, "") 
        formControlReset.hideStyle(confirmPassword, 1, "")
        formControlReset.switchTypeOfInput(iconPassword, password)
        formControlReset.switchTypeOfInput(iconConfirmPassword, confirmPassword)   
    })
})