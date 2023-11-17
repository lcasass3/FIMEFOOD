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
      path: '/about-us',
      name: 'about-us',
      component: () => import('../pages/Landing/components/AboutUsPage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../pages/Login/LoginPage.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('../pages/SignUp/SelectAccType.vue')
    },
    {
      path: '/app',
      name: 'InAppLayout',
      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../pages/Home/HomePage.vue')
        },
        {
          path: '/favoritos',
          name: 'favorites',
          component: () => import('../pages/Home/costumer/components/FavoritesSellersPage.vue')
        }
      ],
      component: () => import('@/layouts/InAppLayout.vue')
    },
    
  ]
})

export default router
