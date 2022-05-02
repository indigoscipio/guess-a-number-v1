let numInput = document.querySelector("#number-input")
let btnCheck = document.querySelector("#check")

//check if a number is greater or less than 20
    //if its greater, pop up the notification
    //if it's less, pop up notification
    // if it guesses the right number, game stops


var randomNum = Math.floor(Math.random()*20 +1 )
btnCheck.addEventListener("click", checkNum);
var score = 0;
var highScore = 0; 

//a function that checks the user input and compare it to the random number
function checkNum(){
    let userGuessNum = numInput.value;
    if (userGuessNum < randomNum){
        console.log("Your guess is too low!");
    }
    else if(userGuessNum > randomNum){
        console.log("Your guess is too high!")
    }
    else{
        console.log("Correct!!!!");
    }
    console.log(`Your answer: ${userGuessNum}`);
    console.log(`the random number is: ${randomNum}`)
}


//A function keeps track of score & high score
function scoreCheck(){
    //runs checkNum
    //if it's score, keeps the return value of that game.
    //if it's high score, create a loop once the user hits the "Try again button".
}