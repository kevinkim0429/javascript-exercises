const removeFromArray = function(value1) {
    let index
    for (let i = 1; i < (arguments.length); i++) {
        index = value1.indexOf(arguments[i])
        if (index > -1) {
            value1.splice(index, 1)
        }
    }
    return value1
};


// Do not edit below this line
module.exports = removeFromArray;