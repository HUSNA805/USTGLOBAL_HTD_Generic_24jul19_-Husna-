// let myName: string = 'husna';
// let company;
// company = 'testyantra';
// company = 453;
// console.log(company);
// console.log('name = '+myName);
// let sample: number | boolean;
// sample =10;
// sample = true;
// console.log(sample);
// let myArray: string[] = ['kid','juhusf'];
// console.log(myArray);
// let myTuple: [string, number, boolean]=['fff',89,false];
// enum colors {
//     red = 'danger',
//     green = 'good',
//     blue = 'primary',
//     black = 'light'
// }
// console.log(colors.green);
var Person1 = /** @class */ (function () {
    // name: string;
    // age: number;
    function Person1(name, age) {
        // this.name = name;
        // this.age = age;
        this.name = name;
        this.age = age;
    }
    return Person1;
}());
var Person = new Person1('husna', 21);
console.log(Person.name);
console.log(Person.age);
