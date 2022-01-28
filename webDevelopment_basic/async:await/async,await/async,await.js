// async 와 await 을 사용한 비동기실행
// async (asynchronous의 줄임말 : 비동기를 의미) -> 함수안에 비동기적으로 수행할 부분이 있다는 것을 의미 
// await은 뒤에 있는 코드를 실행하고 리턴하는 promise 객체가 fulfilled 상태가 될 때까지 기다린다. 그리고 해당 promise 객체가 fulfilled 상태가 되면 그 작업 성공 결과를 추출해서 리턴한다. 

// 1. 원래코드 
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => { console.log(result); });


// 2. async 와 await 을 사용  (await 키워드는 async 함수 안에서만 사용가능하다.)
async function fetchAndPrint() {  // fetchAndPrint 라는 함수를 만든다. 
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await response.text();
  console.log(result);
}  

fetchAndPrint();

// 3. 다른 코드들과 같이 있을 때 async 함수의 비동기실행
async function fetchAndPrint() {  // fetchAndPrint 라는 함수를 만든다. 
  console.log(2);
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  console.log(7);
  const result = await response.text();
  console.log(result);
}  

console.log(1);
fetchAndPrint();
console.log(3);
console.log(4);
console.log(5);
console.log(6);
// 1부터 7까지 순서대로 출력이된다. 

/*
<정리> 
async/await 구문은 Promise 객체를 우리에세 이미 익숙한 동기 실행 코드 방식으로 다룰 수 있게 해주는 문법이다.
하지만 동기 실행 코드처럼 보인다고 해서 정말로 동기 실행되는 것은 아니다.
코드에서 async/await이 보인다면 사실 비동기 실행이 있다는 걸 반드시 기억해야한다. 

async/await을 사용하면 
1) Promise 객체를 사용할 때, then 메소드 등을 사용하지 않고도
2) 마치 동기 실행 코드처럼 코드를 훨씬 더 간단하고 편하게 작성할 수 있다. 

async/await 구문의 실행 원리 
async함수 안의 코드가 실행되다가 await을 만나면, 일단 await 뒤의 코드가 실행되고, 코드의 실행 흐름이 async 함수 바깥으로 나가서 나머지 코드를 다 실행
어느 경우든 그 이후로는, await 뒤에 있던 Promise 객체가 fulfilled 상태가 되기를 기다린다. 그리고 기다리던 Promise 객체가 fulfilled 상태가 되면
await이 Promise 객체의 작업 성공 결과를 리턴한다. 
*/


// 4. async/await 은 Promise 객체를 return한다.
async function fetchAndPrint() {
  return 3;
}

fetchAndPrint();
// async함수가 붙어있는 fetchAndPrint함수는 숫자 3을 작업성공결과로 가진 fulfilled 상태의 Promise객체를 return 한다. 

// 5. 함수안에서 아예 Promise 객체를 return 하기
async function fetchAndPrint() {
  return fetch('https://jsonplaceholder.typicode.com/uers')
          .then((response) => response.text());
}

/*
async 함수 안에서 리턴하는 값의 종류에 따라 어떤 Promise 객체를 리턴하게 되는가
1. 어떤 '값'을 리턴하는 경우
  1) Promise 객체를 리턴하는 경우 
    해당 Promise 객체와 동일한 상태와 작업 성공 결과(또는 작업 실패 정보)를 가진 Promise 객체를 리턴한다.
  2) Promise 객체 이외의 값을 리턴하는 경우
    숫자나 문자열, 일반객체 등을 리턴하는 경우에는, fulfilled 상태이면서 리턴된 값을 작업 성공 결과로 가진 Promise 객체를 리턴한다. 

2. 아무 값도 리턴하지 않는 경우
  아무 값도 리턴하지 않으면 자바스트립트에서는 undefined를 리턴한다고 간주한다. 따라서 fulfilled 상태이면서 undefined를 작업상공 결과로 가진 Promise 객체가 리턴된다.

3. async 함수 내부에서 에러가 발생한 경우 
  rejected 상태이면서, 해당 에러 객체를 작업 실패 정보로 가진 Promise 객체가 리턴된다. 
*/