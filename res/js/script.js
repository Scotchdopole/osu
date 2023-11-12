
const point = document.getElementById("point");
const startButton = document.getElementById("startButton");
const score = document.getElementById("score");
const showTime = document.getElementById("showTime");
const timerContainer = document.getElementById("timerContainer");

let gameInterval;
let gameIntervalSpeed = 1000;7
let gameStart;


startButton.onclick = () => {
  startButton.style.display = "none";
  point.style.opacity = "100";
  timerContainer.style.opacity = "100";

  setPointOnclick(point);
  setGameInterval(point);
  gameStart = performance.now();
}

const moveElement = (element, x, y) => {
    element.style.top = y + "px";
    element.style.left = x + "px";
}


const setPointOnclick = (element) => {
    element.onclick = () => {
        let gameEnd = performance.now();
        let time = gameEnd - gameStart;
        Math.round(time);
        showTime.innerText = `Time: ${time}ms`
        gameStart = gameEnd;
        score.innerText++;
        if(gameIntervalSpeed > 400){
        gameIntervalSpeed -= 10;
        setGameInterval(element)
        }
        moveElement(element, randomNumber(0, window.innerWidth - 80), randomNumber(0, window.innerHeight - 80));
    }
}

const randomNumber = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;


const setGameInterval = (element) => {
  clearInterval(gameInterval);
  gameInterval = setInterval(() => {
    moveElement(element, randomNumber(0, window.innerWidth - 80), randomNumber(0, window.innerHeight - 80));
  },gameIntervalSpeed)   
}







  

