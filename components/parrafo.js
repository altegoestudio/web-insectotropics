class Parrafo extends HTMLElement{
  connectedCallback(){

    this.innerHTML = `
      <div class="parrafo-wrap">
        <div class="parrafo">
          <p class="parrafo-text">
            El llenguatge d’Insectotròpics posa l’accent en el procés més enllà del resultat final. El seu treball col·lectiu i multidisciplinar construeix un segell propi i característic que identifica les seves creacions: un llenguatge radical, multimèdia, simbòlic i oníric. La companyia barreja en directe videoart, pintura, teatre, performance, música i altres disciplines, i mostra com ho fa, de manera que el públic rep l’espectacle i el procés a la vegada. Més enllà dels espectacles, Insectotròpics ha experimentat en formats audiovisuals, laboratoris o tallers, així com en l’organització gales o espais escènics de festivals.
          </p>
        </div>
      </div>
    `;

  }
}

customElements.define("parrafo-cmp", Parrafo);
