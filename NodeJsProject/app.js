const express = require("express") // express 로딩
const app = express() // 로딩한걸 실행해서 app변수에 넣는다

// app.listen( 포트번호, 액션 )
// app.listen() 서버를 시작하고 포트를 지정해주는 함수. 지정한 포트로 사람들이 들어올 수 있게 해줌.
app.listen(3000, function() {
    console.log("Hello Node.js")
})

// app.get( 주소 , 그 주소에 대한 액션 )
app.get('/', function(req, res) { // req : request 요청.사용자가 우리한테 요청.  res : response : 대답. 사용자에게 보여주는 데이터.
    res.send("메인 페이지")
})

app.get('/about', function(req, res) {
    res.send("오와캬퍄헉농쭉빵ㅋㅋ")
})