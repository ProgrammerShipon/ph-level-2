{
  // oop - inheritance

  class Student {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  const student1 = new Student("Mr. student", 20, "Uganda");
  student1.getSleep(6);

  // -------------------------------------------------

  class Teacher {
    name: string;
    age: number;
    address: string;
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      this.name = name;
      this.age = age;
      this.address = address;
      this.designation = designation;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} will take ${numberOfClass}`);
    }
  }

  const teacher1 = new Teacher("Mr. teacher", 20, "Uganda", "Professor");
  teacher1.takeClass(6);

  // ==========================================
  class Parent {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }

    getSleep(numberOfHours: number) {
      console.log(`${this.name} will sleep for ${numberOfHours}`);
    }
  }

  class Child extends Parent {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher1 extends Parent {
    designation: string;
    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }

    takeClass(numberOfClass: number) {
      console.log(`${this.name} will take ${numberOfClass}`);
    }
  }

  const child1 = new Child("Shipon", 21, "Dhalarchar");
  child1.getSleep(5);

  const teacher2 = new Teacher1(
    "Shipon",
    21,
    "Dhalarchar",
    "Toto Company manager"
  );
  teacher2.takeClass(7);
  //
}
