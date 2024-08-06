let backgroundMusics = [
    new Audio('/music/background musics/background music (1).mp3'),
    new Audio('/music/background musics/background music (2).mp3'),
    new Audio('/music/background musics/background music (3).mp3'),
]
let soundEffects = [
    new Audio('../music/sound effects/click/click.mp3')
]

const $ = document
const ul = $.querySelector('ul')
const menuContainer = $.querySelector('.menu-container')

function liCreator  (liCount,texts,onClick) {
    ul.innerHTML = ''
    let i = 0
    for (i; i < liCount; i++) {
        let liElem = document.createElement('li');
        liElem.className = 'menu-btn'
        liElem.innerHTML = texts[i]
        onClick && liElem.addEventListener('click', onClick)
        onClick[0] && liElem.addEventListener('click', onClick[i])

        ul.appendChild(liElem)
    }
}

function start () {
    soundEffects[0].play()

    liCreator(3,['start','options','credits'],[story,option,credit])

    let i = 0
    let j = 0
    setInterval(() => {
        if (j == 0 || backgroundMusics[i].currentTime >= backgroundMusics[i].duration) {
            backgroundMusics[i].currentTime = 0
            i += 1
            if(i == 3) {i = 0}
            console.log(i)
            backgroundMusics[i].play()
            j++
        }
    },1000)

}

function story () {
    soundEffects[0].play()
    liCreator(3,['new game','load game','chapters'],[newGame,oldGame,Chapters])
}
function option () {
    soundEffects[0].play()

}
function credit () {
    soundEffects[0].play()

}

function newGame () {
    soundEffects[0].play()

}
function oldGame () {
    soundEffects[0].play()

}
function Chapters () {
    soundEffects[0].play()

}

liCreator(1,['tap to start'],start)
menuContainer.style.alignItems = 'center'
