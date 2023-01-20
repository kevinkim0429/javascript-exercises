const reverseString = function(val1) {
    let returnVal = '';
    for(let i = (val1.length - 1); i > -1; i--) {
        returnVal += val1[i];
    }
    return returnVal
};

// Do not edit below this line
module.exports = reverseString;
