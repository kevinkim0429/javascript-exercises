const repeatString = function(val1, val2) {
    val2 = Number(val2)
    if (val2 > 0) {
        return val1.repeat(val2)
    } else if (val2 === 0){
        return ''
    } else {
        return 'ERROR'
    }
};

// Do not edit below this line
module.exports = repeatString;