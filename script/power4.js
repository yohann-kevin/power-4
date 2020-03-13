// var toolbox = require("./toolbox.js");

var power4 = {
    puissance4: [],
    nbColumn: 7,
    nbLine: 6,
    playerOneChar: "x",
    playerTwoChar: "o",

    init: function() {
        this.puissance4 = toolbox.initTab(this.nbLine, this.nbColumn, 0);
    },

    //affiche un tableau de puissance 4
    displayTab: function () {
        const gamePower4 = document.querySelector("#power4");
        gamePower4.innerHTML = "";

        var content = "<table id='tabPower4'>";
        for(var i = 0; i < this.nbLine;i++) {
            content += "<tr>"
            for(var j = 0; j < this.nbColumn; j++) {
                content += "<td class='case'>";
                content += "</td>";
            }
            content += "</tr>";
        }
        content += "</table>";
        gamePower4.innerHTML = content;
        // for (var i = 0; i < this.puissance4.length; i++) {
        //     var txt = "";
        //     for (var j = 0; j < this.puissance4[i].length; j++) {
        //         txt += "| ";
        //         if (this.puissance4[i][j] === 0) {
        //             txt += "_";
        //         } else if (this.puissance4[i][j] === 1) {
        //             txt += this.playerOneChar;
        //         } else if (this.puissance4[i][j] === 2) {
        //             txt += this.playerTwoChar;
        //         }
        //         txt += " |";
        //     }
        //     console.log(txt);
        // }
    },

    playCase: function(players, line, column) {
        this.puissance4[line][column - 1] = players;
    },

    /**
     * fonction permettant de retourner la premiere ligne vide d'une colonne
     * retourne -1 si la colonne est pleine
     * @param {Number} column 
     */
    returnLineCaseEmpty: function (column) {
        for (var i = this.nbLine - 1; i >= 0; i--) {
            if (this.verifyCaseEmpty(i, column)) return i;
        }
        return -1;
    },

    /**
     * Fonction premettant de retourner si une case est vide
     * @param {number} line 
     * @param {number} column 
     */
    verifyCaseEmpty: function (line, column) {
        return this.puissance4[line][column - 1] === 0;
    },

    /**
     * fonction permettant de saisir une colonne 
     */
    chooseColumn: function() {
        return parseInt(toolbox.writeString("Quelle colonne ?"));
    },

    /**
     * fonction permettant de vérifier si un joueur a gagné 
     * @param {number} players 
     */
    verifyEndGame: function (players) {
        if (this.verifyLineEndGame(players) || this.verifyColumnEndGame(players) ||
            this.verifyDiagonalEndGame(players)) {
            return true;
        }
        return false;
    },

    /**
     * fonction permettant de vérifier si un joueur a gagné sur une ligne
     * @param {number} players 
     */
    verifyLineEndGame: function (players) {
        for (var i = this.nbLine - 1; i >= 0; i--) {
            for (var j = 0; j < this.nbColumn - 3; j++) {
                if (this.puissance4[i][j] === players &&
                    this.puissance4[i][j + 1] === players &&
                    this.puissance4[i][j + 2] === players &&
                    this.puissance4[i][j + 3] === players
                ) return true;
            }
        }
        return false;
    },

    /**
     * fonction permettant de vérifier si un joueur a gagné sur une colonne
     * @param {number} players 
     */
    verifyColumnEndGame: function (players) {
        for (var i = 0; i < this.nbColumn; i++) {
            for (var j = this.nbLine - 4; j >= 0; j--) {
                if (this.puissance4[j][i] === players &&
                    this.puissance4[j + 1][i] === players &&
                    this.puissance4[j + 2][i] === players &&
                    this.puissance4[j + 3][i] === players
                ) return true;
            }
        }
    },

    /**
     * fonction permettant de vérifier si un joueur a gagné sur une diagonale
     * @param {number} players 
     */
    verifyDiagonalEndGame: function (players) {
        for (var i = this.nbLine - 1; i >= 3; i--) {
            for (var j = 0; j < this.nbColumn; j++) {
                if (this.puissance4[i][j] === players &&
                    this.puissance4[i - 1][j + 1] === players &&
                    this.puissance4[i - 2][j + 2] === players &&
                    this.puissance4[i - 3][j + 3] === players
                ) return true;
                if (this.puissance4[i][j] === players &&
                    this.puissance4[i - 1][j - 1] === players &&
                    this.puissance4[i - 2][j - 2] === players &&
                    this.puissance4[i - 3][j - 3] === players
                ) return true;
            }
        }
        return false;
    }
}