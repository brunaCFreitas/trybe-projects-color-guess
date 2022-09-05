const paragrafo = document.getElementById('rgb-color');
function generateRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const color = `(${red}, ${green}, ${blue})`;

  return color;
}

paragrafo.innerText = generateRandomColor();
