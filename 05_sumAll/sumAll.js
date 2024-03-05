const sumAll = function(num1, num2) {
    // Test input
    if (typeof num1 === "number" && typeof num2 === "number") {
        if (num1>=0 && num2 >=0) {
            if (num1 < num2) {
                numLow = num1;
                numHigh = num2;
            }
            else {
                numLow = num2;
                numHigh = num1;
            };
            let incrementNumber = 0;
        
            for (i=numLow; i <= numHigh; i++) {
                incrementNumber = incrementNumber + i
            };
        
            return incrementNumber
        }
        else {
            return "ERROR"
        }
    }
    else {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
