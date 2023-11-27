// {
//      theme:"",
//      question:"",
//     a:"",
//        b:"",
//        c:"",
//        d:"",
//        correct:""
// }
const questions=[
    {
        theme:"history",
        question:"which famous Carthaginian leader fought in the scond punic war",
        a:"hannibal",
        b:"hamilcar",
        c:"jules cesar",
        d:"scipio",
        correct:"hannibal"
    },
    {
        theme:"sport",
        question:"what year did Tunisia win the africa cup of nations",
        a:"2002",
        b:"2004",
        c:"2006",
        d:"2008",
        correct:"2004"
    },
    {
        theme:"science",
        question:"which scientisit discovered Antibiotics",
        a:"Louis Pasteur",
        b:"Alexander Fleming",
        c:"Gregor Mendell",
        d:"Stephen Hawking",
        correct:"Alexander Fleming"
    }
]

let index =0
let score =0
function startQuiz() {
    index = 0
    score = 0
    questions.sort(() => Math.random() - 0.5);
    $("#quiz_screen").show()
    $("#welcome_screen").hide()
    console.log("hello");
    displayQuestion()
}

function displayQuestion() {
    let currentQuestion = questions[index]

    $("#question").append(currentQuestion.question)
    
    $(".key1").append(currentQuestion.a)
    $(".key2").append(currentQuestion.b)
    $(".key3").append(currentQuestion.c)
    $(".key4").append(currentQuestion.d)
    
}

function checkResult(){

    
}

function showResult() {
    $("#quiz-screen").hide();
    $("#result-screen").show();
    $("#score").text(score);
}


function resetQuiz(){
    index=0
    score=0

    questions.sort(() => Math.random() - 0.5)
    $("#quiz_screen").hide();
    $("#welcome_screen").show();
}

