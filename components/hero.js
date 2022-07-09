class Hero extends HTMLElement{
  autoplay(){
    console.log("auto");
    var videportada = document.getElementById('videoportada');
    console.log(videportada);
    videportada.play();
  }
  connectedCallback(){

    this.innerHTML = `
    <div class="Main_heroimage">
        <iframe
          id="videoportada"
          width="100%"
          height="900px"
          src="https://www.youtube.com/embed/qbGUmn3Ceqg?mute=1&autoplay=1&controls=0&modestbranding=1&rel=0"
          title="Insectotropic"
          frameborder="0"
          allow="autoplay"
          allowfullscreen
        ></iframe>
    </div>
    `;
    this.autoplay();
  }

}

customElements.define("hero-cmp", Hero);
