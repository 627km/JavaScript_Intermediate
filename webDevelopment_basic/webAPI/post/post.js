// post request
fetch('https://learn.codeit.kr/api/members')
  .then((response) => response.text())
  .then((result) => { console.log(result); });

  fetch('https://learn.codeit.kr/api/members/3') // 뒤에 3을 붙여주면 특정직원(3번직원)의 정보를 불러올 수 있다. 
  .then((response) => response.text())
  .then((result) => { console.log(result); });

// 새로운 직원 정보 생성
const newMember = {
  name: 'Jerry',
  email: 'Jerry@codeitmail.kr',
  department: 'engineering',
};

fetch('https://learn.codeit.kr/api/members', {  // 새로운 아규먼트 (옵션객체)
  method: 'POST',
  body: JSON.stringify(newMember),  // stringify(JS -> string type)
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });