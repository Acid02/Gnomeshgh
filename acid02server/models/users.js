const { sqlQuery,fintentSrc } = require('../utils/config');
const Jwt = require('../utils/jsonwebtoken');

// 所有查询事件

//登录
const findLogin = async (params)=>{
    let {username,password} = params;
    if(username && password){ 
       let result = await sqlQuery(`SELECT * FROM users WHERE username="${username}" AND password="${password}"`);
       if(result.length <=0){
         return '账号或密码错误'
       }else{
         //判断是否为管理员
         let state = '非管理员账号'
         if(result[0].isAdmin == 1){
            let token = new Jwt({...result[0]}).generateToken();
            state = {token}
         }
         return state

       }
    }else{
        return '请输入正确的用户名或密码'
    }
}

//获取用户基本信息
const findgetUser = async (params)=>{
    let { token } = params;
    if(token){
        let data = new Jwt().verifyToken(token)
        delete data.password
        return data;
    }else{
        return "token 为必要参数";
    }
} 

//获取分类信息
const findcategory = async (params)=>{
    let { token } = params;
    if(token){
      let { username } = new Jwt().verifyToken(token);
      let result = await sqlQuery(`SELECT * FROM category WHERE username="${username}"`);
      return fintentSrc(result,"username");
    }else{
        return "token 为必要参数";
    }
}

//获取文章详情
const findarticle = async (params)=>{
    let { token } = params;
    if(token){
      let { username } = new Jwt().verifyToken(token);
      let result = await sqlQuery(`SELECT * FROM article WHERE username="${username}"`);
      return fintentSrc(result,"username");
    }else{
        return "token 为必要参数";
    }
}

module.exports = {
    findLogin,
    findgetUser,
    findcategory,
    findarticle
}