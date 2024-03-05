const repeatString = function(str, num) {
    let text = "";

    if (num < 0) {
        text = "ERROR";
    }
    else {
        for (i=1; i<=num; i++) {
        text = text + str
        };
    };

    return text;
};

// Do not edit below this line
module.exports = repeatString;
