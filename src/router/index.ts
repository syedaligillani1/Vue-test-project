import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../pages/Dashboard.vue'
import AddRecord from '../pages/AddRecord.vue'

const routes = [
  { path: '/dashboard-expanded', component: Dashboard },
  { path: '/dashboard-collapsed', component: Dashboard },
  { path: '/add-record', component: AddRecord },
  { path: '/', redirect: '/dashboard-expanded' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
