// fetch 함수와 비동기 실행
// 비동기 실행 : 특정 작업을 시작하고 완벽하게 다 처리하기 전에, 실행 흐름이 바로 다음 코드로 넘어가고, 나중에 콜백이 실행되는 것. (동기 실행에 비해 동일한 작업을 더 빠른 시간 내에 처리 할 수있다.)
// 동기 실행 : 한번 시작한 작업은 다 처리하고 나서야, 다음 코드로 넘어가는 방식

 console.log('Start!');

 fetch('https://jsonplaceholder.typicode.com/users')
 .then((response) => response.text())
 .then((result) => { console.log(result); });

console.log('End');

/**
 * 1. console.log('Start!') 실행 -> Start! 출력
 * 2. fetch 함수 실행 -> then 메소드가 콜백등록 (등록만 할 뿐 실행은 하지 않는다.)
 * 3. console.log('End') 실행 ->End 출력
 * 4. fetch 함수안에 있는 then 메소드가 실행 -> 리턴값이 출력
 */


// setTimeout 함수: 특정 함수의 실행을 원하는 시간만큼 뒤로 미루기 위해 사용하는 함수
console.log('a');
setTimeout(() => { console.log('b'); }, 2000);
console.log('c');
// setTimeout 함수는 첫 번째 파라미터에 있는 { console.log('b'); } 를 두 번째 파라미터에 적힌 2000밀리세컨즈(=2초) 뒤로 미룬다.
// 따라서 a 와 c 가 출력되고 2초 뒤에 b가 출력이된다. 

// setInterval 함수: 특정 콜백을 일정한 시간 간격으로 실행하도록 등록하는 함수 
console.log('a');
setInterval(() => { console.log('b'); }, 2000);
console.log('c');
// b를 출력하는 콜백이 2000밀리세컨즈(=2초) 간격으로 계속 실행된다. 
// a 와 c 가 출력되고, 약 2초뒤에 b가 출력된 후 그 뒤로 계속 2초 간격으로 b가 반복출력된다.

// addEventListener 메소드: DOM 객체의 메소드. 민약 사용자가 웹 페이지에서 어떤 버튼 등을 클릭했을 때, 실행하고 싶은 함수가 있으면 
// 1) 해당 DOM 객체의 onclick 속성에 그 함수를 설정하거나,
// 2) 해당 DOM 객체의 addEventListener 메소드의 파라미터로 전달하면 된다. 

// 1) onclick 속성
btn.onclick = function (e) { // 해당 이벤트 객체가 파라미터 e 로 넘어온다. 
  console.log('Hello Codeit!');
};

btn.onclick = (e) => { // arrow function 형식 
  console.log('Hello Codeit!');
};

// addEventListener 메소드 
btn.addEventListener('click', function (e) {
  console.log('Hello Codeit!');
});

btn.addEventListener('click', (e) => {  // arrow function 형식
  console.log('Hello Codeit!');
});

/*
setTime(콜백, 시간)
setInterval(콜백, 시간)
addEventListener(이벤트이름, 콜백)
*/