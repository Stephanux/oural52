window.onload = () => {
    /**DATATABLE**/
    $(document).ready(function () {
        $('#stock').DataTable({
            language: {
                "emptyTable": "Aucune donnée disponible dans le tableau",
                "lengthMenu": "Afficher _MENU_ éléments",
                "loadingRecords": "Chargement...",
                "processing": "Traitement...",
                "zeroRecords": "Aucun élément correspondant trouvé",
                "paginate": {
                    "first": "Premier",
                    "last": "Dernier",
                    "previous": "Précédent",
                    "next": "Suivant"
                },
                "select": {
                    "rows": {
                        "_": "%d lignes sélectionnées",
                        "1": "1 ligne sélectionnée"
                    },
                    "cells": {
                        "1": "1 cellule sélectionnée",
                        "_": "%d cellules sélectionnées"
                    },
                    "columns": {
                        "1": "1 colonne sélectionnée",
                        "_": "%d colonnes sélectionnées"
                    }
                },
                "buttons": {
                    "collection": "Collection",
                    "colvis": "Visibilité colonnes",
                    "colvisRestore": "Rétablir visibilité",
                    "copy": "Copier",
                    "copySuccess": {
                        "1": "1 ligne copiée dans le presse-papier",
                        "_": "%ds lignes copiées dans le presse-papier"
                    },
                    "copyTitle": "Copier dans le presse-papier",
                    "csv": "CSV",
                    "excel": "Excel",
                    "pageLength": {
                        "-1": "Afficher toutes les lignes",
                        "_": "Afficher %d lignes"
                    },
                    "pdf": "PDF",
                    "print": "Imprimer",
                    "copyKeys": "Appuyez sur ctrl ou u2318 + C pour copier les données du tableau dans votre presse-papier."
                },
                "decimal": ",",
                "info": "Affichage de _START_ à _END_ sur _TOTAL_ éléments",
                "infoEmpty": "Affichage de 0 à 0 sur 0 éléments",
                "infoThousands": ".",
                "search": "Rechercher:",
                "thousands": ".",
                "infoFiltered": "(filtrés depuis un total de _MAX_ éléments)",
                "datetime": {
                    "previous": "Précédent",
                    "next": "Suivant",
                    "hours": "Heures",
                    "minutes": "Minutes",
                    "seconds": "Secondes",
                    "unknown": "-",
                    "amPm": [
                        "am",
                        "pm"
                    ],
                    "months": {
                        "0": "Janvier",
                        "2": "Mars",
                        "3": "Avril",
                        "4": "Mai",
                        "5": "Juin",
                        "6": "Juillet",
                        "7": "Aout",
                        "8": "Septembre",
                        "9": "Octobre",
                        "10": "Novembre",
                        "1": "Février",
                        "11": "Décembre"
                    },
                    "weekdays": [
                        "Dim",
                        "Lun",
                        "Mar",
                        "Mer",
                        "Jeu",
                        "Ven",
                        "Sam"
                    ]
                }
            }
        });
    });

    /**SIDEBAR**/
    let icon = document.querySelector('.menu-icon');
    let sideBar = document.querySelector('#sidebar');
    let closeMenu = document.querySelector('.menu-close')
    let vehicule = document.querySelector('.vehicules');
    let menuVehicule = document.querySelector('.sub-menu-vehicules');
    let piece = document.querySelector('.pieces');
    let menuPiece = document.querySelector('.sub-menu-pieces');
    let stock = document.querySelector('.stocks');
    let menuStock = document.querySelector('.sub-menu-stock');
    let editVehicule = document.querySelector('.list-vehicule');
    let menuEditVehicule = document.querySelector('.sub-menu-list-vehicules');
    let editPiece = document.querySelector('.list-piece');
    let menuEditPiece = document.querySelector('.sub-menu-list-piece');
    let users = document.querySelector('.list-users');
    let menuUsers = document.querySelector('.sub-menu-list-users');

    //SHOW SIDEBAR//
    icon.addEventListener('click', () => {
        sideBar.classList.toggle('active');
        vehicule.style.display = "block";
        piece.style.display = "block";
        stock.style.display = "block";
        editVehicule.style.display = "block";
        editPiece.style.display = "block";
        users.style.display = "block";
    });

    //SHOW SUB-MENUS//
    vehicule.addEventListener('click', () => {
        menuVehicule.style.display = "block";
        menuPiece.style.display = "none";
        menuStock.style.display = "none";
        menuEditVehicule.style.display = "none";
        menuEditPiece.style.display = "none";
        menuUsers.style.display = "none";
    });

    piece.addEventListener('click', () => {
        menuVehicule.style.display = "none";
        menuPiece.style.display = "block";
        menuStock.style.display = "none";
        menuEditVehicule.style.display = "none";
        menuEditPiece.style.display = "none";
        menuUsers.style.display = "none";
    });

    stock.addEventListener('click', () => {
        menuVehicule.style.display = "none";
        menuPiece.style.display = "none";
        menuStock.style.display = "block";
        menuEditVehicule.style.display = "none";
        menuEditPiece.style.display = "none";
        menuUsers.style.display = "none";
    });

    editVehicule.addEventListener('click', () => {
        menuVehicule.style.display = "none";
        menuPiece.style.display = "none";
        menuStock.style.display = "none";
        menuEditVehicule.style.display = "block";
        menuEditPiece.style.display = "none";
        menuUsers.style.display = "none";
    });

    editPiece.addEventListener('click', () => {
        menuVehicule.style.display = "none";
        menuPiece.style.display = "none";
        menuStock.style.display = "none";
        menuEditVehicule.style.display = "none";
        menuEditPiece.style.display = "block";
        menuUsers.style.display = "none";
    });

    users.addEventListener('click', () => {
        menuVehicule.style.display = "none";
        menuPiece.style.display = "none";
        menuStock.style.display = "none";
        menuEditVehicule.style.display = "none";
        menuEditPiece.style.display = "none";
        menuUsers.style.display = "block";
    })

    //CLOSE SIDEBAR AND SUB-MENUS//
    closeMenu.addEventListener('click', () => {
        sideBar.classList.remove('active');
        menuVehicule.style.display = "none";
        menuPiece.style.display = "none";
        menuStock.style.display = "none";
        menuEditVehicule.style.display = "none";
        menuEditPiece.style.display = "none";
        menuUsers.style.display = "none";
    });
    //**DATE FORMAT**/

    let date = document.querySelectorAll('.date');
    let dateParse = (chaine) => {
        let newDate = new Date(chaine).toLocaleDateString('fr-FR', {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
        return newDate;
    }
    for (i = 0; i < date.length; i++) {
        date[i].innerHTML = dateParse(date[i].innerText);
    }

    /**GESTION MSG**/

    let msg = document.querySelector('h4');

    if (msg != null && msg.innerText.includes("erreur")) {
        msg.style.color = "red";
    } else if (msg != null) {
        msg.style.color = "green";
    };
}