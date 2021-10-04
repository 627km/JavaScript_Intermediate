// Rest Parameter
function printArguments() {
  for (const arg of arguments) {
    console.log(arg);
  }
  console.log('--------------------');
};

printArguments('Young', 'Mark', 'Koby');
printArguments('Captain');
printArguments('Jayden', 'Scott');
printArguments('Suri','Jack','Joy','Noel');

// arguments 객체는 유사배열이기 때문에 배열의 메소드는 사용이 불가능하다. -> arguments 객체의 아쉬운점을 보완하고자 ES2015이후 Rest Parameter라는 문법 등장

function printArguments_2(...args) {  // 일반적인 파라미터 앞에 마침표 세 개 (...) 를 붙여주는 것을 Rest Parameter 라고 한다. -> Rest Parameter는 배열이기 때문에 배열의 메소드를 자유롭게 사용할 수 있다. 
  console.log(args.splice(0, 2));  // 배열의 메소드인 splice 메소드를 사용할 수 있다. (0번 인덱스 요소부터 2개 요소만 잘려서 리턴)
};

function printRank(first, second, ...others) {
  console.log('코드잇 레이스 최종 결과');
  console.log(`우승: ${first}`);
  console.log(`준우승: ${second}`);
  for (const arg of others) {
    console.log(`참가자: ${arg}`);
  }
}

printRank('Phil', 'Won', 'Emma', 'Min', 'Luke');  // 'Phil' 은 first 로 , 'Won'은 second 로 나머지는 others 로 할당된다.