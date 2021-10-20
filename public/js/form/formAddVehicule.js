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
    let formAddVehicule = document.querySelector('#form-add-vehicule')
    let nomVehicule = document.querySelector('#nameV')

    formAddVehicule.addEventListener('submit', (e) => {
        let formControlAddTypeVehicule = new FormControl()
        if(nomVehicule.value === ''){
            e.preventDefault()
            formControlAddTypeVehicule.showErrMsg(nomVehicule, 0, "Le nom du véhicule est obligatoire")
        }
         
        formControlAddTypeVehicule.hideStyle(nomVehicule, 0, "")  
    })
})