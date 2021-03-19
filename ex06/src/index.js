function multiplyArrayFunction(arr) {
    var product = 1;
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];

        }
    }
    return product;
}


console.log(multiplyArrayFunction([[2], [5, 6, 7], [8, 9]]));
console.log(multiplyArrayFunction([[2.5, 2], [0.5, 0.2], [8]]));
console.log(multiplyArrayFunction([[1, 2], [3, 4, 5, 6], [7,8, 9]]));
module.exports = multiplyArrayFunction;