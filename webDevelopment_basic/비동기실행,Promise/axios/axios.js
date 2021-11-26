// axios
axios  // Promise 객체를 리턴한다. 
  .get('https://jsonplaceholder.typicode.com/users')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
// fetch 함수에 없는 기능과 장점 
// 모든 리퀘스트, 리스폰스에 대한 공통 설정 및 공통된 전치리 함수 삽입 가능 
// serialization ,deserialization 을 자동으로 수행 
// 특정 리퀘스트에 대해 얼마나 오랫동안 리스폰스가 오지 않으면 리퀘스트를 취소할할지 설정 가능 
// 업로드 시 진행 상태 정보를 얻을 수 있음 
// 리퀘스트 취소 기능 지원 