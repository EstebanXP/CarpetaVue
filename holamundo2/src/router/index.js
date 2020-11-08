import { createRouter, createWebHashHistory } from 'vue-router'
import TodoList from '@/components/TodoList'
import TodoEdit from '@/components/TodoEdit'
import TodoShow from '@/components/TodoShow'
import TodoCreate from '@/components/TodoCreate'

const routes = [
  {
    path: '/',
    name: 'TodoList',
    component: TodoList
  },
  {
    path: '/edit/:id',
    name: 'TodoEdit',
    component: TodoEdit
  },
  {
    path: '/show/:id',
    name: 'TodoShow',
    component: TodoShow
  },
  {
    path: '/create',
    name: 'TodoCreate',
    component: TodoCreate
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router