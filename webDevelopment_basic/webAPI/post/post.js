// get request(단순 조회)
fetch('https://learn.codeit.kr/api/members')
  .then((response) => response.text())
  .then((result) => { console.log(result); });

  fetch('https://learn.codeit.kr/api/members/3') // 뒤에 3을 붙여주면 특정직원(3번직원)의 정보를 불러올 수 있다. 
  .then((response) => response.text())
  .then((result) => { console.log(result); });

// post request(추가)
// 새로운 직원 정보 생성
const newMember = {  // 새로운 직원정보를 나타내는 newMember 객체를 정의했다. 
  name: 'Jerry',
  email: 'Jerry@codeitmail.kr',
  department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {  // fetch 함수의 URL 뒤로 새로운 객체형태의 아규먼트가 추가 (옵션객체)
  method: 'POST',  // post request 
  body: JSON.stringify(newMember),  // stringify : (JS -> string type)
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });