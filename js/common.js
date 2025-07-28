document.addEventListener("DOMContentLoaded", () => {
  const header = `
  <header class="main-header">
    <div class="container header-inner">
      <img src="img/logoFull.png" alt="Logo firmy EMIL" class="logo" />
      <button class="menu-toggle" aria-label="Otwórz menu">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <nav class="nav">
        <ul>
          <li><a href="index.html">Strona główna</a></li>
          <li><a href="about.html">O nas</a></li>
          <li class="dropdown">
            <div class="dropdown-toggle">
              <a href="produkty.html">Produkty</a>
              <button class="dropdown-arrow" aria-label="Rozwiń menu"></button>
            </div>
            <ul class="dropdown-menu">
              <li><a href="drzwi.html">Drzwi</a></li>
              <li><a href="okna.html">Okna</a></li>
              <li><a href="ogrody-zimowe.html">Ogrody zimowe</a></li>
              <li><a href="membrana-epdm.html">Membrana EPDM</a></li>
              <li><a href="podlogi.html">Podłogi</a></li>
            </ul>
          </li>
          <li><a href="certyfikaty.html">Pliki</a></li>
          <li><a href="kontakt.html">Kontakt</a></li>
        </ul>
      </nav>
    </div>
  </header>
  `;

  const currentYear = new Date().getFullYear();

  const footer = `
    <footer class="main-footer">
      <div class="container">
        <p>&copy; ${currentYear} EMIL – Wszystkie prawa zastrzeżone</p>
      </div>
    </footer>
  `;

  const headerContainer = document.getElementById("site-header");
  const footerContainer = document.getElementById("site-footer");

  if (headerContainer) headerContainer.innerHTML = header;
  if (footerContainer) footerContainer.innerHTML = footer;

  // Активуємо логіку меню
  const toggleButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (toggleButton && nav) {
    toggleButton.addEventListener("click", () => {
      nav.classList.toggle("active");
    });
  }

  // Dropdown-стрілка для мобільних
  const dropdownArrow = document.querySelector(".dropdown-arrow");
  const dropdownItem = document.querySelector(".nav li.dropdown");

  if (dropdownArrow && dropdownItem) {
    dropdownArrow.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropdownItem.classList.toggle("open");
    });
  }
});
