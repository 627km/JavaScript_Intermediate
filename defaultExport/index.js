// default export
import * as printerJS from "./printer.js";
import {
  default as codeit,
  title as membersTitle,
  data as membersData,
} from "./members.js";

// default export 로 불러올 때는 default as 를 생략하고 값을 중괄호 밖으로 가져올 수 있다. 따라서 중괄호를 기준으로 default export 와 named export 를 구분할 수 있다.
// -> import codeit, { 
//      title as memnbersTitle,
//      data as membersData,  
//    } from "./members.js"

console.log(printerJS.title);
printerJS.print(membersTitle);
printerJS.print(membersData);
console.log(codeit);