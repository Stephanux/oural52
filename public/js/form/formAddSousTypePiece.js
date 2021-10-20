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
    let formAddSousTypePiece = document.querySelector('#form-add-sous-type')
    let nomSousTypePiece = document.querySelector('#stype_piece')

    formAddSousTypePiece.addEventListener('submit', (e) => {
        let formControlAddSousTypePiece = new FormControl()
        if(nomSousTypePiece.value === ''){
            e.preventDefault()
            formControlAddSousTypePiece.showErrMsg(nomSousTypePiece, 0, "Le nom du sous type de la pièce est obligatoire")
        }
         
        formControlAddSousTypePiece.hideStyle(nomSousTypePiece, 0, "")  
    })
})