class Header extends HTMLElement{
  constructor(){
    super();
  }
  action(){
    var foo = document.getElementById('nav-btn');
    var icon = document.getElementById('nav-icon');
    var menu = document.getElementById('menu');
    var isActive = false;


    foo.addEventListener("click", onOff);
    function onOff(){
      if(!isActive){
        isActive = true;
        menu.style.display = "block";
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-close");
      }else{
        isActive = false;
        menu.style.display = "none";
        icon.classList.remove("fa-close");
        icon.classList.add("fa-bars");
      }

    }
  }
  getMenu(){
    var list = [];
    var menu = [];
    var emp = "";

    obras.forEach(function(value, index){
      menu += `
        <li class="item-espectacles"><a href=${value.href}>${value.text}</a></li>
      `
    });

    header.menu.forEach(function(value, index){
      list += `
        <li> <a href=${value.href}>${value.text}</a></li>
          <ul class="nav__items--espectacles">
            ${value.sub?menu:emp}
          </ul>
      `
    });

    return list
  }
  connectedCallback(){

    this.innerHTML = `
    <div class="nav-bg">
      <header>

          <div class="nav">
              <div class="nav__logo">
                  <a href="/"><img src="./assets/images/logo-new.png" alt="nav__logo"></a>
              </div>

              <div class="nav_p">
                  <div class="nav__menubar" id="nav-btn">
                    <i class="fa-solid fa-bars nav_hover" id="nav-icon"></i>
                  </div>
                  <a href="https://www.instagram.com/insectotropics">
                    <img class="nav_icon" src="./assets/images/instagram.png" />
                  </a>
              </div>

          </div>

          <div class="nav__items" >
              <ul class="nav__items--list" id="menu">
                  ${this.getMenu()}
              </ul>
          </div>
      </header>
    </div>
    `;
    this.action();
  }
}

customElements.define("header-component", Header);
