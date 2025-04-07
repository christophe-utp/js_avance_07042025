const log = (msg) => document.getElementById('output').textContent += msg + "\n";

// 1. Déclaration de fonction - visible partout dans le scope
sayHello(); // fonctionne grâce au hoisting

function sayHello() {
  log("Bonjour depuis sayHello()");
}

// 2. Fonction expression - non accessible avant définition
// sayHi(); // Erreur si décommenté : Cannot access 'sayHi' before initialization
const sayHi = function() {
  log("Salut depuis sayHi()");
};
sayHi();

// 3. Portée des variables dans une fonction
function testFunctionScope() {
  const inside = "je suis dedans";
  log(inside);
}

testFunctionScope();
// log(inside); // Erreur : inside n'existe pas ici

// 4. Accès à des variables extérieures
const outside = "je suis dehors";

function readOutside() {
  log(outside); // peut accéder à 'outside'
}

readOutside();

// 5. Closure
function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
log("Counter: " + counter());
log("Counter: " + counter());
log("Counter: " + counter());