let number = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userinput = document.querySelector('#guessField');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let previousguess = []
let numberofguess = 0
let playgame = true

if(playgame)
{
    submit.addEventListener('click',function(event)
{
    event.preventDefault();
    const guess = parseInt(userinput.value);
    validateguess(guess);
})
}
function validateguess(guess)
{
    if(isNaN(guess))
    {
        alert('Please enter a valid number.');
    }
    else if(guess < 1)
    {
        alert("Please enter a number greater than 0.");
    }
    else if(guess > 100)
    {
        alert('Please enter a number less than 100');
    }
    else 
    {
        previousguess.push(guess);
        if(numberofguess >= 9)
        {
            displayguess(guess);
            displaymessage(`Game Over. Random Number was ${number}`);
            endgame();
        }
        else{
            displayguess(guess);
            checkguess(guess);
        }
    }

}
function checkguess(guess)
{
    if(guess === number)
    {
        displaymessage(`You guessed it right :D`);
        endgame();
    }
    else if(guess < number)
    {
        displaymessage(`The number you entered is TOO Low :p`);
    }
    else if(guess > number)
    {
        displaymessage(`The number you enter is TOO High :o`);
    }
}
function displayguess(guess)
{
    userinput.value = '';
    guesses.innerHTML += `${guess} `;
    numberofguess++;
    remaining.innerHTML = `${10 - numberofguess}`;
}
function displaymessage(message)
{
    loworhi.innerHTML = `<h2>${message}</h2>`;
}
function endgame()
{
    userinput.value = '';
    userinput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h3 id='startnewgame'>Start New game</h3>`;
    startover.appendChild(p);
    playgame = false;
    newgame();
}
function newgame()
{
    const newgamebutton = document.querySelector('#startnewgame');
    newgamebutton.addEventListener('click',function(event)
{
    number = parseInt(Math.random() * 100 + 1);
    userinput.value = '';
    previousguess = [];
    numberofguess = 0;
    guesses.innerHTML = '';
    remaining.innerHTML = `${10 - numberofguess}`;
    userinput.removeAttribute('disabled');
    startover.removeChild(p);
    playgame = true;
})
}