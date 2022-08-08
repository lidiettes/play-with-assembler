// VARIABLES

var screen1=`<h1 class="title-screen-h1">TEST YOUR REFLEXES</h1>
<h3 class="title-screen-h3">Choose a user name</h3>
<label for="">User name</label>
<input type="text" id="user-name"></input>
<button id="start-user" class="buttons">Start</button>`

var screen2=` <button id= "start-game" class="buttons">Start Game</button>`
var screen3=` <h3>Get ready...</h3>`
var screen4=`<button id="click-here">Click here</button>`
var screen5=`<h1>Your score</h1>
<p>Your reaction time was: <span class="score"></span> seconds</p>
<button id="play-again" class="buttons">Play Again</button>`


let screen = document.querySelector("#screen");

let userName = document.querySelector("#user-name");
let startGame = document.querySelector("#start-game");
let clickHere = document.querySelector("#click-here");
let playAgain = document.querySelector("#play-again");
let scorePlayer = document.querySelector(".score");
let timeRandom = Math.floor(Math.random() * 11000); // get ready button random time
let myTimeout = 0;
var time;
var date1;
var date2;
var onlyOneClick=0;
var totalPlayers=0;


// OBJECT
var myPlayers=0;
var myPlayer = {

  name: "",
  score: 0,
};

//let agregar = [];
/*
if (localStorage.getItem("myPlayers") !== null) {
  myPlayers = JSON.parse(localStorage.getItem("myPlayers")); // GET DATES
 // agregar = myPlayers;
} else {
  scorePlayer.innerHTML = "Sin datos";
}
*/
function loadScreen1(){
  screen.insertAdjacentHTML('afterbegin', screen1);
  
  let userName = document.querySelector("#user-name");
  let btnStart = document.querySelector("#start-user"); 
btnStart.addEventListener("click", function() {
  myPlayers++;
  myPlayer.name=userName.value;
  localStorage.setItem("myList", JSON.stringify(""));
  loadScreen2();
  
  //scorePlayer.innerHTML = JSON.stringify(myPlayers);

  //console.log(myPlayers);

 // localStorage.setItem("myPlayers", JSON.stringify(myPlayers)); // SAVE DATES   creo que este sobra y es el que duplica. repetido linea 73
  // 

});
}
// CHANGE SCREEN
loadScreen1();
function loadScreen2(){
  screen.innerHTML="";
  screen.insertAdjacentHTML('afterbegin', screen2);
  
  let startGame = document.querySelector("#start-game");
  startGame.addEventListener("click", function () {
    loadScreen3();

  
    myTimeout = setTimeout(loadScreen4, timeRandom);  //appear first button

})


};

function loadScreen3(){
  screen.innerHTML="";
  screen.insertAdjacentHTML('afterbegin', screen3);
}

function loadScreen4(){
  screen.innerHTML="";
  screen.insertAdjacentHTML('afterbegin', screen4);

  date1 = new Date(); //first button
  let clickHere = document.querySelector("#click-here");
  clickHere.addEventListener("click", function () {
    date2 = new Date();    //stop button
    scoreAdd = (date2 - date1)/1000; //score
   // scorePlayer.innerHTML=scoreAdd;  //sospechoso ..pinta en el span de score
//    
    
    myPlayer.score=scoreAdd;
    console.log(myPlayer)
    addNewItem(myPlayer);
   // localStorage.setItem('myPlayers', JSON.stringify(myPlayer));
    loadScreen5();
  })
};
    function loadScreen5(){


    screen.innerHTML="";
  screen.insertAdjacentHTML('afterbegin', screen5);
  
    let playAgain = document.querySelector("#play-again");
    playAgain.addEventListener("click", function () {
      

    //  localStorage.setItem("myPlayers", JSON.stringify("")); //reset item json when out the game 
    
      screen.innerHTML=""
      loadScreen1();

    });
  
  
  };
  function addNewItem (item) {
//if (localStorage.getItem("myList") !== null) {
    //let myList=[]; 
    let myList = JSON.parse(localStorage.getItem("myList", "[]"));
//}
   // myList.push(item);
    localStorage.setItem("myList", JSON.stringify(myList));
  
  
}


  //diference in milliseconds
