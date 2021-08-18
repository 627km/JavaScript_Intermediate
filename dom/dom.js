// DOM (Document Object Model) - 문서 객체 모델 (즉, 웹페이지에 나타나는 html문서 전체를 객체로 표현한 것)

console.log(document);  // 객체가 아니라 DOM에 해당하는 html이 출력된다. 태그형태로 출력이 된다.(log 메소드) 
console.log(typeof document);  // 자료형은 object
console.dir(document);  // 객체형태로 다양한 프로퍼티들이 출력이 된다. (dir 메소드)

const title = document.querySelector('#title');
// DOM을 활용하면 JavaScript로 HTML태그를 객체처럼 자유롭게 다룰 수 있다. 