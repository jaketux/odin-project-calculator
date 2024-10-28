
let firstNumber = 0
let secondNumber = 0
let operator = 0
let outcome = 0

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

