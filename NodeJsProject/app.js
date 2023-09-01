// 1. 설치한다
// 2. 설치한걸 사용하겠다고 코드를 쓴다

const express = require("express") // express 패키지에 대한 정보를 변수에 집어넣음.
const app = express() // 가져온 패키지를 실제로 사용하겠다는 선언
const helmet = require("helmet")
app.use(helmet())

// app.set() 은 익스프레스에서 설정을 바꾸는 함수
app.set('view engine', 'ejs') // ejs 쓰겠다는 선언
app.set('views', './views') // 앞의 views : 익스프레스의 설정키. ejs 파일이 있는 경로를 설정.

app.use('/public', express.static( __dirname + '/public'));
// __dirname  : 현재 프로젝트 위치.
// + '/public' : 현재 위치 기준으로 public 폴더의 위치를 찾아가라 라는 뜻.

//const ejs = require('ejs')
//app.use(ejs())

const mainRouter = require("./router/mainRouter") // 라우터 정보를 mainRouter.js 에서 가져옴
app.use("/", mainRouter)

// app.listen( 포트번호, 액션 )
app.listen(3000, function() {
    console.log('hello world')
})
