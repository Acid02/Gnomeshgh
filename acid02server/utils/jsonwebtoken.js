// 引入模块依赖
const jwt = require('jsonwebtoken');
// 创建 token 类
let data = null;
class Jwt {
    constructor(params) {
        if(params){
            data = params;
        }
        //私钥 可以自己生成
        this.private_key = {
            "PRIVITE_KEY":"020514202945",
            "EXPIRESD":60*60*24,//过期时间 60*60*24 ==24小时
        };
    }
    // 重新生成 token
    refreshToken() {
        this.generateToken()
    }
    //生成token
    generateToken() {
        // let created = Math.floor(Date.now() / 1000);
        let {PRIVITE_KEY,EXPIRESD} = this.private_key;//私钥 可以自己生成
        let token = jwt.sign(data, PRIVITE_KEY, {expiresIn:EXPIRESD});
        return token;
    }

    // 校验token
   verifyToken(token) {
        let {PRIVITE_KEY} = this.private_key;//私钥 可以自己生成
        let res;
        try {
            let result = jwt.verify(token, PRIVITE_KEY) || {};
            res = result || {};
        } catch (e) {
            res = 'err';
        }
        return res;
    }
}

module.exports = Jwt;