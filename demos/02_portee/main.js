const log = (msg) => document.getElementById('output').textContent += msg + "\n";

// 1. Portée globale
let globalVar = "Je suis globale";
log(globalVar);

function testLocalScope() {
  // 2. Portée locale (fonction)
  let localVar = "Je suis locale";
  log(localVar);
}

testLocalScope();
// log(localVar); // Erreur : localVar n'est pas définie ici

function testBlockScope() {
  if (true) {
    // 3. Portée bloc avec let/const
    let blockLet = "Je suis dans un bloc (let)";
    const blockConst = "Je suis aussi dans un bloc (const)";
    log(blockLet);
    log(blockConst);
  }
//   log(blockLet); // Erreur
//   log(blockConst)
}

testBlockScope();

// 4. Closure : fonction qui retient une variable
function outer() {
  let count = 0;
  return function inner() {
    count++;
    return count;
  };
}

const counter = outer();
log("Closure test:");
log(counter()); // 1
log(counter()); // 2
log(counter()); // 3

