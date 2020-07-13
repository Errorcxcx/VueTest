import VueRouter from "vue-router";
import Vue from 'vue'
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";
const Home = () => import('../components/Home');
const About = () => import('../components/About');
const User = () => import('../components/User');
const HomeNews = () => import('../components/HomeNews');
const HomeMessage = () => import('../components/HomeMessage')
const Profile = () => import('../components/Profile')
Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '',
        redirect: 'news'
      },
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'message',
        component: HomeMessage
      }
    ]
  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '我的'
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title: '用户'
    }
  }
]
const router = new VueRouter({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title;
  next();
})
export default router
