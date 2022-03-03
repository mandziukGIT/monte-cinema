import Vue from 'vue'
import VueRouter from 'vue-router'
import PublicRoutes from './public'
import ClientRoutes from './client'
import EmployeeRoutes from './employee'
import NotFoundPage from '@/pages/error/NotFoundPage'

Vue.use(VueRouter)

const routes = [
  ...PublicRoutes,
  ...ClientRoutes,
  ...EmployeeRoutes,
  {
    path: "*",
    component: NotFoundPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
