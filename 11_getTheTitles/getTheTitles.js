const getTheTitles = function(books) {

    let length = Object.keys(books).length;
    let arr = []

    for (i=0;i<length;i++) {
        arr.push(books[i]["title"]);
    }

    return arr;
};

// Do not edit below this line
module.exports = getTheTitles;
