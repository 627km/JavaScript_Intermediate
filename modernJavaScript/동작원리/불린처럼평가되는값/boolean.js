// 불린처럼 평가되는 값

/** False로 평가되는 값 -> Falsy 값
 * false
 * null
 * undefined
 * NaN
 * 0
 * ''
 */

/** True로 평가되는 값 -> Truthy 값
 * 나머지 값들! 
 */

if ('codeit') {  // 불린 값이 와야하는 자리에 문자열이 왔을 때 이때 문자열은 true로 평가된다. 
  console.log('I love JavaScript!');  // 따라서 I love JavaScript! 가 출력된다. 
} else {
  console.log('I hate JavaScript!');
}