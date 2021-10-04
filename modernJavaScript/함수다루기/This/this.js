// this
// 웹 브라우저에서 this 가 사용될 때는 전역객체, window 객체를 가지게 된다. 하지만 객체의 메소드를 정의하기 위한 함수 안에선 메소드를 호출한 객체를 가리키게 된다. 
console.log(this); // window 객체 출력됨

const user = {
  firstName: 'Tess',
  lastName: 'Jang',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(user.getFullName());  // getFullName 안에서 this는 getFullName을 호출한 user객체가 담긴다. 