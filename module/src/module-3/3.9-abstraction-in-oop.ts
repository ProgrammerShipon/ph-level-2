{
  //  abstraction
  // 1. interface
  // 2. abstract

  // interface Vehicle1 {
  //    name: string;
  //    model: number;
  // }

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // const vehicle1: Vehicle1 = {
  //    name: "Toyota",
  //    model: 2342
  // }

  // real implementation
  class Car implements Vehicle1 {
    startEngine(): void {
      console.log(`I am starting the car engine.`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine.`);
    }
    move(): void {
      console.log(`I am moving the car engine.`);
    }
    test() {
      console.log(`I am just testing`);
    }
  }

  const toyotaCar = new Car();
  toyotaCar.startEngine();

  // ==========================================

  // real implementation
  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    test() {
      console.log(`I am just testing`);
    }
  }

  class ToyotaCar extends Vehicle2 {
    startEngine(): void {
      console.log(`I am starting the Vehicle2 car engine.`);
    }
    stopEngine(): void {
      console.log(`I am stopping the car engine.`);
    }
    move(): void {
      console.log(`I am moving the car engine.`);
    }
  }

  const hondaCar = new ToyotaCar();
  hondaCar.startEngine();

  //
}
