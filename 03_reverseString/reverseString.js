const reverseString = function(string) {
    let char = string.split("").reverse().join("");
    return char;
   }
console.log(reverseString("Hello there"))


// Do not edit below this line
module.exports = reverseString;
