// 1. 원래코드
async function fetchAndPrint() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const result = await response.text();
  console.log(result);
}

fetchAndPrint();

// 2. Promise 객체를 rejected 상태로 만들기 위해 존재하지 않는 URL로 설정
async function fetchAndPrint() {
  const response = await fetch('https://jsonplaceholder.typicode.comm/users');
  const result = await response.text();
  console.log(result);
}

fetchAndPrint();

// 3. rejected 상태를 대비해 try catch 문 사용
async function fetchAndPrint() {
  try {
  const response = await fetch('https://jsonplaceholder.typicode.comm/users');
  const result = await response.text();
  console.log(result);
  } catch (error) {
    console.log(error);
  }  // try문에서 error가 발생하면 catch문으로 흐름이 넘어간다. 
}

fetchAndPrint();

// 4. finally 메소드 추가 
async function fetchAndPrint() {
  try {
  const response = await fetch('https://jsonplaceholder.typicode.comm/users');
  const result = await response.text();
  console.log(result);
  } catch (error) {
    console.log(error);
  } finally {
    console.log('exit'); // Promise 객체가 fulfilled 상태이든 rejected 상태이든 간에 finally 문 안에 있는 코드는 항상 실행된다. 
  }
}

fetchAndPrint();