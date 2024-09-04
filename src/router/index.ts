import Home from '@/views/Home.vue'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/views/Home.vue'),
  },

  {
    path: '/about',
    name: 'AboutPage',
    component: () => import('@/views/About.vue'),
  },
]


const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
