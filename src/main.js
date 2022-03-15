import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vSelect from 'vue-select'
import VCalendar from 'v-calendar';
import BaseButton from '@/components/UI/BaseButton'
import BaseChip from '@/components/UI/BaseChip'
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false

import store from './store'

Vue.use(VCalendar, {
  componentPrefix: 'vc'
});

Vue.component('base-chip', BaseChip)
Vue.component('base-button', BaseButton)
Vue.component('v-select', vSelect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
