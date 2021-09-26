// 모듈 문법 (exprot - 내보내기 , import - 불러오기)
import { title as printerTitle, print } from './printer.js';

const title = 'Codeit';  // title 을 사용하면 syntaxError 가 발생한다. 하지만 불러온 title 변수 뒤에 as 이름 을 붙여주면 title이라는 이름을 이 파일에서 사용 가능하다.

print(title);  // 모듈 문법을 사용해서 title 과 print 를 불러왔기 때문에 사용할 수있다.


// 이름바꾸기 
// import { 가져온변수이름 as 바꿀이름 } from "./printer.js";

/**
 * 한꺼번에 다루기
 * : import * as printerJS from "./printer.js";
 * 이렇게 import 뒤에 '*' 을 붙여주면 printer.js 파일에서 export 하는 것들을 모두 import 해서 printJS 에 담는다.
 * 여러값들을 한꺼번에 다루는 맥락에서 사용하는 *(별표)를 와일드카드 문자(Wildcard Character)라고 부른다.
 * 
 * console.log(printJS.title); -> 프로퍼티형식으로 값을 불러와서 출력할 수있다. 
 */
