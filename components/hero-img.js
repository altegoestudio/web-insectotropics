class HeroImg extends HTMLElement{
  connectedCallback(){

    this.innerHTML = `
      <div class="heroImg">
        <img src=${this.getAttribute("img")}>
      </div>
    `;

  }
}

customElements.define("heroimg-cmp", HeroImg);
