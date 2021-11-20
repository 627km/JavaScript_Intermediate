console.log('Start!');

fetch('https://jsonplaceholder.typicode.com/users')  // fetch 함수는 promise 객체를 리턴하고, then은 promise 객체의 메소드이다.
.then((response) => response.text())
.then((result) => { console.log(result); });

console.log('End');

// Promise (작업에 관한 상태정보)
// pending : 진행 중
// fuliflled : 성공 
// rejected : 실패  

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

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users =JSON.parse (result);
    const { id } =user[0];
    return fetch(`https://jsonplaceholder.typicode.com/userId=${id}`);
  })
  .then((response) => response.text())
  .then((posts) => {
    console.log(posts);
  });

console.log('End');