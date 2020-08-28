const { sqlQuery,fintentSrc } = require('../utils/config');

//查询信息
const findUser = async (params)=>{
    let {username} = params;
       let result = await sqlQuery(`SELECT * FROM users WHERE username="${username}"`);
       return fintentSrc(result,"password");
}

//查询分类信息
const findArticle = async (params)=>{
    let {username} = params;
    let result = await sqlQuery(`SELECT * FROM article WHERE username="${username}"`);
       return fintentSrc(result,"username");
}

//查询标签列表
const findLabel = async (params)=>{
    let {username} = params;
    let result = await sqlQuery(`SELECT * FROM label WHERE username="${username}"`);
       return fintentSrc(result,"username");
}

module.exports = {
    findUser,findArticle,findLabel
}