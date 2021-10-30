// static 프로퍼티, static 메소드
// 클래스에 직접적으로 딸려있는 프로퍼티와 메소드

class Math {
  static PI = 3.14;  // class로 객체를 생성하지 않아도 메소드를 사용할 수 있다. 

  static getCircleArea(radius) {  // class로 객체를 생성하지 않아도 메소드를 사용할 수 있다. 
    return Math.PI * radius * radius;
  }
}

console.log(Math.PI); // 3.14
console.log(Math.getCircleArea(5)); // 78.5 

Math.PI = 3.141592; // class 밖에서 값을 수정할 수있다. 