"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
console.log(add(10, 3));
class Person {
    constructor(n) {
        this.outputName = "...";
        this.age = 30;
        this.name = n;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user1;
user1 = new Person("Max");
user1.greet("Hi there i am");
console.log(user1);
//# sourceMappingURL=app.js.map