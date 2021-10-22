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
    let titleVehicule = document.querySelector('.title-vehicule')
    let titlePiece = document.querySelector('.title-piece')
    let titleStock = document.querySelector('.title-stock')
    let tileEditVehicule = document.querySelector('.title-edit-vehicule')
    let titleEditPiece = document.querySelector('.title-edit-piece')
    let titleUser = document.querySelector('.title-user')

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
        titleVehicule.classList.add('item')
        titlePiece.classList.remove('item')
        titleStock.classList.remove('item')
        tileEditVehicule.classList.remove('item')
        titleEditPiece.classList.remove('item')
        titleUser.classList.remove('item')
    })

    piece.addEventListener('click', () => {
        menuVehicule.style.display = "none"
        menuPiece.style.display = "block"
        menuStock.style.display = "none"
        menuEditVehicule.style.display = "none"
        menuEditPiece.style.display = "none"
        menuUsers.style.display = "none"
        titlePiece.classList.add('item')
        titleVehicule.classList.remove('item')
        titleStock.classList.remove('item')
        tileEditVehicule.classList.remove('item')
        titleEditPiece.classList.remove('item')
        titleUser.classList.remove('item')
    })

    stock.addEventListener('click', () => {
        menuVehicule.style.display = "none"
        menuPiece.style.display = "none"
        menuStock.style.display = "block"
        menuEditVehicule.style.display = "none"
        menuEditPiece.style.display = "none"
        menuUsers.style.display = "none"
        titleStock.classList.add('item')
        titleVehicule.classList.remove('item')
        titlePiece.classList.remove('item')
        tileEditVehicule.classList.remove('item')
        titleEditPiece.classList.remove('item')
        titleUser.classList.remove('item')
    })

    editVehicule.addEventListener('click', () => {
        menuVehicule.style.display = "none"
        menuPiece.style.display = "none"
        menuStock.style.display = "none"
        menuEditVehicule.style.display = "block"
        menuEditPiece.style.display = "none"
        menuUsers.style.display = "none"
        tileEditVehicule.classList.add('item')
        titlePiece.classList.remove('item')
        titleStock.classList.remove('item')
        titleEditPiece.classList.remove('item')
        titleUser.classList.remove('item')
    })

    editPiece.addEventListener('click', () => {
        menuVehicule.style.display = "none"
        menuPiece.style.display = "none"
        menuStock.style.display = "none"
        menuEditVehicule.style.display = "none"
        menuEditPiece.style.display = "block"
        menuUsers.style.display = "none"
        titleEditPiece.classList.add('item')
        titlePiece.classList.remove('item')
        titleStock.classList.remove('item')
        tileEditVehicule.classList.remove('item')
        titleUser.classList.remove('item')
    })

    users.addEventListener('click', () => {
        menuVehicule.style.display = "none"
        menuPiece.style.display = "none"
        menuStock.style.display = "none"
        menuEditVehicule.style.display = "none"
        menuEditPiece.style.display = "none"
        menuUsers.style.display = "block"
        titleUser.classList.add('item')
        titlePiece.classList.remove('item')
        titleVehicule.classList.remove('item')
        titleStock.classList.remove('item')
        tileEditVehicule.classList.remove('item')
        titleEditPiece.classList.remove('item')
    })

    //CLOSE SIDEBAR AND SUB-MENUS//
    closeMenu.addEventListener('click', () => {
        sideBar.classList.remove('active')
        titleVehicule.classList.remove('item')
        titlePiece.classList.remove('item')
        titleVehicule.classList.remove('item')
        titleStock.classList.remove('item')
        tileEditVehicule.classList.remove('item')
        titleEditPiece.classList.remove('item')
        titleUser.classList.remove('item')
        menuVehicule.style.display = "none"
        menuPiece.style.display = "none"
        menuStock.style.display = "none"
        menuEditVehicule.style.display = "none"
        menuEditPiece.style.display = "none"
        menuUsers.style.display = "none"
    })

    //HIDE SIDEBAR IF USER IS NOT LOGGIN
    if(window.location.pathname === ('/')) {
        icon.classList.add('sidebar')
    } else {
        icon.classList.remove('sidebar')
    }
})