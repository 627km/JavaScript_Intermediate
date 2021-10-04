// 이벤트 캡쳐링 (Event Capturing)

/*
우선, 표준 DOM 이벤트에서 정의한 이벤트 흐름에는 3가지 단계가 있다. 
1. 캡쳐링 단계: 이벤트가 하위 요소로 전파되는 단계
2. 타깃 단계: 이벤트가 실제 타깃 요소에 전달되는 단계
3. 버블링 단계: 이벤트가 상위 요소로 전파되는 단계

이벤트가 발생하면 가장먼저 window 객체에서부터 target 까지 이벤트 전파가 일어난다. (캡쳐링 단계)
그리고 나서 target 에 도달하면 target 에 등록된 이벤트 핸들러가 동작하고, (타깃 단계)
이후 다시 window 객체로 이벤트가 전파된다. (버블링 단계)

상황에 따라 캡쳐링 단계에서 부모 요소의 이벤트 핸들러를 동작시켜야 할 수도 있다. 
캡쳐링 단계에서 이벤트 핸들러를 동작시키려면, addEventListener 에 세번째 프로퍼티에 true 또는 {capture:true} 를 전달하면 된다. 
*/ 

for (let elem of document.querySelectorAll('*')) {
  elem.addEventListener("click", e => alert(`캡쳐링 단계: ${elem.tagName}`), true);
  elem.addEventListener("click", e => alert(`버블링 단계: ${elem.tagName}`));
}