window.addEventListener('load', () => {
    //MODAL
    let modal = document.querySelector('#modal')
    let container = document.querySelector('.container')
    let closeModal = document.querySelector('.close-modal')

    if(modal) {
        container.style.filter = 'blur(1px)'
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none'
            container.style.filter = 'none'
        })
    }
})