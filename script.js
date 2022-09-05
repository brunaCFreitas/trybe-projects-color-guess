const paragrafo = document.getElementById('rgb-color');
const paletteColors = document.getElementById('palette-colors');
const answer = document.getElementById('answer');
const buttonRestart = document.getElementById('reset-game');

function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}

function checkColors(event) {
  if (event.target.style.backgroundColor === paragrafo.innerText) {
    answer.innerText = 'Acertou!';
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}

function createPaletteColors() {
  const collors = [];
  for (let index = 0; index < 6; index += 1) {
    const colorPalette = document.createElement('div');
    colorPalette.className = 'ball';
    const color = generateRandomColor();
    colorPalette.style.backgroundColor = color;
    paletteColors.addEventListener('click', checkColors);
    collors[index] = color;
    paletteColors.appendChild(colorPalette);
    paragrafo.innerText = color;
  }
  collors.sort();
  paragrafo.innerText = collors[2];
}

createPaletteColors();

buttonRestart.addEventListener('click', () => {
  location.reload();
});
