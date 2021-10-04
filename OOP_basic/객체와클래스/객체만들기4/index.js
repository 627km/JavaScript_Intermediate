// 클래스
// 보통 클래스에서는 constructor 안에 프로퍼티를 , 그 밖에 메소드를 정의한다. 
class User {  
  constructor(email, birthdate) { // constructor (생성자 메소드)
    this.email = email;  // this (생성되는 객체를 가리킴)
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

const item = {
  name: '스웨터',
  price: 30000,
};

const user1 = new User('rudals_jeon@naver.com', '1998-06-27');

console.log(user1.email);
console.log(user1.birthdate);
user1.buy(item);

const user2 = new User('jerry99@google.com', '1995-07-17');

console.log(user2.email);
console.log(user2.birthdate);
user2.buy(item);