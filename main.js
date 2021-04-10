const ball = document.querySelector('img');
const question = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const randomAnswer = ['Tak!','Nie.','Może...','Nie chcesz znać odpowiedzi','Ciężko powiedzieć ¯\\_(ツ)_/¯'];

const shakeBall = () => {
    error.textContent = '';
    answer.textContent = '';
    ball.classList.add('shake-animaton');
    setTimeout(checkInput, 1000);
}

const checkInput = () => {
    if (question.value === '') {
        error.textContent = 'Zadaj pytanie';
    } else if (question.value.slice(-1) !== '?'){
        error.textContent = 'To nie jest pytanie';
    }else{
        drawAnswer();
    };
    ball.classList.remove('shake-animaton');
};

const drawAnswer = () => {
    answer.innerHTML = `<span>Odpowiedź: </span>${randomAnswer[Math.floor(Math.random()*5)]}`;
}

ball.addEventListener('click', shakeBall)