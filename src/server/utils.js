// 对操作数据库的公共方法进行封装

const db = require("./index")

/**
 * 
 * @param {String} sql sql语句
 */
async function RunSQL(sql) {
    return new Promise((resolve, reject) => {
        db.query(sql, (err, result) => {
            if (err) return reject(err)
            resolve(err)
        })
    })
}
exports.RunSQL = RunSQL