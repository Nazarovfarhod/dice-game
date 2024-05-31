//buttons

const btnRoll = document.querySelector(".btn-roll");
const btnNew = document.querySelector(".btn-new");
const btnHold = document.querySelector(".btn-hold");
const name0 = document.getElementById("name-0");
const name1 = document.getElementById("name-1");

//prompt
alert("1-O'yinchi ismingizni kiriting");
let promptName0 = prompt();
name0.textContent = promptName0.valueOf("");
alert("2-O'yinchi ismingizni kiriting");
let promptName1 = prompt();
name1.textContent = promptName1.valueOf("");

//Dice image
const diceImg = document.querySelector(".dice");

//varibles
let currentScore = 0;
let activePlayer = 0;
let score = [0, 0];
let gameOver = true;

const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`current-${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(".player-0").classList.toggle("player-active");
  document.querySelector(".player-1").classList.toggle("player-active");
};

diceImg.style.display = "none";

btnRoll.addEventListener("click", () => {
  if (gameOver) {
    diceImg.style.display = "block";

    const randomNum = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `./images/dice-${randomNum}.png`;

    if (randomNum !== 1) {
      currentScore += randomNum;
      document.getElementById(`current-${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// Holde btn

btnHold.addEventListener("click", () => {
  if (gameOver) {
    score[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      score[activePlayer];
    if (score[activePlayer] >= 100) {
      new Audio("./audio/win-sound.mp3").play();
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      gameOver == false;
    } else {
      switchPlayer();
    }
  }
});

//New Game

btnNew.addEventListener("click", () => {
  currentScore = 0;
  activePlayer = 0;
  score = [0, 0];
  gameOver = true;
  document.getElementById(`current-0`).textContent = currentScore;
  document.getElementById(`current-1`).textContent = currentScore;
  document.getElementById(`score-0`).textContent = 0;
  document.getElementById(`score-1`).textContent = 0;
  document.getElementById(`current-0`).textContent = 0;
  document.getElementById(`current-1`).textContent = 0;
  document.querySelector(`.player-0`).classList.remove("player-winner");
  document.querySelector(`.player-1`).classList.remove("player-winner");
  document.querySelector(`.player-0`).classList.add("player-active");
  document.querySelector(`.player-1`).classList.remove("player-active");
});
