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
        
        const currentScoreText = getCurrentTextValueByID('current_score')
        const newScore = currentScoreText+1
        setInnerTextValueByID('current_score', newScore)
    }
    else{
        const currentLifeText = getCurrentTextValueByID('current_life')
        const newLife = currentLifeText-1
        setInnerTextValueByID('current_life', newLife)
    }
})