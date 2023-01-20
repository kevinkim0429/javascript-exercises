const leapYears = function(value1) {
    if (value1 % 4 == 0) {
        if (value1 % 100 == 0){
            if (value1 % 400 == 0){
                return true
            }
            return false
        }
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = leapYears;
