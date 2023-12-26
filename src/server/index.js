
// import conMysql from './mysql'

const express = require('express')
const cors = require('express')
const apiRouter = require('./routes')

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

app.use('/user', apiRouter)

app.listen(3000, () => {
    console.log('恭喜你，服务器启动成功!')
})
