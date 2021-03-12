import './styles.css';


const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const buttonStartRef = document.querySelector('button[data-action="start"]');
const buttonStopRef = document.querySelector('button[data-action="stop"]');
const bodyRef = document.body;

let isActive = false;
let randomColorId = null;


const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


buttonStartRef.addEventListener('click', () => {
  if (isActive) {
    return;
  }
  isActive = true;
  randomColorId = setInterval(changesColorElement, 1000)
})


buttonStopRef.addEventListener('click', () => {
  clearInterval(randomColorId);
  isActive = false;
})

function changesColorElement() {
  let randomIndex = randomIntegerFromInterval(0,colors.length - 1);
  bodyRef.style.backgroundColor = colors[randomIndex];
}