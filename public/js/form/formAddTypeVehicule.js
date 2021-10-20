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
    let formAddTypeVehicule = document.querySelector('#form-type-vehicule')
    let nomTypeVehicule = document.querySelector('#type_vehicule')

    formAddTypeVehicule.addEventListener('submit', (e) => {
        let formControlAddTypeVehicule = new FormControl()
        if(nomTypeVehicule.value === ''){
            e.preventDefault()
            formControlAddTypeVehicule.showErrMsg(nomTypeVehicule, 0, "Le nom du type de véhicule est obligatoire")
        }
         
        formControlAddTypeVehicule.hideStyle(nomTypeVehicule, 0, "")  
    })
})