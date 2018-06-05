/*  1) We create an array with possible words to guess. */
var wordChoices =["DANNY", "NGUYEN", "HELLO", "GOODBYE"];

/*  2) We create code to select a word at random within the array. That word will be in play. */
var chosenWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

/*  3) We create code to count the character length of the chosenWord and display "_" for that amount. */
document.write("_ ")= chosenWord.length 

/* 4) We create code that when player presses key to guess, if a character is guessed correctly, we replace "_" with that letter in it's correct position (also minus from guess counter). Else, we add it to incorrect guess list and again minus from guess counter. */
document.onkeyup = function(event){
    var userGuess = event.key;

    if (((userGuess === "D") || (userGuess === "A") || (userGuess === "N") || (userGuess === "Y")) {
        document.write(something);
    }

    else {
        document.write(userGuess) to incorrect list. 
    }

    guessCounter --i;
}

/*  5) If all characters are guessed correctly before the guess counter limit, then you win (add a score to wins counter) and the program runs again with another randomly selected word.
    6) Else, if all characters are not guessed correctly before the guess counter limit, then you lose.

/* Function for Chosen Word */
function chosenWord(computerChoices){
    for (var i = 0; i < computerChoices; i++){

    }
}