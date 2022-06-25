const btnMenu = document.getElementById('menu-header')
const menuCascata = document.getElementById('menu-cascata')
const backGroundCloseMenu = document.getElementById(
  'background-que-fecha-o-menu'
)

function abrirMenu() {
  menuCascata.classList.add('active-menu')
  backGroundCloseMenu.classList.add('fechar-menu-cascata')
}

function fecharMenu() {
  menuCascata.classList.remove('active-menu')
  backGroundCloseMenu.classList.remove('fechar-menu-cascata')
}

backGroundCloseMenu.addEventListener('click', fecharMenu)
btnMenu.addEventListener('click', abrirMenu)
