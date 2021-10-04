// DOM TREE - 원하는 요소 노드의 다양한 방식으로 접근할 수 있다. 
// 텍스트 노드는 요소 노드의 자식 노드가 되고, 자식 노드를 가질 수 없다. 

const myTag = document.querySelector('#content'); // html 파일의 id 값이 content인 것을 선택

console.log(myTag);

// 자식 요소 노드 
console.log(myTag.children[1]); // 자식 요소 노드 4개중에 1번 인덱스의 요소가 출력된다. - list-1 의 ul태그가 선택된다. 
console.log(myTag.firstElementChild); // 자식 요소 노드 중 첫 번째 요소가 출력
console.log(myTag.lastElementChild); // 자식 요소 노드 중 마지막 요소가 출력

// 부모 요소 노드
console.log(myTag.parantElement); // content태그의 부모태그인 boby태그가 선택된다. 

// 형제 요소 노드 (sibling = 형제)
console.log(myTag.previousElementSibling);  // content태그의 이전 형제는 없기 때문에 null이 출력되고
console.log(myTag.nextElementSibling);  // content태그의 다음 형제는 script태그 이기 때문에 script태그가 출력된다. 

console.log(myTag.firstElementChild.nextElementSibling); // content 태그의 첫 번째 자식 요소 노드의 다음 형제 요소 노드인 list-1 의 ul태그가 선택된다. 