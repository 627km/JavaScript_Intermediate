/**
 * 다형성 (polymorphism)
 * : 다형성은 하나의 변수가 다양한 종류의 클래스로 만든 여러 객체를 가리킬 수 있음을 의미한다. 
 *  */ 

 class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
} 

class PremiumUser extends User {
  constructor(email, birthdate, level) {
    super(email, birthdate);
    this.level = level;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name} with a 5% discount`);
  }

  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
  }
}

const item = { 
  name: '스웨터', 
  price: 30000, 
};

const user1 = new User('chris123@google.com', '19920321');
const user2 = new User('rachel@google.com', '19880516');
const user3 = new User('brian@google.com', '20051125');
const pUser1 = new PremiumUser('niceguy@google.com', '19891207', 3);
const pUser2 = new PremiumUser('helloMike@google.com', '19900915', 2);
const pUser3 = new PremiumUser('aliceKim@google.com', '20010722', 5);

const users = [user1, pUser1, user2, pUser2, user3, pUser3];

users.forEach((user) => {
  user.buy(item);
});

// 위의 코드를 보면 foreach 문 안의 user는 User 클래스로 만든 객체를 가리킬 때도 있고, PremiumUser 클래스로 만든 객체를 가리킬 떄도 있다. 
// 매번 user 객체의 buy 메소드가 호출된다는 점은 같지만, 구체적으로 무슨 클래스로 만든 객체의 buy 메소드가 호출되느냐에 따라 결과가 달라진다. 
// 이렇게 단순한 코드로 다양한 결과를 낼 수 있는것은 다형성 덕분이다. 