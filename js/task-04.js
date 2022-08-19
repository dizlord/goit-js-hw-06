const refs = {
  incrementBtn: document.querySelector('[data-action="increment"]'),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  valueEl: document.querySelector('#value'),
};

let counterValue = 0;

const incrementValue = () => {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
};

const decrementValue = () => {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
};

refs.incrementBtn.addEventListener('click', incrementValue);
refs.decrementBtn.addEventListener('click', decrementValue);
