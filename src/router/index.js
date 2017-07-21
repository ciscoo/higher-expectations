import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/Dashboard'
import Groups from '@/views/Groups'
import Tasks from '@/views/Tasks'
import Deadlines from '@/views/Deadlines'
import Events from '@/views/Events'

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
      path: '/tasks',
      name: 'Tasks',
      component: Tasks
    },
    {
      path: '/deadlines',
      name: 'Deadlines',
      component: Deadlines
    },
    {
      path: '/events',
      name: 'Events',
      component: Events
    }
  ]
})
