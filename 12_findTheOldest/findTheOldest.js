const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    array.sort((a, b) => {
        let upperA = (a.yearOfDeath) ? a.yearOfDeath : currentYear;
        let upperB = (b.yearOfDeath) ? b.yearOfDeath : currentYear;
        return (upperA - a.yearOfBirth) > (upperB - b.yearOfBirth) ? -1 : 1
    });
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
