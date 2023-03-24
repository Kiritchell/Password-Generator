let buttonOne = document.querySelector("#btn-1")
let buttonTwo = document.querySelector("#btn-2")
let buttonThree = document.querySelector("#btn-3")
let buttonFour = document.querySelector("#btn-4")







function getPasswords(){
    let passOne = Math.random() * 10;
    let passTwo = Math.random() * 10;
    let passThree = Math.random() * 10;
    let passFour = Math.random() * 10;

    buttonOne.textContent = passOne
    buttonTwo.textContent = passTwo
    buttonThree.textContent = passThree
    buttonFour.textContent = passThree


    console.log (passOne)
    console.log (passTwo)
    console.log (passThree)
    console.log (passFour)
}

getPasswords()