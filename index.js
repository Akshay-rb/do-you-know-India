
var readlineSync = require('readline-sync');

var score = 0;
var userName = readlineSync.question("What is your name ?")

console.log("welcome " + userName + " lets find out how well do you know India ");

// play function

function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if(userAnswer.toLowerCase() ===  answer.toLowerCase()){
    console.log("right!")
    score = score+1
  } else{
    console.log("better luck")
  }

  console.log("current score is " ,score);
  console.log("---------------")
}

var questions = [
  {
    question:"Which year did we get independence?" ,
    answer : "1947"
  },{
    question:"capital city of India ?" ,
    answer : "Delhi"
  },
  {
    question:"Which city is known as silicon valley?" ,
    answer : "Bangalore"
  },
  {
    question:"Which city is known as pink city?" ,
    answer : "Jaipur"
  }]

for(let i=0; i< questions.length; i++){
  play(questions[i].question, questions[i].answer)
}

console.log('your total score is '+ score + ' of ' + questions.length)