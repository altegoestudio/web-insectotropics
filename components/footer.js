class Footer extends HTMLElement{
  connectedCallback(){

    this.innerHTML = `
      <div class="footer">
        <div>
          <img src="./assets/images/logos-footer.png"/>
        </div>
      </div>
    `;

  }
}

customElements.define("footer-cmp", Footer);
