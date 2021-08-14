// id로 태그 선택하기 
document.getElementById('id');  // document라는 객체의 getElementById라는 메소드를 사용하는 것이다. (id속성을 통해서 html파일에서 어떤 요소를 가져올 수 있다.)
document.getElementById('xx');  // 존재하지 않는 id를 입력하면 undefined가 아닌 null이 출력된다. 

// class로 태그 선택하기
document.getElementsByClassName('class');  // class는 여러요소를 선택하는 것 이므로 Element에 's'가 붙는다. 
document.getElementsByClassName('xx');  // 존재하지 않는 class를 입력하면 빈 HTMLCollection [] 이 출력된다.