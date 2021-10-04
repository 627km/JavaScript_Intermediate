// 이벤트 위임 (Event Delegation)
const list = document.querySelector('#list')

/*
for (let item of list.child) {
  item.addEventListener('click', function(e) {
    e.target.classList.toggle('done');
  });
}

--위에 처럼 코딩을 하면 아래와 같이 기존에 없던 항목을 새로 추가하는 경우 이벤트 핸들러가 적용되지 않는다. --

const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기'; 
list.append(li);
*/


// 이 경우에는 부모요소에 이벤트 핸들러를 등록하면 추가되는 자식요소에도 적용이 된다. (자식요소의 이벤트를 부모요소에 위임함)
list.addEventListener('click', function(e) {
  // if (e.target.tagName === 'LI')
  if (e.target.classList.contains('item')) {  // 이벤트 위임을 할 때는 원하는 곳에서 이벤트가 동작하도록 따로 처리를 해줘야 한다. 
    e.target.classList.toggle('done');
  }
});

const li = document.createElement('li');
li.classList.add('item');
li.textContent = '일기 쓰기';
list.append(li);