const removeFromArray = function(arr) {
    
    for (i = 1; i < arguments.length;i++) {
        for (k = 0; k<arr.length; k++) {
            if (arguments[i]===arr[k]) {
                arr.splice(k,1);
                k = k-1
            };
        };
    };

    return arr
};

// Do not edit below this line
module.exports = removeFromArray;
