const today = document.querySelector('#today');

today.innerHTML = '<li>처음</li>' + today.innerHTML;  // innerHTML 은 기존 내용을 대신하기 때문에 추가할 내용 + 기존내용을 해줘야한다. 
today.innerHTML = today.innerHTML + '<li>마지막</li>';

today.outerHTML = '<p>이전</p>' + today.outerHTML;  // outerHTML 은 기존 내용을 대신하기 때문에 추가할 내용 + 기존내용을 해줘야한다.

const newToday = document.querySelector('#today');  // outerHTML은 프로퍼티를 수정하면 완전히 새로운 요소가 되므로 그 요소를 다루려면 다시 찾아야 한다. 
newToday.outerHTML = newToday.outerHTML + '<p>다음</p>';

// 요소 노드 추가하기
const tomorrow = document.querySelector('#tomorrow');

// 1. 요소 노드 만들기: document.createElement('태그이름')
const first = document.createElement('li');

// 2. 요소 노드 꾸미기: textContent, innerHTML, ...
first.textContent = '처음';

// 3. 요소 노드 추가하기: NODE.prepend, append, after, before
tomorrow.prepend(first);  // prepend 메소드는 노드의 제일 첫 번째 노드로 추가가 된다.

const last = document.createElement('li');
last.textContent = '마지막';
tomorrow.append(last); // append 메소드는 노드의 제일 마지막 노드로 추가가 된다.

const prev = document.createElement('p');
prev.textContent = '이전';
tomorrow.before(prev); // before 메소드는 호출 한 노드의 앞쪽에 형제노드로 추가해준다. 

const next = document.createElement('p');
next.textContent = '다음';
tomorrow.after(next); // after 메소드는 호출 한 노드의 뒤쪽에 형제노드로 추가해준다. 