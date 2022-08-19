function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('#controls').firstElementChild,
  createCollectionDivBtn: document.querySelector('button[data-create]'),
  destroyCollectionDivBtn: document.querySelector('button[data-destroy]'),
  boxEl: document.querySelector('#boxes'),
};

function createBoxes(amount) {
  let newDiv = '';
  let widthHeigth = 0;
  refs.boxEl.innerHTML = '';
  for (let i = 1; i <= amount; i += 1) {
    widthHeigth = i === 1 ? 30 : widthHeigth + 10;
    newDiv += `<div
                style="width: ${widthHeigth}px; height: ${widthHeigth}px;
                background-color: ${getRandomHexColor()};" >
               </div>`;
  }
  refs.boxEl.insertAdjacentHTML('beforeend', newDiv);
}

refs.createCollectionDivBtn.addEventListener('click', () => {
  createBoxes(refs.inputEl.value);
});

function onClickDestroy() {
  refs.boxEl.innerHTML = '';
  refs.inputEl.value = '';
}

refs.destroyCollectionDivBtn.addEventListener('click', onClickDestroy);
