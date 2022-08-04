// VARIABLES
let screen1 = document.querySelector('#screen-1');
let screen2 = document.querySelector('#screen-2');
let screen3 = document.querySelector('#screen-3');
let screen4 = document.querySelector('#screen-4');
let screen5 = document.querySelector('#screen-5');

let btnStart = document.querySelector('#start-user');
let userName = document.querySelector('#user-name');
let startGame = document.querySelector('#start-game');
let clickHere = document.querySelector('#click-here');
let playAgain = document.querySelector('#play-again');
let scorePlayer = document.querySelector('#score');

// OBJECT
let myPlayers = {
    totalPlayers: 0,
    name: [],
    score: []
};

if (localStorage.getItem(myPlayers) !== null) {

    myPlayers = JSON.parse(localStorage.getItem);
    scorePlayer.innerHTML = JSON.stringify(myPlayers);
} else {
    scorePlayer.innerHTML = "Sin datos";
}

btnStart.addEventListener('click', function startBtn(){
    myPlayers.totalPlayers++;
    myPlayers.name.push(userName.value);
    myPlayers.score.push(scorePlayer.value);
    screen1.classList.add('no-display');
    screen2.classList.remove('no-display');
    scorePlayer.innerHTML = JSON.stringify();
    console.log(myPlayers);
    
});
