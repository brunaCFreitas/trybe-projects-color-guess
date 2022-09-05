const paragrafo = document.getElementById('rgb-color');
const paletteColors = document.getElementById('palette-colors');

function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const color = `(${red}, ${green}, ${blue})`;

  return color;
}

function createPaletteColors() {
  for (let index = 0; index < 6; index += 1) {
    const colorPalette = document.createElement('div');
    colorPalette.className = 'ball';
    const color = `rgb${generateRandomColor()}`;
    colorPalette.style.backgroundColor = color;
    paletteColors.appendChild(colorPalette);
    paragrafo.innerText = color;
  }
}

createPaletteColors();
