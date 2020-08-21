import Vue from 'vue'
import '@/assets/style/reset.css'
import '@/assets/style/iconfont.css'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
//better-scroll

// import Scroller from '@/components/Scroller'
// Vue.component('Scroller',Scroller)

Vue.config.productionTip = false
// import VConsole from 'vconsole'
// const vConsole = new VConsole()
store.dispatch('UserInfo/fetchDatas')

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
