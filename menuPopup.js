const menuPopup = () => {

    const menuButton = document.querySelector('.menu-button')
    const popup = document.querySelector('.site-header__popup')

    const togglePopup = () => {
        popup.classList.toggle('site-header__popup--visible')
    }

    menuButton.addEventListener('click', togglePopup)

}

menuPopup()