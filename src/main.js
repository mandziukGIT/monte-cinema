import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BaseButton from '@/components/UI/BaseButton'
import BaseInput from '@/components/UI/BaseInput'

Vue.config.productionTip = false

Vue.component('base-button', BaseButton)
Vue.component('base-input', BaseInput)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
