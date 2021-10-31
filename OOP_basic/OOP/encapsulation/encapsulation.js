/**
 * 캡슐화 (Encapsulation) - 프로그램의 안정성을 높일 수있다.
 * : 객체 외부에서 함부로 접근하면 안되는 프로퍼티나 메소드에 직접 전근할 수 없도록 하고, 필요한 경우 공개된 다른 메소드를 통해서만 접근할 수 있도로 하는 것을 의미한다.
 * set 프로터티이름 (파라미터) {  -> setter 메소드
 * }
 * 
 * get 프로퍼티이름 () {  -> getter 메소드 
 * }
 */

 class User {
  constructor(email, birthdate) {
    this.email = email;
    this.birthdate = birthdate;
  }

  buy(item) {
    console.log(`${this.email} buys ${item.name}`);
  }
  
  get email() {  // 파라미터를 써줄 필요 없음
    return this._email; 
  }


  set email(address) {  // 값에 대한 유효성 검사 (user1.email = 'rudals_jeon' 과 같은 제대로 된 이메일 형식이 아닌 값이 입력되었을 때 검사를 함)
    if (address.include('@')) {
      this._email = address;
    } else {
      throw new Error('invalid email address');
    }
  }
}

const item = {
  name: '스웨터',
  price: 30000,
};

const user1 = new User('rudals_jeon@naver.com', '1998-06-27');
user1.email = 'rudals_jeon'  // 유효성 검사에서 제대로 된 형식의 이메일 값이 아니라고 판단되어서 'invalid email address' 가 출려됨 
user1.email = 'codeit@google.com'  // 유효성 검사에서 제대로 된 이메일 값이라고 판단되어 값이 넘어감 
console.log(user1._email); // codeit@google.com 출력
console.log(user1.email); // codeit@google.com 출력 -->getter 메소드 덕분에 email 앞에 언더바(_)를 안붙여줘도 된다. 