function continueGame(){
    const alphabet = getRendomAlphabet()
    const currentAlphabet = document.getElementById('current_alphabet')
    currentAlphabet.innerText = alphabet
    setBackgroundColorByID(alphabet)
}
function play(){
    hideElementByID('home_section')
    hideElementByID('score_section')
    showElementByID('play_ground')
    setInnerTextValueByID('current_life',5)
    setInnerTextValueByID('current_score',0)
    continueGame()
}
function gameOver(){
    const currentScoreText = getCurrentTextValueByID('current_score')
    hideElementByID('play_ground')
    showElementByID('score_section')
    setInnerTextValueByID('final_score', currentScoreText)
    const currentAlphabet = document.getElementById('current_alphabet').innerText
    console.log(currentAlphabet)
    removeBackgroundColorByID(currentAlphabet)
}
document.addEventListener('keyup', (event)=>{
    const playerPressed = event.key
    if(playerPressed === 'Escape'){
        gameOver()
    }
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
        if(newLife === 0){
            gameOver()
        }
    }
})