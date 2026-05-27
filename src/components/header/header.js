const btnMobile = document.getElementById('btn-mobile');
const menuOpcoes = document.getElementById('menu-opcoes');
const navLogo = document.querySelector('nav.logo');

function toggleMenu () {
    const isOpen = menuOpcoes.classList.toggle('active');

    navLogo?.classList.toggle('menu-open', isOpen);
    btnMobile.setAttribute('aria-expanded', isOpen);
}

if (btnMobile && menuOpcoes) {
    btnMobile.addEventListener('click', toggleMenu);
}
