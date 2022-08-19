const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', validationInput);

function validationInput(event) {
  if (Number.parseInt(inputEl.getAttribute('data-length')) === event.currentTarget.value.length) {
    inputEl.classList.remove('invalid');
    inputEl.classList.add('valid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
}
