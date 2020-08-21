import axios from 'axios'
import qs from 'qs';
//获取qq头像和用户名
export const MyiqInfo = async (qq=1716815045)=>{
	 // process.env.NODE_ENV ==''
	let reqs = await axios.get(`${process.env.VUE_APP_BASE_API}/qqxt/api.php?qq=${qq}`)
	return reqs.data
}

//登录
export const Login = async ()=>{
	let params = {service:'Login',username:'acid02',password:'123456'}
	let reqs = await axios.post(`${process.env.VUE_APP_USER_API}/users/`,params)
	console.log("测试：",reqs)
}