let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// any는 할당 가능
// userName = userInput;

// case2
if (typeof userInput === "string") {
  userName = userInput;
}
