/*
     Objektumok másolása - spread operátor
 */

let person = {
    firstname: "John",
    lastName: "Doe",
    address: {
        street: "Peachfield",
        city: "Budapest",
        country: "Hungary"
    }
}

const p1 = {...person};

console.log(p1);

const p2 = Object.assign({}, person);
p2.firstname = "Jane";
p2.address.street = "Main street";


console.log(p2);

const p3 =JSON.parse(JSON.stringify(person));
console.log("p3: ", p3);

/*
    shallow copy 
*/
