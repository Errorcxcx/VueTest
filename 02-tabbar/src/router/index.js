import Vue from 'vue'
import Router from 'vue-router'

const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Catehory')
const Home = () => import('../views/home/Home')
const Profle = () => import('../views/profile/Profile')
Vue.use(Router)

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profle
  },
]
export default new Router({
  routes,
  mode: 'history'
})
