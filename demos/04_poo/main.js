const log = (msg) => document.getElementById('output').textContent += msg + "\n";

// 1. Objet littéral
const dog = {
  name: "Rex",
  bark() {
    return `${this.name} says Woof!`;
  }
};
log(dog.bark());

// 2. Fonction constructeur
function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function() {
  return `${this.name} makes a noise.`;
};

const cat = new Animal("Mimi");
log(cat.speak());

// 3. Object.create
const lion = Object.create(Animal.prototype);
lion.name = "Simba";
log(lion.speak());

// 4. this et contexte
const contextTest = {
  name: "Context",
  show() {
    return this.name;
  }
};
const ref = contextTest.show;
log("Sans contexte: " + ref()); // undefined ou globalThis.name
log("Avec contexte: " + contextTest.show());

// 5. prototype et __proto__
log("cat.__proto__ === Animal.prototype ? " + (cat.__proto__ === Animal.prototype));

// 6. Héritage
function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function() {
  return `${this.name} the ${this.breed} barks!`;
};

const buddy = new Dog("Buddy", "Beagle");
log(buddy.speak()); // héritée
log(buddy.bark());  // propre à Dog

// 7. Propriétés privées avec #
class SecretBox {
  #secret;

  constructor(content) {
    this.#secret = content;
  }

  reveal() {
    return this.#secret;
  }
}

const box = new SecretBox("Trésor");
log("Contenu secret : " + box.reveal());
// log(box.#secret); // Erreur : propriété privée