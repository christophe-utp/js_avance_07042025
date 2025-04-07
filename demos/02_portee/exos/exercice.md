# Exercice

# Exercice 1 Closure

Complète la fonction suivante pour créer un générateur de messages :

```js
function createLogger(prefix) {
  // ...
}

const logInfo = createLogger("[INFO]");
console.log(logInfo("Connexion établie")); // Résultat attendu : "[INFO] Connexion établie"
```

# Exercice 2
Complète la fonction `createMultiplier` pour qu’elle retourne une fonction qui multiplie par `n`.

```js
function createMultiplier(n) {
  // ...
}

const triple = createMultiplier(3);
console.log(triple(4)); // Résultat attendu : 12
```
