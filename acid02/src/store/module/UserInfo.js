import { getUser,getArticle,getLabel } from '@/api/UserInfo'
export default {
	namespaced:true,//开启命名空间
	state:{
		data:{
			useravatar:"https://q.qlogo.cn/headimg_dl?dst_uin=1716815045&spec=100",
			nickname:"Gnomeshgh",
			article:[],
			label:[],
			Allarticles:[],
		},
		isLoading:true,
	},
	mutations:{
		setData(state,payLoad){
			Object.assign(state.data,payLoad)
		},
		setArticle(state,payLoad){
			state.data.article = payLoad
		},
		setLabel(state,payLoad){
			state.data.label = payLoad
		},
		setAllarticles(state,payLoad){
			state.data.Allarticles = payLoad
		},
		setLoading(state,payLoad){
			state.isLoading = payLoad
		}
	},
	actions:{
	  async fetchDatas(context){
		 let myiqInfo = await getUser();//获取用户基本信息
		 let myArticle = await getArticle();//获取分类信息
		 let myLabel = await getLabel();//获取标签列表
		 context.commit('setData',myiqInfo)
		 context.commit('setAllarticles',myArticle.concat(myLabel))
		 
		let obj = {};
		let classify = myArticle.reduce((cur,next)=>{
			obj[next.parent] ? "" : obj[next.parent] = true && cur.push(next);
			return cur;
		},[]).map(item=>{
			let count=1;
			myArticle.forEach(dd => {
			    if (item.parent === dd.parent) {
					item.count = count++
			    }
			})
			return item
		})
		context.commit('setArticle',classify)
		
		let obj1 = {};
		let Label = myLabel.reduce((cur,next)=>{
			obj1[next.parent] ? "" : obj1[next.parent] = true && cur.push(next);   
			return cur;
		},[]).map(item=>{
			let count=1;
			myLabel.forEach(dd => {
			    if (item.parent === dd.parent) {
					item.count = count++
			    }
			})
			return item
		})
		context.commit('setLabel',Label);
		
		setTimeout(()=>{
			context.commit('setLoading',false);
		},500)
		
	  }
	}
}