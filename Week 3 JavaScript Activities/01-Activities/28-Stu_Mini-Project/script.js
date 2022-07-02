//commented out code is what we started with and then when we finished it we put it in the function that is not commented out

/*var promptInitial = prompt("Enter R, P, or S:").toUpperCase()
//.toUpperCase at very end will convert anything inputted to upper case. do it here so dont have to write it everytime below.
console.log (promptInitial);

var randomNum = Math.floor(Math.random() * 3)
//Math.floor --> one of three ways you can round; it always round down to a whole number

computerList = ["R", "P", "S"]

//how you grab a random number that will equate to R, P or S

var computerVal = computerList[randomNum] 
alert("Computer chose " + computerVal);

//command d and enter to select same text on multiple lines
if (promptInitial === "R" && computerVal ==="S") {
    alert ("You Win!");
} else if (promptInitial === "R" && computerVal ==="P") {
    alert ("You Lose!");
};

if (promptInitial === computerVal) {
    alert ("It's a Tie!")
}

if (promptInitial === "P" && computerVal ==="S") {
    alert ("You Lose!");
} else if (promptInitial === "P" && computerVal ==="R") {
    alert ("You Win!");
};

if (promptInitial === "S" && computerVal ==="P") {
    alert ("You Win!");
} else if (promptInitial === "S" && computerVal ==="R") {
    alert ("You Lose!");
};
*/

// have to put starting status in global scope otherwise wont save each time...
// starts stats at 0
var wins = 0;
var ties = 0;
var losses = 0;

//function: calls on a block of code multiple times; to call on a block of code later and potentially multiple times. 
function game () {

    var promptInitial = prompt("Enter R, P, or S:").toUpperCase()

console.log (promptInitial);

var randomNum = Math.floor(Math.random() * 3)

computerList = ["R", "P", "S"]

var computerVal = computerList[randomNum] 
alert("Computer chose " + computerVal);

if (promptInitial === "R" && computerVal ==="S") {
    alert ("You Win!");
    wins++;
} else if (promptInitial === "R" && computerVal ==="P") {
    alert ("You Lose!");
    losses++;
};

if (promptInitial === computerVal) {
    alert ("It's a Tie!");
    ties++;
};

if (promptInitial === "P" && computerVal ==="S") {
    alert ("You Lose!");
    losses++;
} else if (promptInitial === "P" && computerVal ==="R") {
    alert ("You Win!");
    wins++;
};

if (promptInitial === "S" && computerVal ==="P") {
    alert ("You Win!");
    wins++;
} else if (promptInitial === "S" && computerVal ==="R") {
    alert ("You Lose!");
    losses++;
};

//stats window increases by one depending on result of game
alert(
    "Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
);
//as it is right now the game will only play once. we add the below to give user option to play again. confirm is a boolean that equates yes to true and cancel to false

var playAgain = confirm("Do you want to continue?");

if (playAgain === true) {
    game();
} else {
return;
}
}

//plays game for the first time
game ();

