const numberButtons = document.querySelectorAll(".number-btn")
const addButton = document.querySelector(".add-btn")
const subtractButton = document.querySelector(".subtract-btn")
const multiplyButton = document.querySelector(".multiply-btn")
const divideButton = document.querySelector(".divide-btn")
const equalsButton = document.querySelector(".equals-btn")
const calculatorScreenText = document.querySelector(".calculator-screen-text")
const clearButton = document.querySelector(".clear-btn")

let enteringFirstNumber=[]

let numberStored=0
let firstNumber = 0
let secondNumber = 0
let operator = 0
let outcome = 0
let finalFirstNumber=Number(enteringFirstNumber.join(""))



numberButtons.forEach((numberButton)=>{numberButton.addEventListener("click",function(e){
    enteringFirstNumber.push(this.innerText);
    calculatorScreenText.innerText += numberButton.innerText;
    addButton.classList.remove("operatorinuse")
    subtractButton.classList.remove("operatorinuse")
    multiplyButton.classList.remove("operatorinuse")
    divideButton.classList.remove("operatorinuse")

console.log(enteringFirstNumber)})})

addButton.addEventListener("click",function(e){
    numberStored=Number(enteringFirstNumber.join(""));
    operator="+"
    calculatorScreenText.innerText=""
    addButton.classList.add("operatorinuse")
    enteringFirstNumber.length=0;
    console.log(numberStored)
})

subtractButton.addEventListener("click",function(e){
    numberStored=Number(enteringFirstNumber.join(""));
    operator="-"
    calculatorScreenText.innerText=""
    subtractButton.classList.add("operatorinuse")
    enteringFirstNumber.length=0
    console.log(numberStored)    
})
multiplyButton.addEventListener("click",function(e){
    numberStored=Number(enteringFirstNumber.join(""));
    operator="*"
    calculatorScreenText.innerText=""
    multiplyButton.classList.add("operatorinuse")
    enteringFirstNumber.length=0
    console.log(numberStored)      
})

divideButton.addEventListener("click",function(e){
    numberStored=Number(enteringFirstNumber.join(""));
    operator="/"
    calculatorScreenText.innerText=""
    divideButton.classList.add("operatorinuse")
    enteringFirstNumber.length=0
    console.log(numberStored)      
})

clearButton.addEventListener("click",function(e){
    numberStored=0;
    operator=0
    secondNumber=0
    firstNumber=0
    addButton.classList.remove("operatorinuse")
    subtractButton.classList.remove("operatorinuse")
    multiplyButton.classList.remove("operatorinuse")
    divideButton.classList.remove("operatorinuse")
    calculatorScreenText.innerText=""
    enteringFirstNumber.length=0;
})

equalsButton.addEventListener("click",function(e){
    function operate(operator,firstNumber,secondNumber){
        if (operator=="+"){
            let total = firstNumber+secondNumber;
            return outcome=total
        }
        else if (operator=="-"){
            let total = firstNumber-secondNumber;
            return outcome=total
        }
        else if (operator=="/"){
            if (secondNumber === 0) {
                return outcome="ERROR";
            }
            let total = firstNumber/secondNumber;
            return outcome=total
        }
        else if (operator=="*"){
            let total = firstNumber*secondNumber;
            return outcome=total;
        }
    }

    let firstNumber=numberStored
    let secondNumber=Number(enteringFirstNumber.join(""))
    operate(operator,firstNumber,secondNumber)
    calculatorScreenText.innerText=outcome
    console.log(outcome)
})






