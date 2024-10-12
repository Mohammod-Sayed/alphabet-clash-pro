function hideElementByID(elementID){
    const hideElement = document.getElementById(elementID)
    hideElement.classList.add('hidden')
}

function showElementByID(elementID){
    const showElement = document.getElementById(elementID)
    showElement.classList.remove('hidden')
}

function setBackgroundColorByID(elementID){
    const setElement = document.getElementById(elementID)
    setElement.classList.add('bg-[#FFA500]')
}

function removeBackgroundColorByID(elementID){
    const removeElement = document.getElementById(elementID)
    removeElement.classList.remove('bg-[#FFA500]')
}

function getRendomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetString.split('')

    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index]
    return alphabet
}

function getCurrentTextValueByID(elementID){
    const currentValue = document.getElementById(elementID)
    const currentValueText = parseInt(currentValue.innerText)
    return currentValueText
}

function setInnerTextValueByID(elementID, value){
    const currentValue = document.getElementById(elementID)
    currentValue.innerText = value
}