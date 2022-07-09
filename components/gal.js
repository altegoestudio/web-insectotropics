class Gal extends HTMLElement{
  getOtras(){
    var listo = [];

    misc.forEach(function (value, index){
      listo += `<div class="gal"><div class="gal-cont">
      <div class="gal-cont-bloq">
        <div class="gal-cont-bloq_text">
            <h3>${value.title}</h3>
            <p>${value.text}</p>
        </div>
        <div class="gal-cont-bloq_vid">
            <iframe
              width="100%"
              height="200px"
              src="${value.src}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
        </div>
        </div>
      </div></div>
      `
    });
    return listo
  }
  connectedCallback(){

    this.innerHTML = `


          ${this.getOtras()}




    `;

  }
}

customElements.define("gal-cmp", Gal);
