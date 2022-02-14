// let object = {
//     iterator: 0,
//     [Symbol.iterator]() {}
// }




let password = Symbol();

let user = {
    username: 'r2d2',
    [password]: 'c3po'
    // [Symbol.for('password')]: 'c3po'
};


console.log(user.password);
console.log(Object.keys(user));
console.log(Object.getOwnPropertyNames(user));

// let password = user[Symbol.for('password')];
console.log(password);

console.log(Object.getOwnPropertySymbols(user));



// let symbol = Symbol.for('name');
// let name = Symbol.keyFor(symbol);
// console.log(name);




// let symbol = Symbol('name');
// let symbol2 = Symbol('name');

// console.log(symbol, symbol2, symbol === symbol2);

// let symbol3 = Symbol.for('name');
// let symbol4 = Symbol.for('name');

// console.log(symbol3, symbol4, symbol3 === symbol4);