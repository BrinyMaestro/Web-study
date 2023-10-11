const express = require('express') // express 를 가져오는 역할
const app = express() // 가져온 express를 생성하여 변수에 저장

const helmet = require('helmet') // helmet 가져오기
app.use(helmet()) // express에다가 helmet 추가

const mainRouter = require('./router/mainRouter')
app.use('/', mainRouter)

app.set('view engine', 'ejs')
app.set('veiws', './views')
app.use('/public', express.static(__dirname + '/public'))

const db = require('./model/db')

app.listen(5000, function() { // 포트번호는 3000
    console.log("트릭컬은...서비스 종료다...")

    db.sequelize.sync({force:false})
    console.log('db 실행 함')
})