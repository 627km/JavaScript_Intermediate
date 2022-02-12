console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')  // fetch 함수는 promise 객체를 리턴하고, then은 promise 객체의 메소드이다.
.then((response) => response.text())
.then((result) => { console.log(result); });

console.log('End');

// Promise (작업에 관한 상태정보)
// pending : 진행 중
// fuliflled : 성공(request를 보내고 response를 정상적으로 받았을 때) (-> 작업성공결과를 갖는다.)
// rejected : 실패  (-> 작업실패정보를 갖는다.)

// then메소드: promise객체가 fulfilled 상태가 되었을 때 실행할 콜백을 등록하는 메소드 
// then 메소드가 새로운 promise객체를 리턴한다. 

/* 
text 메소드
: fetch 함수로 리스폰스를 잘 받으면, reponse 객체의 text 메소드는, fulfilled 상태이면서 리스폰스의 바디에 있는 내용을 string 타입으로 변환한 값을 
'작업 성공 결과'로 가진 promise 객체를 리턴한다. 이때 그 작업의 성공 결과는 string 타입인데, 이때 그 값이 만약 JSON 데이터라면 JSON 객체의 parse 메소드로 
Deserialize 해줘야 한다.
*/

/*
json 메소드 
: fetch 함수로 리스폰스를 잘 받으면, response 객체의 json 메소드는, fulfilled 상태이면서, 리스폰스의 바디에 있는 JSON 데이터를 자바스크립트 객체로 
Deserialize해서 생겨난 객체를 '작업 성공 결과'로 가진 promise 객체를 리턴한다. 만약 리스폰스의 바디에 있는 내용이 JSON타입이 아니라면 에러가 발생하고 
promise 객체는 rejected 상태가 되면서 그 '작업 실패 정보'를 갖게 된다.
*/

/*
1. 콜백에서 Promise 객체를 리턴하는 경우
  : 상태와 결과를 그대로 따라 갖는다. 
2. 콜백에서 Promise 객체가 아닌 값을 리턴하는 경우 
  : fulfilled 상태가 되고 그 값을 작업성공결과로 갖는다.  
/* 

Promise 체이닝이 필요한 경우 
: 비동기실행을 순차적으로 실행해야 할 때 -> 전체 코드를 좀 더 깔끔하게 나타낼 때.
*/
console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users =JSON.parse (result);
    const { id } =user[0];
    fetch(`https://jsonplaceholder.typicode.com/userId=${id}`)
      .then((response) => response.text())
      .then((posts) => {
        console.log(posts);
      });
  });

console.log('End');

// 이렇게 코드를 써도 똑같은 결과가 출력된다. 
console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')  // 전체사용자 정보를 조회하기위해 request를 보낸다. 
  .then((response) => response.text())
  .then((result) => {
    const users =JSON.parse (result);
    const { id } = users[0];  // 첫 번째 사용자의 id를 구해서 
    return fetch(`https://jsonplaceholder.typicode.com/userId=${id}`); //해당 사용자가 작성한 글 목록을 조회해서 출력
  })
  .then((response) => response.text())
  .then((posts) => {
    console.log(posts);
  });

console.log('End');

// Promise 객체 만들기 
const p = new Promise((resolve, reject) => {
// new promise -> 이 부분이 promise 객체를 만드는부분
// (resolve, reject) => {} -> executor 함수
  setTimeout(() => { resolve('success'); }, 2000);  // resolve : promise 객체를 fulfilled 상태로 만든다. 
}); 

// Promise 객체 만들기 
p.then((result) => { console.log(result); });  // 2초 후에 success 라는 문자가 출력된다. 

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => { reject(new Error('fail')); }, 2000);
}); 
  
p1.catch((error) => { console.log(error); });  // 2초 후에 fail 이라는 문자가 출력된다. 


// 이미 상태가 결정된 Promise 객체 만들기
// 1. fulfilled 상태의 Promise 객체 만들기 
const p = Promise.resolve('success'); // Promise의 resolve라는 메소드를 사용하면 바로 fulfilled 상태의 Promise 객체를 만들 수 있다. 

// 2. rejected 상태의 Promise 객체 만들기 
const p = Promise.rejected(new Error('fail')); // Promise의 rejected라는 메소드를 사용하면 바로 rejected 상태의 Promise 객체를 만들 수 있다. 

// 여러 Promise 객체를 다루는 방법

/*  1. all 메소드 */
// 1번 직원 정보
const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());  // deserialize
// 2번 직원 정보
const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());  // deserialize
// 3번 직원 정보
const p3 = fetch('https://learn.codeit.kr/api/members/3').then((res) => res.json());  // deserialize

Promise
  .all([p1, p2, p3])  // 배열 안에 있는 모든 Promise 객체가 pending 상태에서 fulfilled 상태가 될 때까지 기다린다. 
  // 그리고 모든 Promise 객체들이 fulfilled 상태가 되면 all 메소드가 리턴했던 Promise 객체는 fulfilled 상태가 되고, 각 Promise 객체의 작업 성공 결과들로 이루어진 배열을, 그 작업 성공 결과로 갖게된다.  
  .then((results) => {
    console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
  });
  // 3개의 Promise 객체 중 하나라도 rejected 상태가 되면, all 메소드가 리턴한 Promise 객체는 rejected 상태가 되고 동일한 작업 실패 정보를 갖게 된다. 
  // 이렇게 all 메소드는 하나의 Promise 객체라도 rejected 상태가 되면, 전체 작업이 실패한 것으로 간주해야 할 때 사용이된다. 

  /* 2. race 메소드 */
  // race 메소드가 리턴한 Promise 객체는 아규먼트로 들어온 배열의 여러 Promise 객체들 중에서 가장 먼저 fulfilled 상태 또는 rejected 상태가 된 Promise 객체와 동일한 결과를 갖게 된다. 
  const p1 = new Promise((resolve, reject) => {  // 가장 먼저 fulfilled 상태가 된다. 
    setTimeout(() => resolve('Success'), 1000);
  });
  const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('fail')), 2000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('fail2')), 4000);
  });
  
  Promise
    .race([p1, p2, p3])
    .then((result) => {
      console.log(result); // hello 출력
    })
    .catch((value) => {
      console.log(value);
    });