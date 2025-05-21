// Seleciona elementos
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const backdrop = document.querySelector('.backdrop');

// Função para abrir/fechar menu
function toggleMenu() {
  nav.classList.toggle('active');
  backdrop.classList.toggle('active');
}

// Evento no clique do botão hamburguer
menuToggle.addEventListener('click', toggleMenu);

// Fecha o menu se clicar no backdrop (fundo escuro)
backdrop.addEventListener('click', toggleMenu);




