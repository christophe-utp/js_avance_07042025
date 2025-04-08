/*
### Exercice : IIFE
Crée une IIFE qui affiche `"Hello from IIFE"` dans la console.

### Exercice : Redéfinition
Crée une fonction `init()` qui affiche `"Initializing"`, puis se redéfinit pour afficher `"Already initialized"`.

### Exercice : Pseudo-surcharge
Crée une fonction `sum()` qui accepte 1, 2 ou 3 arguments et les additionne.

### Exercice : IIFE avec paramètres
Crée une IIFE qui prend un nom en paramètre et affiche `Hello, <nom>`.

### Exercice : Fonction auto-destructrice
Crée une fonction `once()` qui exécute une action une seule fois, puis ne fait plus rien.

### Exercice : Fonction curryfiée
Crée une fonction `add(a)(b)` qui retourne la somme de `a` et `b`.
*/

// exercice 1
(function () {
    console.log("Hello from IIFE")
})();

// exercice 2
function init() {
    console.log("Initializing")
    init = function () {
        console.log("Already initialized")
    }
}
init();
init();

// exercice 3
function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sum(2))
console.log(sum(2, 3))
console.log(sum(2, 5, 6));

// exercice 4
(function (name) {
    console.log("Hello, " + name)
})("toto")

// exercice 5
function once() {
    console.log("executed once !!!")
    once = function () { }
}

once();
once();


// exercice 6
function add(a) {
    return function (b) {
        return a + b;
    }
}

console.log(add(5)(5))