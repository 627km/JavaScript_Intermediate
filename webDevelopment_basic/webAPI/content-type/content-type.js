/**
 * content-type 헤더 (주타입 / 서브타입)
 * : 현재 리퀘스트 또는 리스폰스의 바디에 들어 있는 데이터가 어떤 타입인지를 나타난다.
 * 
 * 1) 주 타입이 text인 경우(텍스트)
 * - 일반 텍스트: text/plain
 * - css 코드: text/css
 * - html코드: text/html
 * - javaScript 코드: text/javascript...
 * 
 * 2) 주 타입이 이미지인 경우(이미지)
 * - image/bmp: bmp 이미지
 * - image/gif: gif 이미지
 * - image/png: png 이미지
 * 
 * 3) 주 타입이 audio인 경우(오디오)
 * - audio/mp4: mp4 오디오 
 * - audio/ogg: ogg 오디오...
 * 
 * 4) 주 타입이 video인 경우(비디오)
 * - video/mp4: mp4 비디오
 * - video/H264: H264 비디오...
 * 
 * 5) 주 타입이 application인 경우
 * - application/json: JSON 데이터
 * - application/octet-stream: 확인되지 않은 바이너리 파일...
 **/ 

// content-type 설정해보기 
const newMember = {
  name: 'Jerry',
  email: 'jerry@codeit.com',
  department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {
  method: 'POST',
  header: {  // 추가된 부분 (content-type은 개발자 도구 -> network -> Headers에서 확인할 수 있다.)
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newMember),
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });