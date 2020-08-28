//查
let {findUser,findArticle,findLabel} =  require('../models/userInfo')

var fs=require('fs');
var send = {
    msg:200,
    status:0,
    data:[],
 }
const UserInfo = async (req,res,next)=>{
    let params = {...req.query};
    params.username ="acid02"
    send.msg=200;send.status=0;send.data=[];
    // console.log(params)
    switch (params.service) {
        case "userInfo":
        result = await findUser(params);
        send.data = result[0];
            break;
        case "article":
           //查询标签
        result = await findArticle(params);
        send.data = result;
        break;
        case "label":
        //查询标签
        result = await findLabel(params);
        send.data = result;
        break;
        default:
            
            fs.readFile('public/images/Thearticle/wangye.jpg',function(error,data){
                if (error) throw error;
                console.log('写入成功',data);
            })

      send.msg = "Please check if your service is correct";
      send.status = -1;
      send.data=[]
  }
    res.json(send)
}
module.exports = {
    UserInfo
}