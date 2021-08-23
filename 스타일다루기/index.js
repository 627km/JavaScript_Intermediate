// 스타일 다루기
const today = document.querySelector('#today');
const tomorrow = document.querySelector('#tomorrow');

// style 프로퍼티
today.children[0].style.textDecoration = 'line-through';  
// today의 자식요소 중 0번인덱스에 가운데 줄을 긋는 text-decoration을 해준다. style 프로퍼티를 사용해서 css 속성을 다룰 때 text-decoration 과 같이 여러 단어를 이은 속성을 사용할 때는 camel 표기법을 사용한다 (textDecoration)
today.children[0].style.backgroundColor = '#dddddd';

// elem.className
today.children[1].className = 'done'; // done class에 미리 입혀진 style이 today의 자식요소 중 1번 인덱스에 적용된다. 그러나 이렇게 해주면 기존의 item class는 사라지고 done class로 바뀌게 된다. 

// elem.classList: add, remove, toggle
console.log(today.classList); // class 속성을 하나씩 다룰 수 있다. 
console.log(today.children[1].classList);

const item = tomorrow.children[1];
item.classList.add('done');  // item(tomorrow의 자식요소 중 1번 인덱스 = 뮤지컬 공연 예매)에 done class를 추가한다. 
item.classList.remove('done'); // item에 done class를 제거한다.
item.classList.toggle('done'); // item에 done이라는 class가 있으면 제거하고 없으면 추가한다. 
// item.classList.toggle('done', 'true or false'); 두 번째 파라미터의 자리에는 ture와 false가 들어가는데 ture는 add의 기능을 하고, false는 remove의 기능을 한다. 

