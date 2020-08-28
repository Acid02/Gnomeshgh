const { sqlQuery,fintentSrc } = require('../utils/config');
const Jwt = require('../utils/jsonwebtoken');

// 所有更新事件

//更新文章
const Uparticle = async (params)=>{
      let { id,title,content,date,headerpic,parent } = params
      let sql = `UPDATE article SET title=?,content=?,date=?,headerpic=?,parent=? WHERE id=${id}`;
      let modSqlParams = [title,content,date,headerpic,parent]
      let result =await sqlQuery(sql,modSqlParams)
      if(result.protocol41){
        return '200'
    }
    return '400'
}

module.exports = {
    Uparticle
}