import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ReparacionView from '../views/ReparacionView.vue'
import ClienteView from '../views/ClienteView.vue'
import ProductosView from '@/views/ProductosView.vue'
import ReporteView from '@/views/ReporteView.vue'
import AccesoriosView from '@/views/AccesoriosView.vue'
import ProveedorView from '@/views/ProveedorView.vue'
import LoginView from '@/views/LoginView.vue'
import RegistroView from '@/views/RegistroView.vue'

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
  },
  {
    path: '/Reportes',
    name: 'Reportes',
    component: ReporteView
  },
  {
    path: '/accesorios',
    name: 'accesorios',
    component: AccesoriosView
  },
  {
    path: '/proveedor',
    name: 'proveedor',
    component: ProveedorView
  },
  {
    path: '/Login',
    name: 'Login',
    component: LoginView
  },
    {
    path: '/register',
    name: 'register',
    component: RegistroView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
