const fibonacci = function(index) {
    let fibArray = [1, 1];
    if (index < 1) {
        return "OOPS";
    } else {
        while (fibArray.length <= index) {
            fibArray.push(fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]);
        }
        return fibArray[index-1];
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
