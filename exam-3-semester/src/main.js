import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import router from './router/index'
import axios from 'axios'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)

Vue.prototype.axios = axios

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
