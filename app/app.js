const $ = document

const logo = $.querySelector('.logo-container')
const logoShineSvg = $.querySelector('.logo-shine')
const logoText = $.querySelector('.logo-text')
const loadingContainer = $.querySelector('.loading-container')
const loadingBarText = $.querySelector('.loading-text')
const gameText = $.querySelector('.game-text')
const progressBarContainer = $.querySelector('.progress-bar-container')
const range = $.querySelector('.range')
const main = $.querySelector('.main')

main.style.display = 'none'

loadingContainer.style.display  = 'none'
logoText.style.display = 'none'
gameText.style.display = 'none'
progressBarContainer.style.display = 'none'

logoShineSvg.addEventListener('animationend', (e) => {
    e.target.style.display = 'none'
    logoText.style.display = 'inline-block'
})
logoText.addEventListener('animationend', e => {
    logo.style.display = 'none'
    loadingContainer.style.display  = 'block'
})
loadingContainer.addEventListener('animationend', () => {
    gameText.style.display = 'inline-block'
    progressBarContainer.style.display = 'inline-block'
})
range.addEventListener('animationstart', () => {
let n = 1
let loadingText = setInterval(() => {
    loadingBarText.innerHTML = n + '%'

    if (n < 100){
        n++
    }else{
        clearInterval(loadingText)
    }
},60)
})
range.addEventListener('animationend', () => {
    loadingContainer.style.display = 'none'
    main.style.display = 'block'
})



// localStorageHandler(item)
// https://dynamite-8c5de-default-rtdb.firebaseio.com/
