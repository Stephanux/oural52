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
    
    let formLogin = document.querySelector('#form-login')
    let usernameLogin = document.querySelector('#usernameLogin')
    let passwordLogin = document.querySelector('#passwordLogin')
    let iconPassword = document.querySelector('.icon-password')
    let pwd = document.querySelector('#pwd')

    formLogin.addEventListener('submit', (e) => {
         /**Honey pot */
        if(pwd.value !== '') {
            e.preventDefault()
        }
        
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