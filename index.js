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
  

var intervalId 

//Start quiz button

var quizDiv = document.getElementById('quiz')
var previousScore = localStorage.getItem('previous-score')
if (previousScore) {
    var previous = document.createElement('p')
    previous.textContent = previousScore*100 + '%'
    quizDiv.appendChild(previous)

    
}

function createQuizBtn() {
var startQuizBtn = document.createElement('button')
startQuizBtn.id = 'start-quiz'
quizDiv.appendChild(startQuizBtn)
startQuizBtn.textContent = 'start quiz'
startQuizBtn.onclick = startQuiz
}

createQuizBtn()
//Display the question inside the quiz div

var index = 0 
var correct = 0
function displayQuestion(){
    quizDiv.innerHTML = ""
var paragraph = document.createElement('p')
paragraph.textContent = questionsArr[index].question
quizDiv.appendChild(paragraph)
displayOptions()
}
function startQuiz() {
    index = 0 
    correct = 0
displayQuestion() 
 
}
function createTimer (){
    var counterP = document.createElement('p')
counterP.textContent = 30
counterP.id = 'timer'
quizDiv.appendChild(counterP)
startTimer()
}




//Display the questions as buttons inside a wrapper div, inside the quiz div

function displayOptions() {
    var wrapperDiv = document.createElement('div')
    for(let i = 0; i < questionsArr[index].options.length; i++){
        var option = questionsArr[index].options[i]
    var btn = document.createElement('button')
    btn.onclick = handleClick
    btn.innerHTML = option
    wrapperDiv.appendChild(btn)
    }

    quizDiv.appendChild(wrapperDiv)
    createTimer()
    
}

//when user selects an option, compare the option to the correct answer and keep track of score.

function handleClick(event){
    if(event.target.textContent === questionsArr[index].answer) {
        correct++
    } 
    endTimer()
   /* index++
   
//Display user's percent correct at end of game
    if(index === 5) {
        quizDiv.innerHTML = (correct/5 *100) + "%"
        return
    }
    displayQuestion()*/
}

//create a paragraph element within the quizDiv to hold the 'counter'

function gradeQuiz() { 
    clearInterval(intervalId)
    var grade = correct/5
    localStorage.setItem('previous-score', grade)
    quizDiv.innerHTML = (correct/questionsArr.length *100) + "%"
    createQuizBtn()
}
//create the start timer function

function startTimer() {
    console.log('startTimer')
    intervalId = setInterval(function(){
        var secondP = document.getElementById('timer');
        //console.log('secondP', secondP)
        var seconds = Number(secondP.textContent) -1
        secondP.textContent = seconds
        if(seconds === 0) {
            endTimer()
        } else {
        }
    }, 1000)
}

//create the end timer function

function endTimer() {
    clearInterval(intervalId)
    index++
    if(index === questionsArr.length){
        gradeQuiz()
    } else{displayQuestion()}
}

  //If the user has taken the quiz before, the app should display the previous score.

  //After starting the quiz, your program should select the first question in questionsArr and display the question as well as the possible choices (figure 3). The quiz should also display a timer that counts down from 30 one second at a time (figure 3.1). Please use JavaScript's setInterval and clearInterval methods to create the timer.

  //Selecting one of the options or running out of time should cause the app to immediately cycle to the next question and set of choices in questionsArr. There should be no messaging or feedback displayed to the user after making a selection or running out of time(figure 4).

  //After the last question is answered or time runs out, the game should display the "start quiz" button along with a score that is calculated from the amount of correctly answered questions divided by the total number of questions (figure 2). This number should be rounded to the nearest whole number.

  //To persist score data between games, the application should use the JavaScript localStorage API to store the user's most recent score under the key previous-score after each game and retrieve the score on page load. This means that if the user navigates away from the page and then later returns to the site, their previous score information should still be displayed.