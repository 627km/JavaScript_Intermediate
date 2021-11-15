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