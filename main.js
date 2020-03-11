
var puissance4 = [];
var nbColonne = 7;
var nbLigne = 6;
var playerOneChar = "x";
var playerTwoChar = "o";

puissance4 = initTab(nbLigne, nbColonne, 0);
displayTab(puissance4);

/**
 * permet d'initialiser un tab en fonction des ligne et des colonnes
 * @param {number} nbLigne 
 * @param {number} nbColonne 
 * @param {*} char 
 */
function initTab(nbLigne, nbColonne, char = '') {
    var tab = [];
    for(var i = 0; i < nbLigne; i++) {
        var ligne = [];
        for(var j = 0; j < nbColonne; j++) {
            ligne.push(char);
        }
        tab.push(ligne);
    }
    return tab;
}

/**
 * affiche un tableau de puissance 4
 * @param {Array<String>} tab 
 */
function displayTab(tab) {
    for(var i = 0; i < tab.length; i++) {
        var txt = "";
        for(var j = 0; j < tab[i].length; j++) {
            txt += "| ";
            if(tab[i][j] === 0) {
                txt += "_";
            } else if(tab[i][j] === 1) {
                txt += playerOneChar;
            } else if(tab[i][j] === 2) {
                txt += playerTwoChar;
            }
            txt += " |";
        }
        console.log(txt);
    }
}