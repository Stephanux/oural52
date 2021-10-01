window.addEventListener('load', () => {
    //HOME PAGE REDIRECTION
    let stockV = document.querySelector('.stockV')
    let stockP = document.querySelector('.stockP')
    let addV = document.querySelector('.addV')
    let addP = document.querySelector('.addP')

    stockV.addEventListener('click', () => {
        window.location.href = "/stockVehicule"
    })

    stockP.addEventListener('click', () => {
        window.location.href = "/stockPiece"
    })

    addV.addEventListener('click', () => {
        window.location.href = "/formInsertVehicule"
    })

    addP.addEventListener('click', () => {
        window.location.href = "/formInsertPiece"
    })
})