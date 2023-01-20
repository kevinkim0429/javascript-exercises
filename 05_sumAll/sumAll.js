const sumAll = function(value1, value2) {
    let finalNumber = 0

    if ((typeof(value1) !== 'number') || (typeof(value2) !== 'number')) {
        return 'ERROR'
    }

    if ((value1 < -1) || (value2 < -1)) {
        return 'ERROR'
    }

    if (value1 > value2) {
        [value1, value2] = [value2, value1]
    } else {}

    for (let i = value1; i <= value2; i++) {
        finalNumber += i
    }
    
    return finalNumber;
}

// Do not edit below this line
module.exports = sumAll;
