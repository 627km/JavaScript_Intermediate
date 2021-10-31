// 상속 (inheritance)
class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
}

class PremiumUser extends User {  // extends User -> User class 를 상속한다. 
  constructor(email, birthdate, level) {
  // 상속받은 User class 와 겹치는 부분은 입력하지 않아도 된다. 
  //  this.email = email;
  //  this.birthdate = birthdate;
    super(email, birthday, level); // 자식 class 생성자 함수 안에서 부모 class의 생성사 함수를 super 라는 키워드로 반드시 호출해야한다.(에러발생 x)
    this.level = level;
  }
// 상속받은 User class 와 겹치는 부분은 입력하지 않아도 된다.
//  buy(item) {
//    console.log(`${this.email} buys ${item.name}`);
//  }

  streamMusicForFree() {
    console.log(`Free music streaming for ${this.email}`);
  }
}