const metaSocials = () => {

    const socials = document.querySelector('.meta__socials')
    const talkToMe = document.querySelector('.meta-button')

    const toggleSocials = () => {
        socials.classList.toggle('meta__socials--visible')
    }

    talkToMe.addEventListener('click', toggleSocials)
 


}

metaSocials()