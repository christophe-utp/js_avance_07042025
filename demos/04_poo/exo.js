/*
## Exercice 1 Objet littéral
Crée un objet `car` avec une propriété `model` et une méthode `drive()` 
qui retourne `"Driving a <model>"`.

## Exercice 2
Crée un constructeur `Book` avec une propriété `title` et une méthode `read()` 
partagée via `prototype`.

## Exercice 3
Crée un constructeur `Vehicle` avec une méthode `start()`. 
Puis, crée `Car` qui hérite de `Vehicle` et ajoute `honk()`.

## Exercice 4
Crée une classe `Safe` avec une propriété privée `#code` 
et une méthode publique `unlock()` qui retourne le code.

*/

// exercice 1
const car = {
    model: "Tesla",
    drive() {
        return `Driving a ${this.model}`
    }
}

console.log(car.drive())

// exercice 2
function Book(title){
    this.title = title;
}

Book.prototype.read = function() {
    return `je lis ${this.title}`
}

const b = new Book("mon super livre")
console.log(b.read())

// exercice 3
function Vehicle(name){
    this.name = name;
}

Vehicle.prototype.start = function() {
    return `${this.name} déamarre`
}

function Car(name) {
    Vehicle.call(this,name)
}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function(){
    return `${this.name} klaxon !!!`
}

const v = new Car("Peugeot")
console.log(v.honk())
console.log(v.start())


// exercice 4
class Safe {
    #code;

    constructor(code){
        this.#code = code
    }

    unlock(){
        return this.#code;
    }
}

const s = new Safe("1234")
console.log(s.unlock())