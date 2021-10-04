// 모던한 프로퍼티 표기법

// 기존 방법
const user = {
  title: 'Codeit',
  birth: 2017,
  job: '프로그래밍 강사',
};

// 다른 방법 - 변수에 할당 된 값을 활용
const title = 'Codeit';
const birth = 2017;
const job = '프로그래밍 강사';

const user = {
  title: title,  
  birth: birth,
  job: job,
}
// 위와 같이 프로퍼티네임과 변수이름이 같으면 

const user = {
  title,
  birth,
  job,
};
// 이렇게 표현할 수 있다. 

// 계산된 속성명 (computed property name)
const user = {
  [표현식]: 값,
};

const user = {
  ['Code'+'it']: 'value',
};

console.log(user); // {Codeit: "Value"} 출력