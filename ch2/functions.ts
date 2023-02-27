function add(n1: number, n2: number) {
  return n1 + n2;
}

// void 인 이유는 아무런 반환(리턴)값이 없기 때문이다.
function printResult(num: number): void {
  console.log("Result : " + num);
}

printResult(add(10, 55));
