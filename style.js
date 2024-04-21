const toggleBtn = document.getElementById('toggle')

const containerElement = document.getElementById('container')

const homeScreenLeftElement = document.getElementById('home-screen-left')

const homeScreenRightElement = document.getElementById('home-screen-right')


function DarkLightMode(){
    toggleBtn.classList.toggle('toggle--light')
    toggleBtn.classList.toggle('toggle--dark')

    containerElement.classList.toggle('--container--light')
    containerElement.classList.toggle('--container--dark')

    homeScreenLeftElement.classList.toggle('--container--light')
    homeScreenLeftElement.classList.toggle('--container--dark')

    homeScreenRightElement.classList.toggle('--container--light')
    homeScreenRightElement.classList.toggle('--container--dark')
}
