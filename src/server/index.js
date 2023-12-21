
import { conMysql } from './mysql'

const express = require('express')
const cors = require('express')

const app = express()
app.use(cors())

// 处理post请求头Content-type的类型数据
const bodyParser = require('body-parser')
const multiparty = require('connect-multiparty')

// 处理 x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// 处理 multiparty/form-data
app.use(multiparty())
// 处理 application/json
app.use(bodyParser.json())

class Response {
    constructor(isSucceed, msg, code, data) {
        this.isSucceed = isSucceed
        this.msg = msg
        this.code = code
        this.data = data
    }
}

app.get('/test', (req, res, next) => {
    res.send('测试用的接口')
})

// 一个简单的接口，查询数据库中的所有用户信息
app.get('/getUser', (req, res, next) => {
    let sql = 'select * from user'
    conMysql(sql).then((res) => {
        res.send(sql)
    })
})

app.listen(3000, () => {
    console.log('恭喜你，服务器启动成功!')
})
