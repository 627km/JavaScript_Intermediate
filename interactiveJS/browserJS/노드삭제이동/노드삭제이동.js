// 노드 삭제 이동
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');


// 노드 삭제하기: Node.remove();
/*
tomorrow.remove();  id 값이 tomorrow인 ol태그 전부가 삭제된다. 
today.children[2].remove();  today의 자식요소중 2번 인덱스인 '3. 고양이 장난감 쇼핑' 이 삭제된다. 
*/

// 노드 이동하기: prepend, append, before, after
today.append(tomorrow.children[1]); // today의 제일 마지막에 tomorrow의 자식요소 중 1번 인덱스(2. 뮤지컬 공연 예매)를 이동시킨다. 
tomorrow.children[0].after(today.children[1]); // tomorrow의 자식요소 중 0번 인덱스(1. 자바스크립트 공부) 뒤쪽에 today의 자식요소 중 1번 인덱스(2. 고양이 화장실 청소)를 이동시킨다. 