import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import axios from 'axios'
// 引入echarts
import *as echarts from 'echarts'

Vue.prototype.$echarts = echarts

// TODO:连接后端url
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';

Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
