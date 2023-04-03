

var result1 = "The overall winner is the COMPUTER";

var result2 = "The overall winner is the USER";

var result3 = "There isn't an overall winner";


var pcS; //computer select variable
var userI; // user choice defined

choice = ["rock", "paper", "scissors", "paper", "scissors", "rock", "paper"]; // options 

var tie = 0;
var count = 0;
var pcWins = 0;
var userWins = 0;
//var resetG = false;
var resultFinal;


function userSelect() {  // function for user to select
    userI = prompt("Please select either ROCK, PAPER or SCISSORS: ");
    userI = userI.toLowerCase();
    return userI;
}

function playRound() { //function for each round

    function pcChoice() {         // function for computer selection
        pcS = Math.floor(Math.random() * 7);
        pcS = choice[pcS];
        return pcS;
    }

    switch (pcChoice()) { // function to determine the winner of each round

        case "rock":
            if (userI == "scissors") {
                result = `Round ${count + 1}:
            The COMPUTER wins.Rock smashes Scissors`;
                console.log(result);
                pcWins++;

            } else if (userI == "paper") {
                result = `Round ${count + 1}:
            The USER wins.Paper smothers Rock`;
                console.log(result);
                userWins++;

            } else {
                result = `Round ${count + 1}:
            This is a DRAW.Both users chose the same`;
                console.log(result);
                tie++;

            }
            break;

        case "paper":
            if (userI == "rock") {
                result = `Round ${count + 1}:
            The COMPUTER wins.Paper smothers Rock`;
                console.log(result);
                pcWins++;

            } else if (userI == "scissors") {
                result = `Round ${count + 1}:
            The USER wins.Scissors cuts paper`
                console.log(result);
                userWins++;

            } else {
                result = `Round ${count + 1}:
            This round is a DRAW.Both users chose the same`
                console.log(result);
                tie++;

            }
            break;

        case "scissors":
            if (userI == "paper") {
                result = `Round ${count + 1}:The COMPUTER wins.
            Scissors cuts paper`
                console.log(result);
                pcWins++;


            } else if (userI == "rock") {
                result = `Round ${count + 1}:The USER wins. 
            Rock smashes Scissors`
                console.log(result);
                userWins++;

            } else {
                result = `Round ${count + 1}:This round is a DRAW.
            Both users chose the same`
                console.log(result);
                tie++;
            }
            break;

    }

}



function game() {  // this function plays 5 rounds

    while (count < 5) {
        userSelect();
        playRound();
        count++;

        // the below 5 lines of code writes the results to the screen:

        var createEl = document.createElement("div");// a div is created to facilitate the   output of each round
        createEl.innerHTML = result;
        var attachDiv = document.querySelector(".display");// selects parent "display" 
        attachDiv.appendChild(createEl);// attaches new div to ".display" parent.
        console.log(attachDiv);
    }


    if ((pcWins > userWins) && (pcWins >= tie)) { // "if" statements to determine overall winner
        resultFinal = result1;
        console.log(resultFinal);

    } else if (pcWins > userWins) {
        resultFinal = result1;
        console.log(resultFinal);

    } else if ((userWins > pcWins) && (userWins >= tie)) {
        resultFinal = result2;
        console.log(resultFinal);


    } else if (userWins > pcWins) {
        resultFinal = result2;



    } else {
        resultFinal = result3;
        console.log(resultFinal);
    }
    var createEl2 = document.createElement("div");// a div is created to facilitate the output of overall winner
    createEl2.innerHTML = resultFinal;
    var attachDiv2 = document.querySelector(".display");// selects parent "display" 
    attachDiv2.appendChild(createEl2);// attaches new div to ".display" parent.
    console.log(attachDiv2);
}


function reset() { // this function stops the game and clears the screen

    const clearScreen = document.querySelector(".display");
    while (clearScreen.firstChild) {
        clearScreen.removeChild(clearScreen.firstChild);
    }
    count = 0; //this resets the counter to zero when "reset"
}































