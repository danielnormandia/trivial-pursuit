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
    a1 : "",
    a2 : "",
    a3 : "",
    a4 : "",
    cA : "",
    hint : ""
}

var questionFour = {
    q : "",
    a1 : "",
    a2 : "",
    a3 : "",
    a4 : "",
    cA : "",
    hint : ""
}

var questionFive = {
    q : "",
    a1 : "",
    a2 : "",
    a3 : "",
    a4 : "",
    cA : "",
    hint : ""
}

var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
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

      $questionBox.html(questions[0].q);
          for(var i in questionOne){
              if(i != 'cA' && i != "q" && i != "hint"){
                  $answerBox.append('<p class="answer">' + questionOne[i] + '</p>');

              }
        }
        $('p.answer').click(checkAnswers)

  }

  var checkAnswers = function () {
    var $answerText = $(".result");
    if ($(this).text() === questionOne.cA) {
        $answerText.text("Correct Answer! You scored a point");
        score ++;
        if (score === 3) {
          gameOver();
        }
    }else {
        $answerText.text("Wrong answer!");
        miss ++;
        if (miss === 3) {
          gameOver();
        }
    }setTimeout(function () {
        $('.result').html(null);
        $('.question-box').html(null);
        $('.answer-box').html(null);
        toggleStart();
    }, 2000);
  }

  var gameOver = function () {

  }

})
