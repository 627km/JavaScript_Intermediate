// Arrow Function 
/*
const getTwice = function(number) {
  return number * 2;
};

console.log(gerTwice(5));

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', function () {
  console.log('button is clicked!');
});
*/

// Arrow Function 으로 작성하는 법: function 을 지우고 소괄호 오른쪽에 등호와 부등호 (=>) 를 붙여준다. 
const getTwice = (number) => {  
  return number * 2;
};

console.log(getTwice(5));

const myBtn = document.querySelector('#myBtn');

myBtn.addEventListener('click', () => {
  console.log('button is clicked!');
});

/** 
 * 간결하게 표현
 *: 파라미터가 하나인 arrow function 은 파라미터를 감싸는 소괄호를 생략할 수 있다.
 *: 동작부분이 return문 하나로 이뤄져있다면 중괄호와 함께 return 키워드도 생락할 수있다. 
 */

const getTwice = number => number * 2;

console.log(getTwice(6));
