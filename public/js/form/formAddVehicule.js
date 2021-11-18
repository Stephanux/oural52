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
    let dateMEC = document.querySelector('#dateMEC')

    formAddVehicule.addEventListener('submit', (e) => {
        let formControlAddVehicule = new FormControl()
        if(nomVehicule.value === '' || dateMEC.value === ""){
            e.preventDefault()
            formControlAddVehicule.showErrMsg(nomVehicule, 0, "Le nom du véhicule est obligatoire")
            formControlAddVehicule.showErrMsg(dateMEC, 1, "Veuillez renseigner une date")
        }
         
        formControlAddVehicule.hideStyle(nomVehicule, 0, "")  
    })
})