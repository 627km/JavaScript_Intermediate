// 에러와 에러 객체
console.log('시작!');

const title = '코드잇';
console.log(title);
console.log(codeit); 
// codeit 이라는 변수가 선언되지 않았기 때문에 출력하려고 하면 에러가 발생한다. 에러가 발생하므로 에러가 발생 한 지점 아래는 동작을 하지 않고 프로그램이 멈추게 된다.  


console.log('끝!');

// 에러 객체는 name, message 로 이뤄져있다. 
// 존재하지 않는 함수나 변수를 호출할 때 - referenceError
// 문자열이 담긴 변수를 함수처럼 사용해서 잘못된 방식으로 자료형을 다루는 경우 - typeError
// 문법에 맞지 않는 코드를 작성하게 되는 경우 - syntaxError (아예 코드를 실행시키기전에 에러를 발생시킨다.)

// 의도적으로 에러를 만드는 방법
const error = new TypeError('타입 에러가 발생했습니다.');

throw error; // 에러 객체 발생시키는 코드 

console.log(error.name);  // TypeError 
console.log(error.message);  // 타입 에러가 발생했습니다. 