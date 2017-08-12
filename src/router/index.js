import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Groups from '@/views/Groups'
import Users from '@/views/Users'
import Tasks from '@/views/Tasks'
import Deadlines from '@/views/Deadlines'
import Events from '@/views/Events'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/Users',
      name: 'Users',
      component: Users
    },
    {
      path: '/Groups',
      name: 'Groups',
      component: Groups
    },
    {
      path: '/Tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/Deadlines',
      name: 'Deadlines',
      component: Deadlines
    },
    {
      path: '/Events',
      name: 'Events',
      component: Events
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }
  ]
})
