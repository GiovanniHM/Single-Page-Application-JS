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
            <div class="switch-box" id="switch-box">
        <i class="fas fa-sun"></i>
        <div class="switch" id="switch-btn"></div>
        <i class="fas fa-moon"></i>
    </div>
          </div>
        </div>
  `;
  return view;
};

export default Header;
