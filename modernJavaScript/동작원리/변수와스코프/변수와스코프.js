// 변수와 스코프
// var는 중복선언이 가능하다. (문제가 발생할 수 있음)
// 값의 재할당이 필요한 경우에는 let으로 선언 (중복선언 불가능)
// 값의 재할당이 필요하지 않은 경우에는 const로 선언 (중복선언 불가능)

var title = 'Codeit';
console.log(title);
var title = 'JavaScript';
console.log(title);
// 중복선언을 해도 아무러 문제가 발생하지 않고 동작한다.

console.log(title); // undefined  (error가 발생하지않고 나중에 변수를 선언해도 된다. 단, 할당 값은 적용이 안된다.)
var title = 'codeit';
console.log(title); // codeit  (앞에서 선언과 할당을 해줬으므로, 할당해준 값도 적용이 된다.)

console.log(index); // let은 변수선언 전에 접근할 수 없기 때문에 접근할 수 없다는 error가 발생한다. 
let index;

// 스코프 (유효범위)
// var는 전역변수로밖에 사용할 수 없다. (함수 스코프)
// let, const는 괄호 안에서 지역변수로 사용이 된다. (블록 스코프)