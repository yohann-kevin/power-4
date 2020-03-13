var toolbox = require("./toolbox.js");
var power4 = require("./power4.js");


intro();
power4.playerOneChar = chooseChar(1);
power4.playerTwoChar = chooseChar(2);
power4.init();
power4.displayTab();

while (true) {
    if (playCase(1)) {
        console.log("le joueur 1 a gagné");
        break;
    }
    if (playCase(2)) {
        console.log("le joueur 2 a gagné");
        break;
    }
}

function intro() {
    var txt = "\n\n**********************************************************\n";
    txt += "**************Bienvenue sur puissance 4*******************\n";
    txt += "**********************************************************\n\n";
    console.log(txt);
}

function chooseChar(players) {
    var txt = "Veuillez choisir le caractere que vous voulez pour jouer" + players + " :" ;
    return toolbox.writeString(txt);
}

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
