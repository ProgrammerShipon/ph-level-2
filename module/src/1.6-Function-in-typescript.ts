// Learning function

// normal function
function add(num1: number, num2: number): number {
  return num1 + num2;
}
add(2, 4);

const addArrow = (num1: number, num2: number): number => num1 + num2;
addArrow(4, 3);

// object --> function  --> method
const poorUser = {
  name: "shipon",
  balance: 0,
  addBalance(balance: number): string {
    return `My new Balance ${this.balance + balance}`;
  },
};

const arrNumber: number[] = [1, 2, 3];
const newArrNumber: number[] = arrNumber.map(
  (elem: number): number => elem * elem
);
