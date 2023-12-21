import mysqlConfig from './db.'
import { showFailToast } from 'vant';

const mysql = require('mysql')

function conMysql(sql) {
    const db = mysql.createConnection(mysqlConfig)

    db.connect((err) => {
        if (err) {
            showFailToast({
                message: `数据库连接失败: ${err.message}`,
                position: 'top',
            });
        } else {
            console.log('数据库连接成功！')
        }
    })

    //因为query查询是一个异步操作，所以用promise来操作
    return new Promise((resolve, reject) => {
        db.query(sql, (err, res) => {
            if (err) return reject(err)
            let res = res
            console.log('query res =====> ', res)
            closeMysql(db) // 拿到结果关闭mysql连接
            resolve(res)
        })
    })
}

function closeMysql(db) {
    db.end((err) => {
        if (err) {
            showFailToast({
                message: `数据库连接关闭失败: ${err}`,
                position: 'top',
            });
        } else {
            console.log('数据库连接关闭成功！')
        }
    })
}

export {
    conMysql
}