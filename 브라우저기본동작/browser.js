// 브라우저의 기본 동작
const link = document.querySelector('#link');
const checkbox = document.querySelector('#checkbox');
const input = document.querySelector('#input');
const text = document.querySelector('#text');

// event.preventDefault - 브라우저의 기본동작을 막을 수 있다.
link.addEventListener('click', function(e) {  // Link를 클릭해도 입력된 주소로 이동하지않고 경고창을 띄우는 것이다. 
  e.preventDefault();
  alert('지금은 이동할 수 없습니다.');
});

input.addEventListener('keydown', function(e) {  // checkbox가 체크되지 않으면 input 태그에서 키가 입력되지않게 하는것
  if (!checkbox.checked) {
    e.preventDefault();
    alert('체크박스를 먼저 클릭해 주세요.');
  }
});

text.addEventListener('contextmenu', function(e) {  // text 위에서 마우스 오른쪽 클릭이 안되고 경고창을 띄우느 것이다.
  e.preventDefault();
  alert('마우스 오른쪽 클릭은 사용할 수 없습니다.');
});

document.addEventListener('contextmenu', function(e) {  // text 위에서 뿐만 아니라 문서 전체에서 마우스 오른쪽 클릭을 사용할 수 없다. (text -> document)
  e.preventDefault();
  alert('마우스 오른쪽 클릭은 사용할 수 없습니다.');
});


// 브라우저의 기본 동작을 막는 일도 버블링을 막는 것과 마찬가지로 꼭 필요한 일인지 고민해보고 하기. 꼭 필요한 경우에만 사용하기.