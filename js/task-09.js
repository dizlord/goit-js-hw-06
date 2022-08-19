const refs = {
  bodyEl: document.querySelector('body'),
  changeColorBtn: document.querySelector('.change-color'),
  colorSpan: document.querySelector('.color'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

refs.changeColorBtn.addEventListener('click', onChangeColor);

function onChangeColor() {
  const newColor = getRandomHexColor();
  refs.bodyEl.style.backgroundColor = newColor;
  refs.colorSpan.textContent = newColor;
}
