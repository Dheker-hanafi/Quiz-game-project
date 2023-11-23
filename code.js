// {
//     theme:"",
//     question:"",
//     answers:[{a1:"",value:},{a2:"",value:},{a3:"",value:},{a4:"",value:}]
// }
const questions=[
    {
        theme:"history",
        question:"which famous Carthaginian leader fought in the scond punic war",
        answers:[{a1:"hannibal",value:true},{a2:"hamilcar",value:false},{a3:"jules cesar",value:false},{a4:"scipio",value:false}]
    },
    {
        theme:"sport",
        question:"what year did Tunisia win the africa cup of nations",
        answers:[{a1:"2002",value:false},{a2:"2004",value:true},{a3:"2006",value:false},{a4:"2008",value:false}]
    },
    {
        theme:"science",
        question:"which scientisit discovered Antibiotics",
        answers:[{a1:"Louis Pasteur",value:false},{a2:"Alexander Fleming",value:true},{a3:"Gregor Mendell",value:false},{a4:"Stephen Hawking",value:false}]
    }
]

let question=$('#question')
let index
function start() {
    index = 0
    score = 0
    displayQuestion()
    updateScore()
}



