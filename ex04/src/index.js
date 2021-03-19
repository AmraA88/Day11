var monitorsListArray = ["Apple", "Peach", "Berry"];
function myMonitorsFunction(arr) {
    var monitorsList = [...arr];
    monitorsList = [];
    var i;
    for (i=0; i<3; i++) {
        monitorsList.push([monitorsListArray[i]] + "," + i);
    }
    return monitorsList;
}
myMonitorsFunction(monitorsListArray);
console.log(myMonitorsFunction(monitorsList));
module.exports = myMonitorsFunction;