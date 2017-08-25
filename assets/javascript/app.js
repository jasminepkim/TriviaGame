//  Questions are in individualized objects within arrays
var questions = [{
    question: "Javascript code contain a sequence of ____________.",
    options: ["HTML tags", "Method calls", "Executable statements", "All of these"],
    answer: "All of these"
}, {
    question: "The 'add and assignment' operator is shown by this symbol:",
    options: ["+==", "+=", "==+", "=+"],
    answer: "+="
}, {
    question: "What is the return value of nearly every jQuery function?",
    options: ["a nodeList", "a string", "a jQuery object", "the selector passed to the jQuery(method)"],
    answer: "a jQuery object"
}, {
    question: "Which of the following is NOT a type of selector we can use in jQuery?",
    options: ["Element", "Descendant", "Filter", "Attribute"],
    answer: "Filter"
}, {
    question: "What type of selector is being used in the following line of code?  $('li a');",
    options: ["Descendant", "Child", "Class", "Attribute"],
    answer: "Descendant"
}];

// Page 1 only starts with the "START" button
hidePageOne();

// Buttons for the user to use to begin and end the game
$("#startbtn").click(startGame);
$("#donebtn").click(seeResults);

// FUNCTIONS
function hidePageOne() {
    $(".container").hide();
    $("#donebtn").hide();
    $(".clock").hide();
    $(".results").hide();
}

// When the user is taking the quiz
function startGame() {
    // To append the loop of questions
    for (var i = 0; i < questions.length; i++) {
        $("#test").append("<div id=" + "question" + i + "></div>");
        $("#question" + i).append("<div> <p>" + "<br>" + questions[i].question + "</p></div>");
        // To append the loop of options
        for (var j = 0; j < questions[i].options.length; j++) {
            $("#question" + i).append('<input type="radio" name=question' + i +
                ' value="' + questions[i].options[j] + '">' +
                questions[i].options[j] + "<br>")
        }
    }
    $("#startbtn").hide();
    $(".container").show();
    $("#donebtn").show();
    $(".clock").show();
    $(".results").hide();
    var countDown = 30;
    var timer = setInterval(function () {
        countDown--;
        $("#timer").html(countDown + " seconds left");
        if (countDown === 0) {
            clearInterval(timer);
            seeResults();
        }
    }, 1000);
}

// When the user is done and submits their answers
function seeResults() {
    $(".container").hide();
    $("#donebtn").hide();
    $(".startbutton").hide();
    $(".results").show();
    $(".clock").hide();
    endPage();

    // To count the user's results
    function endPage() {
        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;
        for (var i = 0; i < questions.length; i++) {
            var userAnswer = $('input[name=question' + i + ']:checked', '.question').val();
            if (!(userAnswer != undefined)) {
                unanswered++;
                console.log(unanswered);
            } else if (questions[i].answer === userAnswer) {
                correct++;
                console.log(correct);
            } else {
                incorrect++;
                console.log(incorrect);
            }

            // To update the counters on the end page
            $("#corr").html(correct);
            $("#incorr").html(incorrect);
            $("#unansw").html(unanswered);
        }
    }
}