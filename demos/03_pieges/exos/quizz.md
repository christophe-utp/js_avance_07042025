# Question 1

```js
console.log("2" * "3"); // ?
console.log(false + 1); // ?
```

soluce :

```js
console.log("2" * "3"); // 6
console.log(false + 1); // 1 (false => 0)
```
## Question 2

```js
console.log(a); // ?
var a = 7;

console.log(b); // ?
let b = 7;
```

soluce :

```js
console.log(a); // undefined
var a = 7;

console.log(b); // Referrenceerror
let b = 7;
```

## Question 3

```js
function createGlobal() {
  test = "Je fuis !";
}
createGlobal();
console.log(test); // Qu'affiche-t-on ?
```

soluce :
Je fuis ! car test est global

## Question 4

```js
const animal = {
  type: "Chat",
  getType: function() {
    return this.type;
  }
};

const ref = animal.getType;
console.log(ref()); // ?
```
soluce:

undefined
