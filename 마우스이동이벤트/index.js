/**
 * [마우스 이동 이벤트]
 * 
 * > MouseEvent.type
 * mousemove: 마우스 포인터가 이동할 때
 * mouseover: 마우스 포인터가 요소 밖에서 안으로 이동할 때
 * mouseout: 마우스 포인터가 요소 안에서 밖으로 이동할 때 
 * 
 * > MouseEvent.clientX, clientY  - 그 순간 보여지는 화면을 기준으로 계산
 * : 화면에 표시되는 창 기준 마우스 포인터 위치
 * 
 * > MouseEvent.pageX, pageY  - 전체문서를 기준으로 마우스 좌표정보를 담고있다. (client와 혼동하기 쉬움)
 * : 웹 문서 전체 기준 마우스 포인터 위치
 * 
 * > MouseEvent.offsetX, offSetY  - 이벤트가 발생한 대상을 기준으로 계산
 * : 이벤트가 발생한 요소 기준 마우스 포인터 위치
 * 
 * > MouseEvent.target
 * : 이벤트가 발생한 요소
 * 
 * > MouseEvent.relatedTarget
 * : 이벤트가 발생하기 직전(또는 직후)에 마우스가 위치해 있던 요소
 */

const box1 = document.querySelector('#box1');  //box1 이라는 id를 가진 요소위에서 마우스를 움직이면 콘솔에 마우스가 움직이고 있다는 문구가 출력된다. 

function onMouseMove(e) {
  console.log('mouse is moving!');
  console.log(`client: (${e.clientX}, ${e.clientY})`);
  console.log(`page: (${e.pageX}, ${e.pageY})`);
  console.log(`offset: (${e.offsetX}, ${e.offsetY})`);
  console.log('-------------------------------------');
}

box1.addEventListener('mousemove', onMouseMove);


const box2 = document.querySelector('#box2');

function printEventData(e) {
  if (e.target.classList.contains('cell')) {  // 마우스가 머무르는 cell에 불이 켜진다.
    e.target.classList.toggle('on');
  }
}

box2.addEventListener('mouseover', printEventData);
box2.addEventListener('mouseout', printEventData);

function printEventData2(e) {   // 마우스의 이동경로를 알 수 있다. 
  console.log('event:', e.type);
  console.log('target:', e.target);
  console.log('relatedTarget:', e.relatedTarget);
  console.log('----------------------------------');
}
box2.addEventListener('mouseover', printEventData2);
box2.addEventListener('mouseout', printEventData2);

/**
 * > mouseenter (mouseover 와 유사)
 * : 요소 바깥에서 안쪽으로 들어갈 때
 * 
 * > mouseleave (mouseout 과 유사)
 * : 요소 안쪽에서 바깥으로 나갈 때
 * 
 * mouseenter, mouseleave 는 
 * 버블링이 일어나지 않는다. 
 * 자식 요소의 영역을 계산하지 않는다. 
 */