const refs = {
  inputName: document.querySelector('#name-input'),
  spanOutput: document.querySelector('#name-output'),
};

refs.inputName.addEventListener('input', inputChange);

function inputChange(event) {
  refs.spanOutput.textContent = event.currentTarget.value;
  if (event.currentTarget.value === '') {
    refs.spanOutput.textContent = 'Anonymous';
  }
}
