class Description extends HTMLElement{
  connectedCallback(){

    this.innerHTML = `
      <div class="description">
        <div class="description-cont">
          <div class="global_cont_separador">
            <div class="global_cont_separador_box"></div>
          </div>
          <p><span>Insectotròpics</span> és una companyia d’arts escèniques i visuals nascuda a Barcelona l’any 2011 que aposta per la hibridació de llenguatges i els espectacles multidisciplinaris. Formada per Laia Ribas, iEX, Xanu i Maria Thorson, la companyia compta en cada producció amb artistes que se sumen a la família insectotròpica, creant així propostes col·lectives que amalgamen diverses dimensions i mirades.</p>
          <div class="global_cont_separador">
            <div class="global_cont_separador_box"></div>
          </div>
        </div>
      </div>
    `;

  }
}

customElements.define("description-cmp", Description);
