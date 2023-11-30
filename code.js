const questions=[
    {
        theme:"history",
        question:"which famous Carthaginian leader fought in the scond punic war",
        options:{
            a:"hannibal",
            b:"hamilcar",
            c:"jules cesar",
            d:"scipio"
        },
        correct:"a"
    },
    {
        theme:"sport",
        question:"what year did Tunisia win the africa cup of nations",
        options:{
            a:"2002",
        b:"2004",
        c:"2006",
        d:"2008"
        }
        ,
        correct:"b"
    },
    {
        theme:"science",
        question:"which scientisit discovered Antibiotics",
        options:{
            a:"Louis Pasteur",
            b:"Gregor Mendell",
            c:"Alexander Fleming",
            d:"Stephen Hawking"
        }
       ,
        correct:"c"
    },
    {
        theme:"science",
        question:"which physicist wrote the theory of general relativity",
        options:{
            a:"Stephen Hawking",
            b:"Roger Penrose",
            c:"Albert Einstein",
            d:"Kip Thorne"
        }
        ,
        correct:"c"

    },
    {
        theme:"history",
        question:"which of these in not one of the 7 wonders of the ancient world",
        options:{
            a:"colossus of rhodes",
            b:" Lighthouse of Alexandria",
            c:"Eiffel Tower",
            d:"The Hanging Gardens of Babylon"
        }
        ,
        correct:"c"

    },
    {
        theme:"history",
        question:"Which empire conquered constantinople in 1453",
        options:{
            a:"Ottoman empire",
            b:"Roman empire",
            c:"Russian empire",
            d:"Carthaginian empire"
        }
        ,
        correct:"a"

    },
    {
        theme:"history",
        question:"What year did was soviet union dissolved",
        options:{
            a:"1984",
            b:"1988",
            c:"1991",
            d:"1995"
        }
        ,
        correct:"c"

    },
    {
        theme:"science",
        question:"How many pairs of DNA molecules are in the human cell",
        options:{
            a:"6",
            b:"18",
            c:"23",
            d:"45"
        }
        ,
        correct:"c"

    },
    {
        theme:"science",
        question:"How many planets are there in our solar system",
        options:{
            a:"7",
            b:"8",
            c:"9",
            d:"10"
        }
        ,
        correct:"b"

    },
    {
        theme:"sport",
        question:"which country won the 2022 fifa world cup",
        options:{
            a:"France",
            b:"Argentina",
            c:"Brazil",
            d:"Tunisia"
        }
        ,
        correct:"a"

    },
    {
        theme:"sport",
        question:"who won the 2022 ballon d'or",
        options:{
            a:"Messi",
            b:"Ronaldo",
            c:"Benzema",
            d:"Mbappe"
        }
        ,
        correct:"c"

    },
    {
        theme:"sport",
        question:"which football club won the 2022 champions league",
        options:{
            a:"Real Madrid",
            b:"Fc Barcelona",
            c:"Inter Milan",
            d:"Manchester City"
        }
        ,
        correct:"d"

    }
]

var index = 0
var score = 0

function startQuiz() {
    $("#start_screen").hide()
    $("#quiz_screen").show()
    questions.sort(() => Math.random() - 0.5)
    displayQuiz()
}

function displayQuiz() {
    const currentQuestion = questions[index]
    var optionsHTML = ""

    for (const key in currentQuestion.options) {
        if (currentQuestion.options.hasOwnProperty(key)) {
            optionsHTML += `<button class="answer-button" onclick="submitAnswer('${key}')">${currentQuestion.options[key]}</button>`
        }
    }

    $("#quiz_screen").html(`
        <div class="question">
        <h4>question ${index+1} of 5</h4>
        <p class="theme">${currentQuestion.theme}</p>
            <h3>${currentQuestion.question}</h3>
        </div>
        <div class="options">
            ${optionsHTML}
        </div>
    `)
}

function submitAnswer(selectedKey) {
    if (selectedKey !== undefined) {
        var correctKey = questions[index].correct
        var isCorrect = selectedKey === correctKey

        $(`button:contains(${questions[index].options[correctKey]})`).css('background-color', 'green');
        $(`button:contains(${questions[index].options[selectedKey]})`).css('background-color', isCorrect ? 'green' : 'red');

        setTimeout(() => {
            $('.answer-button').css('background-color', '');
            $('.answer-button').prop('disabled', false);
            if (isCorrect) {
                score++;
            }
            index++;
            if (index < 5) {
                displayQuiz();
            } else {
                showResult();
            }
        }, 2000); 
}
}
function showResult() {
    $("#quiz_screen").hide()
    $("#result_screen").show()
    $("#score").text(score)
    if (score===0){
        $(".comment").append("you can do better")
    }
    else if(score===5) {
        $(".comment").append("perfect score")
    }
    else  if (0<score<5){
        $(".comment").append("good job")
    }
}

function resetQuiz() {
    index = 0
    score = 0
    $(".comment").empty()
    startQuiz();
    $("#result_screen").hide();
    $("#quiz_screen").hide()
    $("#start_screen").show();
}

