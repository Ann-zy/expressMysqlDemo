
const mysqlConfig = require('./db')

const mysql = require('mysql')

function conMysql(sql, sqlParams) {
    const db = mysql.createConnection(mysqlConfig.mysql)

    db.connect((err) => {
        if (err) {
            console.log('数据库连接失败: ', err)
        } else {
            console.log('数据库连接成功！')
        }
    })
    //因为query查询是一个异步操作，所以用promise来操作
    return new Promise((resolve, reject) => {
        db.query(sql, sqlParams, (err, res) => {
            if (err) {
                reject(err)
            } else {
                // console.log('query res =====> ', res)
                closeMysql(db) // 拿到结果关闭mysql连接
                resolve(res)
            }
        })
    })
}

function closeMysql(db) {
    db.end((err) => {
        if (err) {
            console.log('数据库连接关闭失败: ', err)
        } else {
            console.log('数据库连接关闭成功！')
        }
    })
}

exports.conMysql = conMysql