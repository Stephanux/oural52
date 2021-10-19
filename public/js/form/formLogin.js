import {FormControl} from '../class/FormControl.js'

window.addEventListener('load', () => {   
    /**LOGIN**/
    
    let formLogin = document.querySelector('#form-login')
    let usernameLogin = document.querySelector('#usernameLogin')
    let passwordLogin = document.querySelector('#passwordLogin')
    let iconPassword = document.querySelector('.icon-password')

    formLogin.addEventListener('submit', (e) => {

        let formControlLogin = new FormControl()
        if(usernameLogin.value === '' || passwordLogin.value === ''){
            e.preventDefault()
            formControlLogin.showErrMsg(usernameLogin, 0, "Le pseudo est requis")
            formControlLogin.showErrMsg(passwordLogin, 1, "Le mot de passe est requis")
        }
        formControlLogin.displayEye(passwordLogin, iconPassword)
        formControlLogin.hideStyle(usernameLogin, 0, "")
        formControlLogin.hideStyle(passwordLogin, 1, "")
        formControlLogin.switchTypeOfInput(iconPassword, passwordLogin)
        formControlLogin.switchColorMsg()
    })
    
})