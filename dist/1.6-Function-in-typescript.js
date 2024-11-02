"use strict";
// Learning function
// normal function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 4);
const addArrow = (num1, num2) => num1 + num2;
addArrow(4, 3);
// object --> function  --> method
const poorUser = {
    name: "shipon",
    balance: 0,
    addBalance(balance) {
        return `My new Balance ${this.balance + balance}`;
    },
};
const arrNumber = [1, 2, 3];
const newArrNumber = arrNumber.map((elem) => elem * elem);
