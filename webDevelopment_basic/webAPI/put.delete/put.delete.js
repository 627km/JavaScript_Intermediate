// put request, delete request

/*
get request (기본)
 fetch('https://learn.codeit.kr/api/members')
   .then((response) => response.text())
   .then((result) => { console.log(result); });
*/

// put request - 2번 직원인 Alice의 부서명을 engineering 에서 marketing 으로 수정하는 경우 
const member = {
  name: 'Alice',
  email: 'alice@codeitmail.kr',
  department: 'marketing',  // 부서명만 marketing 으로 수정
};

fetch('https://learn.codeit.kr/api/members/2', {  // 2번 id인 alice의 정보를 수정할 것이므로 members 뒤에 2를 붙여준다. (우선 수정할 id 번호를 알아야한다.)
  method: 'PUT',  // 데이터를 수정하는 PUT 메소드 
  body: JSON.stringify(member),  // stringify(JS -> string type)
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });


// delete request - 2번 직원인 Alice의 정보를 삭제하는 경우
fetch('https://learn.codeit.kr/api/members/2', {
  method: 'DELETE', // delete request는 body가 필요없다. 
})
  .then((response) => response.text())
  .then((result) => { console.log(result); });
// Alice 뒤의 직원정보의 id 번호는 그대로 유지된다. (번호가 하나씩 앞당겨지지 않음!)