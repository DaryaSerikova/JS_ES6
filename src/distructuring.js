//Деструктивное присваивание объектов



let user = {
    firstname: 'John',
    lastname: 'Doe',
    social: {
        facebook: 'johndoe',
        twitter: 'jdoe'
    }
};

function getUserInfo() {
    return {
        firstname: 'John',
        lastname: 'Doe',
        social: {
            facebook: 'johndoe',
            twitter: 'jdoe'
        }
    };
}

// function post( url, {data, cache}) {
//     console.log(data, cache);
// }

function post( url, {data: {firstname, lastname}, cache}) {
    console.log(firstname, lastname, cache);
}

let result = post( 'api/users', {data: user, cache: false});

// let person = {
//     firstname: 'John',
//     lastname: 'Doe'
// };

let {firstname, lastname, social: {twitter}} = getUserInfo();
// let {firstname: first, lastname: last, social: {facebook: fb }, age = 25 } = user;
// let {firstname: first, lastname: last, social: {facebook}, age = 25 } = user;
// let {firstname: first, lastname: last, age = 25} = {firstname: 'John', lastname: 'Doe'};
// let {['first'+'name']: first, lastname: last, age = 25} = {firstname: 'John', lastname: 'Doe'};
// let {firstname: first, lastname: last} = person;

// console.log(first, last, age);
// console.log(first, last, facebook, age);
// console.log(first, last, fb, age);
console.log(firstname, lastname, twitter);



// let {firstname, lastname} = person;
// console.log(firstname, lastname);

//Деструктивное присваивание массивов

// let [js, php, py, rb] = ['JavaScipt', 'PHP', 'Python', 'Ruby'];
// console.log(js, php, py, rb);



// let yes = 'Yes';
// let no = 'No';

// [yes, no] = [no, yes];
// console.log(`Yes is ${yes}`);
// console.log(`No is ${no}`);
// console.log('O_o');




// let scores = [3, 4, [5, 6]];
// let[low, mid, [high, higher]] = scores;

// console.log(low, mid, high, higher);

// function computeScore([low, mid]) {
//     console.log(low, mid);
// }

// computeScore([3, 4]);




// function getScores() {
//     return [3, 4, 5];
// }

// let scores = getScores();

// let [low, mid, high] = getScores();
// console.log(low, mid, high);





// let scores = [3, 4];
// let[low, mid, high = 5] = scores;

// console.log(low, mid, high);




// let scores = [3, 4, 5];
// let[low, ...rest] = scores;

// console.log(rest);




// let scores = [3, 4, 5];
// let[low, mid, high] = scores;

// let[l, ,h] = scores; 

// console.log(low, mid, high);
// console.log(l, h);
