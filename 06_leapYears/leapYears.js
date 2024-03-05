const leapYears = function(year) {
    let isLeapyear;

    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 == 0) {
                isLeapyear = true;
            }
            else {
                isLeapyear = false;
            };
        }
        else {
            isLeapyear = true;
        }
    }
    else {
        isLeapyear = false;
    }

    return isLeapyear;
};

// Do not edit below this line
module.exports = leapYears;
