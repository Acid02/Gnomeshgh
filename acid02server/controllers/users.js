// 查询
const { findLogin,findgetUser,findcategory,findarticle } = require('../models/users')

// 新增
const { Inssetarticle } = require('../models/usersInsetr');

// 更新
const { Uparticle } = require('../models/usersUpdata');

// 删除 
const { Droparticle } = require('../models/usersDrop');
var result = void 0;
var send = {
  msg:200,
  status:0,
  data:[]
}
const User = async (req,res,next)=>{
  let params = {...req.body};
  // console.log("body:",req.query)
  send.msg=200;send.status=0;send.data=[];
  switch (params.service) {
    case "Login":
      //登录
      result = await findLogin(params);
      send.data = result;

      break;
    case "getUser":
      //用户基本信息
      result = await findgetUser(params);
      send.data = result;

      break;
    case "category":
      //获取分类详情
      result = await findcategory(params);
      send.data = result;

      break;
    case "article":
      //获取文章详情
      result = await findarticle(params);
      send.data = result;
      
      break;
    case "setarticle":
      //新建文章
      result = await Inssetarticle(params)
      send.data = result

      break;
    case "Uparticle":
      result = await Uparticle(params)
      send.data = result

      break;
    case 'Droparticle':
      //删除文章
      result = await Droparticle(params.id)
      send.data = result

      break;
    case "skills":
      //获取八奇技
      send.data = {
         HTML:"双拳手",
         CSS:"大罗洞观",
         JavaScript:"炁体源流",
         jQuery:"神机百炼",
         Angular:"风后奇门",
         React:"通天箓",
         Vue:"拘灵遣将",
         Nodejs:"六库仙贼",
         "---------":'----------',
         TypeScript:"天师度"
      };
      break;
    default:

      send.msg = "Please check if your service is correct";
      send.status = -1;
  }
  res.json(send)
}
module.exports = {
    User
}