{
  //

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually

  type Owner2 = keyof Vehicle;

  const person: Owner = "bike";
  const person1: Owner2 = "bike";

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => obj[key];

  const user = {
    name: "Mr. Persian",
    age: 26,
    address: "ctg",
  };
  const useProperty = getPropertyValue(user, "address");

  const car = {
    model: "Toyota",
    year: 200,
  };
  const carProperty = getPropertyValue(car, "model");

  //
}
