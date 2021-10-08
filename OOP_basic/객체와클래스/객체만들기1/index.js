// 객체만들기

const user = {
  email: 'rudals_jeon@naver.com', // 객체의 상태를 나타내는 변수 : 프로퍼티
  birthdate: '1998-06-27',  // 객체의 상태를 나타내는 변수 : 프로퍼티
  buy(item) {  // 객체의 행동을 나타내는 함수 : 메소드
    console.log(`${this.email} buys ${item.name}`);  // this : 현재의 객체를 나타낸다. 
  },
};
// 프로퍼티와 메소드를 나열하는 것을 Obejct Literal(객체를 나타내는 문자열) 이라고 한다. 

const item = {
  name: '스웨터',
  price: 30000,
}; 

console.log(user.email);
console.log(user.birthdate);
user.buy(item);
