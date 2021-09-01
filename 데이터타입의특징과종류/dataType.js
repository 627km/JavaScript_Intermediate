/** 기본형 (Primitive Type)
 * Number
 * String
 * Boolean
 * Null
 * Undefined
 * Symbol: 유일한 값을 만들 때 (ES2015)
 * BigInt: 엄청 큰 숫자를 다룰 때 (ES2020)
 */

/** 참조형 (Reference Type)
 * Object
 */

// 연산을 할 때 데이터타입이 유연하게 바뀔 수 있으므로 어떤 상황에 어떤 데이터타입이 출력될지 예상할 줄 알아야 한다. 

// Symbol: 코드 내에서 유일한 값을 가진 변수 이름을 만들 때 사용
const user = Symbol('This is a user');  // 괄호 안에 심볼에 대한 설명을 붙일 수도 있다. 

user === 'This is a user'; // false
user === 'user'; // false
user === 'Symbol'; // false
user === true; // false
user === false; // false
user === 123; // false
user === 0; // false
user === null; // false
user === undefined; // false

const symbolA = Symbol('This is a Symbol');
const symbolB = Symbol('This is a Symbol');

console.log(symbolA === symbolB);  // false