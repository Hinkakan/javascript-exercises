const palindromes = function (str) {
    console.log(str);
    let cleanStr = str.toLowerCase().replace(/\s/g, "").replace(/[^a-zA-Z0-9]/g,"");
    console.log(cleanStr);

    let letters = cleanStr.split("");
    let reversed = "";
    let isPalindrome;

    for (i = letters.length -1; i >= 0; i--) {
        reversed = reversed + letters[i];
    };


    if (reversed==cleanStr) {
        isPalindrome = true;
    } else {
        isPalindrome = false
    }

    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
