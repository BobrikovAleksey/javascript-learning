const state = {
  counter: 0,
};

const counter = document.querySelector('#counter');
const asyncBtn = document.querySelector('#async');
const decBtn = document.querySelector('#dec');
const incBtn = document.querySelector('#inc');

const change = (num) => {
  state.counter += num;
  render();
};

const render = () => {
  counter.textContent = state.counter;
};

asyncBtn.addEventListener('click', () => {
  setTimeout(() => { change(1) }, 1000);
});

decBtn.addEventListener('click', () => { change(-1) });

incBtn.addEventListener('click', () => { change(1) });

render();
