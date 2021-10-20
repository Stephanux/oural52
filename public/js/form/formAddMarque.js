import {FormControl} from '../class/FormControl.js'

window.addEventListener('load', () => {
    /**GESTION MSG QUERY**/
    let msgForm = document.querySelector('h4')

    if (msgForm != null && msgForm.innerText.includes("erreur")) {
        msgForm.style.color = "red"
    } else if (msgForm != null) {
        msgForm.style.color = "green"
    }

    /**ADD MARQUE**/
    let formMarque = document.querySelector('#form-marque')
    let marque = document.querySelector('#addMarque')

    formMarque.addEventListener('submit', (e) => {
        let formControlAddMarque = new FormControl()
        if(marque.value === ''){
            e.preventDefault()
            formControlAddMarque.showErrMsg(marque, 0, "La marque du véhicule est requise")
        }
   
        formControlAddMarque.hideStyle(marque, 0, "")  
    })
})