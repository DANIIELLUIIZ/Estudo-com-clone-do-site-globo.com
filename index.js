const btnMenu = document.querySelector('#menu-header')

function abrirMenuCascata() {
  const menuCascata = document.querySelector('#menu-cascata')
  const bGMenuCascata = document.querySelector('#background-menu-cascata')

  menuCascata.classList.add('active-menu')
  bGMenuCascata.classList.add('menu-cascata-active')

  document.addEventListener('mousedown', event => {
    if (menuCascata.contains(event.target)) {
    } else {
      menuCascata.classList.remove('active-menu')
      bGMenuCascata.classList.remove('menu-cascata-active')
    }
  })
}

btnMenu.addEventListener('click', abrirMenuCascata)
