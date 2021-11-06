window.addEventListener('load', () => {
    //MODAL
    let modal = document.querySelector('#modal')
    let userWrap = document.querySelector('.user-wrap')
    let closeModal = document.querySelector('.close-modal')

    if(modal) {
        userWrap.style.filter = 'blur(1px)'
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none'
            userWrap.style.filter = 'none'
        })
    }
})