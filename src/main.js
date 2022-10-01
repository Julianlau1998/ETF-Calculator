import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueApexCharts from 'vue-apexcharts'


Vue.config.productionTip = false
Vue.use(VueApexCharts)

require('@/assets/styles/main.scss')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')