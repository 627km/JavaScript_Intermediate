// 이벤트 객체 (Event Object)
const myInput = document.querySelector('#myInput');
const myBtn = document.querySelector('#myBtn');

myInput.addEventListener('keydown', function () {  // 키보드를 누르는 순간
  console.log('KeyboardEvent');
});

myBtn.addEventListener('click', function () {  // 왼쪽 버튼을 누르는 순간
  console.log('MouseEvent');
});

// 이벤트 핸들러의 첫 번째 파라미터에는 이밴트 객체가 전달된다. 

function printEvent(event) {
  console.log(evnet);
}

myInput.addEventListener('keydown', printEvent);
myBtn.addEventListener('click', printEvent);