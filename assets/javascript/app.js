// VARIABLES
var startPage;
var mainPage;
var endPage;
var showClock;
var correct;
var incorrect;
var unanswered;

// ***MOVE HTML QUESTIONS OVER TO JS!***

// The questions and DONE button are hidden until the user clicks the START button
startPage = $(".container").hide();
startPage = $("#donebtn").hide();
endPage = $(".results").hide();

// Buttons for the user to use to begin and end the game
$("#startbtn").click(startGame);
$("#donebtn").click(seeResults);

// ***CREATE "HIDE" AND "SHOW" FUNCTIONS AND CALL THEM INSTEAD!!!***

// FUNCTIONS
function startGame() {
    mainPage = $("#startbtn").hide();
    mainPage = $(".container").show();
    mainPage = $("#donebtn").show();
    showClock = $(".startbutton").text("You have ... left!");
    endPage = $(".results").hide();
    // hideStart = $("#startbtn").hide(1000, startGame);
    // currently stuck in an infinite loop when refreshing AFTER start button has been pressed....
}

// When the user is ready to submit their answers:
function seeResults() {
    endPage = $(".container").hide();
    endPage = $("#donebtn").hide();
    endPage = $(".startbutton").hide();
    endPage = $(".results").show();
}

// function hideStuff() {
//     startPage = $(".container").hide();
//     startPage = $("#donebtn").hide();
//     mainPage = $("#startbtn").hide();
//     endPage = $(".header2").hide();
// }

// needs to show time counter to start the game



// var questions = [
//     {   
//         question: "whats your names",
//         options: ["barry", "travis"],
//         answer: "barry"
//     },
//     {

//     },
//     {}
// ]

// ask the question
// questions[0].question
// questions[0].options[1]

// create 5 questions, per barry!