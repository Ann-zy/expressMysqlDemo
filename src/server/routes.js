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
    const { username, password } = req.body
    let sql = `select * from user where password = '${username}'`
    conMysql(sql).then((result) => {
        if (result.length >= 1) {
            res.send(new Response('注册失败，该用户已注册', 500, null))
        } else {
            sql = 'insert into user(username, password) values(?,?)'
            conMysql(sql, [username, password]).then((insertRes) =>{
                res.send(new Response('', 0, null))
            })
        }
    })
})

module.exports = router