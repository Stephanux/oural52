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
    let formPiece = document.querySelector('#form-piece')
    let nomPiece = document.querySelector('#namePD')

    formPiece.addEventListener('submit', (e) => {
        let formControlAddPiece = new FormControl()
        if(nomPiece.value === ''){
            e.preventDefault()
            formControlAddPiece.showErrMsg(nomPiece, 1, "Le nom de la pièce est obligatoire")
        }
         
        formControlAddPiece.hideStyle(nomPiece, 1, "")  
    })
})