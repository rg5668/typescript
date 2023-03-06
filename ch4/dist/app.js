"use strict";
const userName = "Max";
let age = 30;
age = 29;
const hobbies = ["스포츠", "요리", "청소"];
const activeHobbies = ["하이킹"];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const person = {
    firstName: "MAX",
    newAge: 30,
};
const copiedPerson = { name: person.firstName + "1", age: person.newAge + 1 };
console.log(copiedPerson, person);
const add = (...number) => {
    let result = 0;
    return number.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
const [hobby1, hobby2, ...remainingHobbies] = hobbies;
console.log(hobby1, hobby2, hobbies);
const { firstName, newAge } = person;
console.log(firstName, newAge);
