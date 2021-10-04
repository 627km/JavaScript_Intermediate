// AND와 OR의 연산방식
console.log('Codeit' && 'JavaScript'); // ture AND true 라서 true가 출력될 것 같지만 'JavaScript'가 출력된다.

console.log(true && true);  // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false);  // false
// (AND 연산자)JavaScript 에서는 왼쪽 값이 truthy 하면 오른쪽 값을 return 하고, 왼쪽 값이 falsy 하면 왼쪽 값을 return 한다. 
// 따라서 console.log('Codeit' && 'JavaScript') 는 왼쪽 값이 truthy 하니까 오른쪽 값을 return 한다.

console.log(true || true);  // true
console.log(true || false);  // true
cossole.log(false || true);  // true
console.log(false || false);  // false
// (OR 연산자)JavaScript 에서는 왼쪽 값이 truthy 하면 왼쪽 값을 return 하고, 왼쪽 값이 falsy 하면 오른쪽 값을 return 한다. 

console.log(null && undefined); // 왼쪽 값이 falsy -> null
console.log(0 || true); // 왼쪽 값이 falsy -> true
console.log('0' && NaN); // 왼쪽 값이 truthy -> NaN
console.log({} || 123); // 왼쪽 값이 truthy -> 123

function print(value) {
  const message = value || 'Codeit';

  console.log(message);
}

print();  // 파라미터로 아무 값도 전달하지 않아서 value 를 falsy한 값으로 만들어서 'Codeit'을 출력하게 한다. 
print('JavaScript');  // 파라미터로 값을 전달해서 value를 truthy한 값으로 만들어서 파라미터로 전달한 값을 출력하게 한다. 


// null 병합 연산자: 물음표 두 개(??)를 사용해서 null 혹은 undefined 값을 가려내는 연산자이다. 
const example = null ?? 'I';  // '??' 왼쪽에 null이 있으면 오른쪽 값이 리턴된다. -> I
const example = undefined ?? 'love';  // '??' 왼쪽에 undefined이 있으면 오른쪽 값이 리턴된다. -> love
const example = 'Codeit' ?? 'JavaScript';  // '??' 왼쪽에 null 또는 undefined 가 없으면 왼쪽 값이 리턴된다. -> Codeit

console.log(example1, example2, example3);  // I love Codeit