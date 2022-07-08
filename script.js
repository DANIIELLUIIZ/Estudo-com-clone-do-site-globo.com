const btnMenu = document.querySelector('#menu-header')
const btnSearch = document.querySelector('#search-header')

function abrirMenuCascata() {
  let menuCascata = document.querySelector('#menu-cascata')
  let bGMenuCascata = document.querySelector('#background-menu-cascata')

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

function abrirSearch() {
  let search = document.querySelector('#search-expanded')
  let searchBox = document.querySelector('#search-header')
  let account = document.querySelector('#account-header')
  let closeSearchBtn = document.querySelector('#close-search')

  search.classList.add('active-search')
  account.classList.add('display-none')
  searchBox.classList.add('display-none')
  closeSearchBtn.classList.add('close-search-button')

  document.addEventListener('mousedown', event => {
    if (search.contains(event.target)) {
    } else {
      search.classList.remove('active-search')
      account.classList.remove('display-none')
      searchBox.classList.remove('display-none')
      closeSearchBtn.classList.remove('close-search-button')
    }
  })
}

btnMenu.addEventListener('click', abrirMenuCascata)
btnSearch.addEventListener('click', abrirSearch)
