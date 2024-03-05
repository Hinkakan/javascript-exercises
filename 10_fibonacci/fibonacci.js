const fibonacci = function(num) {
    let fibonacci = [0,1];
    let num2=parseInt(num);

    if (num<0) {
        return "OOPS";
    } else {
        for (i=2;i<=num2;i++) {
            fibonacci.push(fibonacci[i-2]+fibonacci[i-1]);
        };
    };

    return fibonacci[num2];
};

// Do not edit below this line
module.exports = fibonacci;
