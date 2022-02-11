// function add(x,y) {
//     return x + y;
// }

let add = (x, y) => x + y;

let square = x => x*x;

// let giveMeAnswer = function() {
//     return 42;
// }

let giveMeAnswer = () => 42;

let log = () => console.log('Logging');

let multiply = (x, y) => {
    let result = x*y;
    return result;
};

let getPerson = () => {name: "John"}

(() => console.log('IIFE'))();


let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;

numbers.forEach((num) => sum += num)

let squared = numbers.map(num => num*num );


let person = {
    name: 'Bob',
    greet: function () {
        window.setTimeout(() => {
            // console.log(`My name is ${this.name}`);
            console.log(this);
        }, 2000)
    }
};


person.greet();
person.greet1();

// console.log(sum);
// console.log(squared);


// console.log(typeof add);
// console.log(add(2, 5));
// console.log(square(3));
// console.log(giveMeAnswer());
// log();
// console.log(multiply(4,5));
// console.log(getPerson());
