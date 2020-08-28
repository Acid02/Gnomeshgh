var mysql  = require('mysql');  
let mysqlConf = {
    host     : 'localhost',       
    user     : 'root',              
    password : '123456',       
    port: '3306',                   
    database: 'acid'
}
// 用于保存数据连接实例
var db = null;
var pingTimeout;

// 如果数据连接出错，则重新连接
const handleError = (err)=>{
    logger.info(err.stack || err);
    sqlQuery();
}
// 建立数据库连接
const sqlQuery = (sql,values)=>{
    if(db === null){
        db = mysql.createConnection(mysqlConf);
        db.connect((err)=>{
            if(err) throw err;
            console.log('连接成功')
        })
    }
    db.on("error", handleError);
    clearTimeout(pingTimeout)
    return new Promise((resolve,reject)=>{
        db.query(sql, values, (err, result) => {
                if (err) reject(err);
                resolve(result);
                pingTimeout = setTimeout(()=>{
                    if(db !== null){
                        //关闭数据库连接
                        //db.end();
                        db.destroy();
                        db = null;
                    }
                    console.log('关闭连接')
                },1000 * 30)
        });   
    }); 
}
 // async抽离成公共方法
const awaitWrap = (promise) => {
    return promise
     .then(data => [null, data])
     .catch(err => [err, null])
}

//删除对象某一个值
const fintentSrc = (arr,src)=>{
      return arr.map(el=>{
          delete el[src]
          return el;
      })
}

module.exports = {
    sqlQuery,
    awaitWrap,
    fintentSrc
}