## Exercice 1 : Enregistrer et relire un objet `user` (name et age en propriete au minimum) dans `localStorage`

## Correction :
```js
const user = { name: "Bob", age: 30 };
localStorage.setItem("user", JSON.stringify(user));

const result = JSON.parse(localStorage.getItem("user"));
console.log(result.name); // Bob
```