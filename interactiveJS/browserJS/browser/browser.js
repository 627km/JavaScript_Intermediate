// window - 전역객체 (Global Object) -> 자바스크립트 어느곳에서나 항상 접근할 수 있는 객체
console.log(window);
console.log(window.innerWidth);  // 창 크기를 조절하면 값이 변한다.
console.log(window.innerHeight);  // 창 크기를 조절하면 값이 변한다. 

// 개발자 도구 console 탭에서 window.open(); -> 제목없음 새로운 창이 생성됨 
// 제목없음 새로운 창의 개발자 도구 console 탭에서  window.close(); -> 제목없음 창이 닫히고 원래창으로 돌아감 