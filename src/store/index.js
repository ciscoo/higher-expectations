import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import modules from './modules'
import groups from './groups'
import users from './users'
import tasks from './tasks'
import deadlines from './deadlines'
import events from './events'
Vue.use(Vuex)

// Nothing should mutate the state other than mutations
const strict = process.env.NODE_ENV !== 'production'

export default new Store({
  modules,
  strict,
  groups,
  users,
  deadlines,
  tasks,
  events,
  plugins: []
})
