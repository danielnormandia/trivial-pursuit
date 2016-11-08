# trivial-pursuit
Trivial Pursuit Web Browser Game

Technologies used:
Javascript
Jquery
CSS
HTML

My Approach to the game:
    When I first decided upon Trivial Pursuit, I had to then decide how to change the rules and layout in order to have it function as a single player game (at least for the MVP). I will be adding upon the functionality as a future portfolio project, but for now functionality and reliability are key. 
    So I decided upon creating a single player trivia game, that would have questions relevant to the class, in order to pique interest. MANY more questions will be added to the game as it gets closer to the reach goals I have set for the game.
    I decided that I would have 5 questions, and that in order to win at least 3 questions be correctly answered. To compliment this, the player would lose if they answered 3 questions incorrectly.
    I created arrays to store the questions, answers, and a hint.
    Then every round, a random question and its key values would be inserted into the CSS. While this is happening, it would keep track of already used answers, removing question repitition.
    Then when an answer is selected, the program would check if the answer given is correct, then display the conclusion to the player.
    Then once either the player scores 3 points, or misses 3 answers, the game would end and display the results to the user.

User Story:
    As a player, I want to play this game so I may be entertained, as well as test my knowledge.

Installation: N/A
Just run in browser

Unsolved problems:
Still attempting how to add 2nd player functionality as well as game board for when 2nd player functionality is achieved. 

![Wireframe and early planning]
(wireframe.jpg)

![Reach Goals]
(domAndReachGoals.jpg)

![Control Flow Diagram]
(controlFlow.jpg)

![array format]
(Q&Aarray.jpg)
