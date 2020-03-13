power4.init();
power4.displayTab();


/**
 * fonction permettant a un joueur de jouer une case
 * Retourne true si le joueur a gagné 
 * @param {number} players 
 */
function playCase(players) {
    var lineEmpty = -1;
    var column = -1;
    while (lineEmpty === -1 || column <= 0 || column > 7) {
        console.log("choisir une colonne à un emplacement vide");
        var column = power4.chooseColumn();
        var lineEmpty = power4.returnLineCaseEmpty(column);
    }
    power4.playCase(players, lineEmpty, column);
    power4.displayTab();
    return power4.verifyEndGame(players);
}