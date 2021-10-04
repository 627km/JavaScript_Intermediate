// Parameter
function greeting(name) {
  console.log(`Hi! My name is ${name}!`);
};

greeting('JavaScript');  // Hi! My name is JavaScript!
greeting('Codeit');  // Hi! My name is Codeit!
greeting('World');  // Hi! My name is World!
greeting();  // argument에 아무 값도 입력하지않은 채 함수를 호출하면 -> Hi! My name is undefined 가 출력된다. 
// 위의 JavaScript, Codeit, World 와 같이 파라미터로 전달하는 값을 가리켜서 아큐먼트(Argument) 라고 한다.

// 함수의 파라미터의 기본값을 설정하는 문법은 ES2015에 등장한 문법이기 때문에 ES2015이후에 문법을 지원하는 환경에서는 사용할 수없을 수 있으니 참고. 