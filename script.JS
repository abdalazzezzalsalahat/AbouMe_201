
'use strict';
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
let score = 0;
let TVShows = ['The 100'
            , 'Mr. Robot'
            , 'Peaky Blinders'
            , 'Dark'
            , 'Riverdale'
            , 'SKAM'
            , 'CSI'
            , 'NCIS'];
function guessingGame(){

    guessedName();

    guessedNickname();

    guessedAge();

    guessedMajor();

    guessedHobby();

    GuessedNumber();

    GuessedTVShow();

    TVShowsArray();

    alert("Congrats you have aswered " + (score/2) + " questions correctly and got " + score + " / 10");
    document.getElementById("btn").innerText = "Try again";
    document.getElementById("mark").innerHTML = score;
    document.getElementById("TVShowDiv").hidden = false;
    document.getElementById("footer").hidden = false;
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


function guessedName(){
    let nameGuess = prompt("Is my name Azooz? yes, no");
    if (nameGuess.toLowerCase() == "no"){
        document.getElementById("nameGuess").innerHTML = " Correct, my name is abed alaziz not azooz";
        document.getElementById("nameGuess").style.color = "#207d2f";
        score+=2;
    }else if (nameGuess.toLowerCase() != "no"){
        document.getElementById("nameGuess").innerHTML = " wrong, my name is abed alaziz not azooz";
        document.getElementById("nameGuess").style.color = "#f10e17";
    }
}
function guessedNickname(){
    let nickNameGuess = prompt("Is my nickName Azooz? yes, no");
    if (nickNameGuess.toLowerCase() == "yes"){
        document.getElementById("nickNameGuess").innerHTML = " Correct, my nickname is azooz";
        document.getElementById("nickNameGuess").style.color = "#207d2f";
        score+=2;
    }else if (nickNameGuess.toLowerCase() != "yes"){
        document.getElementById("nickNameGuess").innerHTML = " wrong, my nickname is azooz";
        document.getElementById("nickNameGuess").style.color = "#f10e17";
    }
}
function guessedAge(){
    let ageGuess = prompt("Is my age 24? yes, no");
    if (ageGuess.toLowerCase() == "yes"){
        document.getElementById("ageGuess").innerHTML = " Correct, Im 24 years old";
        document.getElementById("ageGuess").style.color = "#207d2f";
        score+=2;
    }else if (ageGuess.toLowerCase() != "yes"){
        document.getElementById("ageGuess").innerHTML = " wrong, Im 24 years old";
        document.getElementById("ageGuess").style.color = "#f10e17";
    }
}
function guessedMajor(){
    let majorGuess = prompt("Is my major Interior-design? yes, no");
    if (majorGuess.toLowerCase() == "no"){
        document.getElementById("majorGuess").innerHTML = " Correct, my major is Software Engineering";
        document.getElementById("majorGuess").style.color = "#207d2f";
        score+=2;
    }else if (majorGuess.toLowerCase() != "no"){
        document.getElementById("majorGuess").innerHTML = " wrong, my major is not Interior-design";
        document.getElementById("majorGuess").style.color = "#f10e17";
    }
}
function guessedHobby(){
    let hoppyGuess = prompt("Is my favorate hoppy Swimming? yes, no");
    if (hoppyGuess.toLowerCase() == "yes"){
        document.getElementById("hoppyGuess").innerHTML = " Correct, my favorate hoppy is Swimming.";
        document.getElementById("hoppyGuess").style.color = "#207d2f";
        score+=2;
    }else if (hoppyGuess.toLowerCase() != "yes"){
        document.getElementById("hoppyGuess").innerHTML = " wrong, my favorate hoppy is Swimming.";
        document.getElementById("hoppyGuess").style.color = "#f10e17";
    }
}
function GuessedNumber(){
    let attempts = 4;
    while (attempts) {
        let numberGuess = parseInt(prompt('Im thinking in a number that is between 1 to 10, Guess the number to encrease your score.'));
        if (numberGuess > 8 && numberGuess < 10) {
            alert(' Correct, the number was 9 ');
            document.getElementById("numberGuess").innerHTML = " Correct, The number I was thinking about was 9.";
            document.getElementById("numberGuess").style.color = "#207d2f";
            score+=2;
            break;
        } else if (numberGuess <= 8) {
            alert('Your guess was "Too Low", try again');
        } else {
            alert('Your guess was "Too High", try again');
        }
        attempts-=1 ;
        if (attempts==0){
            alert('Sorry, you have no more attempts.');
            document.getElementById("numberGuess").innerHTML = "Sorry, The correct number 9";
            document.getElementById("numberGuess").style.color = "#f10e17";
            break;
        }
    }
}
function GuessedTVShow(){
    let attemts = 6;
    while(attemts){
        let TVShowGuess = prompt('Guess a TVShow that I have watched, and encrease your score.');
        if(TVShows.indexOf(TVShowGuess) >= 0){
            document.getElementById("TVShowGuess").innerHTML = 'Correct, Yeah I have watched that TVShow and it was amazing!';
            document.getElementById("TVShowGuess").style.color = "#207d2f";
            score+=2;
            break;
        }
        else {
            alert('Guess a again, sorry I havent watch that TVShow yet.');
        }
        alert("My watch List: 'The 100', 'Mr. Robot', 'Peaky Blinders', 'Dark', 'Riverdale', 'SKAM', 'CSI', 'NCIS'");
        attemts--;
        if (attemts == 0){
            alert('Sorry, you have no more attempts.');
            document.getElementById("TVShowGuess").innerHTML = 'Wrong,  sorry I havent watch that TVShow yet. My watch List';
            document.getElementById("TVShowGuess").style.color = "#f10e17";
            break;
        }
    }
    
}
function TVShowsArray() {
    for (let i=0;i<TVShows.length; i++){
        let ul = document.getElementById("TVShowslist");
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(TVShows[i]));
        ul.appendChild(li);
    }
}
