// 값으로서 함수
const printJS = function () {
  console.log('JavaScript');
};

console.log(typeof printJS); // function 출력
console.dir(printJS); // 객체의 속성을 출력해준다.

const myObject = {
  brand: 'Codeit',
  bornYear: 2017,
  isVeryNice: true,
  sayHi: function(name) {  // 자바스크립트에서 함수는 객체안에서 프로퍼티로 선언할 수 있다. 
    console.log(`Hi! ${name}`);
  }
};

myObject.sayHi('JavaScript'); // Hi! JavaScript 출력

// Callback Function(콜백 함수): 다른함수의 파라미터에 전달 된 함수
// Higher Order Function(고차함수): 함수를 리턴하는 함수
// First Class Function(일급함수) 
//: 자바스크립트에서 함수는 변수나 다른 데이터 구조안에 할당 될 수 있고, 다른함수의 파라미터로 전달 될 수있고, 다른함수의 리턴값이 될 수있다. 