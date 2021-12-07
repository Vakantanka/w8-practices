const arr1 = [2, 4, 8, 14];
const arr2 = [2, 4, 8, 14];
const arr3 = [2, 4, 8, 14];

const map1 = arr1.map(x => x*3);
const map2 = arr2.map(myFunction);
const map3 = arr3.map((x, i) => x * i);

console.log(map1);

function myFunction(num) {
    return num*5;
}

console.log(map2);

console.log(map3);

let arr4 = [
    { key: 1, value: 10},
    { key: 2, value: 20},
    { key: 3, value: 30},
    { key: 4, value: 40},
];

let reformattedArray = arr4.map(obj => {
    let rObj = {};
    rObj[obj.key] = obj.value*10;
    return rObj;
});

console.log(reformattedArray);