const express = require("express")
const router = express.Router()

router.get('/', function(req, res) {
    res.send("메인페이지")
})

router.get('/about', function(req, res) {
    res.send(`이름은 ${req.query.name}이고 종족은 ${req.query.race}입니다`)
    console.log(req.query.name)
    console.log(req.query.race)

})

router.post("/about", function(req, res) {
    console.log("포스트실행")
    console.log(req.body)
})
module.exports = router