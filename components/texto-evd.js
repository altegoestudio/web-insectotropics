class TextoEvd extends HTMLElement{
  connectedCallback(){

    this.innerHTML = `
      <div class="textoEvd">
        <div class="textoEvd-cont">
          <div class="global_cont_separador">
            <div class="global_cont_separador_box"></div>
          </div>
          <h3>Esdeveniments a mida</h3>
          <div class="global_cont_separador">
            <div class="global_cont_separador_box"></div>
          </div>
          <p>
            Insectotròpics també porta el seu univers en altres terrenys, com esdeveniments i ambientacions per a gales i actes per a corporacions, fundacions, entitats, etc. La companyia concep, desenvolupa i executa esdeveniments corporatius, culturals o esportius, grans i petits. Pot encarregar-se de continguts, materials, produccions, logística i/o tècnica. L’equip, integrat per professionals de diferents disciplines -creatius, artistes, gestors, productors, tècnics-, s’encarrega de realitzar qualsevol intervenció buscant solucions exclusives a tot tipus de reptes. Es treballa amb rigor cada part del procés, cuidant tots els detalls, per convertir un esdeveniment en un moment únic i memorable. La companyia ha ambientat i dirigit diversos esdeveniments, des de petites joies delicades i úniques a grans produccions, sempre oferint excel·lència, experiència i emoció. Ambientacions d’espais, espectacles inaugurals per a festivals, espectacles a mida per a gales i presentacions corporatives  o mappings formen part del recorregut d’Insectotròpics.
          </p>
          <div class="global_cont_separador">
            <div class="global_cont_separador_box"></div>
          </div>
        </div>
      </div>
    `;

  }
}

customElements.define("texto-evd-cmp", TextoEvd);
