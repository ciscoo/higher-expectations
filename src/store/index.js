import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

// Nothing should mutate the state other than mutations
const strict = process.env.NODE_ENV !== 'production'

export default new Store({
  strict,
  plugins: []
})
