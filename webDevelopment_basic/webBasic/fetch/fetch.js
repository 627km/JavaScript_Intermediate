// fetch: 서버에 request(요청)을 보내고 response(응답)를 받는 함수.
fetch('https://www.google.com') // 파라미터에 있는 url로 request를 보낸다. 
  .then((response) => response.text())  // then : 콜백을 등록해주는 메소드 
  .then((result) => { console.log(result); }); // result 라는 파라미터로 이전 콜백의 리턴값인 response.text()가 전달된다. 

  /** fetch 함수의 실행 원리
 * 1. fetch 함수는 어떤 객체를 리턴하는(Promise 객체)
 * 2. 이 객체의 then 메소드로, '리스폰스가 왔을 때 실행할 콜백'을 등록할 수 있다.
 * 3. 이렇게 등록된 콜백들은 then메소드로 등록한 순서대로 실행되고, 이때 이전 콜백의 리턴값을 이후 콜백이 넘겨받아서 사용할 수 있다. 
 */

// Arrow function - function 키워드를 보다 간결하게 표현하고자 나온 문법
// function 키워드를 지워주고 소괄호() 오른편에서 등호와 부등호로 화살표 기호(=>) 를 추가한다. 
const getTwice = function(number) {  // const getTwice = (number) => {
  return number * 2;
};
// 또한 getTwice 함수처럼 파라미터가 하나인 함수는 () 생략가능 
// 또한 내부의 동작부분이 return문 하나로만 이루어져있으면 return, {} 도 생략해서 표현 가능하다.(그러나 return값이 객체로 이루어져있으면 생략 불가능)
// const getTwice = number => number * 2; 

console.log(getTwice(5));

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', function () {  // myBtn.addEventListener('click', () => {
  console.log('button is clicked!');
});