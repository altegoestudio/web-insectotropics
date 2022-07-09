class Separadortitulo extends HTMLElement{
  connectedCallback(){

    this.innerHTML = `
      <div class="separadorTitulo-wrap" style="background-image: url('${this.getAttribute("img")}')">

        <h2 class="separadorTitulo-h2">${this.getAttribute("text")}</h2>
        <div class="separadorTitulo">

        </div>
      </div>
    `;

  }
}

customElements.define("separador-titulo-cmp", Separadortitulo);
