import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/gloable.css'
import './assets/css/iconfont/iconfont.css'

Vue.prototype.$http = axios
Vue.use(ElementUI);
Vue.config.productionTip = false

// 服务器根路径
axios.defaults.baseURL = 'http://localhost:8001/blog'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
