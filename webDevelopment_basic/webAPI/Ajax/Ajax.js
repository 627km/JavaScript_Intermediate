/**
 *  Ajax (Asynchronous JavaScript And XML)
 * : 자바스크립트를 사용해서 비동기적으로(=사용자가 보고있는 현재화면에 영향을 미치지 않고 별도로 백그라운드에서 작업을 처리한다는 뜻)
 *   리퀘스트를 보내고 리스폰스를 받는데 기반이 되는 기술들의 집합을 의미한다. 
 **/

 // Ajax 통신 (Ajax 기술을 기반으로 한 통신)

 // Ajax 통신이 아닌 것
 <a href="https://learn.codeit.kr/api/main">메인 화면으로 가기</a>

 // Ajax 통신인 것
 function getLocationInfo(latitude, longitude) {
   fetch('https://map.google.com/location/info?lat=latitude&lng=longitude')
    .then((response) => response.text())
    .then((result) => { /* 사용자 화면에 해당 위치 관련 정보 띄워주기 */ });
 }