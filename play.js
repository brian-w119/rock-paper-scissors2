let val; // user input
let round = 0; // round vaeriable 

let pcWins = 0; // variable to store computer success for each round
let userWins = 0; // variable to store user success for each round
let tie = 0; // variable to store draw for a round
let resultFinal;
let resultRound;
//let promptUser;


//the below 5 lines are the results of the comparisons
const result1 = "Winner: The Computer. ";
const result2 = "Winner: The Human. ";
const result3 = "Its a DRAW";
const result4 = "ROCK smashes SCISSORS: ";
const result5 = "PAPER smothers ROCK: ";
const result6 = "SCISSORS shreds PAPER: ";

const display = document.querySelector(".display"); // selects the display
const roundDisplay =  document.querySelector(".roundScore"); //selects the display for the result of the rounds
                                             


function clearDisplay(){
  display.innerHTML = "";
}

function accessAttribute(e){ // accesses the users options and invokes computer to choose
  val = e.dataset.name;
  display.innerHTML = "You chose " + val;
  console.log("The Human chose " + val.toUpperCase());
  pcChoice();
  result();
  if(round === 5){
    computeOverallResult();
  }
  return val;
}

const userChoice = document.querySelectorAll(".userWeapon");
//userChoice.forEach( (button) => button.addEventListener("click", (e) => accessAttribute(e)) );


let random = ["rock", "paper", "scissors"]; // array for computer to choose from
let randomVal;

function pcChoice(){    // function for computer selection
    
    randomVal = Math.floor(Math.random() * 3);
    randomVal  = random[randomVal];
    randomVal = randomVal;
    console.log("The pc chose " + randomVal.toUpperCase());
    userprompt();
    return randomVal;
 }


function result(){ // comparisons of human computer weapons
  
  //display.innerHTML = ""; //clears the screen of anything on display
  
  if(val === "rock" && randomVal === "rock"){
    console.log(result3);
    tie++;
    console.log("Tie");
    //round++;
    
  }else if(val === "rock" && randomVal === "paper"){
    console.log(result1 + result5);
    pcWins++;
    console.log("pcWins");
   // round++;
    
  }else if(val === "rock" && randomVal === "scissors"){
    console.log(result2 +  result4);
    userWins++;
    console.log("userWins");
    //round++;
    
  }else if(val === "paper" && randomVal === "rock"){
    console.log(result2 + result5);
    userWins++;
    console.log("userWins");
    //round++;
    
  }else if(val === "paper" && randomVal === "scissors"){
    console.log(result6 + result1);
    pcWins++;
    console.log("pcWins");
   // round++;
    
  }else if(val === "paper" && randomVal === "paper"){
    console.log(result3);
    tie++;
    console.log("Tie");
    //round++;
    
  }else if(val === "scissors" && randomVal === "rock"){
    console.log(result4  + result1);
    pcWins++;
    console.log("pcWins");
   // round++;
    
  }else if(val === "scissors" && randomVal === "paper"){
    console.log(result6 + result2);
    userWins++;
    console.log("userWins");
   // round++;
    
  }else if(val === "scissors" && randomVal === "scissors"){
    console.log(result3 );
    tie++;
    console.log("Tie");
    //round++;
  }
  round++;
  roundCount.innerHTML = "Round " + round;
  console.log(round);
 
  if(round === 5){ // disables the weapon buttons, to prevent further choices being made
    weaponsDisable();
  }
   roundDisplay.innerHTML = "User:"+userWins + "__" + "Machine:"+pcWins + "__" + "Equal:"+tie ;
  
  if(round > 5){
    reset();
  }
}  // end of result function
                            
function userprompt(){ // function to prompt the user when play button is clicked
   //sets delay for the user prompt to appear
   setTimeout( () => (display.innerHTML = "The machine has chosen its weapon, now choose yours."), 2800 );
   weaponsEnable();
}

function promptUser(){ //secondary function to prompt user
  display.innerHTML = "The machine has chosen its weapon, now choose yours.";
  weaponsEnable();
}

function playGame(){ //function to play 1 to 5 rounds
   clearDisplay();
   enableReset();
  if(round < 5){
    userprompt();
  }
 } // end of playGame function

const roundCount = document.querySelector(".round-count"); // selects the round count element

function initialRoundCount(){ // sets the round to zero on page load
    window.addEventListener("load", () => roundCount.innerHTML = "Round 0");
    round = 0;
  }
initialRoundCount();


function computeOverallResult(){ // collates the overall scores
  
 clearDisplay();
  
   if(pcWins > userWins){
     resultFinal = "The MACHINE is victorius.";
     console.log("The MACHINE is victorius.");
    
   }else if(userWins > pcWins){
     resultFinal = "The HUMAN has triumphed."
     console.log("The HUMAN has triumphed.");
    
  }else if(pcWins === userWins){
    resultFinal = "Both combatants are equally matched."
    console.log("Both combatants are equally matched.")
   }else{
     result = "Both combatants are equally matched.";
     console.log("Both combatants are equally matched.");
  }
  
   console.log("User score: " + userWins);
   console.log("Pc score: " + pcWins);
   console.log("Tie score: " + tie);
  
    if(round === 5){ // displays the overall winner after a time delay
      setTimeout(displayWinner, 2801);
      enableReset(); // enables reset button at round 5
    }
  
   function displayWinner(){
     clearDisplay();
     createEl2 = document.createElement("div");// a div is created to facilitate the output of overall winner
     createEl2.innerHTML = resultFinal;
     attachDiv2 = document.querySelector(".display");// selects parent "display" 
     attachDiv2.appendChild(createEl2);// attaches new div to ".display" parent.
     console.log(attachDiv2);
   }
 // setTimeout(clearDisplay, 2201);
 }
  


function reset(){ // this function causes game to revert to the condition where all round results are 0
    
    const clearScreen = document.querySelector(".display");
    while (clearScreen.firstChild){
     clearScreen.removeChild(clearScreen.firstChild);
    }
      roundCount.innerHTML = "Round 0";
      round = 0;
      pcWins = 0;
      userWins = 0;
      tie = 0;
      weaponsDisable(); // disables weapons when  reset is pressed
      enablePlayButton();
      resetRoundDisplay();
}

function rockChosen(){ // clears the screen and outputs the weapon chosen
  clearDisplay();
  display.innerHTML = "Your weapon: ROCK." + " The machine: "+ randomVal.toUpperCase();
  //setTimeout(clearDisplay, 2201);
  setTimeout(zerosOneAnim, 1900);
  //promptUser();
}

function paperChosen(){
  clearDisplay();
  display.innerHTML = "Your weapon: PAPER." + " The machine: "+ randomVal.toUpperCase();
  setTimeout(zerosOneAnim, 1900);
}

function scissorsChosen(){
   clearDisplay();
   display.innerHTML = "Your weapon: SCISSORS." + " The machine: "+ randomVal.toUpperCase();
  setTimeout(zerosOneAnim, 1900);
}

let anim = document.createElement("img"); // new variable
anim.src = "https://github.com/brian-w119/my-images/blob/main/animatedOnesZero.gif?raw=true"; //source of image linked to variable

function onesZeroAnim(){// animation to simulate that computer is processing
   display.appendChild(anim);
   setTimeout( () => display.innerHTML = "", 1800);// animation starts after 1.8 seconds
  // weaponsDisable();
 }

function zerosOneAnim(){ // function to host zeros and one animation
  clearDisplay();
  weaponsDisable();
  display.appendChild(anim);
  setTimeout(weaponsEnable, 1500);
}

const playSelected = document.querySelector(".play");
playSelected.addEventListener("click", onesZeroAnim);


 function weaponsDisable(){ // disables user weapon buttons
   userChoice.forEach( (button) => button.disabled = true );
 }

 window.addEventListener("load", weaponsDisable); //disables weapons on window loaD

function weaponsEnable(){
  userChoice.forEach( (button) => button.disabled = false);
}

const play = document.querySelector(".play");//selects the play button

function disablePlayButton(){ //disables the play button
  play.disabled = true;
}
play.addEventListener("click", disablePlayButton); //listens to play button and disables if clicked

function enablePlayButton(){
  play.disabled = false;
}

const resetButton = document.querySelector(".stop"); //selects the reset button

function disableReset(){ // disables the rest button
  resetButton.disabled = true;
}


function enableReset(){ // disables the rest button
  resetButton.disabled = false;
}

function resetRoundDisplay(){
  roundDisplay.innerHTML = "User: 0" + "__" + "Machine: 0" + "__" + "Equal: 0"
}

window.addEventListener("load", resetRoundDisplay);

let greeting = document.createElement("img"); // new variable
greeting.src = "https://github.com/brian-w119/my-images/blob/main/rockPaperScissors.gif?raw=true"; //source of image linked to variable.To be used as animation on page load

function introAnim(){ //function that plays animation on page load
  display.appendChild(greeting);
}
window.addEventListener("load", introAnim); // causes ones and zeros to display on page load

const gameRules = ["The Rules: Rock smashes Scissors, Scissors cuts Paper, Paper covers Rock"];
const speed = 60; // speed of typewriter effect
let textPosition = 0; // start position of text

function displayRules(){ //function for typewriter effect
    display.innerHTML = gameRules[0].substring(0,textPosition) + '<span>\u25AE</span>';
    if(textPosition++ != gameRules[0].length){
      setTimeout(displayRules, speed);
   }
} // end of displayRules()


function onloadMessage(){ // causes time delay for rules to appear onscreen, at page load
  window.addEventListener("load", () => setTimeout(displayRules, 2300) );
  disableReset(); // disables reset button on page load
  weaponsDisable();  // disables weapon button on page load
  setTimeout(weaponsEnable, 7500); //enables the weapon buttons 7.5 seconds after page load
}
onloadMessage();

function playVanish(){ // disables play buttons when game has started
  if((round < 5) && (round > 0)){
    play.disabled = true;
  }
}
playVanish();











 









  
 
