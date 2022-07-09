class Show extends HTMLElement{
  getShows(){
    var list =[];

    shows.forEach(function (value, index){
      list += `<div class="show">
          <div class="show_cont" id=${value.id}>
            <div class="global_cont_separador">
              <div class="global_cont_separador_box"></div>
            </div>
            <div class="show_header">
              <h3 class="show_title">${value.title}</h3> <i class="fa-solid fa-share-nodes"></i>
            </div>
            <div class="global_cont_separador">
              <div class="global_cont_separador_box"></div>
            </div>
            <div class="show_description">
                <p class="show_description_caja">
                  ${value.description}
                </p>
            </div>
            <div class="global_cont_separador">
              <div class="global_cont_separador_box"></div>
            </div>
            <div class="show_btn">
              <a  href="${value.url}" target="_blank"><button class="btn__material"><i class="fa-solid fa-circle-down"></i>Descarregar materials</button></a>
            </div>
            <div class='show_ficha'>
              <p>
                ${value.ficha}
             </p>
            </div>
            <div class="global_cont_separador">
              <div class="global_cont_separador_box"></div>
            </div>

        </div>
        <div class="show_video">
            <iframe
              width="100%"
              height="500px"
              src=${value.video},
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
        </div>
      `


    })



    return list
  }
  connectedCallback(){

    this.innerHTML = `

          ${this.getShows()}


    `;
  }
}

customElements.define("show-cmp", Show);
