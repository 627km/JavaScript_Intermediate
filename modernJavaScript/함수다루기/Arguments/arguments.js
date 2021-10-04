// arguments
function printArguments(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
}

printArguments('Young', 'Mark', 'Koby');  // Young, Mark, Koby 가 각각 console에 출력된다. 
printArguments('Captain'); // Captain, undefined, undefined 가 각각 console에 출력된다. 
printArguments('Suri', 'Jack', 'Joy', 'Noel'); // 3개보다 많은 argument를 전달하면 마지막 'Noel'은 무시된다.


console.log('----------------------------');

function printArgument_2(A, B, C) {
  console.log(A);
  console.log(B);
  console.log(C);
  console.log(arguments);
};

printArgument_2('Young', 'Mark', 'Koby'); // Young, Mark, Koby 가 각각 console에 출력되고 마지막에 대괄호안에 파라미터의 갯수와 관계없이 아큐먼트가 요소처럼 담겨있다. 
printArgument_2('Captain');  // 마지막에 대괄호안에 아규먼트 전부가 담겨서 출력된다.
printArgument_2('Suri', 'Jack', 'Joy', 'Noel'); // 마지막에 대괄호안에 아규먼트 전부가 담겨서 출력된다. 