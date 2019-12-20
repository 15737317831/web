import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/index/index.vue'
import ProductInfo from '@/productInfo/productInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/productInfo',
      name: 'productInfo',
      component: ProductInfo
    }
  ]
})
