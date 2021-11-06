window.addEventListener('load', () => {
    //MODAL
    let modal = document.querySelector('#modal')
    let stockWrapper = document.querySelector('.stock-wrap')
    let messages = document.querySelector('.messages')
    let closeModal = document.querySelector('.close-modal')

    if(modal) {
        stockWrapper.style.filter = 'blur(1px)'
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none'
            stockWrapper.style.filter = 'none'
        })
    }
})