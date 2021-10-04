// 객체를 생성할 수 있는 함수 - Constructor Function (this 라는 키워드가 중요.)
function User(email, birthdate) {  // 보통 함수이름의 첫 번째 알파벳을 대문자로 한다. (관습)
  this.email = email;
  this.birthdate = birthdate;
  this.buy = function (item) {
    console.log(`${this.email} buys ${item.name}`);
  };
}

const item = {
  name: '스웨터',
  price: 30000,
};

const user1 = new User('rudals_jeon@naver.com', '1998-06-27'); // new 를 꼭 붙여야 새로운 객체를 만들 수 있다.
const user2 = new User('jerry99@google.com', '1995-06-30'); // new!!
const user3 = new User('alice@google.com', '1993-02-12');  // new!!

console.log(user1.email); // this 키워드 덕분에 user1의 email이 잘 출력된다.
console.log(user2.email); // this 키워드 덕분에 user2의 email이 잘 출력된다.
console.log(user3.email); // this 키워드 덕분에 user3의 email이 잘 출력된다.

console.log(user1.birthdate);
user1.buy(item);
