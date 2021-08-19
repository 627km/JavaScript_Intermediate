// DOM (Document Object Model) - 문서 객체 모델 (즉, 웹페이지에 나타나는 html문서 전체를 객체로 표현한 것)

console.log(document);  // 객체가 아니라 DOM에 해당하는 html이 출력된다. 태그형태로 출력이 된다.(log 메소드) 
console.log(typeof document);  // 자료형은 object
console.dir(document);  // 객체형태로 다양한 프로퍼티들이 출력이 된다. (dir 메소드)

const title = document.querySelector('#title');
// DOM을 활용하면 JavaScript로 HTML태그를 객체처럼 자유롭게 다룰 수 있다. 

const str = 'Codeit';
const num = 123;
const bool = true;
const arr = [1, 2, 3];
const obj = {
  name: 'Codeit',
  email: 'codeit@codeit.kr',
};

function func() {
  console.log('I love Codeit!');
}

console.log('--- str ---');
console.log(str);
console.dir(str); // dir 메소드는 문자열 표시 형식으로 콘솔에 출력한다.
console.log('--- num ---');
console.log(num);
console.dir(num); // dir 메소드는 문자열 표시 형식으로 콘솔에 출력한다.
console.log('--- bool ---');
console.log(bool);
console.dir(bool); // dir 메소드는 문자열 표시 형식으로 콘솔에 출력한다.

// log 메소드는 파라미터로 전달받은 값을 위주로 출력
// dir 메소드는 객체의 속성을 좀 더 자세하게 출력 
console.log('--- arr ---');
console.log(arr);  
console.dir(arr);  
console.log('--- obj ---');
console.log(obj);
console.dir(obj);
console.log('--- func ---');
console.log(func);
console.dir(func);

// log는 여러개, dir은 하나만
console.log(str, num, bool, arr, obj, func); // log 메소드는 여러 값을 쉼표로 구분해서 전달하면 전달받은 모든 값을 출력
console.dir(str, num, bool, arr, obj, func); // dir 메소드는 여러 값을 전달하더라도 첫 번째 값만 출력

// DOM 객체를 다룰 때
const myDOM = document.body;

console.log(myDOM);  // log 메소드는 대상을 HTML 형태로 출력
console.dir(myDOM);  // dir 메소드는 대상을 객체형태로 출력한다. (객체의 속성에 중점을 둔다.)

// 즉, 콘솔에서 값 자체를 확인하고 싶으면 log메소드를, 객체의 속성을 살펴보고 싶으면 dir메소드를 활용하면 좋다. 