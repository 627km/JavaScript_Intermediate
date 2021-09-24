// forEach와 map 
/**
 * forEach
 *: 배열의 요소를 하나씩 살펴보면서 반복 작업을 하는 메소드이다.
 */
const numbers = [1, 2, 3];

numbers.forEach((element, index, array) => {    // index 와 array는 생략가능
  console.log(element); // 순서대로 콘솔에 1, 2, 3이 한 줄씩 출력됨.
});

/**
 * map
 *: forEach와 비슷하게 배열의 요소를 하나씩 살펴보면서 반복작업을 하는 메소드이다. 단, 첫번째 아규먼트로 전달하는 콜백함수가 매번 리턴하는 값들을 모아서 새로운 배열을 만들어 리턴하는 특징이 있다.
 */

const numbers = [1, 2, 3];
const twiceNumbers = numbers.map((element, index, array) => {
  return element * 2;
});

console.log(twiceNumbers); // (3) [2, 4, 6]

// filter와 find 
// filter -> 조건에 맞는 값을 모두 찾아서 배열의 형태로 리턴
// find -> 조건에 맞는 값을 하나만 찾아서 값으로 리턴 (조건에 맞는 값이 여러개일 경우 인덱스 값이 앞에 있는 값이 리턴이 된다.)

// some과 every
const numbers = [1, 3, 5, 7, 9];
// some: 조건을 만족하는 요소가 1개 이상 있는지 -> 조건을 만족하는 값을 하나라도 찾으면 반복이 중단된다. 
// -> 조건을 만족하지않는 요소가 1개 이상 있는지
const someReturn = numbers.some((el) => el > 5);
// every: 모든 요소가 조건을 만족하는지 -> 조건을 만족하지 않는 값을 찾으면 반복이 중단된다. 
const everyReturn = numbers.every((el) => el > 5);

console.log('some:', someReturn);  // some: true
console.log('every:', everyReturn);  // every: false 

// reduce
const number = [1, 2, 3, 4];

number.reduce((acc, el, i, arr) => {
  return nextAccValue;
}, initialAccValue);  
// acc (accumulator: 누산기)

/**
 * sort 메소드
 * : sort 메소드에 아무런 아규먼트도 전달하지 않을 때는 기본적으로 유니코드에 정의된 문자열 순서에 따라 정렬된다. 
 */
const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort(); 
numbers.sort();

console.log(letters); // (5) ["A", "B", "C", "D", "E"]
console.log(numbers); // (5) [1, 10, 21, 36000, 4] -> 숫자를 정렬할 때는 우리가 상식적으로 이해하는 오름차순이나 내림차순 정렬이 되지않는다. 

// 오름차순 정렬
numbers.sort((a, b) => a - b);
console.log(numbers); // (5) [1, 4, 10, 21, 36000] 

// 내림차순 정렬
numbers.sort((a, b) => b - a);
console.log(numbers); // (5) [36000, 21, 10, 4, 1] 

// sort 메소드를 사용할 때 한 가지 주의해야 할 부분은 메소드를 실행하는 원본 배열의 요소들을 정렬한다는 점이다. 그래서 한 번 정렬하고 나면 정렬하기 전의 순서로 다시 되돌릴 수 없다. 

/**
 * revers 메소드
 * : 배열의 순서를 뒤집는 메소드이다.
 * : 별도의 파라미터가 존재하지 않기 때문에 단순히 메소드를 호출해주기만 하면 배열의 순서가 뒤집힌다. 
 * : sort 메소드와 마찬가지로 원본 배열의 요소들을 뒤집어 버린다는 점이다. 
 */

const letters = ['a', 'c', 'b'];
const numbers = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters); // (3) ["b", "c", "a"]
console.log(numbers); // (3) [353, 721, 421]
