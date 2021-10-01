window.addEventListener('load', () => {
    /**SIDEBAR**/
    let icon = document.querySelector('.menu-icon')
    let sideBar = document.querySelector('#sidebar')
    let closeMenu = document.querySelector('.menu-close')
    let vehicule = document.querySelector('.vehicules')
    let menuVehicule = document.querySelector('.sub-menu-vehicules')
    let piece = document.querySelector('.pieces')
    let menuPiece = document.querySelector('.sub-menu-pieces')
    let stock = document.querySelector('.stocks')
    let menuStock = document.querySelector('.sub-menu-stock')
    let editVehicule = document.querySelector('.list-vehicule')
    let menuEditVehicule = document.querySelector('.sub-menu-list-vehicules')
    let editPiece = document.querySelector('.list-piece')
    let menuEditPiece = document.querySelector('.sub-menu-list-piece')
    let users = document.querySelector('.list-users')
    let menuUsers = document.querySelector('.sub-menu-list-users')

    //SHOW SIDEBAR//
    icon.addEventListener('click', () => {
        sideBar.classList.toggle('active')
        vehicule.style.display = "block"
        piece.style.display = "block"
        stock.style.display = "block"
        editVehicule.style.display = "block"
        editPiece.style.display = "block"
        users.style.display = "block"
    })

    //SHOW SUB-MENUS//
    vehicule.addEventListener('click', () => {
        menuVehicule.style.display = "block"
        menuPiece.style.display = "none"
        menuStock.style.display = "none"
        menuEditVehicule.style.display = "none"
        menuEditPiece.style.display = "none"
        menuUsers.style.display = "none"
    })

    piece.addEventListener('click', () => {
        menuVehicule.style.display = "none"
        menuPiece.style.display = "block"
        menuStock.style.display = "none"
        menuEditVehicule.style.display = "none"
        menuEditPiece.style.display = "none"
        menuUsers.style.display = "none"
    })

    stock.addEventListener('click', () => {
        menuVehicule.style.display = "none"
        menuPiece.style.display = "none"
        menuStock.style.display = "block"
        menuEditVehicule.style.display = "none"
        menuEditPiece.style.display = "none"
        menuUsers.style.display = "none"
    })

    editVehicule.addEventListener('click', () => {
        menuVehicule.style.display = "none"
        menuPiece.style.display = "none"
        menuStock.style.display = "none"
        menuEditVehicule.style.display = "block"
        menuEditPiece.style.display = "none"
        menuUsers.style.display = "none"
    })

    editPiece.addEventListener('click', () => {
        menuVehicule.style.display = "none"
        menuPiece.style.display = "none"
        menuStock.style.display = "none"
        menuEditVehicule.style.display = "none"
        menuEditPiece.style.display = "block"
        menuUsers.style.display = "none"
    })

    users.addEventListener('click', () => {
        menuVehicule.style.display = "none"
        menuPiece.style.display = "none"
        menuStock.style.display = "none"
        menuEditVehicule.style.display = "none"
        menuEditPiece.style.display = "none"
        menuUsers.style.display = "block"
    })

    //CLOSE SIDEBAR AND SUB-MENUS//
    closeMenu.addEventListener('click', () => {
        sideBar.classList.remove('active')
        menuVehicule.style.display = "none"
        menuPiece.style.display = "none"
        menuStock.style.display = "none"
        menuEditVehicule.style.display = "none"
        menuEditPiece.style.display = "none"
        menuUsers.style.display = "none"
    })

    //HIDE SIDEBAR IF USER IS NOT LOGGIN
    let title = document.querySelector('h1')
    if(window.location.pathname === ('/')) {
        icon.style.display = 'none'
        title.style.marginLeft = "42.5vw"
    }
})