function continueGame(){
    const alphabet = getRendomAlphabet()
    const currentAlphabet = document.getElementById('current_alphabet')
    currentAlphabet.innerText = alphabet
    setBackgroundColorByID(alphabet)
}
function play(){
    hideElementByID('home_section')
    showElementByID('play_ground')
    continueGame()
}

document.addEventListener('keyup', (event)=>{
    const playerPressed = event.key
    const currentAlphabet = document.getElementById('current_alphabet').innerText
    const lowerCaseAlphabet = currentAlphabet.toLowerCase()
    if(playerPressed === lowerCaseAlphabet){
        removeBackgroundColorByID(lowerCaseAlphabet)
        continueGame()
        const currentScore = document.getElementById('current_score')
        const currentScoreText = parseInt(currentScore.innerText)
        const newScore = currentScoreText+1
        currentScore.innerText = newScore
    }
    else{
        const currentLife = document.getElementById('current_life')
        const currentLifeText = parseInt(currentLife.innerText)
        const newLife = currentLifeText-1
        currentLife.innerText = newLife 
    }
})