// id로 태그 선택하기 
document.getElementById('id');  // document라는 객체의 getElementById라는 메소드를 사용하는 것이다. (id속성을 통해서 html파일에서 어떤 요소를 가져올 수 있다.)
document.getElementById('xx');  // 존재하지 않는 id를 입력하면 undefined가 아닌 null이 출력된다. 

// class로 태그 선택하기
document.getElementsByClassName('class');  // class는 여러요소를 선택하는 것 이므로 Element에 's'가 붙는다. 
document.getElementsByClassName('xx');  // 존재하지 않는 class를 입력하면 빈 HTMLCollection [] 이 출력된다.

// 태그이름으로 태그 선택하기
document.getElementsByTagName('태그이름')  // 이렇게 하면 html문서 내에 있는 '태그이름'을 가진 모든 태그를 선택하게 된다.
// class로 태그 선택하는 것과 마찬가지로 여러개의 요소가 선택될 수 있기 때문에 메소드 이름에 Element 뒤에 's'가 붙고, 실행결과 역시 HTMLCollection을 리턴한다. 

// css 선택자로 태그 선택하기
document.querySelector('#myNumber'); // myNumber라는 id값을 가진 태그가 출력된다. -> document.getElementById('myNumber'); 와 동일 
document.querySelector('.color-btn'); // color-btn이라는 class값을 갖는 태그가 출력된다. 
document.querySelectorAll('.color-btn'); // color-btn이라는 class값을 갖는 태그들을 모두 출력한다. 
