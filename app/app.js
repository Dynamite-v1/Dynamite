const $ = document

let amethystSound = new Audio('./musics/amethyst.mp3')
let dynamiteSound = new Audio('./musics/Creeper_fuse.ogg')
const modal = $.querySelector('.modal-container')
const accessBtn = $.querySelector('.access-btn')
const rejectBtn = $.querySelector('.reject-btn')
const logo = $.querySelector('.logo-container')
const logoShineSvg = $.querySelector('.logo-shine')
const logoText = $.querySelector('.logo-text')
const loadingContainer = $.querySelector('.loading-container')
const loadingBarText = $.querySelector('.loading-text')
const gameText = $.querySelector('.game-text')
const gameLogo = $.querySelector('.game-logo')
const progressBarContainer = $.querySelector('.progress-bar-container')
const progressBar = $.querySelector('.progress-bar')
const range = $.querySelector('.range')
const main = $.querySelector('.main')

let soundEffectsFlag = false

main.style.display = 'none'

logo.style.display = 'none'
loadingContainer.style.display  = 'none'
gameText.style.display = 'none'
progressBarContainer.style.display = 'none'
gameLogo.style.display = 'none'

accessBtn.addEventListener('click', e => {
    $.body.style.backgroundColor = '#fff'
    modal.style.display = 'none'
    logo.style.display = 'inline-block'
    soundEffectsFlag = true
    soundEffectsFlag && amethystSound.play()
})
rejectBtn.addEventListener('click', e => {
    $.body.style.backgroundColor = '#fff'
    modal.style.display = 'none'
    logo.style.display = 'inline-block'
})

logoShineSvg.addEventListener('animationend', (e) => {
    e.target.style.display = 'none'
})
logoText.addEventListener('animationend', e => {
    logo.style.display = 'none'
    loadingContainer.style.display  = 'block'
})
loadingContainer.addEventListener('animationend', () => {
    gameText.style.display = 'inline-block'
    progressBarContainer.style.display = 'inline-block'
    gameLogo.style.display = 'inline-block'
   soundEffectsFlag &&  dynamiteSound.play()
})
progressBar.addEventListener('animationstart', () => {
let n = 1
let loadingText = setInterval(() => {
    loadingBarText.innerHTML = n + '%'

    if (n < 100){
        n++
    }else{
        loadingContainer.style.display = 'none'
        main.style.display = 'block'
        soundEffectsFlag && dynamiteSound.pause()
        clearInterval(loadingText)
    }
},60)
})



// localStorageHandler(item)
// https://dynamite-8c5de-default-rtdb.firebaseio.com/
