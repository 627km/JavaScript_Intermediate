// 모듈 파일의 조건
export const title = 'CodeitPrinter';

export function print(value) {
  console.log(value);
}

// 독립적인 scope 를 가져야 한다. (모듈 스코프)
// html파일에서 type="module" 을 해줬기 때문에 printer.js 파일에서 선언한 title변수와 print함수는 다른 파일에서 사용할 수 없다.
// 그러나 선언문 앞에 export(모듈문법) 를 붙여주면 다른 파일에서 사용할 수 있게된다.

// 한꺼번에 export 하기 -> 값들 앞에 export를 붙이지 않고 export { title, print} 이렇게 하면 한꺼번에 export 가 된다.  