import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    name: 'Product',
    path: '/product/:id',
    props: true,
    component: () =>
      import(/* webpackChunkName: "product" */ '../views/Product.vue')
  },
  {
    name: 'Cart',
    path: '/cart',
    props: true,
    component: () => import(/* webpackChunkName: "cart" */ '../views/Cart.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
