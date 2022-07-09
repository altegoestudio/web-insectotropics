class Agenda extends HTMLElement{
  connectedCallback(){

    this.innerHTML = `

      <div class="agenda" id="agenda">
        <div class="agenda_cont">

        <div class="global_cont_separador">
          <div class="global_cont_separador_box"></div>
        </div>

          <h3 class="agenda_cont_titulo">agenda</h3>

          <div class="global_cont_separador">
            <div class="global_cont_separador_box"></div>
          </div>

          <div class="agenda_cont_scroll">
            <ul>
                <li> <a href=""> <span>Orpheus</span> 20-21/07/2022 <br>
                        Grec Festival (Barcelona, ES). PREMIERE</a></li>
                <li> <a href=""> <span>Orpheus</span> 30/07/2022 <br>
                        Sommerwerft (Frankfurt, DE).</a></li>
                <li> <a href=""> <span>The legend of burning man</span> 10-12/08/2022 <br>
                        Sziget Festival (Budapest, HU)</a></li>
                <li> <a href=""> <span>Orpheus</span> 8-11/09/2022 <br>
                        FiraTàrrega (Tàrrega, ES)</a></li>
                <li> <a href=""> <span>Orpheus</span> 24/09/2022 <br>
                        Bell Square Festival (London, UK)</a></li>

            </ul>
          </div>

          <div class="global_cont_separador">
            <div class="global_cont_separador_box"></div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("agenda-cmp", Agenda);
