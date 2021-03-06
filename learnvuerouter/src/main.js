import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from "./store";

Vue.config.productionTip = false
Vue.prototype.$store = store

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
