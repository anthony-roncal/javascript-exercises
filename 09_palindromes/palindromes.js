const palindromes = function (a) {
    const originalString = String(a).split('').filter(char => /[a-zA-Z]/.test(char));
    const original = originalString.join().toLowerCase();
    const reverse = originalString.reverse().join().toLowerCase();
    return original === reverse;
};

// Do not edit below this line
module.exports = palindromes;
