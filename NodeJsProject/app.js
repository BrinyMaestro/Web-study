const express = require('express') 
const app = express()

const helmet = require("helmet") // 보안을 위한 것
app.use(helmet()) // app.use() : express에서 미들웨어를 등록하고 사용하는 함수.

app.use(express.json())
app.use(express.urlencoded())

const mainRouter = require("./router/mainRouter.js")
app.use("/", mainRouter)

app.listen(3000, function() {
    console.log('hello')
})


