export class Titulo {
  texto = "";

  constructor(texto) {
    this.texto = texto;
  }

  render() {
    let pTexto = document.createElement("div");
    pTexto.innerHTML = `<p>${this.texto}</p>`;
    return pTexto;
  }
}
