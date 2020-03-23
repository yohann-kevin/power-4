var IA = {
    columnChoice() {
        var tabColumn = this.getTabCaseEmpty();
        var bestColumn = 0;
        var tabBestColumn = [0];
        for(var i = 1;i < tabColumn.length; i++) {
            if(tabColumn[i] > tabColumn[bestColumn]) {
                bestColumn = i;
                tabBestColumn = new Array();
                tabBestColumn.push(i);
            } else if(tabColumn[i] === tabColumn[bestColumn]) {
                tabBestColumn.push(i);
            }
        }
        console.log(tabColumn);
        console.log(tabBestColumn);
        return tabBestColumn[Math.floor(Math.random() * tabBestColumn.length)];
    },

    getTabCaseEmpty : function() {
        var tabColumn = [];
        for( var i = 0; i < power4.nbColumn; i++) {
            tabColumn.push(this.getCaseWeight(power4.returnLineCaseEmpty(i),i));
        }
        return tabColumn;
    },

    getCaseWeight : function(line,column) {
        if(line === -1)  return 0;

        if(this.verifyWin(line,column,2)) return 100;

        return 1;

        // la colonne est pleine le poids a renvoyer sera de 0
        // verifie si on peut gagner
        // si on peut gagner return poid 100
        // verifier si on peut perdre ou gagner (le joueur 1 peut gagne) return poids 99
        
        
        
        
        
        
        // autres cas
        // eviter de faire un coup perdant 
        // defendre ( 2 jetons adverse a coté = le bloquer)
        // attaquer ( 2 jetons de l'IA a coté )
        // additionner les poids 
    },

    verifyWin : function(line,column,players) {
        if(this.verifyWinLine(line,column,players)) return true;
        if(this.verifyWinColumn(line,column,players)) return true;
        if(this.verifyWinDiagonal(line,column,players)) return true;
    },

    // retourne true si on peut gagner en ligne
    verifyWinLine : function(line,column,players) {
        var counter = 1;
        if(power4.puissance4[line][column + 1] === players) {
            counter++;
            if(power4.puissance4[line][column + 2] === players) {
                counter++;
                if(power4.puissance4[line][column + 3] === players) {
                    counter++;
                }
            }
        }
        if(power4.puissance4[line][column - 1] === players) {
            counter++;
            if(power4.puissance4[line][column - 2] === players) {
                counter++;
                if(power4.puissance4[line][column - 3] === players) {
                    counter++;
                }
            }
        }
        if(counter > 3) return true;
    },

    verifyWinColumn : function() {

    },

    verifyWinDiagonal : function() {

    }

}