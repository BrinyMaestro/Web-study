const express = require("express")
const router = express.Router()

router.get('/', function(req, res) {
    res.send("메인페이지")
})

router.get('/about', function(req, res) {
    res.send("오와캬퍄헉농쭉튼빵뿅ㅋㅋ")
})

module.exports = router