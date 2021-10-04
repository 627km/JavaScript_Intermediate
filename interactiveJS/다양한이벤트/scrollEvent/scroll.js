// scroll 이벤트 
let lastScrollY = 0;

function printEvent(e) {
  // console.log(window.scrollY);  웹 문서의 맨 위에서 부터 몇 픽셀 스크롤 했는지 알 수 있다. 
  const STANDARD = 30;

  const nav = document.querySelector('#nav');
  const toTop = document.querySelector('#to-top');

  if (window.scrollY > STANDARD) {  // 스크롤이 30px이 넘었을 때
    nav.classList.add('shadow');
    toTop.classList.add('show');
  } else {  // 스크롤이 30px을 넘지 않았을 때
    nav.classList.remove('shadow');
    toTop.classList.remove('show');
  }


  if (window.scrollY > lastScrollY) { // 스크롤 방향이 아랫쪽 일 때
    nav.classList.add('lift-up');
  } else { // 스크롤 방향이 윗쪽 일 때
    nav.classList.remove('lift-up');
  }

  lastScrollY = window.scrollY;
}


window.addEventListener('scroll', printEvent);