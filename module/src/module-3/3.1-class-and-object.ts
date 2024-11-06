{
  // oop - class

  class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string) {
      this.name = name;
      this.species = species;
      this.sound = sound;
    }

    makeSound() {
      console.log(`The ${this.name} says ${this.species}`);
    }
  }

  const dog = new Animal("German Shepared", "dog", "Ghew Ghew");
  const cat = new Animal("Persian bhai", "cat", "meaw meaw");

  dog.makeSound();
  cat.makeSound();

  class Animal1 {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    makeSound() {
      console.log(`The ${this.name} says ${this.sound}`);
    }
  }

  const murgi = new Animal1("Shipon", "Murgi", "Kok kok");
  murgi.makeSound();
  //
}
