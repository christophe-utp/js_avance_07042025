const log = (msg) => document.getElementById('output').textContent += msg + "\n";

// 1. Affecter une fonction à une variable
const greet = function(name) {
  return `Bonjour, ${name} !`;
};
log(greet("Alice"));

// 2. Passer une fonction en argument
function executeOperation(a, b, operation) {
  return operation(a, b);
}

const addition = (x, y) => x + y;
const multiplication = (x, y) => x * y;

log("Addition: " + executeOperation(3, 4, addition));
log("Multiplication: " + executeOperation(3, 4, multiplication));

// 3. Retourner une fonction depuis une autre fonction
function createGreeter(greeting) {
  return function(name) {
    return `${greeting}, ${name} !`;
  };
}

const helloGreeter = createGreeter("Hello");
const salutGreeter = createGreeter("Salut");

log(helloGreeter("Bob"));
log(salutGreeter("Claire"));

// 4. Stocker des fonctions dans des structures
const operations = {
  sum: addition,
  product: multiplication,
};

log("Sum from object: " + operations.sum(5, 6));
log("Product from object: " + operations.product(5, 6));

// 5. Exemple avec tableau
const funcs = [greet, helloGreeter, salutGreeter];
funcs.forEach(fn => log(fn("Zoe")));