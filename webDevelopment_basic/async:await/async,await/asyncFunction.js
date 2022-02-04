// async 함수 안에서 async 함수 사용하기 (await을 붙여주면된다.)

const applyPrivacyRule = async function (users) {  // async 함수 (함수표현식으로 나타냈다.)
  const resultWithRuleApplied = users.map((user) => {
    const keys = Object.keys(user);
    const userWithoutPrivateInfo = {};
    keys.forEach((key) => {
      if (key !== 'address' && key !== 'phone') {
        userWithoutPrivateInfo[key] = user[key];
      }
    });
    return userWithoutPrivateInfo;
  });

  const p = new Promise((resolve, reject) => {
    setTimeout(() => { resolve(resultWithRuleApplied); }, 2000);  // 2초후에 fulfilled 상태가 된다. 
  });
  return p;  // Promise 객체를 return
};

async function getUsers() {  // async 함수 안에있는 async 함수 
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.text();
    const users = JSON.parse(result);
    const resultWithPrivacyRuleApplied = await applyPrivacyRule(users);  // applyPrivacyRule 이라는 async 함수는 Promise 객체를 return 한다.
    return resultWithPrivacyRuleApplied; // 민감정보(주소, 전화번호)가 제외된 정보배열을 가진 Promise 객체를 return한다. 
  } catch (error) {
    console.log(error);
  } finally {
    console.log('exit');
  }
}

getUsers().then((result) => { console.log(result); });  // 민감정보(주소, 전화번호)가 제외된 사용자정보가 출력된다. 

/* 
자바스크립트에서 함수를 표현하는 방법
1. 함수 선언식(Function Declaration)
  (1) 함수 선언식
  async function example(a, b) {
    return a + b;
  }

2. 함수 표현식(Function Expression)
  (2-1) 함수에 이름이 붙어있는 경우
  const example2_1= async function add(a, b) {
    return a + b;
  };

  (2-2) 함수에 이름이 없는 경우
  const example2_2 = async function(a, b) {
    return a + b;
  };

3. 화살표 함수(Arrow Function)
  (3-1) arrow function
  const example3_1 = async  (a, b) => {
    return a + b;
  };

  (3-2) arrow function(축약)
  const example3_2 = async (a, b) => a + b;
*/


// async 함수의 내부 코드를 작성할 때 주의할 점
// 1. 순서대로 작동하는 코드 
async function getResponses(urls) {
  for(const url of urls){
    const response = await fetch(url);
    console.log(await response.text());
  }
}
// 위의 코드는 순차적으로 작동하는 코드이기 때문에 순서가 상관없는 경우라면 성능관점에서 아쉬운 점이 있다.

// 2. 순서가 중요하지않는 코드
async function fetchUrls(urls) {
  for(const url of urls){
    (async () => {  // 추가된 부분
      const response = await fetch(url);
      console.log(await response.text());
    })(); // 추가된 부분 
  }
}