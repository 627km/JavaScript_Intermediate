/**
 * status code (상태코드) - response의 head에 들어있는 정보 
 * ex) 대표
 * 200 : 정상적으로 처리
 * 404 : 정상적으로 처리되지 않음 (해당 URL에 해당하는 데이터를 찾을 수 없음)
 *  */ 

// 100번대 - 서버가 클라이언트에게 정보성 응답(Information response)을 줄 때 사용되는 코드
// 100 Continue: 클라이언트가 서버에게 계속 리퀘스트를 보내도 괜찮은지 물어봤을 때, 계속 리퀘스트를 보내도 괜찮다고 알려주는 상태코드이다. 
// 101 Switching Protocols: 클라이언트가 프로토콜을 바꾸자는 리퀘스트를 보냈을 때, 서버가 '그래요, 그 프로토콜로 전환하겠습니다'라는 뜻을 나타낼때 쓰임

// 200번대  - 클라이언트의 리퀘스트가 성공 처리되었음을 의미하는 상태 코드
// 200 OK: 리퀘스트가 성공적으로 처리되었음을 포괄적으로 의미하는 상태코드
// 201 Create: 리퀘스트의 내용대로 리소스가 잘 생성되었다는 의미
// 202 Accepted: 리퀘스트의 내용이 일단은 잘 접수되었다는 뜻이다.

// 300번대 - 클라이언트의 리퀘스트가 아직 처리되지 않았고, 리퀘스트 처리를 원하면 클라이언트 측의 추가적인 작업이 필요함을 의미하는 상태코드
// 301 Moved Permanently : 리소스의 위치가 바뀌었음을 나타낸다. 
// 302 Found : 리소스의 위치가 일시적으로 바뀌었음을 나타낸다.

// 400번대 - 리퀘스트를 보내는 클라이언트 쪽에 문제가 있음을 의미하는 상태코드 
// 400 Bad Request : 말그대로 리퀘스트에 문제가 있음을 나타낸다. 리퀘스트 내부 내용의 문법에 오류가 존재하는 등의 이유로 인해 발생한다.
// 401 Unauthorized : 아직 신원이 확인되지 않은(unauthenticated) 사용자로부터 온 리퀘스트를 처리할 수 없다는 뜻
// 404 Not Found : 해당 URL이 나타내는 리소스를 찾을 수 없다는 뜻. 보통 이런 상태 코드가 담긴 리스폰스는 그 바디에 관련 웹 페이지를 이루는 코드를 포함하고 있는 경우가 많다.
// 405 Method Not Allowed : 해당 리소스에 대해서 요구한 처리는 허용되지 않는다는 뜻
// 413 Payload Too Large : 현재 리퀘스트의 바디에 들어있는 데이터의 용량이 지나치게 커서 서버가 거부한다는 뜻
// 429 Too Many Requests : 일정 시간 동안 클라이언트가 지나치게 많은 리퀘스트를 보냈다는 뜻

// 500번대 - 서버 쪽의 문제로 인해 리퀘스트를 정상적으로 처리할 수 없음을 의미하는 상태코드
// 500 Internal Server Error : 현재 알 수 없는 서버 내의 에러로 인해 리퀘스트를 처리할 수 없다는 뜻
// 503 Service Unavailable : 현재 서버 점검 중이거나, 트래픽 폭주 등으로 인해 서비스를 제공할 수 없다는 뜻