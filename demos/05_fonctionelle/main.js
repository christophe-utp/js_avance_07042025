const log = (msg) => document.getElementById('output').textContent += msg + "\n";

// 1. Fonction anonyme affectée à une variable
const multiply = function(a, b) {
    return a * b;
  };
  log("2 * 3 = " + multiply(2, 3));

  // 2. IIFE
  (function() {
    log("Je suis une IIFE !");
  })();

  // 3. Fonction interne
  function wrapper() {
    function inside() {
      return "Fonction interne appelée !";
    }
    return inside();
  }
  log(wrapper());

  // 4. Redéfinition de fonction
  function hello() {
    log("Bonjour !");
    hello = function() {
      log("Salut (redéfini) !");
    };
  }
  hello(); // Bonjour !
  hello(); // Salut (redéfini) !

  // 5. Pseudo-surcharge avec arguments
  function printArgs() {
    for (let i = 0; i < arguments.length; i++) {
      log(`Argument ${i + 1}: ${arguments[i]}`);
    }
  }
  printArgs("Alice", "Bob", 42);

  // 6. Closure
  function createCounter() {
    let count = 0;
    return function() {
      return ++count;
    };
  }

  const counter1 = createCounter();
  log("counter1(): " + counter1()); // 1
  log("counter1(): " + counter1()); // 2