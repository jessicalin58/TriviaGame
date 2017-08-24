
//JQUERY FORM 

$( "form" ).submit(function( event ) {
  if ( $( "input:first" ).val() === "s" ) {
    $( "span" ).text( "Question 01. Marble is primarly white but can come in other colors as well" ).show();
    return;
  }
 
  $( "span" ).text( "Fine...go play someone else's game" ).show();
  event.preventDefault();
});

//end of form 

var questions = {

	q1: ["Marble is primarily white but can come in other colors as well.", "t"],
	q2: ["Back in ancient times, you could easily tell where a piece of marble came from by looking at its color.", "t"],
	q3: ["Marble has been used to make statues and provide flooring since ancient times.", "t"],
	q4: ["The Empire States in New York is made entirely of marble", "f"],
	q5: ["Marble is a type of foliated metamorphic rock, which are rocks that can be modified by heat, pressire, and chemical processes", "f"]
}

var score = 0;

var questionIndex = 0;

var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];

//RENDERING QUESTIONS 

function renderQuestion() {

	if (questionIndex <= (questionsArray.length - 1)) {
          document.querySelector("#questions").innerHTML = questionsArray[questionIndex][0];
        }

	else {
		document.querySelector("#questions").innerHTML = "Game Over!";
         document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
	}
}


//UPDATE SCORE

function updateScore() {
	document.querySelector("#score").innerHTML = "Score: " + score;
}

//FUNCTIONS

renderQuestion();
updateScore();

document.onkeyup = function(event) {

	if(questionIndex === questionsArray.lenght){

		return;
	}


	var userInput = String.fromCharCode(event.keyCode).toLowerCase();


	if (userInput === "t" || userInput === "f") {

		//insert change of score here
		score++;
		updateScore()
	}

	else {

		//update to be incorrect
	}

		//call function and increment questionindex
	questionIndex++;
	renderQuestion();
}

//PROGRESS BAR

function progress(timeleft, timetotal, $element) {
    var progressBarWidth = timeleft * $element.width() / timetotal;
    $element
        .find('div')
        .animate({ width: progressBarWidth }, 500)
        .html(timeleft + " seconds to go");
    if(timeleft > 0) {
        setTimeout(function() {
            progress(timeleft - 1, timetotal, $element);
        }, 1000);
    }
};

progress(180, 180, $('#progressBar'));
//PROGRESS BAR



