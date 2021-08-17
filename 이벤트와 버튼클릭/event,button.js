// 이벤트(event)와 버튼 클릭
// 이벤트(event) - 웹 페이지에서 일어날 수 있는 대부분의 일들을 이벤트라고 한다. 

// 버튼을 눌렀을 때 콘솔에 Hello world!라는 문구가 출력된다. 

const btn = document.querySelector('#myBtn'); 

// 이벤트 핸들링(Event Handling) - 이벤트가 발생했을 때 특별한 동작이 발생하도록 이벤트를 다루는것 
btn.onclick = function () {  // 이벤트 핸들러(Event Handler) - 구체적인 동작들을 함수로 작성한 코드 부분 
  console.log('Hello world!');
}

// 웹 페이지의 구조 - html파일 
// 동작 - js파일