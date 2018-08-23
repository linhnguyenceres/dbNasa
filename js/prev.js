$(document).ready(function() {
    submitButton.addEventListener("click", function() {
        if (answered < data.length) {
            alert("Bạn đã chọn " + answered + " câu trên " + data.length + " câu");
        } else {
            showResults();
        }
    })
    $('#q1').click(function() {
        showSlide(0);
    })
    $('#q2').click(function() {
        showSlide(1);
    })
    $('#q3').click(function() {
        showSlide(2);
    })
    $('#q4').click(function() {
        showSlide(3);
    })
    $('#q5').click(function() {
        showSlide(4);
    })

    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);

})


function buildQuiz(data) {
    // we'll need a place to store the HTML output
    var output = [];

    // for each question...
    data.forEach((currentQuestion, questionNumber) => {
        // we'll want to store the list of answer choices
        var answer = [];

        // and for each available answer...
        for (letter in currentQuestion.answer) {
            // ...add an HTML radio button
            answer.push(
                `<label>
               <input type="radio" name="question${questionNumber}" value="${letter}" id="a">
                ${letter} :
                ${currentQuestion.answer[letter]}
             </label>`
            );
        }

        // add this question and its anchoicesswers to the output
        output.push(
            `<div class="slide">
             <div class="question"> ${currentQuestion.question} </div>
             <div class="answer"> ${answer.join("")} </div>
           </div>`
        );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
}

function showResults() {
    // gather answer containers from our quiz
    var answerContainers = quizContainer.querySelectorAll(".answer");

    // keep track of user's choices
    let numCorrect = 0;

    // for each question...
    data.forEach((currentQuestion, questionNumber) => {
        // find selected answer
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
        // if answer is correct
        if (userAnswer === currentQuestion.correct) {
            // add to the number of correct choices
            numCorrect++;

            // color the choices green
            answerContainers[questionNumber].style.color = "lightgreen";
        } else {
            // if answer is wrong or blank
            // color the choices red

            answerContainers[questionNumber].style.color = "red";
        }
    });
    // show number of correct choices out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${data.length} <br>`;
    scoreContainer.innerHTML = `Your score: ${numCorrect*20} %`;
}
/**
 * This function show the slide in the screen 
 */
function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;

    if (currentSlide === 0) {
        previousButton.style.display = "none";
    } else {
        previousButton.style.display = "inline-block";
    }

    if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
        //submitButton.style.display = "none";
    }
}

//show the next slide
function showNextSlide() {
    showSlide(currentSlide + 1);
}

//show the previous slide
function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

var quizContainer = document.getElementById("quiz");
var resultsContainer = document.getElementById("results");
var scoreContainer = document.getElementById("score");
var submitButton = document.getElementById("submit");

// display quiz right away
buildQuiz();

var previousButton = document.getElementById("previous");
var nextButton = document.getElementById("next");
var slides = document.querySelectorAll(".slide");
let currentSlide = 0;

showSlide(0);
// on submit, show results

$('input[type="radio"]').click(function() {
answered++;
})

});