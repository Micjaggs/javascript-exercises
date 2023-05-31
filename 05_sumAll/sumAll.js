const sumAll = function(num1, num2) {
    let finalSum = 0
    let min = Math.min(num1, num2)
    let max = Math.max(num1, num2)
    if ((num1 < 0) || (num2 < 0)) return "ERROR";

    else if ((typeof num1 === "string") || (typeof num1 === "object") || 
    (typeof num2 === "string") || (typeof num2 === "object")) {
        return "ERROR";
    }
    else if ((num1 >= 0) && (num2 >= 0)) {
    for (let i = min; i <= max; i++) {
        finalSum += i
    }
    }
    return finalSum
    
}
    




//Works with large numbers because the parameters are place holders.
// returns error with negative numebrs is simple, create an if statement that
//states if the number is less than 0 to return error string
//returns error with non number parameters buy using ! type of, so if it's not a 
// number or integer, then it returns error
//
;

// Do not edit below this line
module.exports = sumAll;
