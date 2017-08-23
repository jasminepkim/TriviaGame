// VARIABLES
var hideStart;
var showClock;
var correct;
var incorrect;
var unanswered;

$("#startbtn").click(startGame);

// FUNCTIONS
function startGame() {
    hideStart = $("#startbtn").hide();
    // showClock = $("#startbtn").text("<p>You have" + "..." + "left</p>");
    // hideStart = $("#startbtn").hide(1000, startGame);
    // currently stuck in an infinite loop when refreshing AFTER start button has been pressed....
}

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