/**
 * JSON (Java Script Object Notation) - 데이터 포맷
 * 1. JSON에서는 각 프로퍼티의 이름을 반드시 큰 따옴표("")로 감싸줘야한다. 
 * 2. JSON에서는 값이 문자열인 경우 작은따옴표가 아닌 큰따옴표("")를 사용해야 한다. 
 * 3. JSON에서는 프로퍼티의 값으로 사용할 수 있는 undefined, NaN, Infinity 등을 사용할 수 없다.
 * 4. JSON에서는 주석을 추가할 수 없다. (코드가 아니라 데이터 포맷이기 때문에 그 안에 주석을 포함시킬 수 없다. )
 */

// JS
const member = {
  name: 'Michael Kim',
  height: 180,
  weight: 70,
};
// JSON
const member = {
  "name": "Michael Kim",
  "height": 180,
  "weight": 70,
};

// JSON 데이터를 객체로 변환하기
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);  // parse 메소드를 사용하면 string 타입의 JSON데이터를 자바스크립트 문법인 배열로 변환하여 이용하기에 편하다. 
    console.log(users.length);
    users.forEach((user) => { // forEach - 배열의 각 요소를 순회하면서 매번 그 파라미터로 받은 함수를 실행하는 메소드
      console.log(user.name)
    });
  });