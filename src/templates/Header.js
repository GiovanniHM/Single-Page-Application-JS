const Header = ()=>{
  const view = `
  <div class="Header-main">
          <div class="Header-logo">
              <a href="/Single-Page-Application-JS">
              <img alt="Logo" src='https://occ-0-1068-1723.1.nflxso.net/dnm/api/v6/TsSRXvDuraoJ7apdkH6tsHhf-ZQ/AAAABWvcCE9czzpucMfdp5zcd1DoEYp1kvKmqA9pFjGGS6fjz5NbyXAtOpsgI-r52MIjv_HmyR6FP_YoMpgdilhG4bAqL7UazR0NdLn-.png?r=a6e'
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
