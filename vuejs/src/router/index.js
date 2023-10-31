import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue')
  },
  {
    path: '/SPHome',
    name: 'SPHome',
    component: () => import('../views/SPHome.vue')
  },
  {
    path: '/LearningAvenue',
    name: 'LearningAvenue',
    component: () => import('../views/LearningAvenue.vue')
  },
  {
    path: '/Permits&Requirements',
    name: 'Permits&Requirements',
    component: () => import('../views/Permits&Requirements.vue')
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
