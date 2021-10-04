/**
 * [input 태그 다루기] - 입력의 역할
 * 
 * > 포커스 이벤트
 * focusin: 요소에 포커스가 되었을 때
 * focusout: 요소에 포커스가 빠져나갈 때
 * focus: 요소에 포커스가 되었을 때 (버블링 X)
 * blur: 요소에 포커스가 빠져나갈 때 (버블링 X)
 * 
 * > 입력 이벤트
 * input: 사용자가 입력을 할 때  -> esc, shift 와 같은 입력과 상관없는 키에는 이벤트가 발생하지 않는다. 
 * change: 요소의 값이 변했을 때  -> 값 입력을 마치고 다른 요소로 포커스가 옮겨질 때 이벤트가 발생한다.
 */

const el = document.querySelector('#form');

function printEventType(e) {
  console.log('type:', e.type);
  console.log('target:', e.target);
  console.log('-------------------');
}

el.addEventListener('focusin', printEventType);
el.addEventListener('focusout', printEventType);
el.addEventListener('input', printEventType);
el.addEventListener('change', printEventType);
