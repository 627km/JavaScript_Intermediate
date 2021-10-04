/** 
 * [마우스 버튼 이벤트]
 * 
 * > MouseEvent.button
 * 0: 마우스 왼쪽 버튼
 * 1: 마우스 휠
 * 2: 마우스 오른쪽 버튼
 * 
 * > MouseEvent.type
 * click: 마우스 왼쪽 버튼을 눌렀을 때
 * contextmenu: 마우스 오른쪽 버튼을 눌렀을 때
 * dblclick: 동일한 위치에서 빠르게 두번 click할 때
 * mousedown: 마우스 버튼을 누른 순간
 * mouseup: 마우스 버튼을 눌렀다 뗀 순간
 */


// 예를 들어 마우스 버튼을 한번 클릭하는 동작을 하면 mousedown, mouseup, click 이 세가지 이벤트가 발생한다. 
// 더블클릭은 mousedown, mouseup, click, mousedown, mouseup, click, dbclick 이벤트가 발생한다. 