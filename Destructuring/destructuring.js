// 구조 분해 (Destructuring) - ES2015에서 등장한 문법
const rank = ['효준', '유나', '민환', '재하'];  // 배열

// const macbok = rank[0];
// const ipad = rank[1];
// const airpods = rank[2];
// const coupon = rank[3];

// destructuring 문법을 사용하면 위의 4줄의 코드가 아래 한줄로 표현 가능하다. 
const [macbook, ipad, airpods, coupon] = rank;  // rank 배열이 각각 순서대로 할당된다. 

const rank1 = ['효준', '유나', '민환', '재하', '규식'];
const [macbook, ipad, airpods, coupon] = rank1; // 배열의 길이가 달라도 문제가 되지 않는다. (규식은 아무값도 할당받지 않는다.)
// const [macbook, ipad, airpods, ...coupon] = rank1;  -> ...coupon 을 해주면 rest parameter 처럼 앞에서 차례로 할당받고 나머지를 모두 할당받는다. 즉 coupon에는 재하, 규식이 할당된다. 






const macbook = {  // 객체
  title: '맥북 프로 16형',
  price: 3690000,
  memory: '16 GB',
  storage: '1TB SSD 저장 장치',
  display: '16향 Retina 디스플레이',
};