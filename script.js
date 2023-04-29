const questions = [
   {
    //Create A Prompt of 4 Questions for the user to answer
    question: "What are some primitive values?",
    answers: [
        { text: "Elements, Attributes, Values", correct: false},
        { text:  "Number, String, Boolean, Undefined, and Null", correct: true},
        { text:  "Repositories, Git Clones, Git Commit, Git Push", correct: false},
        { text:  "Data Structure, Respository Structure, Branch Structure", correct: false},
    ]
       },

    {   question: "JavaScript can...",
       answers: [
        { text: "store information", correct: false},
        { text:  "manipulate the HTML", correct: false},
        { text:  "respond to an evet and add decision making to your code", correct: false},
        { text:  "All of the above", correct: true},
       ]
    },

    {   question: "JavaScript is...",
    answers: [
     { text: "heavy weight, interpreted theoretical language", correct: false},
     { text:  "complementary and  intergrated with Java", correct: false},
     { text:  "a closed static platform scripting language", correct: false},
     { text:  "All of the above", correct: true},
    ]
 },

 {   question: "What is hoisting?",
 answers: [
  { text: "A JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution", correct: true},
  { text:  "Functions that are assigned as a property to the object", correct: false},
  { text:  "A method that defines functions with closed brackets", correct: false},
  { text:  "Raise into a position", correct: false},
 ]

}

];

const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

//Create a showQuestion function to help display our set of questions. 
function showQuestion(){
    resetPlaceHolder();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.
    question;
//Create an arrow function to retreive the next question and its answers
    currentQuestion.answers.forEach(answer => {
         const button = document.createElement('button');
         button.innerHTML = answer.text;
         button.classList.add('btn');
         answerButtons.appendChild(button);
         if(answer.correct){
            button.dataset.correct = answer.correct;
         }
         button.addEventListener('click', selectAnswer);
     });


}
//remove placeholder answers(Answer1,2,3,4)
function resetPlaceHolder(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
       answerButtons.removeChild(answerButtons.firstChild);

    }

}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

 }

function showScore() {
   resetPlaceHolder();
   questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
   nextButton.innerHTML = "Play Again!"
   nextButton.style.display = "block";
}


function handleNextButton () {
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
         showScore();
    }
    }


 nextButton.addEventListener("click", ()=> {
   if(currentQuestionIndex < questions.length){
        handleNextButton();
       }else{
          startQuiz();

       }

 });


startQuiz();




    
    








