// 인터페이스는 객체의 구조를 말한다.

// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}
let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};
console.log(add(10, 3));

interface Named {
  readonly name: string;
  outputName?: string;
}
interface Greetable extends Named {
  //   readonly name: string;
  //   age: number;
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  outputName = "...";
  age = 30;

  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

let user1: Greetable;

// user1 = {
//   name: "Max",
//   age: 28,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

user1 = new Person("Max");

user1.greet("Hi there i am");
console.log(user1);
