// 이벤트 핸들러 등록하기

// onclick 프로퍼티
let btn = document.querySelector('#myBtn');

btn.onclick = function () {
  console.log('Hello World!');
};

btn.onclick = function () {  // onclick 프로퍼티도 새로운 이벤트 핸들러를 할당하면 기존의 값을 덮어쓰기 때문에 저장하고 실행하면 Hello Korea! 가 출력된다. 
  console.log('Hello Korea!');
}

function event1() {
  console.log('Hi Codeit!');
}

function event2 () {
  console.log('Hi again!');
}
// elem.addEventListener(event, handler) - 이벤트 핸들러를 등록할 때 가장 권장되는 방법 / handler 부분에는 함수의 이름만 넣어주면 된다.
btn.addEventListener('click', event1);  // 하나의 요소에 여러개의 독립적인 이벤트 핸들러를 등록할 수 있다. 
btn.addEventListener('click', event2);

// elem.removeEventListener(event, handler) - 이벤트 핸들러를 제거 할 수 있다.
btn.removeEventListener('click', event2);


/*
마우스 이벤트
mousedown (마우스 버튼을 누르는 순간)
mouseup (마우스 버튼을 눌렀다 떼는 순간)
click (왼쪽 버튼을 클릭한 순간)
dblclick (왼쪽 버튼을 빠르게 두 번 클릭한 순간)
contextmenu (오른쪽 버튼을 클릭한 순간)
mousemove (마우스를 움직이는 순간)
mouseover (마우스 포인터가 요소 위로 올라온 순간)
mouseout (마우스 포인터가 요소에서 벗어나는 순간)
mouseenter (마우스 포인터가 요소 위로 올라온 순간 (버블링이 일어나지 않음))
mouseleave (마우스 포인터가 요소에서 벗어나는 순간 (버블링이 일어나지 않음))
*/

/*
키보드 이벤트
keydown (키보드의 버튼을 누르는 순간)
keypress (키보드의 버튼을 누르는 순간 ('a', '5' 등 출력이 가능한 키에서만 동작하며, Shift, Esc 등의 키에는 반응하지 않음))
keyup (키보드의 버튼을 눌렀다 떼는 순간)
*/

/*
포커스 이벤트
focusin (요소에 포커스가 되는 순간)
focusout (요소로부터 포커스가 빠져나가는 순간)
focus (요소에 포커스가 되는 순간 (버블링이 일어나지않음))
blur (요소로부터 포커스가 빠져나가는 순간 (버블링이 일어나지않음))
*/

/*
입력 이벤트
change (입력된 값이 바뀌는 순간)
input (값이 입력되는 순간)
select (입력 양식의 하나가 선택되는 순간)
submit (폼을 전송하는 순간)
*/

// 스크롤 이벤트: scroll (스크롤 바가 움직일 때)

// 윈도우 창 이벤트: resize (윈도우 사이즈를 움직일 때 발생)