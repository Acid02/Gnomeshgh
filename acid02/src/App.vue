<template>
  <div id="app">
	  <Masking v-if='$store.state.UserInfo.isLoading'>
	  		<Loading/>
	  </Masking>
	<template v-else>
		<div id="soketShow" @click="show = !show" title="网页聊天室" v-if="winWidth>790"></div>
			  <keep-alive>
				  <router-view v-if="show" :winWidth='winWidth'/>
				  <socket v-else/>
			  </keep-alive>
	</template>
	  
  </div>
</template>

<script>
const socket = ()=> import('@/views/socket.vue')
import Masking from '@/components/Masking' //蒙层
export default {
  name: 'App',
  components: {Masking,socket},
  data(){
	 return {
		 show:true,
		 winWidth:document.body.offsetWidth ||document.documentElement.offsetWidth,
	 }
  },
  created(){
	 window.onresize = ()=>{
		 this.winWidth = document.body.offsetWidth ||document.documentElement.offsetWidth;
	 }
  },
  computed:{
  },
  watch:{
  }
}
</script>

<style scoped="scoped">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
#soketShow{
	position: fixed;
	width: 80px;
	height: 80px;
	bottom: 1%;
	right: 1%;
	background: #6c5ce7 url(./assets/images/default_hd.jpg) no-repeat center/cover;
	border-radius: 50%;
	z-index: 9;
}
</style>
