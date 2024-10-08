function hideElementByID(elementID){
    const element = document.getElementById(elementID)
    element.classList.add('hidden')
}

function showElementByID(elementID){
    const element = document.getElementById(elementID)
    element.classList.remove('hidden')
}

function getRendomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')

    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber)
    
    const alphabet = alphabets[index]
    return alphabet
    
}