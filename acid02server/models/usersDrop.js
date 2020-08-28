const { sqlQuery,fintentSrc } = require('../utils/config');
const Jwt = require('../utils/jsonwebtoken');

//所有删除事件

//删除一篇文章
const Droparticle = async (id)=>{
     let result = await sqlQuery(`DELETE FROM article where id=${id}`);
     if(result.protocol41){
        return '200'
    }
    return '400'
}

module.exports = {
    Droparticle
}