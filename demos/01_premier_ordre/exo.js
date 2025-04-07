// Exercice 1

function applyTwice(func,value) {
    return func(func(value))
}

const doubleValue = x => x * 2;

console.log(applyTwice(doubleValue,3))

// Exercice 2

function makeCounter(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const counter = makeCounter()
console.log(counter())
console.log(counter())
console.log(counter())

// exercice 3
const transformation = [
    s => s.toUpperCase(),
    s => s + "!!!",
    s => `[${s}]`
];

let str = "hello";

let result = str;
transformation.forEach(fn => result = fn(result));
console.log(result);