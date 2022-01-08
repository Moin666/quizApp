var questionDisplay = document.getElementById("questionDisplay")
var optionsDisplay = document.getElementById("optionsDisplay")
var currentValue = document.getElementById("currentValue")
var totalValuue = document.getElementById("totalValuue")
var resultDiv = document.getElementById("resultDiv")
var totalScore = document.getElementById("totalScore")
var questionDiv = document.getElementById("questionDiv")
var nextValue = 0;
var score = 0;
var progr = document.querySelector("#pro")
// var verifyMEFunct = document.querySelector("#verifyMEFunct")

var quizQuestions = [
    {
        question:"HTML Stands For ____________",
        options:["Hyper Text Mark Up","Hyper Text Mask Up", "hypernet MarkUp", "Hyperjava Text Markup"],
        correctOption:["Hyper Text Mark Up"]
    },
     {
        question:"CSS Stands For ____________",
        options:["Cascading Style Sheets","Creative Style Sheets","Computer Style Sheets","Computer Style Sheets"],
        correctOption:["Cascading Style Sheets"]
    },
    {
        question:"Which HTML tag is used to define an internal style sheet?",
        options:["style","CSS", "script", "link"],
        correctOption:["style"]
    },
    {
        question:"Which CSS property is used to change the text color of an element?",
        options:["color","bg-light", "text-color", "color-bg"],
        correctOption:["color"]
    },
    {
        question:"How do you select elements with class name 'test'?",
        options:[".test","test", "#test", "*test"],
        correctOption:[".test"]
    }
]

function quizQuestionsFunction (){
    questionDisplay.innerHTML = quizQuestions[nextValue].question;

    for(var i = 0 ; i < quizQuestions[nextValue].options.length;i++){

        optionsDisplay.innerHTML += `<div class='col-md-6 my-2'><button onclick ="optionsBtnTriger('${quizQuestions[nextValue].options[i]}','${quizQuestions[nextValue].correctOption}')" class='btn btn-outline-success w-100'>${quizQuestions[nextValue].options[i]}</button></div>`
    }
    totalValuue.innerHTML = quizQuestions.length;
    currentValue.innerHTML = nextValue + 1;
    console.log(optionsDisplay)
}
quizQuestionsFunction();
console.log(nextValue)

function nextMCQS(){
    nextValue++;
    if(nextValue == quizQuestions.length){
        questionDiv.style.display = 'none'
        resultDiv.style.display = 'block';
        // optionsDisplay.innerHTML = ""
        optionsDisplay.innerHTML = ""
        console.log(questionDiv)
        console.log(resultDiv)
        totalScore.innerHTML = score;
        
    }else{
        optionsDisplay.innerHTML = ""
        quizQuestionsFunction()
        progr.value = nextValue;
        console.log(progr)
    }
    console.log(nextValue)
    console.log(quizQuestions.length)
}

function optionsBtnTriger(currentValue,actualValue){
    if(currentValue == actualValue){
        score++   

    }
    nextMCQS()

}


function verifyMe(a){
    console.log(a)
}