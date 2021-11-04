// fetch: 서버에 request(요청)을 보내고 response(응답)를 받는 함수.
fetch('https://www.google.com')  
  .then((response) => response.text())
  .then((result) => { console.log(result); });


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