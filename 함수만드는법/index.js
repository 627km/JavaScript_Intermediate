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