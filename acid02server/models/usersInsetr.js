const { sqlQuery,fintentSrc } = require('../utils/config');
const Jwt = require('../utils/jsonwebtoken');

// 所有新增事件

//新增一篇文章
const Inssetarticle = async (params)=>{
    let { username,title,content,date,parent } = params;
    let sql = `INSERT INTO article (username,title,content,date,parent)VALUES('${username}','${title}','${content}','${date}','${parent}')`
    let result = await sqlQuery(sql)
    if(result.protocol41){
        return '200'
    }
    return '400'
}

module.exports = {
    Inssetarticle
}