import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from '@/components/UI/BaseButton'

Vue.config.productionTip = false

import store from './store'

Vue.component('base-button', BaseButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
