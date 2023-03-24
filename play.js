
var result1 = "The overall winner is the computer";
var result2 = "The overall winner is the user";
var result3 = "There isn't an overall winner";

var pcS; // pc choice defined
var userI; // user choice defined

choice = ["rock", "paper", "scissors", "paper", "scissors", "rock", "paper"]; // options

//the below 3 variables are the counter variables that are initialised
var count = 0;
var pcWins = 0;
var userWins = 0;

function userSelect() {  // function for user to select
    userI = prompt("Please select either ROCK, PAPER or SCISSORS: ");
    userI = userI.toLowerCase();  //all inputs are converted to lower case
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
                console.log("The computer wins this round.Rock smashes Scissors");
                pcWins++;
            } else if (userI == "paper") {
                console.log("The user wins this round.Paper smothers Rock");
                userWins++;
            } else {
                console.log("This round is a draw.Both the computer and user chose the same option");
            }
            break;

        case "paper":
            if (userI == "rock") {
                console.log("The computer wins this round.Paper smothers Rock");
                pcWins++;
            } else if (userI == "scissors") {
                console.log("The user wins this round.Scissors cuts paper");
                userWins++;
            } else {
                console.log("This round is a draw.Both the computer and user chose the same option");
            }
            break;

        case "scissors":
            if (userI == "paper") {
                console.log("The computer wins this round. Scissors cuts paper");
                pcWins++;
            } else if (userI == "rock") {
                console.log("The user wins this round. Rock smashes Scissors");
                userWins++;
            } else {
                console.log("This round is a draw.Both the computer and user chose the same option");
            }
            break;

    }

}

function game() {  // this function plays 5 rounds
    while (count < 5) { // the while loop plays 5 rounds
        userSelect();  // the computer select function is invoked
        playRound();   // the user select function is invoked
        count++;
    }

    if (pcWins > userWins) { // if statements to determine overall winner
        console.log(result1);
    } else if (userWins > pcWins) {
        console.log(result2);
    } else {
        console.log(result3);
    }

}

game();  // game initiation function invoked