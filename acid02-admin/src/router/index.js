import Vue from 'vue'
import Router from 'vue-router'
import config from './config'

//1.安装
Vue.use(Router);

//2.创建路由对象
const router = new Router(config)
export default router