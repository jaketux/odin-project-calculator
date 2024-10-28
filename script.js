const numberButtons = document.querySelectorAll(".number-btn")
const operatorButtons = document.querySelectorAll(".operator-btn")
const calculatorScreenText = document.querySelector(".calculator-screen-text")

numberButtons.forEach((numberButton)=>{numberButton.addEventListener("click",function(e){
    enteringFirstNumber.push(this.innerText);
console.log(enteringFirstNumber)})})

operatorButtons.forEach((operatorButton)=>{operatorButton.addEventListener("click",function(e){
    let numberStored=Number(enteringFirstNumber.join(""));
    console.log(numberStored)
    calculatorScreenText.textContent=numberStored;
    enteringFirstNumber.length=0

})})

let numberStored=0
let firstNumber = 0
let secondNumber = 0
let operator = 0
let outcome = 0


let enteringFirstNumber=[]

let finalFirstNumber=Number(enteringFirstNumber.join(""))

function operate(operator,firstNumber,secondNumber){
    if (operator=="+"){
        let totalSum = firstNumber+secondNumber;
        return totalSum
    }
    else if (operator=="-"){
        let totalSubtract = firstNumber-secondNumber;
        return totalSubtract
    }
    else if (operator=="/"){
        let totalDivide = firstNumber/secondNumber;
        return totalDivide
    }
    else if (operator=="*"){
        let totalMultiply = firstNumber*secondNumber;
        return totalMultiply;
    }
}

