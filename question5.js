// 5 (2p) Skriv klart funktionen setColor, som uppdaterar text-färgen i ett element.
// setColor tar in ett DOM-element och en färg-kod,
// setColor ska uppdatera elementets color-style med färgkoden.
const element = document.querySelector("#my-element");

function setColor(element, color) {
  element.style.color = color
}

setColor(element, "#ff0000");
