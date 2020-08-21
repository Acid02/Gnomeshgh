import Vue from 'vue'
import vuex from 'vuex'
//vuex模块
import UserInfo from './module/UserInfo';
Vue.use(vuex)
const store = new vuex.Store({
   modules:{
    UserInfo,
   }
})

export default store