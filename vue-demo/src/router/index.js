import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
// import All from '../views/all.vue'
// import Jin from '../views/jin.vue'
// import Guan from '../views/guan.vue'
// import Cheng from '../views/cheng.vue'
Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home
  // },
  // {
  //  path:'/all',
  //  component: All
  // },
  // {
  //   path:'/jin',
  //   component: Jin
  //  },
  //  {
  //   path:'/guan',
  //   component: Guan
  //  },
  //  {
  //   path:'/cheng',
  //   component: Cheng
  //  }
  {
    path:'/',
    name:'home',
    component:Home

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
