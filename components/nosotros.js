class Nosotros extends HTMLElement{
  connectedCallback(){

    this.innerHTML = `
    <section  id="insectotropics" class="nosotros">
      <div class="nosotros_cont">
        <img src="../assets/images/insecto.svg" alt="" class="nosotros_cont_img">
        <div class="nosotros_cont_text">
          <p> <span>Insectotròpics és</span> una companyia d’arts escèniques i visuals nascuda a Barcelona l’any 2011 que
              aposta per la
              hibridació de llenguatges i els espectacles multidisciplinaris. Formada per Laia Ribas, iEX, Xanu i Maria
              Thorson, la companyia compta en cada producció amb artistes que se sumen a la família insectotròpica, creant
              així propostes col·lectives que amalgamen diverses dimensions i mirades. <br>
              <br>
              <span> Insectotròpics proposa</span> en els seus espectacles un viatge per les emocions més profundes i
              viscerals a través
              d’un llenguatge propi i experimental que combina el live painting, live cinema, la dramatúrgia o la música.
              La seva posada en escena mostra les entranyes del procés creatiu, de manera que el públic és espectador a la
              vegada del making of i del resultat final. Al llarg de més de 10 anys de trajectòria, Insectotròpics ha
              estrenat cinc espectacles que els han permès explorar i aprofundir el seu llenguatge i manera de fer, que no
              deixa d’evolucionar. La companyia ha viatjat a més de 20 països d’Europa, Amèrica Llatina i Àsia amb els
              seus muntatges. <br>
              <br>
              <span> Insectotròpics també porta el seu univers en altres terrenys, com esdeveniments i ambientacions per a
                  gales
                  i actes de tota mena per a corporacions, fundacions, entitats, etc.</span>
          </p>
        <div>
      </div>
    </section>
    `;
  }
}

customElements.define("nosotros-cmp", Nosotros);
