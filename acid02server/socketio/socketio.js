// 用户信息
var user = {
    nickpic:'',
    username:'',
    uid:'',
    text:'',
}
// 在线用户
var userList=[];
var clientCount = 0;
const socketio = (io)=>{
     //客户端连接
     io.on('connection', socket => { 
        console.log("New connection:",clientCount)
        clientCount++;
        // socket.nicknime = 'User'+clientCount;
        //一次进入
        socket.on('login',str=>{
            socket.uid =str.uid
            let passed = userList.some(x=>{return x.uid == str.uid})
            if(!passed){
                userList.push(str)
            }
            io.emit('enter',userList)
        })
        //客户端发来信息
        socket.on('message',str=>{
            if(str.uid){
                user.username = str.username
                user.nickpic = str.nickpic
                user.uid = str.uid
                user.text = str.text
                io.emit('message',user)
                return;
            }
            io.emit('message',str)
        })
        //客户端断开连接
        socket.on('disconnect',str=>{
            let obj = {};
            userList = userList.filter(el=>{return el.uid !=socket.uid})
            // .reduce((cur,next)=>{
            //     obj[next.uid] ? "" : obj[next.uid] = true && cur.push(next);   
            //     return cur;
            // },[])
            // console.log(userList)
            io.emit('leave',userList)
        })
    });
}
module.exports = socketio