const hamburgerMenu = document.querySelector('.hamburger-menu')
const closeMenu = document.querySelector('.close-icon')
const mobileNavigation = document.querySelector('.mobile-navigation-container')
const overlay = document.querySelector('.overlay')

hamburgerMenu.addEventListener('click', () => {
    mobileNavigation.style.display = 'block'
    overlay.style.display = 'block'
})

closeMenu.addEventListener('click', () => {
    mobileNavigation.style.display = 'none'
    overlay.style.display = 'none'
})