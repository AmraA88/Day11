function Mybouncer(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0 || Number.isNaN(arr[i]) || arr[i] == null || arr[i] == false || arr[i] == "" || arr[i] == undefined) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
console.log(Mybouncer([7, "ate", "", false, 9]));
console.log(Mybouncer(["a", "b", "c"]));
console.log(Mybouncer([false, null, 0, NaN, undefined, ""]));
console.log(Mybouncer([null, NaN, 1, 2, undefined]));
module.exports = Mybouncer;