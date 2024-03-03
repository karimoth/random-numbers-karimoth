
const { uuid } = require('uuid');

function generateRandomNumbersList(length, min, max) {
    let numbersList = [];
    for (let i = 0; i < length; i++) {
        numbersList.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numbersList;
}

// Usage
const randomNumbersList = generateRandomNumbersList(10, 1, 100);
console.log(randomNumbersList);


module.exports = { generateRandomNumbersList };
