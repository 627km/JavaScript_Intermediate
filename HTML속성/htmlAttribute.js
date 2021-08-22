// HTML 속성 (HTML attribute)
const tomorrow = document.querySelector('#tomorrow');
const item = tomorrow.firstElementChild;
const link = item.firstElementChild;

// elem.getAttribute('속성'): 속성에 접근하기 - 표준, 비표준 상관없이 html파일에서 해당 태그의 추가된 모든 태그에 접근할 수있다. 
console.log(tomorrow.getAttribute('href'));  // id값이 tomorrow인 태그의 href속성 값 -> http://www.codeit.kr 출력 
console.log(item.getAttribute('class'));  // item(tomorrow의 첫 번째 자식요소의 class에 접근) -> item출력

// elem.setAttribute('속성', '값'): 속성 추가(수정)하기 -> 기존에 없었던 속성은 새로 추가가 되지만 존재하는 속성에는 수정이 된다. 
tomorrow.setAttribute('class', 'list');  // 추가
link.setAttribute('href', 'http://www.codeit,kr');  // 수정 

// elem.removeAttribute('속성'): 속성 제거하기
tomorrow.removeAttribute('href');
tomorrow.removeAttribute('class'); 

// id 속성
console.log(tomorrow);
console.log(tomorrow.id);

// class 속성
console.log(item);
console.log(item.className);

// href 속성
console.log(link);
console.log(link.href);
console.log(tomorrow.href);  // <ol>태그에 href속성을 넣는것은 html 표준속성에 어긋나기 때문에 undefined가 출력된다. 
