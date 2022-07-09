class Mapa extends HTMLElement{
  connectedCallback(){

    this.innerHTML = `
      <div class="mapa">
        <div class='mapa-otros'>
          <div class='otros_cont'>
            <div class="global_cont_separador">
              <div class="global_cont_separador_box"></div>
            </div>
            <h3>Altres membres de l’equip </h3>
            <div class="global_cont_separador">
              <div class="global_cont_separador_box"></div>
            </div>
            <p>
              <span>Cofundadors</span> Vicenç Viaplana i Tullis Rennie<br/>
              <span>Distribució</span> Mateu Pascual i Pau Estrem<br/>
              <span>Col·laboradors habituals</span> André Cruz, Jan Barceló, Mar Nicolás, Marta Lofi, Danio Catanuto, Tito Carlos, Aleix Ramisa,  Matias Fabbro, Padi Padilla, David Climent, Eric Sánchez.
            </p>
            <div class="global_cont_separador">
              <div class="global_cont_separador_box"></div>
            </div>
          </div>
        </div>
        <div class='mapa-mapa'>
          <div class='mapa_cont'>
            <div class="global_cont_separador">
              <div class="global_cont_separador_box"></div>
            </div>
            <h3>Insectotròpics al món</h3>
            <div class="global_cont_separador">
              <div class="global_cont_separador_box"></div>
            </div>
            <p>
              Insectotròpics ha actuat a més de 20 països, inaugurant i col·laborant amb festivals i entitats de tot el món.
              Han presentat els seus espectacles a <span>Taiwan, Mèxic, Colòmbia, Corea del Sud, Brasil, Estònia, Eslovàquia, Hongria, Finlàndia, Montenegro, República Txeca, França, Regne Unit, Alemanya, Dinamarca, Noruega, Suècia, Països Baixos, Itàlia, Suïssa, Eslovènia i Espanya.</span>
            </p>
          </div>
        </div>

      </div>
    `;

  }
}

customElements.define("mapa-cmp", Mapa);
