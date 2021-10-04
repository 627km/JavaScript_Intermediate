// 옵셔널 체이닝 (Optional Chaining)
// ECMAScript2020 에서 등장한 프로퍼티에 접근하는 방법.

function printCatName(user) {
  console.log(user.cat.name);
}

const user1 = {
  name: 'Captain',
  cat: {
    name: 'Crew',
    breed: 'Britsh Shorthair',
  }
}

printCatName(user1); // Crew

const user2 = {
  name: 'Young',
}

console.log(user2.cat); // undefined
printCatName(user2); // TypeError: Cannot read property 'name' of undefined
// cat 프로퍼티를 가지고 있지 않은 user2는 cat 프로퍼티가 undefined 이기 때문에 user2.cat.name 에 접근하려는 순간 에러가 발생하게 된다. 
// 따라서 printCatName 과 같이 중첩된 객체의 프로퍼티를 다룰 때는 user.cat.name 에 접근하기 전에 user.cat 이 null 혹은 undefined 가 아니라는 것을 검증하고 접근해야 에러를 방지할 수 있다. 

function printCatName(user) {
  console.log(user.cat && user.cat.name);
}
// if문을 활용할 수도 있지만, 일반적으로는 간결하게 AND 연산자를 활용해서 이 문제를 해결하곤 한다. 그러나 객체의 이름이나 프로퍼티의 이름이 길어질수록 가독성이 나빠지는 문제가 있다. 
// 이런 상황에 코드를 훨씬더 간결하게 사용할 수 있는 문법이 바로 옵셔널 체이닝(Optional Chaining)이다. 

function printCatName(user) {
  console.log(user.cat?.name);  // 옵셔널 체이닝 연산자(?.) : 옵셔널 체이닝 연산자 왼쪽의 프로퍼티 값이 null 또는 undefined 가 아니라면 그 다음 프로퍼티값을 리턴하고 그렇지 않은 경우에는 undefined 가 반환된다. 
}
