// 1. 산술 연산자
// +, -, *, /, %, **

console.log(10 / 5); // 2
console.log(10 % 3); // 1
console.log(2 ** 3); // 8
console.log(10 / 5);

// 2. 증감 연산자
// ++, --

let number1 = 10;

number1 ++;
console.log(number1); // 11
number1 --;
number1 --;
console.log(number1); // 9

// 3. 비교 연산자
// ==(추상 비교), ===(엄격 비교), !==, <, >

const a = 123;
const b = '123';
console.log(a == b); // true
console.log(a === b); // false
console.log(a !== b); // false

const c = 10;
const d = 20;

console.log(c > d); // false
console.log(c < d); //true

// 4. 논리 연산자
// &&(and), ||(or), !(not)

const e = 2 < 3;
const f = 30 > 50;

console.log(e && f); // false
console.log(e || f); // true
console.log(e && !f); // true

// 5. 삼항 연산자
// 조건 ? 참일 때 실행될 부분 : 거짓일 때 실행될 부분

console.log(2 < 3 ? "참" : "거짓"); // 참

// 6. 널리쉬(Nullist) 연산자
// 여러 개의 피연산자 중 값이 확정되어 있는 변수를 찾음

const g = undefined;
const h = null;
const i = '박은채';

console.log(g ?? h ?? i); // 박은채

// 7. 비트 연산자
// &, |, ~. ^, << ,>>
// 자바스크립트는 비트 연산자를 지원하긴 하지만 사용하지 않음

// 8. 대입 연산자
// +=, -=, *=, /=, %=

let number2 = 10;
number2 = number2 + 2;
number2 += 2;

number2 %= 5;

// 0. 전개 구문
// 내용들을 다 펼쳐서 보여줌
const numbers = [1, 2, 3];
console.log(numbers) // [1, 2, 3]
console.log(...numbers) // 1 2 3

const numbers2 = [4, 5, 6];
const newNumbers = [...numbers, ...numbers2];
console.log(newNumbers); // [1, 2, 3, 4, 5, 6]