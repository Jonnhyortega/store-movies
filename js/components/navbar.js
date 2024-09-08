function navbar() {
  return `
    <nav class="navbar">
  <div class="navbar-container">
    <a href="#" class="brand">
      <i class="fa-solid fa-couch"></i> GM
    </a>
    <ul class="nav-links" id="nav-links">
      <li><a href="#" class="nav-link">Inicio</a></li>
      <li><a href="#movies" class="nav-link">Principales</a></li>
      <li><a href="#hero" class="nav-link">Recomendadas</a></li>
      <li><a href="#contact" class="nav-link">Contacto</a></li>
    </ul>
  </div>
  
  
  <div id="cart-icon-container">
    <a href="#" id="cart" class="nav-link cart">
      <i class="fa-solid fa-cart-shopping"></i>
      <span id="number-products"></span>
    </a>
  </div>

  <div id="menu_mobile">
    <ul id="nav-links-mobile">
      <li><a href="#" class="nav-link">Inicio</a></li>
      <li><a href="#movies" class="nav-link">Principales</a></li>
      <li><a href="#hero" class="nav-link">Recomendadas</a></li>
      <li><a href="#contact" class="nav-link">Contacto</a></li>
    </ul>
  </div>

  <div id="dropdown-cart" class=""></div>
  <div class="menu-toggle" id="menu-toggle">
    <i id="menu-toggle" class="fa-solid fa-bars"></i>
  </div>
</nav>
    `;
}
