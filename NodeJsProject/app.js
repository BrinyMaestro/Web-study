// 1. 설치한다
// 2. 설치한걸 사용하겠다고 코드를 쓴다

const express = require("express") // express 패키지에 대한 정보를 변수에 집어넣음.
const app = express() // 가져온 패키지를 실제로 사용하겠다는 선언
const helmet = require("helmet")
app.use(helmet())

const mainRouter = require("./router/mainRouter") // 라우터 정보를 mainRouter.js 에서 가져옴
app.use("/", mainRouter)

// app.listen( 포트번호, 액션 )
app.listen(3000, function() {
    console.log('hello world')
})
