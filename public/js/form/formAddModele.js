import {FormControl} from '../class/FormControl.js'

window.addEventListener('load', () => {
    /**GESTION MSG QUERY**/
    let msgForm = document.querySelector('h4')

    if (msgForm != null && msgForm.innerText.includes("erreur")) {
        msgForm.style.color = "red"
    } else if (msgForm != null) {
        msgForm.style.color = "green"
    }

    /**ADD MODELE**/
    let formModele = document.querySelector('#form-modele')
    let marque = document.querySelector('#marque')
    let addModele = document.querySelector('#addModele')

    formModele.addEventListener('submit', (e) => {
        let formControlAddModele = new FormControl()
        if(marque.value === '' || addModele.value === ''){
            e.preventDefault()
            formControlAddModele.showErrMsg(addModele, 1 ,"Le modèle du véhicule est obligatoire")
        }

        formControlAddModele.hideStyle(addModele, 1, "")  
    })
})