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
      redirect: '/menu/smoothie',
      children: [
        {
          path: '/menu/smoothie',
          name: 'smoothie',
          component: () => import("@/views/menu/SmootheiView.vue")
        },
        {
          path: '/menu/juice',
          name: 'juice',
          component: () => import("@/views/menu/JuiceView.vue")
        },
        {
          path: '/menu/energybowl',
          name: 'energybowl',
          component: () => import("@/views/menu/EnergyBowl.vue")
        },
        {
          path: '/menu/coffee',
          name: 'coffee',
          component: () => import("@/views/menu/CoffeeView.vue")
        },
        {
          path: '/menu/RTD',
          name: 'RTD',
          component: () => import("@/views/menu/RTDView.vue")
        },
        {
          path: '/menu/bakery',
          name: 'bakery',
          component: () => import("@/views/menu/BakeryView.vue")
        },
      ]
    }
  ]
})

export default router
