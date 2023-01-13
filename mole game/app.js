const score = document.querySelector('h1')
const remainingTime = document.querySelector('p')
const tiles = document.querySelectorAll('.tile')
const mole = document.querySelector('.mole')


const easy = document.querySelector('.easy')
const hard = document.querySelector('.hard')
const insane = document.querySelector('.insane')


let result = 0
let timer = 0

easy.addEventListener('click', () => {
    timer = 5
    result = 0
    score.innerText = `Score: ${result}`
    remainingTime.innerText = timer
    function moleMove() {
        for (let tile of tiles) {
            tile.classList.remove('mole')
        }
        const rand = Math.floor(Math.random() * 9)
        tiles[rand].classList.add('mole')

    }


    for (let tile of tiles) {
        tile.addEventListener('click', () => {
            if (tile.classList.contains('mole')) {
                result++
                score.innerText = `Score: ${result}`
            }
        })
    }



    function countDown() {
        if (timer > 0) {
            timer--
            remainingTime.innerText = timer
        }
        else {

            clearInterval(game)
            clearInterval(timerInterval)
            for (let tile of tiles) {
                tile.classList.remove('mole')

            }
            for (let tile of tiles) {
                tile.removeEventListener('click')
            }

        }
    }
    const game = setInterval(moleMove, 1000)
    const timerInterval = setInterval(countDown, 1000)

})
hard.addEventListener('click', () => {
    timer = 15
    result = 0
    score.innerText = `Score: ${result}`
    remainingTime.innerText = timer
    function moleMove() {
        for (let tile of tiles) {
            tile.classList.remove('mole')
        }
        const rand = Math.floor(Math.random() * 9)
        tiles[rand].classList.add('mole')
    }



    for (let tile of tiles) {
        tile.addEventListener('click', () => {
            if (tile.classList.contains('mole')) {
                result++
                score.innerText = `Score: ${result}`
            }
        })
    }



    function countDown() {
        if (timer > 0) {
            timer--
            remainingTime.innerText = timer
        }
        else {
            clearInterval(game)
            clearInterval(timerInterval)
            for (let tile of tiles) {
                tile.classList.remove('mole')
            }
        }
    }
    const game = setInterval(moleMove, 800)
    const timerInterval = setInterval(countDown, 1000)

})
insane.addEventListener('click', () => {
    timer = 10
    result = 0
    score.innerText = `Score: ${result}`
    remainingTime.innerText = timer
    function moleMove() {
        for (let tile of tiles) {
            tile.classList.remove('mole')
        }
        const rand = Math.floor(Math.random() * 9)
        tiles[rand].classList.add('mole')
    }



    for (let tile of tiles) {
        tile.addEventListener('click', () => {
            if (tile.classList.contains('mole')) {
                result++
                score.innerText = `Score: ${result}`
            }
        })
    }



    function countDown() {
        if (timer > 0) {
            timer--
            remainingTime.innerText = timer
        }
        else {
            clearInterval(game)
            clearInterval(timerInterval)
            for (let tile of tiles) {
                tile.classList.remove('mole')
            }
        }
    }
    const game = setInterval(moleMove, 500)
    const timerInterval = setInterval(countDown, 1000)

})

