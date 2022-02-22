// rejected 상태일때 실행되는 콜백 
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text(), (error) => { console.log(error); }) // 첫 번째 콜백 : fulfilled 상태일때 실행할 콜백 , 두 번째 콜백 : rejected 상태일때 실행할 콜백
  .then((result) => { console.log(result); });

// 첫 번째 파라미터로 작업 성공결과가 넘어옴, 두 번째 파라미터로는 작업실패정보가 넘어온다.  

// 만약 인터넷이 끊긴 상태에서 위의 코드를 실행시키면 
// VM253:1 GET https://jsonplaceholder.typicode.com/users net::ERR_INTERNET_DISCONNECTED 200
// 라는 작업실패정보가 출력된다. 