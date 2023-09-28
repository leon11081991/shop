import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const createProjectRouter = function () {
  console.log('router')
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      }
      // {
      //   path: '/about',
      //   name: 'about',
      //   component: () => import('')
      // }
    ]
  })

  return router
}
