const reverseString = function(input) {
    let letters = input.split("");
    let reversed = "";

    for (i = letters.length -1; i >= 0; i--) {
        reversed = reversed + letters[i];
    };

    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
