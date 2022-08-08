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
let containerScore = document.querySelector("#score");
let scorePlayer = document.querySelector(".score-time");
let scoreCurrent = document.querySelector("#score-current-play");
let timeRandom = Math.floor(Math.random() * 11000); // get ready button random time
let myTimeout = 0;
let insertScore = document.querySelector("#insert-score");
let userNameScore = document.querySelector("#user-name-score");
let player = "no name";

var timer = 0;
var startTime;
var finishTime;

// OBJECT
let myPlayers = {
  name: [],
  score: [],
};
<<<<<<< HEAD



//let agregar = [];


=======


>>>>>>> juan
if (localStorage.getItem("myPlayers") !== null) {
  myPlayers = JSON.parse(localStorage.getItem("myPlayers")); // GET DATES
} else {
  scorePlayer.innerHTML = "Sin datos";
}

function load() {
  while (insertScore.contains(document.getElementById("score-span"))) {
    insertScore.removeChild(document.getElementById("score-span"));
  }
  for (i = 0; i < myPlayers.name.length; i++) {
    let newSpan = document.createElement("span");
    newSpan.id = "score-span";
    newSpan.innerHTML = `<p>${myPlayers.name[i]} ${myPlayers.score[i]} seconds</p>`;
    insertScore.insertAdjacentElement("afterbegin", newSpan);
    player = userName.value;
    userNameScore.innerHTML = player;
  }
}
<<<<<<< HEAD

//---------------------------------------//
=======
>>>>>>> juan

btnStart.addEventListener("click", function () {
  player = userName.value;
  myPlayers.name.push(userName.value);
  userNameScore.innerHTML = player;
  // myPlayers[Object.keys(myPlayers)[Object.keys(fruitObject).length - 1]]

  scoreCurrent.innerHTML = "currently playing";

  screen1.classList.add("no-display");
  screen2.classList.remove("no-display");

  // scorePlayer.innerHTML = JSON.stringify(myPlayers); //ESTO NO ENTIENDO SI TODAVIA NO DA PUNTOS
  //localStorage.setItem("myPlayers", JSON.stringify(myPlayers)); // SAVE DATES

  // userName.innerHTML = JSON.stringify(myPlayers.name); //mi cosecha 2
  //document.getElementById("username").innerHTML= myPlayers.name;// de mi cosecha
  //
});

<<<<<<< HEAD
=======

// CHANGE SCREEN

>>>>>>> juan
startGame.addEventListener("click", function () {
  timer = 0;
  screen2.classList.add("no-display");
  screen3.classList.remove("no-display");
  myTimeout = setTimeout(letPlay, timeRandom);

  //document.getElementById("score-data").innerHTML = objectScore.score + " seconds";
});

function letPlay() {
  screen3.classList.add("no-display");
  screen4.classList.remove("no-display");
  startTime = new Date();
}

clickHere.addEventListener("click", function () {
  finishTime = new Date();
  timer = (finishTime - startTime) / 1000;
  timer = Math.round(timer * 10) / 10;
  //myPlayers.score = timer;
  myPlayers.score.push(timer);
  scoreCurrent.innerHTML = timer + " seconds";
  scorePlayer.innerHTML = timer + " seconds";

  load();
  // clearInterval(); // var positionRandomInterval;

<<<<<<< HEAD
    localStorage.setItem("myPlayers", JSON.stringify(myPlayers));
    screen4.classList.add("no-display");
    screen5.classList.remove("no-display");

    playAgain.addEventListener("click", function() {
      //que yo sepa aqui no le estmaos diciendo ninguna funcion o si
      screen5.classList.add("no-display");
      screen1.classList.remove("no-display");
    });
  });
=======
  //localStorage.clear();
  localStorage.setItem("myPlayers", JSON.stringify(myPlayers));

  screen4.classList.add("no-display");
  screen5.classList.remove("no-display");

  playAgain.addEventListener("click", function () {
    //que yo sepa aqui no le estmaos diciendo ninguna funcion o si
    screen5.classList.add("no-display");
    screen1.classList.remove("no-display");
  });
});

window.onload = load();
>>>>>>> juan
