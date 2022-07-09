class HeroImg2 extends HTMLElement{
  connectedCallback(){

    this.innerHTML = `
      <div class="heroImg">
        <img src="./assets/images/boca.png">
      </div>
    `;

  }
}

customElements.define("heroimg2-cmp", HeroImg2);
