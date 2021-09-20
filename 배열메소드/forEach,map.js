// forEach와 map 


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
