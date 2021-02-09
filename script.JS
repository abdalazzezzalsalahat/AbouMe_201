
'use strict'
//
// How did this go, overall?
// first the user will get a prompt that asks him about his name, 
// and another prompt for his gender, which will be writtin in 
// the begin of the page with a welcome message.
//
let Name = prompt("what is your name?");
let gender = prompt("what is your gender? male, female");

switch (gender.toLowerCase()){
    case "male":
        document.getElementById("gender").innerHTML = "MR. ";
        break;
    case "female":
        document.getElementById("gender").innerHTML = "MRs. ";
        break;
    default:
        gender = prompt("what is your gender? male, female");
}

//
// then if he want there will be a button on the top right to start the game 
// if the biutton is clicked it will trigger a function that have 5 prompts 
// with quistions will appear and they will be marked, 2 marks per quistion. 
// the marke called score will be shown in the bottom of the page.
// the correct answers will appear in green color,
// the wrong answers will appear in red color. 
//

document.getElementById("playerName").innerHTML = Name;

function guessingGame(){
    let nameGuess = prompt("Is my name Azooz? yes, no");
    let nickNameGuess = prompt("Is my nickName Azooz? yes, no");
    let ageGuess = prompt("Is my age 24? yes, no");
    let majorGuess = prompt("Is my major Interior-design? yes, no");
    let hoppyGuess = prompt("Is my favorate hoppy Swimming? yes, no");
    let score = 0;

    if (nameGuess.toLowerCase() == "no"){
        document.getElementById("nameGuess").innerHTML = " Correct, my name is abed alaziz not azooz";
        document.getElementById("nameGuess").style.color = "#207d2f";
        score+=2;
    }else if (nameGuess.toLowerCase() != "no"){
        document.getElementById("nameGuess").innerHTML = " wrong, my name is abed alaziz not azooz";
        document.getElementById("nameGuess").style.color = "#f10e17";
    }
    if (nickNameGuess.toLowerCase() == "yes"){
        document.getElementById("nickNameGuess").innerHTML = " Correct, my nickname is azooz";
        document.getElementById("nickNameGuess").style.color = "#207d2f";
        score+=2;
    }else if (nickNameGuess.toLowerCase() != "yes"){
        document.getElementById("nickNameGuess").innerHTML = " wrong, my nickname is azooz";
        document.getElementById("nickNameGuess").style.color = "#f10e17";
    }
    if (ageGuess.toLowerCase() == "yes"){
        document.getElementById("ageGuess").innerHTML = " Correct, Im 24 years old";
        document.getElementById("ageGuess").style.color = "#207d2f";
        score+=2;
    }else if (ageGuess.toLowerCase() != "yes"){
        document.getElementById("ageGuess").innerHTML = " wrong, Im 24 years old";
        document.getElementById("ageGuess").style.color = "#f10e17";
    }

    if (majorGuess.toLowerCase() == "no"){
        document.getElementById("majorGuess").innerHTML = " Correct, my major is Software Engineering";
        document.getElementById("majorGuess").style.color = "#207d2f";
        score+=2;
    }else if (majorGuess.toLowerCase() != "no"){
        document.getElementById("majorGuess").innerHTML = " wrong, my major is not Interior-design";
        document.getElementById("majorGuess").style.color = "#f10e17";
    }

    if (hoppyGuess.toLowerCase() == "yes"){
        document.getElementById("hoppyGuess").innerHTML = " Correct, my favorate hoppy is Swimming.";
        document.getElementById("hoppyGuess").style.color = "#207d2f";
        score+=2;
    }else if (hoppyGuess.toLowerCase() != "yes"){
        document.getElementById("hoppyGuess").innerHTML = " wrong, my favorate hoppy is Swimming.";
        document.getElementById("hoppyGuess").style.color = "#f10e17";
    }
    alert("Congrats you have aswered " + (score/2) + " questions correctly and got " + score + " / 10");
    document.getElementById("btn").innerText = "Try again";
    document.getElementById("mark").innerHTML = score;

}

//
// when the user finish the game, the text on the button will change
// to (Try again), if the user wanted to try again, 
// the game will start over and the old score will be removed. 
//




//
// It took me 2 hours to complete this task, the page design took me 45 minutes 
// the html structure tooke me 30  minutes and 45 minutes for the JS code.
//

//
// I thought I will finish it 30 minutes less, but the design took along time.
//





