const siteMenu = () => {

    // Get elements from DOM
    const menuButton = document.querySelector('.menu-button')
    

    // Toggle menu
    const toggleMenu = () => {
        menuButton.classList.toggle('menu-button--close')
    }

    // Create event
    menuButton.addEventListener('click', toggleMenu)



}

siteMenu()