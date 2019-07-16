import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'

import axios from 'axios'
Vue.prototype.axios = axios;  //绑定在原型，否则无法在其他组件引用

Vue.filter('WH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
