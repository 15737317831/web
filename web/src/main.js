// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import api from '@/api/index.js'
Vue.prototype.$api = api
Vue.prototype.$loading = true
api.get('productRecommend.xlsx', null, r => {
  console.log(r[0]);
  Vue.prototype.$productRecommend = r[0]
  Vue.prototype.$loading = false
})
api.get('productAll.xlsx', null, r => {
  console.log(r[0]);
  Vue.prototype.$productAll = r[0]
  Vue.prototype.$loadingProductAll = false
})
Vue.config.productionTip = false
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
