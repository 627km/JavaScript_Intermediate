// put Request, delete Request

// fetch('https://learn.codeit.kr/api/members')
//   .then((response) => response.text())
//   .then((result) => { console.log(result); });

// 2번 직원인 Alice의 정보를 수정하는 경우
const member = {
  name: 'Alice',
  email: 'alice@codeitmail.kr',
  department: 'marketing',  // 부서명만 marketing 으로 수정
};

fetch('https://learn.codeit.kr/api/members/2', {  // 2번 id인 alice의 정보를 수정할 것이므로 members 뒤에 2를 붙여준다. 
  method: 'PUT',  // 데이터를 수정하는 PUT 메소드 
  body: JSON.stringify(member),  // stringify(JS -> string type)
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });


// 2번 직원인 Alice의 정보를 삭제하는 경우
fetch('https://learn.codeit.kr/api/members/2', {
  method: 'DELETE',
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });