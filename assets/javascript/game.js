// Array with possible words to guess (12)
var wordChoices =[
    "SPLASH",
    "CURRY",
    "DURANT",
    "IGUODALA",
    "GREEN",
    "THOMPSON",
    "WARRIORS",
    "CROSSOVER",
    "STEPBACK",
    "TRANSITION",
    "PULLUP",
    "CHAMPIONS"
];

//Variable for Wins, Guesses Remaining, and Already Guessed
var wins = 0;
var guessRemain = 12;
var alreadyGuessed = [];
var wordDisplay =[];

// Select a word at random within the array to be in play
var chosenWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

// Word in play will be hidden
function hideWord(){    
    for (var i = 0; i < chosenWord.length; i++){
        wordDisplay[i] = "_";
    }
}
//Render Chosen Word, Guesses Remaining, and Already Guessed
function renderChosenWord(){
    document.querySelector("#chosenWord").innerHTML = wordDisplay.join(" ");
}

function renderGuessRemain(){
    document.querySelector("#guessRemain").innerHTML = guessRemain;
}

function renderAlreadyGuessed(){
    document.querySelector("#alreadyGuessed").innerHTML = alreadyGuessed.join(" ");
}

// Function that Updates Scores, Game, and Lose alert
function updateWins(){
    if (wordDisplay.join("") === chosenWord){
        alert("You got it! The word was: " + wordDisplay.join("") + "\nPress ENTER or click OK to continue!");
        wins++;
        updateGame();
    }
    document.querySelector("#wins").innerHTML = wins;
}

function updateGame(){
    chosenWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
    wordDisplay =[];
    hideWord();
    renderChosenWord();
    guessRemain = 12;
    renderGuessRemain();
    alreadyGuessed =[];
    renderAlreadyGuessed();
}

function youLose(){
    if (guessRemain <= 0){
        alert("You've lost! You had " + wins + " wins")
        wins = 0;
        updateGame();
    }
}

// User Interaction Fuction and Outcomes
document.onkeyup = function(event){

    var userGuess = event.key.toUpperCase();
    
    for (var j = 0; j < chosenWord.length; j++){
        if (chosenWord[j] === userGuess){
            wordDisplay[j] = userGuess;  
       } 
    }
    guessRemain--;
    alreadyGuessed.push(userGuess);
    renderChosenWord();
    renderAlreadyGuessed();
    renderGuessRemain();
    updateWins();
    youLose();
}
renderChosenWord();
hideWord();
renderGuessRemain();