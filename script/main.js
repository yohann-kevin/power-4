const turn = document.getElementById("turn");
const success = document.getElementById("successPower4");
var playerTurn = 1;
var endGame = false;

power4.init();
power4.displayTab();
success.style.display = "none";

function playing(column) { 
    if(!endGame) {
        var lineEmpty = power4.returnLineCaseEmpty(column);
        if(lineEmpty !== -1) {
            power4.playCase(playerTurn, lineEmpty, column);
            power4.displayTab();
            if(power4.verifyEndGame(playerTurn)) {
                manageEndGame();
            }

            if(playerTurn === 1) {
                playerTurn = 2;
                turn.innerHTML = "Tour du joueur 2";
            } else {
                playerTurn = 1;
                turn.innerHTML = "Tour du joueur 1";
            }  
        }  
    }   
}

function manageEndGame() {
    endGame = true;
    success.style.display = "block";
    success.innerHTML = "Félicitation vous avez gagné";
}