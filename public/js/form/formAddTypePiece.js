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
    let formAddTypePiece = document.querySelector('#form-type-piece')
    let nomTypePiece = document.querySelector('#type_piece')

    formAddTypePiece.addEventListener('submit', (e) => {
        let formControlAddTypePiece = new FormControl()
        if(nomTypePiece.value === ''){
            e.preventDefault()
            formControlAddTypePiece.showErrMsg(nomTypePiece, 0, "Le nom du type de la pièce est obligatoire")
        }
         
        formControlAddTypePiece.hideStyle(nomTypePiece, 0, "")  
    })
})