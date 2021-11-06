window.addEventListener('load', () => {
    //MODAL
    let modal = document.querySelector('#modal')
    let wrap = document.querySelector('.wrap')
    let closeModal = document.querySelector('.close-modal')

    if(modal) {
        wrap.style.filter = 'blur(1px)'
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none'
            wrap.style.filter = 'none'
        })
    }
})