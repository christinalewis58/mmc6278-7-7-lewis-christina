// The question and answer arrays with options
var questionsArr = [
    {
      question: 'What is the capitol of Florida?',
      answer: 'Tallahassee',
      options: [
        'Orlando',
        'Miami',
        'Jacksonville',
        'Tallahassee',
      ]
    },
    {
        question: 'What is Floridas tagline?',
        answer: 'The Sunshine State',
        options: [
          'The Alligator State',
          'The Sunshine State',
          'The Home of Disney World',
          'The Palm Tree State',
        ]
      },
      {
        question: 'What is Floridas state animal?',
        answer: 'The panther',
        options: [
          'The panther',
          'The hummingbird',
          'The alligator',
          'The manatee',
        ]
      },
      {
        question: 'What is Floridas largest city?',
        answer: 'Jacksonville',
        options: [
          'Miami',
          'Orlando',
          'Tampa',
          'Jacksonville',
        ]
      },
      {
        question: 'In what year did Florida become a state?',
        answer: '1845',
        options: [
          '1775',
          '1802',
          '1905',
          '1845',
        ]
      },
  ]

var startQuizBtn = document.getElementById('start-quiz')
console.log('start-quiz')

//function runQuiz() {
    //for(let i = 0; i < questionsArr.length; i++)
//}

  //When the page loads, if the user has never played the game before, the game should display a "start quiz" button. The button MUST have an id attribute of "start-quiz" (figure 1). The included automated tests require this id and will fail without it.

  //If the user has taken the quiz before, the app should display the previous score.

  //After starting the quiz, your program should select the first question in questionsArr and display the question as well as the possible choices (figure 3). The quiz should also display a timer that counts down from 30 one second at a time (figure 3.1). Please use JavaScript's setInterval and clearInterval methods to create the timer.

  //Selecting one of the options or running out of time should cause the app to immediately cycle to the next question and set of choices in questionsArr. There should be no messaging or feedback displayed to the user after making a selection or running out of time(figure 4).

  //After the last question is answered or time runs out, the game should display the "start quiz" button along with a score that is calculated from the amount of correctly answered questions divided by the total number of questions (figure 2). This number should be rounded to the nearest whole number.

  //To persist score data between games, the application should use the JavaScript localStorage API to store the user's most recent score under the key previous-score after each game and retrieve the score on page load. This means that if the user navigates away from the page and then later returns to the site, their previous score information should still be displayed.