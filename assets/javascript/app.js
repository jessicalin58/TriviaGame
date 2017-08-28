 

var questions = {

  q1: ["Q1. Marble is primarily white but can come in other colors as well.", "t"],
  q2: ["Q2. Back in ancient times, you could easily tell where a piece of marble came from by looking at its color.", "t"],
  q3: ["Q3. Marble has been used to make statues and provide flooring since ancient times.", "t"],
  q4: ["Q4. The Empire States in New York is made entirely of marble", "f"],
  q5: ["Q5. Marble is a type of foliated metamorphic rock, which are rocks that can be modified by heat, pressire, and chemical processes", "f"]
}

var score = 0;

var questionIndex = 0;

var questionsArray = [questions.q1, questions.q2, questions.q3, questions.q4, questions.q5];

//RENDERING QUESTIONS 




//UPDATE SCORE

function updateScore() {
  document.querySelector("#score").innerHTML = "Score: " + score;
}

//FUNCTIONS


updateScore();


// STOPWATCH ACTIVITY (SOLUTION)
// =============================

// This code will run as soon as the page loads
window.onload = function() {

  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
  $("#restart").hide();


  $("#instructions").text("Instructions: Type 'T' for true or'F' for false.");
  $("#instructions2").text("How to win: Answer the question within 15 seconds OR finish all the questions with 4 out of 5 correct answers");

};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {

  time: 15,
  

  restart: function() {

//     stopwatch.time = 0;
//     questionsArray = [];
//     score = 0;

//     function updateScore() {
//   document.querySelector("#score").innerHTML = "Score: " + score;
// }


  //   $("#display").html("5");

   },



  start: function() {

    function fiveSeconds() {

    stopwatch.time = 15;
    questionIndex++;
    renderQuestion();

 }
     $("#instructions").text("");
     $("#instructions2").text("");
     $("#start").hide();

  
    renderQuestion();
    setInterval(fiveSeconds, 1000 * 15);

    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
          //QUESTIONS ONKEYUP

                  document.onkeyup = function(event) {

            if(questionIndex === questionsArray.lenght){

              return;
            }


            //USER INPUT
            var userInput = String.fromCharCode(event.keyCode).toLowerCase();


            if (userInput === "t" || userInput === "f") {
            
              stopwatch.time = 15;

              if (userInput === questionsArray[questionIndex][1]) {
              $("#results").html("You are correct!");
              $("#wrongResults").html("");
              score++;
               updateScore();
          }

            else {
              $("#results").html("");
              $("#wrongResults").html("You are incorrect :(");
              //update to be incorrect
            }

              //call function and increment questionindex
            questionIndex++;
            renderQuestion();
          }
        }
      }

function renderQuestion() {

  if (questionIndex <= (questionsArray.length - 1)) {
          document.querySelector("#questions").innerHTML = questionsArray[questionIndex][0];
        }

  else {
    clearInterval(intervalId);
    clockRunning = false;

     if(score >= 4) {

    document.querySelector("#questions").innerHTML = "Horray!!";
    $("#wrongResults").html("");
    $("#results").html("");
    $("#restart").show();
     }

     else {

    document.querySelector("#questions").innerHTML = "Better luck next time.";
    $("#wrongResults").html("");
    $("#results").html("");
    $("#restart").show();
     }

    document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questionsArray.length;
  }
}

          //END OF ONKEYUP

  
  },

  count: function() {

  
    stopwatch.time--;

    if(stopwatch.time) {


    $('.progress-bar').css('width', stopwatch.time + '%');

     console.log(stopwatch.time);

  }
  
   
    var converted = stopwatch.time;
  
    $("#display").html(converted);
  },


};









