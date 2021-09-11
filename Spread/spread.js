// Spread 구문 (Spread Syntax) - 하나로 묶인 값을 여러개의 값으로 펼친 개념 (ES2015에 나온 문법)
const numbers = [1, 2, 3];

console.log(...numbers);  // numbers 앞에 (...) 을 붙여주면 배열이 아니라 1 2 3 이 출력된다. 

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2]; // spread 구문을 이용하면 배열을 합치는 데에도 편리하다. 

console.log(arr3);  // [1, 2, 3, 4, 5, 6] 이 출력된다. 

const number = [1];
//const number_1 = ...number; -> 하나의 값을 가진 배열을 spread 구문으로 펼치면 오류가 발생한다. 