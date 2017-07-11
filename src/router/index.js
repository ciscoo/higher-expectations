import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Groups from '@/views/Groups'
import Users from '@/views/Users'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dasboard',
      component: Dashboard
    },
    {
      path: '/groups',
      name: 'Groups',
      component: Groups
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }
  ]
})
