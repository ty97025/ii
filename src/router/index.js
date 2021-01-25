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
    path: '/page1',
    name: 'Page1',
    component: () => import('../views/Page1.vue')
  },
  {
    path: '/page2',
    name: 'Page2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Page2.vue')
  },
  {
    path: '/page3',
    name: 'Page3',
    component: () => import('../views/Page3.vue')
  },
  {
    path: '/page4',
    name: 'Page4',
    component: () => import('../views/Page4.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
