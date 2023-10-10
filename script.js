import { Titulo } from "./utils.js";

const textos = ["Texto número 1", "Texto número 2", "Texto número 3"];
let textosObj = [];

textos.map((texto) => {
  let newTexto = new Titulo(texto);
  textosObj.push(newTexto);
});

let textoDiv = document.getElementById("textoDiv");

for (let i = 0; i < textosObj.length; i++) {
  textoDiv.appendChild(textosObj[i].render());
}
