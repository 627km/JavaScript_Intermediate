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
