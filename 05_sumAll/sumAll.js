const sumAll = function(a, b) {
    let sum = 0;
    if (a < 0 || b < 0 || typeof(a) !== "number" || typeof(b) !== "number") {
        return "ERROR";
    } else {
        let min = a;
        let max = b;
        if (a > b) {
            min = b;
            max = a;
        }
        for (let i = min; i <= max; i++){
            sum += i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
