jQuery(function() {
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

// score tracker
var score = 0;
var miss = 0;


  var addClickEvent = function() {
    var $start = $("#start-btn");
        $start.click(function(){
            gameStart();
        })
  }

  var toggleStart = function () {
      $('#start-btn').toggle();
  }

  addClickEvent();

  var gameStart = function() {
      toggleStart();
      var $questionBox = $(".question-box");
      var $answerBox = $(".answer-box");
      var $hintBox = $(".hint-box");
      var random = Math.floor(Math.random() * 5);
      $questionBox.html(questions[random].q);
          for(var i in questions[random]){
              if(i != 'cA' && i != "q" && i != "hint"){
                  $answerBox.append('<p class="answer">' + questions[random][i] + '</p>');

              }
        }
        $('p.answer').click(checkAnswers)

  }

  var checkAnswers = function () {
    var $answerText = $(".result");
    if ($(this).text() === questionOne.cA) {
        $answerText.text("Correct Answer! You scored a point");
        score ++;
    }
    else {
        $answerText.text("Wrong answer!");
        miss ++;
    };
    setTimeout(function () {
        if (score === 3 || miss === 3) {
            gameOver();
        }
        else {
        $('.result').html(null);
        $('.question-box').html(null);
        $('.answer-box').html(null);
        toggleStart();

    }}, 2000);
  }

  var gameOver = function () {
      if (score === 3) {
          alert("You won! Play Again!");
          location.reload();
      }
      else {
          alert("You lost! Try again?")
          location.reload();
      }
  }

})
