
const menuIcon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');

function toggleMenu() {
    menuList.classList.toggle("hidden");
}

// Event listener untuk menu icon
menuIcon.addEventListener("click", toggleMenu);

const btnAbout = document.getElementById("btn-nav-about");
btnOrgisme.addEventListener("click", toggleMenu);

// Event listener untuk tombol Home
const btnHome = document.getElementById("btn-nav-home");
btnHome.addEventListener("click", toggleMenu);

// Event listener untuk tombol Bidang
const btnLayanan = document.getElementById("btn-nav-layanan");
btnBidang.addEventListener("click", toggleMenu);

const btnKontak = document.getElementById("btn-nav-kontak");
btnBidang.addEventListener("click", toggleMenu);

