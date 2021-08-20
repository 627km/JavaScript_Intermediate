// 요소 노드 주요 프로퍼티 
const tag = document.querySelector('#list-1');

// innerHTML 
console.log(tag.innerHTML);  // 요소안에 있는 HTML자체를 문자열로 리턴해준다. (줄바꿈과 들여쓰기도 포함한다.) -> 요소안의 HTML을 수정하는데 용이하다. 
// tag.innerHTML += '<li>Exotic</li>'; -> 기존 list-1 태그의 내용 마지막에 내용이 추가된다. 
// tag.innerHTML = '<li>Exotic</li>'; -> list-1 태그의 내용 전체가 수정된다. 수정 시 내부에 있던 값을 완전히 새로운 값으로 교체하기 때문에 주의해서 사용해야 함 

// outerHTML
console.log(tag.outerHTML);  // 요소 노드 자체의 전제적인 HTML코드를 문자열로 리턴해준다. (줄바꿈과 들여쓰기도 포함한다.)
// tag.outerHTML = '<ul id="new-list"><li>Exotic</li></ul>'; 수정하는 것이 아니라 값으 대체하는 것이므로 처음에 선택한 값(list-1)은 사라진다. 

// textContext - innerHTML과 비슷하다.
console.log(tag.textContext);  // HTML태그 부분을 제외한 텍스트만 가져온다. 
// tag.textContext = 'new text';  요소안의 내용이 완전히 수정된다. 
// tag.textContext = '<li>new text</li>';  textContext는 특수문자도 텍스트로 인식하기 때문에 <li>new text</li>로 대체가 된다.