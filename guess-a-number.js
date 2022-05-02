let numInput = document.querySelector("#number-input")
let btnCheck = document.querySelector("#check")
let notificationPopUp = document.querySelector(".notification");
let notificationText = document.querySelector("#notification-text")
let btnTryAgain = document.querySelector(".try-again")
let textScore = document.querySelector("#text-score");

//check if a number is greater or less than 20
    //if its greater, pop up the notification
    //if it's less, pop up notification
    // if it guesses the right number, game stops

var randomNum = Math.floor(Math.random()*20 +1 )
btnCheck.addEventListener("click", checkNum);
btnTryAgain.addEventListener("click", reset);
var score = 20;
var highScore = 0; 
console.log(notificationPopUp);
console.log(btnTryAgain);

//a function that checks the user input and compare it to the random number
function checkNum(){
    let userGuessNum = numInput.value;
    if (userGuessNum < randomNum){ //red notification popup
        notificationPopUp.classList.remove("hidden");
        notificationText.innerText = "Your guess is too low! Try again?";
        console.log("Your guess is too low!");
    }
    else if(userGuessNum > randomNum){ //red notification popup
        notificationPopUp.classList.remove("hidden");
        notificationText.innerText = "Your guess is too high! Try again?";
        console.log("Your guess is too high!")
    }
    else{ //game stops, notification turns to green and try again button pops up
        notificationPopUp.classList.remove("hidden");
        btnTryAgain.classList.remove("hidden");
        notificationPopUp.style.backgroundColor = "green";
        notificationText.innerText = "You are correct!! Game Over. 🎉🙌";
        console.log("Correct!!!!");
        gameEnd();
    }

    showScore();
    console.log(`Your answer: ${userGuessNum}`);
    console.log(`the random number is: ${randomNum}`)
}

//A function that ends the game
function gameEnd(){
    btnCheck.removeEventListener("click", checkNum);
    btnCheck.classList.add("disabled");
    numInput.disabled = true;
}

//a function that resets the game

function reset(){
    location.reload();
}

//A function keeps track of score & high score
function showScore(){
    //runs checkNum, if guess is correct, increment by 1
    if(notificationPopUp.style.backgroundColor !== "green"){
        console.log(score);
        if(score > 0){
            score--;
            textScore.innerText = score;
        }
        else{ 
            score = 0;
            textScore.innerText = score;
        }
    }

    //if it's score, keeps the return value of that game.
    //if it's high score, create a loop once the user hits the "Try again button".
}