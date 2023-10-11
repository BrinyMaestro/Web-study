const express = require('express')
const router = express.Router()

router.get('/', function(req, res) {
    res.send("Hello World")
})

router.get('/aboutNo', function(req, res) {
    res.render("index", {name: '노신영', key: '158'})
})

module.exports = router