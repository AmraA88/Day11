function splitArrayInGroups(arr, n) {
    var i = 0
    result = []
  
    while (i < arr.length) {
      if (i % n === 0) result.push([])
      result[result.length - 1].push(arr[i++])
    }
  
    return result
  }
console.log(splitArrayInGroups(["a", "b", "c", "d"], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5], 2));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(splitArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2));
module.exports = splitArrayInGroups;