function createUser(email, birthdate) {
  const user = {
    email: email,  // 프로퍼티와 파라미터의 이름이 같은 경우에는 값을 대입하는 부분을 생략해도 된다. -> email, 이렇게
    birthdate: birthdate,  // birthdate, 이렇게 
    buy(item) {
      console.log(`${this.email} buys ${item.name}`);
    },
  };
  return user;
}

const item = {
  name: '스웨터',
  price: 30000,
};

const user1 = createUser('rudals_jeon@naver.com', '1998-06-27');
const user2 = createUser('chris123@google.com', '1995-07-19');

// 이렇게 creatUser함수처럼 객체를 생성해서 리턴하는 함수를 Factory Function 이라고 한다. 

console.log(user1.email);
console.log(user2.email);

user1.buy(item);