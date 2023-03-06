const userName = "Max";
let age = 30;

age = 29;

// const add = (a: number, b: number) => {
//   let result;
//   result = a + b;
//   return result;
// };

// const add = (a: number, b: number) => a + b;

// const printOutput: (a: number | string) => void = (output) =>
//   console.log(output);

// const button = document.querySelector("button");

// if (button) {
//   button.addEventListener("click", (e) => console.log(e));
// }

// console.log(printOutput(add(10, 15)));
// console.log(add(10, 12));

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

const add = (...number: number[]) => {
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
