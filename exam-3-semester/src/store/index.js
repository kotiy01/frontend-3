import Vue from 'vue'
import Vuex from 'vuex'
import tasksModule from './tasksModule'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        tasksModule
    }
})