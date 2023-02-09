
let isPlaying = true;
let totalScore = 0;

const highScore = localStorage.getItem('highScore') || 0;

const sleep = (ms = 3000) => new Promise((r) => setTimeout(r, ms));

const wrapper = document.getElementsByClassName("wrapper")[0];

const h2 = document.createElement('h2');
h2.innerHTML = `High score: ${highScore}`;
wrapper.appendChild(h2);

const h1 = document.createElement('h1');
h1.innerHTML = `Current score: ${totalScore}`;
wrapper.appendChild(h1);

const button = document.createElement('button');
button.innerHTML = "dont click me";
wrapper.appendChild(button);

const mouseOver = button.addEventListener("mouseover", () => {
  if (!isPlaying) return;
  button.innerHTML = "seriously - dont click me";
});

const mouseOut = button.addEventListener("mouseout", async () => {
  if (!isPlaying) return;
  button.innerHTML = 'dont click me';
});

button.addEventListener('click', () => {
  if (!isPlaying) location.reload();
  isPlaying = false;
  button.innerHTML = 'you lost dumbass - click to restart';
})

const game = setInterval(setScore, 1000);

function setScore() {
  if (isPlaying) {
    ++totalScore;
    h1.innerHTML = `Current score: ${totalScore}`;
    return;
  }

  if (highScore < totalScore)
    localStorage.setItem('highScore', totalScore);

  clearInterval(game);
}
