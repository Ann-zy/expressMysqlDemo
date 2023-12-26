const express = require('express')
const router = express.Router()

const { conMysql } = require('./mysql')

class Response {
    constructor(msg, code, data) {
        this.msg = msg
        this.code = code
        this.data = data
    }
}

router.get('/test', (req, res, next) => {
    res.send('测试用的接口')
})

router.get('/getUser', (req, res) => {
    let sql = 'select * from user'
    conMysql(sql).then((result) => {
        res.send(result)
    })
})

router.post('/addUser', (req, res) => {
    let sql = 'select * from user'
    conMysql(sql).then((result) => {
        let response = new Response('', 0, null)
        res.send(response)
    })
})

module.exports = router