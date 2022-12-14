const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });
  let randomSquarePosition = squares[Math.floor(Math.random() * 9)];
  randomSquarePosition.classList.add("mole");
  hitPosition = randomSquarePosition.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.textContent = result;
      hitPosition = null;
    }
  });
});
function moveModal() {
  timerId = setInterval(randomSquare, 1000);
}
moveModal();

// Count Down
function countdown() {
  currentTime--;
  timeLeft.innerHTML = currentTime;

  if (currentTime == 0) {
    clearInterval(countdownTimer);
    clearInterval(timerId);
    alert(`GAME OVER! Your final result is ${result}`);
  }
}
let countdownTimer = setInterval(countdown, 1000);
