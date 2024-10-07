let gameSeq = []
let userSeq = []
let colors = ["blue", "green", "yellow", "orange"]

let started = false
let level = 0

let h2 = document.querySelector("h2")
let btn = document.querySelector("button")

document.addEventListener("keypress", () => {

    if (started == false) {
        console.log("Game started!")
    }

    started = true

    levelUp()
    
})

function levelUp() {
    userSeq = []
    level++
    h2.innerText = `level: ${level}`

    let randomIndex = Math.floor(Math.random() * 4)
    let randomColor = colors[randomIndex]
    let whichButton = document.querySelector(`.${randomColor}`)
    gameSeq.push(randomColor)
    console.log(gameSeq)
    buttonFlash(whichButton)
}

function buttonFlash(btn) {
    btn.classList.add("flash")

    setTimeout(() => {
        btn.classList.remove("flash")
    }, 300);
}

function userFlash(btn) {
    btn.classList.add("user-flash")

    setTimeout(() => {
        btn.classList.remove("user-flash")
    }, 300);
}

function buttonPress() {
    let btn = this
    userFlash(btn)

    let userColor = btn.getAttribute("id")
    console.log(userColor)
    userSeq.push(userColor)
    checkAns(userSeq.length - 1)
}

let buttons = document.querySelectorAll(".btn")

for (b of buttons) {
    b.addEventListener("click", buttonPress)
}

function checkAns(idx) {
    if(userSeq[idx] === gameSeq[idx]) {
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000)
        }
    }

    else {
        h2.innerText = `Game over! Your level was ${level}, refresh this page to play again`
        reset()
    }
}

function reset() {
    started = false
    userSeq = []
    gameSeq = []
    level = 0
}