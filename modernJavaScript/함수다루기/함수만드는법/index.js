// 함수를 만드는 방법
/*
function 함수이름() {
  동작
  return 리턴값
}
*/


// 함수선언을 값처럼 할당하는 방법: 함수 표현식(Function Expression)
const printCodeit = function () {
  console.log('Codeit');
};

printCodeit();

/**
 * 함수선언방식: 선언을 하기전에 호출이 가능하다. 
 * 함수표현식: 선언을 하기전에 접근이 안된다. 
 */


// 즉시 실행 함수 (Immediately Invoked Function Expression; IIFE)
//: 함수선언 부분을 소괄호로 감싼 다음에 바로 뒤에 함수를 실행하는 소괄호를 한 번 더 붙여주는 방식
/* 
(function () {
  console.log('Hi');
})();
*/