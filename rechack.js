function cubeNumber(number) {
    if (typeof number !== 'number' || number <= 0) {
    return 'please provide a positive number';
    }
    else {
    let message;
    message = number * number * number;
    return message;
    }
    }
    function matchFinder(string1, string2) {
    if (typeof string1 !== "string" || typeof string2 !== "string") {
    return 'please provide a string.';
    }
    else {
    if (string1.includes(string2)) {
    return true;
    }
    else if (string2.includes(string1)) {
    return true;
    }
    else {
    return false;
    }
    }
    }
    function sortMaker(arr) {
    if (!Array.isArray(arr)) {
    return "please provide array of number";
    }
    else if (arr[0] <= 0 || arr[1] <= 0) {
    return 'Invalid Input';
    }
    else {
    if (arr[0] === arr[1]) {
    return "equal";
    }
    else {
    const sortedArray = arr.sort((a, b) => b - a);
    return sortedArray;
    }
    }
    }
    function findAddress(obj) {
    if (typeof obj !== "object") {
    return "please provide me an array of number";
    }
    else {
    const pen = obj.pen || "__";
    const society = obj.society || "__";
    const house = obj.house || "__";
    return pen + "," + society + "," + house;
    }
    }
    const object = {
    pen: 10,
    society: "Earth Perfect",
    house: "15A"
    }
    function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
    return "please fullfil your array";
    }
    else {
    let sum = 0;
    for (let i = 0; i < changeArray.length; i++) {
    const element = changeArray[i];
    sum = sum + element;
    }
    if (sum >= totalDue) {
    return true;
    }
    else if (sum < totalDue) {
    return false;
    }
    else {
    return sum;
    }
    }
    }