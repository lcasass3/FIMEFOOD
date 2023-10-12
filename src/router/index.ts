import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('../pages/Landing/LandingPage.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../pages/Home/HomePage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Login/LoginPage.vue')
    }
  ]
})

export default router
