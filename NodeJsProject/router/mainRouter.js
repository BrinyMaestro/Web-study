const express = require("express")
const router = express.Router()

router.use(express.json())
router.use(express.urlencoded())

// app.get(주소 경로, 액션)
router.get("/", function(req, res) { // req : request 유저들의 요청  res : response 유저들에게 응답
    res.render('index')
})

router.get("/about", function(req, res) {
    res.send(`자기소개페이지 ${req.query.name} ${req.query.gender}`)
})

router.post("/postapi", function(req, res) {
    console.log(req.body)
    console.log(`글쓴이 : ${req.body.name} 내용 : ${req.body.content}`)
})


module.exports = router