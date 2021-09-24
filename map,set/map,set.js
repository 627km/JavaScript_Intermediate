/**
 * map 
 *: 이름이 있는 데이터를 저장한다는 점에서 객체와 비슷하다. 
 *: 하지만 할당연산자를 통해 값을 추가하고 점 표기법이나 대괄호 표기법으로 접근하는 일반 객체와 다르게 Map은 메소드를 통해서 값을 추가하거나 접근할 수 있다.
 * map.set(key, value): key를 이용해 value를 추가하는 메소드
 * map.get(key): key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
 * map.has(key): key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드
 * map.delete(key): key에 해당하는 값을 삭제하는 메소드
 * map.clear(): Map안의 모든 요소를 제거하는 메소드
 * map.size: 요소의 개수를 반환하는 프로퍼티 (메소드가 아닌 점 주의! 배열의 length 프로퍼티와 같은역할)
 */
// Map 생성
 const codeit = new Map(); 
// set 메소드
codeit.set('title', '문자열 key');
codeit.set(2017, '숫자형 key');
codeit.set(true, '불린형 key');

// get 메소드
console.log(codeit.get(2017)); // 숫자형 key
console.log(codeit.get(true)); // 불린형 key
console.log(codeit.get('title')); // 문자열 key

// has 메소드
console.log(codeit.has('title')); // true
console.log(codeit.has('name')); // false

// size 프로퍼티
console.log(codeit.size); // 3

// delete 메소드
codeit.delete(true);
console.log(codeit.get(true)); // undefined
console.log(codeit.size); // 2

// clear 메소드
codeit.clear();
console.log(codeit.get(2017)); // undefined
console.log(codeit.size); // 0

/**
 * set
 *: 여러 개의 값을 순서대로 저장한다는 점에서 배열과 비슷하다.
 *: 하지만 배열의 메소드는 활용할 수 없고 Map과 비슷하게 Set만의 메소드를 통해서 값을 다루는 특징이 있다.
 * set.add(value): 값을 추가하는 메소드 (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환)
 * set.has(value): Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드
 * set.delete(value): 값을 제거하는 메소드 (메소드를 호풀한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환)
 * set.clear(): Set안의 모든 요소를 제거하는 메소드
 * set.size: 요소의 개수를 반환하는 프로퍼티 (메소드가 아닌 점 주의! 배열의 legnth 프로퍼티와 같은 역할)
 */
// Set 생성
const members = new Set();

// add 메소드
members.add('영훈'); // Set(1) {"영훈"}
members.add('윤수'); // Set(2) {"영훈", "윤수"}
members.add('동욱'); // Set(3) {"영훈", "윤수", "동욱"}
members.add('태호'); // Set(4) {"영훈", "윤수", "동욱", "태호"}

// has 메소드
console.log(members.has('동욱')); // true
console.log(members.has('현승')); // false

// size 프로퍼티
console.log(members.size); // 4

// delete 메소드
members.delete('종훈'); // false
console.log(members.size); // 4
members.delete('태호'); // true
console.log(members.size); // 3

// clear 메소드
members.clear();
console.log(members.size); // 0

// Set 에는 개별 값에 바로 접근하는 방법이 없다. 
// Set 은 중복되는 값을 허용하지 않는 독특한 특징이 있다. 
