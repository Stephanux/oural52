const icon = document.querySelector('.menu-icon');
const sideBar = document.querySelector('#sidebar');
const closeMenu = document.querySelector('.menu-close')
const vehicule = document.querySelector('.vehicules');
const menuVehicule = document.querySelector('.sub-menu-vehicules');
const piece = document.querySelector('.pieces');
const menuPiece = document.querySelector('.sub-menu-pieces');
const stock = document.querySelector('.stocks');
const menuStock = document.querySelector('.sub-menu-stock');
const editVehicule = document.querySelector('.list-vehicule');
const menuEditVehicule = document.querySelector('.sub-menu-list-vehicules');
const editPiece = document.querySelector('.list-piece');
const menuEditPiece = document.querySelector('.sub-menu-list-piece');

icon.addEventListener('click', show);

//SHOW SIDEBAR//
function show(){
  sideBar.classList.toggle('active');
  vehicule.style.display = "block";
  piece.style.display = "block";
  stock.style.display = "block";
  editVehicule.style.display = "block";
  editPiece.style.display = "block";
}

//SHOW SUB-MENUS//
vehicule.addEventListener('click', () => {
    menuVehicule.style.display = "block";
    menuPiece.style.display = "none";
    menuStock.style.display = "none";
    menuEditVehicule.style.display = "none";
    menuEditPiece.style.display = "none";
})

piece.addEventListener('click', () => {
    menuVehicule.style.display = "none";
    menuPiece.style.display = "block";
    menuStock.style.display = "none";
    menuEditVehicule.style.display = "none";
    menuEditPiece.style.display = "none";
})

stock.addEventListener('click', () => {
    menuVehicule.style.display = "none";
    menuPiece.style.display = "none";
    menuStock.style.display = "block";
    menuEditVehicule.style.display = "none";
    menuEditPiece.style.display = "none";
})

editVehicule.addEventListener('click', () => {
    menuVehicule.style.display = "none";
    menuPiece.style.display = "none";
    menuStock.style.display = "none";
    menuEditVehicule.style.display = "block";
    menuEditPiece.style.display = "none";
})

editPiece.addEventListener('click', () => {
    menuVehicule.style.display = "none";
    menuPiece.style.display = "none";
    menuStock.style.display = "none";
    menuEditVehicule.style.display = "none";
    menuEditPiece.style.display = "block";
})

//CLOSE SIDEBAR AND SUB-MENUS//
closeMenu.addEventListener('click', () => {
    sideBar.classList.remove('active');
    menuVehicule.style.display = "none";
    menuPiece.style.display = "none";
    menuStock.style.display = "none";
    menuEditVehicule.style.display = "none";
    menuEditPiece.style.display = "none";
});