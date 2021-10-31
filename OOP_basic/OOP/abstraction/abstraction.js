/**
 * 추상화 (Abstraction)
 * : 프로퍼티와 메소드의 이름을 누구나 이해하기 쉽게 잘 지어야 하고, 필요한 경우 설명하는 주석을 달아야 한다.
 *  */ 


// 추상화가 잘 된 코드
class User {
  constructor(email, birthdate) {
    this.email = email;
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

// 같은 코드이지만 추상화가 잘 안 된 코드 - 코드를 작성 한 사람 외 다른 사람이 보면 의미를 파악하기 어렵다. 
class User {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  buy(i) {
    console.log(`${this.a} buys ${i.name}`);
  }
}

const i = {
  name: '스웨터',
  price: 30000,
};