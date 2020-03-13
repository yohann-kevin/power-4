/**
 * installation du module readline permetant de demander 
 * à l'utilisateur de rentrer une valeur.
 * on stock ce module dans une varaible pour pouvoir le
 * réutiliser
 */

var toolbox = {
    // fonction permettant a l'utilisateur d'ecrire
    // writeString: function (txt) {
    //     return readline.question(txt);
    // },

    /**
     * permet d'initialiser un tab en fonction des ligne et des colonnes
     * @param {number} nbLine 
     * @param {number} nbColumn
     * @param {*} char 
     */
    initTab: function(nbLine, nbColumn, char = '') {
        var tab = [];
        for (var i = 0; i < nbLine; i++) {
            var line = [];
            for (var j = 0; j < nbColumn; j++) {
                line.push(char);
            }
            tab.push(line);
        }
        return tab;
    }
};
