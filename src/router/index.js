import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReparacionView from '../views/ReparacionView.vue'
import ClienteView from '../views/ClienteView.vue'
import ProductosView from '@/views/ProductosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/reparaciones',
    name: 'reparaciones',
    component: ReparacionView
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: ClienteView
  },
  {
    path: '/productos',
    name: 'productos',
    component: ProductosView // agregamos la ruta de productos
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
