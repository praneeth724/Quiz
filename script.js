const questions =[
    {
        question: "Which of the following option leads to the portability and security of Java?",
        answers:[
            {text:"Bytecode is executed by JVM",correct:true},
            {text:"The applet makes the Java code secure and portable",correct:false},
            {text:"Use of exception handling",correct:false},
            {text:"Dynamic binding between objects",correct:false},
        ]
    },
    {
        question: " Which of the following is not a Java features?",
        answers:[
            {text:"Dynamic",correct:false},
            {text:"Architecture Neutral",correct:false},
            {text:"Use of pointers",correct:true},
            {text:"Object-oriented",correct:false},
        ]
    },
    {
        question: "The \u0021 article referred to as a",
        answers:[
            {text:"Unicode escape sequence",correct:true},
            {text:"Octal escape",correct:false},
            {text:"Hexadecimal",correct:false},
            {text:"Line feed",correct:false},
        ]
    },
    {
        question: "What is the return type of the hashCode() method in the Object class?",
        answers:[
            {text:"Object",correct:false},
            {text:"int",correct:true},
            {text:"long",correct:false},
            {text:"void",correct:false},
        ]
    },
    {
        question: "Which of the following is a valid long literal?",
        answers:[
            {text:"ABH8097",correct:false},
            {text:"L990023",correct:false},
            {text:"904423",correct:false},
            {text:"0xnf029L",correct:true},
        ]
    },
    {
        question: "What does the expression float a = 35 / 0 return?",
        answers:[
            {text:"0",correct:false},
            {text:"Not a number",correct:false},
            {text:"Infinity",correct:true},
            {text:"Run time exception",correct:false},
        ]
    },
    {
        question: " Which of the following creates a List of 3 visible items and multiple selections abled?",
        answers:[
            {text:"new List(false, 3)",correct:false},
            {text:"new List(3,true)",correct:true},
            {text:"new List(true,3)",correct:false},
            {text:"new List(3,false)",correct:false},
        ]
    },
    {
        question: "Which of the following for loop declaration is not valid?",
        answers:[
            {text:"for ( int i = 99; i >= 0; i / 9 )",correct:true},
            {text:"for ( int i = 7; i <= 77; i += 7 )",correct:false},
            {text:"for ( int i = 20; i >= 2; - -i )",correct:false},
            {text:"for ( int i = 2; i <= 20; i = 2* i )",correct:false},
        ]
    },
    {
        question: "Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
        answers:[
            {text:"getClass()",correct:false},
            {text:"intern()",correct:false},
            {text:"getName()",correct:true},
            {text:"toString()",correct:false},
        ]
    },
    {
        question: "Which package contains the Random class?",
        answers:[
            {text:"java.util package",correct:true},
            {text:"java.lang package",correct:false},
            {text:"java.awt package",correct:false},
            {text:"java.io package",correct:false},
        ]
    }
  
];
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo=currentQuestionIndex+1;
    questionElement.innerHTML=questionNo+"."+currentQuestion.question;
    currentQuestion.answers.forEach(answer=>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    }
    );
}
function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct ==="true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display="block";
}
function showScore(){
    resetState();
    questionElement.innerHTML ='You scored $(score) out of $(questions.length)!';
    nextButton.innerHTML="Play Again";
    nextButton.style.display="block";
}
function  handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
      handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();