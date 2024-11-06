//Q no 1 of ch 10
function numbers(num1, num2) {
    return num1 + num2;
}
let answer = numbers(87, 21);
console.log("sum of the numbers is:" + answer);
// Q no 2 of ch 10
function changing(celcius) {
    return celcius * 9 / 5 + 32;
}
let answer1 = changing(100);
console.log(answer1);
//  Q no 3 of ch 10
function primeornot(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (num % i == 0) {
            return false;

        }
        return true;
    }
}
let prime = (7);

console.log((`Is ${prime} prime? ${primeornot(prime)}`));
// Q  no 4 of ch 10
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log("Reversed String: " + reverseString("hello"));
// Q  no 5 of ch 10
function factorial(num) {
    if (num < 0) return undefined; // Factorial not defined for negative numbers
    if (num === 0 || num === 1) return 1; // 0! and 1! are 1
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
console.log("Factorial of 5: " + factorial(5));
// Q   no 6 of ch 10
function greetUser() {
    console.log("Hello, welcome!");
}
greetUser();
// Q  no 7 of ch 10
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet("Feryal");
// Q   no 8 of ch 10
function twonumbers(number1, number2) {
    return number1 + number2;
}
console.log(twonumbers(5, 9));
//Q   no 9 of ch 10
function randomnum() {
    return Math.floor(Math.random() * 101);
}
console.log(randomnum());
// Q  no 10 of ch 10
function Vote(age) {
    return age >= 18;
}
const age = 20;
const eligible = Vote(age);
console.log(eligible);
// Q no 1 of ch 11
const square = num => num * num;
console.log(square(64)); 
// Q no 2 of ch 11
const evenNumbers = arr => arr.filter(num => num % 2 === 0);
console.log(evenNumbers([10,5,7.33,25]));
// Q no 3 of ch 11
const concatenateStrings = (str1, str2) => str1 + str2;
console.log(concatenateStrings("Hi,", "Feryal Abid!")); 
// Q no 4 of ch 11
const Max = arr => Math.max(...arr);
console.log(Max([10, 3, 20, 90, 88])); 
//  Q no 5 of ch 11
const sumOfNum = arr => arr.reduce((total, num) => total + num, 0);
console.log(sumOfNum([11, 28, 78, 66, 50])); 
//  Q no 6 of ch 11
const print = () => console.log("Hello World");
print();
// Q no 7 of ch 11
const squareOfNumber = num => num * num;
console.log(squareOfNumber(9));
// Q  no 8 of ch 11
const isPositive = num => num > 0;
console.log(isPositive(10));
console.log(isPositive(-9));
//  Q no 9 of ch 11
const generate = () => Math.floor(Math.random() * 40) + 9;
console.log(generate()); 
//  Q no 10 of ch 11
const convertion = minutes => minutes * 60;
console.log(convertion(8));
// Q no 1 of ch 12
(function () {
    console.log("Hello");
})();
// Q  no 2 of ch 12

const sum = function (i, j) {
    return i + j;
};
const result = sum(95, 25);
console.log(result);
// Q   no 3 of ch 12
let Array = [90, 87, 55, 71, 10];

Array.sort(function (d, f) {
    return d - f;
});

console.log(Array);
// Q no  4 of ch 12
(function (name) {
    console.log(`Hello, ${name}!`);
})("Feryal abid");
// Q  no  5 of ch 12
let check = (function (num) {
    if (num % 2 === 0) {
        console.log(`${num} is even.`);
    } else {
        console.log(`${num} is odd.`);
    }
})(10);
// Q   no 6 of ch 12
let num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let oddNum = num1.filter(function (num) {
    return num % 2 !== 0;
});
console.log(oddNum);
// Q no 7 of ch 12
let fact = (function (n) {
    if (n === 0 || n === 1) return 1;
    return n * (function f(n) { return n === 0 || n === 1 ? 1 : n * f(n - 1); })(n - 1);
})(3);
console.log(fact);
//  Q no 8 of ch 12
setTimeout(function () {
    console.log("Time's up!");
}, 2000);
//  Q no 9 of ch 12
let numArr = [1, 2, 3, 4, 5];
let sum2 = numArr.reduce(function (total, currentValue) {
    return total + currentValue;
}, 0);

console.log(sum2);
//  Q no 10 of ch 12
(function (age) {
    if (age >= 18) {
        console.log(`Person with age ${age} is eligible to vote.`);
    } else {
        console.log(`Person with age ${age} is not eligible to vote.`);
    }
})(30);

(function (age) {
    if (age >= 18) {
        console.log(`Person with age ${age} is eligible to vote.`);
    } else {
        console.log(`Person with age ${age} is not eligible to vote.`);
    }
})(15);