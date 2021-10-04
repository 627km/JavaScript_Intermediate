// try catch 문
try {
  //코드
} catch (error) {
  // 에러가 발생했을 때 동작할 코드
}


console.log('에러 전');

const codeit = '코드잇';
console.log(codeit);

codeit = 'codeit';  // 위의 코드에서 const 키워드로 선언 한 변수에 값을 재할당 하려고 했으므로 에러가 발생한다. (프로그램이 멈춰버린다.)

const language = 'JavaScript';
console.log(language);

console.log('에러 후');

// 위의 에러가 발생하는 코드를 try catch 문에 넣어보면 
 try {
  console.log('에러 전');  // '에러 전' 출력

  const codeit = '코드잇';
  console.log(codeit);  // '코드잇' 출력
  
  codeit = 'codeit';  // 에러 발생 -> catch 문으로 이동한다. 
  
  const language = 'JavaScript';
  console.log(language);
} catch (error) {
  console.log('에러 후');  // '에러 후' 출력
}

// try catch 활용하기
function printMembers(members) {
  for (const member of members) {
    console.log(member);
  }
}

const teamA = ['상혜', '혜진', '지혜', '혜선'];
printMembers(teamA);

const codeit = { name: 'codeit' };  // 전달하는 아규먼트가 배열이 아니라 객체이기 때문에 에러가 발생한다. 
printMembers(codeit);

const teamB = ['영훈', '재훈', '종훈', '정훈'];
printMembers(teamB);

// try catch 문 적용
function printMembers(members) {
  try {
    for (const member of members) {
      console.log(member);
    }
  } catch (err) {
    console.error(err);
    alert(`${err.name}가 발생했습니다. 콘솔창을 확인해 주세요`);  // catch 문으로 에러를 다뤘기 때문에 프로그램이 멈추지않고 아래 코드도 동작을 한다. 
  }
}

// finally 문  -  try 문에서 에러가 발생하지 않는다면 try 문의 코드가 모두 실행한 다움에, try 문에서 에러가 발생한다면 catch 문의 코드가 모두 실행된 다음 실행할 코드를 finally 문에 작성하면 된다. 

try {
  // 실행할 코드
} catch (err) {
  // 에러가 발생했을 때 실행할 코드
} finally {
  // 항상 실행할 코드
}

// finally 문에서 에러가 발생할 경우에는 다시 그 위에 있는 catch 문으로 넘어가진 않는다. 
// 만약 finally 문에서도 에러 처리가 필요한 경우에는 try catch 문을 중첩해서 활용하면 된다.