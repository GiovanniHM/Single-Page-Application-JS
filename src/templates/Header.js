const Header = ()=>{
  const view = `
  <div class="Header-main">
          <div class="Header-logo">
              <a href="/Single-Page-Application-JS">
              <img alt="Logo" src='../src/img/logo.png'
               width=150" height="70">
              </a>          
          </div>
            <div class="Header-nav">
            <a href="#/about/"> About</a>
            <label class="switch">
            <input type="checkbox" id="switch" onclick="terminos_cambio(this)">
            <span class="slider round"></span>
            </label>
            
          </div>

          

        </div>
  `
  function terminos_cambio(checkbox){

    document.body.classList.toggle('dark');
// Guardamos el modo en localstorage.
    if(document.body.classList.contains('dark')){
      localStorage.setItem('dark-mode', 'true');
    } else {
      localStorage.setItem('dark-mode', 'false');
    }


  }
  ;
  return view;
};

export default Header;
