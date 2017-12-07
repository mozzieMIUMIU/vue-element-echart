
import Vue from 'vue'
import App from './App'
import router from './router'

//引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;

import axios from 'axios';

//在请求发出之前进行一些操作 拦截器，数据返回data层
axios.interceptors.response.use(function(response) {
    return response.data;
}, function(error) {
    return Promise.reject(error);
});
Vue.prototype.$http = axios;


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
