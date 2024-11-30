import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../components/UserList.vue'

const routes = [
  {
    path: '/users',
    name: 'Users',
    component: UserList
  }
  // Agregar más rutas según necesites
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router