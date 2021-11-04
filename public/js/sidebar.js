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
    let titleEditVehicule = document.querySelector('.title-edit-vehicule')
    let titleEditPiece = document.querySelector('.title-edit-piece')
    let titleUser = document.querySelector('.title-user')
    let toggleMenu = document.querySelectorAll('.toggle-menu')
    let listMenu = document.querySelectorAll('.list-menu')
    let listVehicule = document.querySelector('#list-menu-vehicule')
    let listPiece = document.querySelector('#list-menu-piece')
    let listStock = document.querySelector('#list-menu-stock')
    let listEditVehicule = document.querySelector('#list-menu-edit-vehicule')
    let listEditPiece = document.querySelector('#list-menu-edit-piece')
    let listUsers = document.querySelector('#list-menu-users')

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
        listVehicule.classList.add('hide-list-menu')
        listVehicule.classList.remove('list-menu')
        listPiece.classList.remove('hide-list-menu')
        listPiece.classList.add('list-menu')
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
        listVehicule.classList.remove('hide-list-menu')
        listVehicule.classList.add('list-menu')
        listPiece.classList.add('hide-list-menu')
        listPiece.classList.remove('list-menu')
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
    let home = document.querySelector('.home')
    let title = document.getElementById('title')
    let user = document.querySelector('#user')

    if(window.location.pathname === ('/') || window.location.pathname === ('/forgotPassword') || window.location.pathname === ('/changePassword')) {
        title.style.position = 'absolute'
        icon.classList.add('sidebar')
        home.classList.add('sidebar')
        user.classList.add('sidebar')
    } else {
        title.classList.add('title-margin')
        icon.classList.remove('sidebar')
        home.classList.remove('sidebar')
        user.classList.remove('sidebar')
        user.classList.add('user-nav')
    }
    
    //BACK BUTTON

    let backBtn = document.querySelector('.back')
    backBtn.addEventListener('click', () => {
        window.history.back()
    })
  
})