import configObj from './db'

console.log(configObj)
const mysql = require('mysql')

const db = mysql.createConnection({
    ...configObj
})

db.connect((err) => {
    if(err) {
        console.log('数据库连接失败:', err.message)
        return
    }
    console.log('数据库连接成功！')
})
global.db = db //使用node全局变量，在app.js中引入后app作用域内都可访问，用于操作数据库