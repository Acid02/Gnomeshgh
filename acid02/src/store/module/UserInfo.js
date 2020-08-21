import { MyiqInfo } from '@/api/UserInfo'
export default {
	namespaced:true,//开启命名空间
	state:{
		data:{
			imgurl:"https://q.qlogo.cn/headimg_dl?dst_uin=1716815045&spec=100",
			name:"Gnomeshgh"
		}
	},
	mutations:{
		setData(state,payLoad){
			Object.assign(state.data,payLoad)
		}
	},
	actions:{
	  async fetchDatas(context){
		 let myiqInfo = await MyiqInfo()
	     context.commit('setData',myiqInfo)
	  }
	}
}