const numbers = [1, 25, 33, 46];
let minimum = numbers[0];
/*
for (let i = 0; i < numbers.length; i++) {
    if (minimum > numbers[i]) {
        minimum = numbers[i];
    }
}

console.log(minimum);
*/
const reducer = (prev, curr) => Math.min(prev, curr);

minimum = numbers.reduce(reducer);
console.log(minimum);

const names = ['Alice', 'Bob', 'Alice', 'Tiff', 'Ubul'];

const countNames = {};

for (let i = 0; i < names.length; i++) {
    if (countNames[names[i]]) {
        countNames[names[i]]++;
    } else {
        countNames[names[i]] = 1;
    }
}
console.log(countNames);

let countedNames = names.reduce(function(allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    } else {
        allNames[name] = 1;
    }
    return allNames;
},{});

console.log(countedNames);