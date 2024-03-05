const findTheOldest = function(people) {
    let currentYear = 2024;
    let age;

    let oldest = {
        name: "JohnDoe",
        yearOfBirth: 2024,
        yearOfDeath: 2024,
        age: 0
    }

    // Calc age for all
    for (let personkey in people) {
        let person = people[personkey];
        if (person.yearOfDeath===undefined) {
            person.yearOfDeath = 2024;
        };
        age = person.yearOfDeath-person.yearOfBirth;
        person.age = age;
        if (age > oldest.age) {
            oldest.name = person.name;
            oldest.yearOfBirth = person.yearOfBirth;
            oldest.yearOfDeath = person.yearOfDeath;
            oldest.age = person.age;
        };
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
