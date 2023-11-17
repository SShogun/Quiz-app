const quizData = [
    {
        question: 'Who was the co-founder of Apple?',
        a: 'Jack Miller',
        b: 'Cavenda Jill',
        c: 'Steve Jobs',
        d: 'Giorno Giovanna',
        correct: 'c'
    }, {
        question: 'What is the upcoming Leap Year?',
        a: '2025',
        b: '2024',
        c: '2026',
        d: '2027',
        correct: 'b'
    }, {
        question: 'How many sides does an Octagon have?',
        a: '8',
        b: '4',
        c: '12',
        d: '2',
        correct: 'a'
    }, {
        question: 'If a is 10 & b is 13.. What is e?', 
        a: '15',
        b: '9',
        c: '19',
        d: '22',
        correct: 'd'
    }, {
        question: 'Who invented the Light Bulb?',
        a: 'Nikola Tesla',
        b: 'Albert Einstein',
        c: 'Thomas Edison', 
        d: 'Heisenberg',
        correct: 'c'    
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl)=>{ 
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    // console.log(answer);
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
// * TODO:  Can you reduce the code by removing deselectedAnswers function and implementing something in getSelected function instead?
// ! TODO: Make a correction for wrong answer
submitBtn.addEventListener('click', ()=> {
    const answer = getSelected();
    if (answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;    
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
            quiz.innerHTML = `
            <h2>You have answered ${score}/${quizData.length} questions correctly.</h2>`
            //* for respective correct questions, give a custom message 
            setInterval(()=>{
                questionEl.innerText = "You will be shortly redirected to the first question";
            },8000)
            setInterval(()=>{
                location.reload();
            },15000)
        }
    }
})