class Team extends HTMLElement{
  getTeam(){
    var list =[];

    team.forEach(function (value, index){
      list += `<div class="team">
        <div class="team-cont">
          <div class="team-cont_text">

            <div class="global_cont_separador">
              <div class="global_cont_separador_box"></div>
            </div>
            <h3>${value.name}</h3>
            <div class="global_cont_separador">
              <div class="global_cont_separador_box"></div>
            </div>
              <p>
                ${value.text}
              </p>
              <div class="global_cont_separador">
                <div class="global_cont_separador_box"></div>
              </div>
          </div>

        </div>
        <div class="team-cont_img" style="background-image: url(${value.img});">
          
        </div>
      </div>
      `
    })
    return list
  }
  connectedCallback(){

    this.innerHTML = `
      ${this.getTeam()}
    `;

  }
}

customElements.define("team-cmp", Team);
