let refreshMe = document.querySelector("h1")
let playerOne = document.querySelector(".img1")
let playerTwo = document.querySelector(".img2")




function randomDice1() {
    let randomNumber = Math.floor((Math.random() * 6) + 1)
    
    if (randomNumber === 1) {
        playerOne.setAttribute("src", "./images/dice1.png")
    } else if (randomNumber === 2) {
        playerOne.setAttribute("src", "./images/dice2.png")
    } else if (randomNumber === 3) {
        playerOne.setAttribute("src", "./images/dice3.png")
    } else if (randomNumber === 4) {
        playerOne.setAttribute("src", "./images/dice4.png")
    } else if (randomNumber === 5) {
        playerOne.setAttribute("src", "./images/dice5.png")
    } else if (randomNumber === 6) {
        playerOne.setAttribute("src", "./images/dice6.png")
    }

    return randomNumber
}


function randomDice2() {
    let randomNumber = Math.floor((Math.random() * 6) + 1)
    if (randomNumber === 1) {
        playerTwo.setAttribute("src", "./images/dice1.png")
    } else if (randomNumber === 2) {
        playerTwo.setAttribute("src", "./images/dice2.png")
    } else if (randomNumber === 3) {
        playerTwo.setAttribute("src", "./images/dice3.png")
    } else if (randomNumber === 4) {
        playerTwo.setAttribute("src", "./images/dice4.png")
    } else if (randomNumber === 5) {
        playerTwo.setAttribute("src", "./images/dice5.png")
    } else if (randomNumber === 6) {
        playerTwo.setAttribute("src", "./images/dice6.png")
    }

    return randomNumber
}

function result() {
    let playerOneDice = randomDice1()
    let playerTwoDice = randomDice2()
    if (playerOneDice > playerTwoDice) {
    refreshMe.innerHTML = `Player one wins!`
    } else if (playerOneDice === playerTwoDice) {
    refreshMe.innerHTML = `Draw!`
    } else if (playerOneDice < playerTwoDice) {
    refreshMe.innerHTML = `Player two wins!`
    }
    console.log(playerOneDice)
    console.log(playerTwoDice)
    console.log(refreshMe)
}   


refreshMe.addEventListener("click", randomDice1)
refreshMe.addEventListener("click", randomDice2)
refreshMe.addEventListener("click", result)