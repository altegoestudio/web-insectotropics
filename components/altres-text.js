class Altrestext extends HTMLElement{
  getGalery =(a)=>{
    var b;
    var galery1 = [
      "./assets/images/05.jpg",
      "./assets/images/05.jpg",
      "./assets/images/05.jpg"
    ]

    switch (a) {
      case "gallery1":
          b = gallery1
        break;
      case "gallery2":
          b = gallery2
        break;
      case "gallery3":
          b = gallery3
        break;
      case "gallery4":
          b = gallery4
        break;
      case "gallery5":
          b = gallery5
        break;
      case "gallery6":
          b = gallery6
        break;
      default:

    }


    var list = [];

    for (var i = 0; i < b.length; i++) {

      var template = `<div class="altrestext-galery-img">
                        <img src='${b[i]}'/>
                      </div>`

      list.push(template);
    }

    return list
  }
  connectedCallback(){

    this.innerHTML = `
      <div class="altrestext" >
        <div class="altrestext-text">
          ${this.getAttribute("text")}
        </div>
        <div class="altrestext-galery">
          <div class="altrestext-galery-box">
              ${this.getGalery( this.getAttribute("src")  )}
          </div>
        </div>
      </div>
    `;

  }
}

customElements.define("altrestext-cmp", Altrestext);
