// finally 메소드 - 항상 실행하고 싶은 콜백이 있을 경우 finally 메소드에 넣으면 된다. 
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => { console.log(result); })
  .catch((error) => { 
    console.log(error);
    throw new Error('from catch method');
  })
  .finally(() => { console.log('exit'); } ); // finally 메소드는 보통 catch 메소드 뒤에 적는다. 
// Error가 발생하더라도 finally 메소드는 실행이 된다. 