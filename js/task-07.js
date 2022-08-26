const refs = {
  inputFontSizeEl: document.querySelector('#font-size-control'),
  textEl: document.querySelector('#text'),
};

refs.textEl.style.fontSize = `${refs.inputFontSizeEl.value}px`;

refs.inputFontSizeEl.addEventListener('input', onChangeFontSize);

function onChangeFontSize(event) {
  refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
}
