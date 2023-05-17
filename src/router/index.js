import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/table1',
      name: 'table1',
      component: () => import('../views/table1.vue')
    },
    {
      path: '/table2',
      name: 'table2',
      component: () => import('../views/table2.vue')
    },
    {
      path: '/table3',
      name: 'table3',
      component: () => import('../views/table3.vue')
    },
    {
      path: '/table4',
      name: 'table4',
      component: () => import('../views/table4.vue')
    },
  ]
})

export default router
