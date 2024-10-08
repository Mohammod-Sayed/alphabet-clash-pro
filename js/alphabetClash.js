function continueGame(){
    const alphabet = getRendomAlphabet()
    const currentAlphabet = document.getElementById('current_alphabet')
    currentAlphabet.innerText = alphabet
}

function play(){
    hideElementByID('home_section')
    showElementByID('play_ground')
    continueGame()
}