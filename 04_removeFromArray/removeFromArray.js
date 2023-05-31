const removeFromArray = function(array, ...args) {
  const newArray = []
  array.filter((num) => {
    if (!args.includes(num)) {
        newArray.push(num)
    }
  })
  return newArray
}


// Do not edit below this line
module.exports = removeFromArray;
