jQuery(function() {

// create questions
var questionOne = {
    q : "Who does not like math?",
    a1 : "Barney",
    a2 : "Heidi",
    a3 : "Nicki Minaj",
    a4 : "Albert Einstein",
    cA : "Heidi",
    hint : "Blonde"
}

var questionTwo = {
    q : "Who loves flannel?",
    a1 : "Bryan",
    a2 : "Beyonce",
    a3 : "Olivya Wilde",
    a4 : "David Beckham",
    cA : "Bryan",
    hint : "ban w3"
}

var questionThree = {
    q : "Who loves to annoy his friends?",
    a1 : "Kanye West",
    a2 : "Justin Bieber",
    a3 : "John",
    a4 : "Santa Clause",
    cA : "John",
    hint : "mention flannel"
}

var questionFour = {
    q : "Who here works with video games?",
    a1 : "Justin Wong",
    a2 : "Kevin Flynn",
    a3 : "John Carmack",
    a4 : "Tims",
    cA : "Tims",
    hint : "loves lisp"
}

var questionFive = {
    q : "Who here has a band?",
    a1 : "Jared",
    a2 : "Leonardo DiCaprio",
    a3 : "Chris Hemsworth",
    a4 : "Ryan Gosling",
    cA : "Jared",
    hint : "Sorry guys."
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var used = [];
var round = 1;

// score tracker
var score = 0;
var miss = 0;
var random = Math.floor(Math.random() * 5);

// add round start functionality
  var addClickEvent = function() {
    var $start = $("#start-btn");
        $start.click(function(){
            gameStart();
        })
  }

  addClickEvent();

// toggle round start button
  var toggleStart = function () {
      $('#start-btn').toggle();
      random = Math.floor(Math.random() * 5);
      while (used.includes(questions[random])) {  //exclude used questions
          random = Math.floor(Math.random() * 5)
      }
  }

// setup game state
  var gameStart = function() {
      toggleStart();
      $('.roundCount').html(round);
      var $questionBox = $(".question-box");
      var $answerBox = $(".answer-box");
      var $hintBox = $(".hint-box");
      $questionBox.html(questions[random].q);
          for(var i in questions[random]){
              if(i != 'cA' && i != "q" && i != "hint"){
                  $answerBox.append('<p class="answer">' + questions[random][i] + '</p>');

              }
          }
      var $hint = $('#hint-btn');
          $hint.click(function() {
              $hintBox.html(questions[random].hint);
          })
      used.push(questions[random]); //mark current question as used
      $('p.answer').click(checkAnswers);
  }

// check answer selected against questions array
  var checkAnswers = function () {
      $(this).unbind('click');  //remove click event from answeres
      $('#hint-btn').off()
      var $answerText = $(".result");
      var $scoreText = $(".score");
    if ($(this).text() === questions[random].cA) {  //check answer input accuracy
        $answerText.text("Correct Answer! You scored a point");
        score ++;
        $scoreText.text(score + " point(s)");
    }
    else {
        $answerText.text("Wrong answer!");
        miss ++;
    };
    setTimeout(function () {  //check end game
        if (score === 3 || miss === 3) {
            gameOver();
        }
        else {  //depopulate to initail state
            $('.question-box').html(null);
            $('.answer-box').html(null);
            $('.hint-box').html(null);
            $('.result').html(null);
            toggleStart();  //return round start button
            round++;  //increment to next round
    }}, 2000);
  }


// Run game over when either 3 correct answers or 3 misses are given.
  var gameOver = function () {
      if (score === 3) {  //win requirement
          alert("You won! Play Again!");
          location.reload();
      }
      else {  //loss requirement
          alert("You lost! Try again?")
          location.reload();
      }
  }

})
