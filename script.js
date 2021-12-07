const ages = [32, 39, 13, 16];

function testFor() {
    const resultArr = [];
    for (const age of ages) {
        if (age >= 18) {
            resultArr.push(age);
        }
    }
    return resultArr;
}

console.log(testFor());

const result = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}

console.log(result);
