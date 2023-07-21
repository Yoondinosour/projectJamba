import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import("@/layout/MenuLayout.vue"),
    },
    {
      path: '/event',
      name: 'event',
      component: () => import("@/views/CampaignView.vue"),
    },
    {
      path: '/store',
      name: 'store',
      component: () => import("@/views/StoreView.vue"),
    }
  ]
})

export default router
