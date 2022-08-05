// VARIABLES
let screen1 = document.querySelector("#screen-1");
let screen2 = document.querySelector("#screen-2");
let screen3 = document.querySelector("#screen-3");
let screen4 = document.querySelector("#screen-4");
let screen5 = document.querySelector("#screen-5");

let btnStart = document.querySelector("#start-user");
let userName = document.querySelector("#user-name");
let startGame = document.querySelector("#start-game");
let clickHere = document.querySelector("#click-here");
let playAgain = document.querySelector("#play-again");
let scorePlayer = document.querySelector(".score");
let timeRandom = Math.floor(Math.random() * 11000); // get ready button random time
let myTimeout = 0;

// OBJECT
let myPlayers = {
  totalPlayers: 0,
  name: [],
  score: [],
};

//let agregar = [];

if (localStorage.getItem("myPlayers") !== null) {
  myPlayers = JSON.parse(localStorage.getItem("myPlayers")); // GET DATES
 // agregar = myPlayers;
} else {
  scorePlayer.innerHTML = "Sin datos";
}

btnStart.addEventListener("click", function startBtn() {
  myPlayers.totalPlayers++;
  myPlayers.name.push(userName.value);
  
  screen1.classList.add("no-display");
  screen2.classList.remove("no-display");
  //scorePlayer.innerHTML = JSON.stringify(myPlayers);

  console.log(myPlayers);

  localStorage.setItem("myPlayers", JSON.stringify(myPlayers)); // SAVE DATES
  // 

});

// CHANGE SCREEN

startGame.addEventListener("click", function startBtn() {
  screen2.classList.add("no-display");
  screen3.classList.remove("no-display");
  myTimeout = setTimeout(letPlay, timeRandom);
});

function letPlay() {
  const date1 = new Date().getTime;
  screen3.classList.add("no-display");
  screen4.classList.remove("no-display");
  clickHere.addEventListener("click", function () {
    const date2 = new Date().getTime;
    const Time = date2 - date1; //score
    scorePlayer.innerHTML = Time / 1000;
    myPlayers.score.push(Time / 1000);
    localStorage.setItem("myPlayers", JSON.stringify(myPlayers));
    screen4.classList.add("no-display");
    screen5.classList.remove("no-display");

    playAgain.addEventListener("click", function () {
      screen5.classList.add("no-display");
      screen1.classList.remove("no-display");
    });
  });

  //diference in milliseconds
}
function playStart() {
  return "hoy si";
}
function playStart(){
    return "hoy si";
} 
