const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const startBtnLink = document.querySelector('[data-action="start"]');
const stoptBtnLink = document.querySelector('[data-action="stop"]');
const bodyLink = document.querySelector('body');
let runActionId = null;

startBtnLink.addEventListener('click', randomChangeBodyColor);
stoptBtnLink.addEventListener('click', stopChangeBodyColor);

function randomChangeBodyColor(e) {
  bodyLink.setAttribute('style', 'background');
  startBtnLink.disabled = true;

  runActionId = setInterval(() => {
    const randomIntegerFromInterval = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    let randNum = randomIntegerFromInterval(0, colors.length);
    bodyLink.style.background = `${colors[randNum]}`;
    startBtnLink.backgroundColor = `${colors[randNum]}`;
  }, 1000);
}
function stopChangeBodyColor() {
  clearInterval(runActionId);
  startBtnLink.disabled = false;
}
