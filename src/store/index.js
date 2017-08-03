import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import modules from './modules'

Vue.use(Vuex)

// Nothing should mutate the state other than mutations
const strict = process.env.NODE_ENV !== 'production'

export default new Store({
  modules,
  strict,
  plugins: []
})
