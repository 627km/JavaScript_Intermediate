// catch 메소드 - promise 객체가 rejected 상태가 되면 실행할 콜백을 등록하는 메소드

// 원래코드
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text(), (error) => { console.log(error); })
  .then((result) => { console.log(result); });

// catch 메소드를 사용한 코드 
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .catch((error) => { console.log(error); })  // 첫 번째 then 메소드에 있는 두 번째 콜백을 catch 메소드안에 넣었다.
//.then(undefined, (error) => { console.log(error); }) 와 똑같은 의미를 갖는다. (catch 메소드는 then 메소드를 변형한 것에 불과하기 때문)
  .then((result) => { console.log(result); });


// 실무에서 사용하는 catch 메소드: catch 메소드를 마지막에 적어준다. 
fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .catch((error) => { console.log(error); })
  .then((result) => { 
    console.log(result);
    throw new Error('test');  // 이렇게 catch 메소드 뒤에 발생하는 error는 잡아내지 못한다. 
  })

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.text())
  .then((result) => { 
    console.log(result);
    throw new Error('test');
  })
  .catch((error) => { console.log(error); })  // 이렇게 catch 메소드를 맨 마지막에 적어주면 error를 잡아낼 수 있다. 