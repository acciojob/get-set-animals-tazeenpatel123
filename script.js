//comple
// Do not change the code below this line
class Animal {
    constructor(species) {
        this._species = species;
    }

    get species() {
        return this._species;
    }

    makeSound() {
        console.log("Some generic animal sound");
    }
}

class Cat extends Animal {
    purr() {
        console.log("Purr");
    }

    // Overriding the makeSound method for Cats
    makeSound() {
        console.log("Meow");
    }
}

class Dog extends Animal {
    bark() {
        console.log("Woof");
    }

    // Overriding the makeSound method for Dogs
    makeSound() {
        console.log("Bark");
    }
}
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
