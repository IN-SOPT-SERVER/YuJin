const http = require("http");

const port = 3000;

http
    .createServer((req, res) => {
        res.write("<h1>IN SOPT SERVERR!</h1>");
        res.end("<p>awesome</p>");
    })
    // 서버를 실행해주는 객체
    .listen(port, () => {
        console.log(`${port} 번 포트에서 대기중 !`)
    })



// 클라이언트와 소통할때 매우 중요! 
//put은 아예 새로운것으로 덮어 씌우는것, 해당 리소스가 없으면 생성
//patch는 일부 수정

//204 : 응답 데이터만 없음

//400 : 클라이언트 잘못
//401 : 로그인하지 않은 상태 등으로 수행하려고 할때 나는 오류

//500 : 서버가 잘못했을대
//503 : 티멧팅 때 많이 보는 것, 서버에 일시적으로 이용자 수가 많을 때