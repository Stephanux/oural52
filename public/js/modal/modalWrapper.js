window.addEventListener('load', () => {
    //MODAL
    let modal = document.querySelector('#modal')
    let wrapper = document.querySelector('.wrapper')
    let messages = document.querySelector('.messages')
    let closeModal = document.querySelector('.close-modal')

    if(modal) {
        wrapper.style.filter = 'blur(1px)'
        messages.style.filter = 'blur(1px)'
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none'
            wrapper.style.filter = 'none'
            messages.style.filter = 'none'
        })
    }
})