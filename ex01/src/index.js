var MyArr = [2, 4, 0, 8, 10];
function myArrayFunction(arr) {
    var myItems = [...arr];
    myItems.push = MyArr;
    
   return myItems;
}
console.log(MyArrayFunction(arr));

module.exports = MyArrayFunction;