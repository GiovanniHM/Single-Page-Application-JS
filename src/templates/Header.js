const Header = ()=>{
  const view = `
  <div class="Header-main">
          <div class="Header-logo">
            <h1>
              <a href="/Single-Page-Application-JS">100tifi.com</a>
            </h1>
            
          </div>
            <div class="Header-nav">
            <a href="#/about/"> About</a>
            <label class="switch">
            <input type="checkbox" id="switch" onclick="terminos_cambio(this)">
            <span class="slider round"></span>
            </label>
            
          </div>

          

        </div>
  `;
  return view;
};

export default Header;
