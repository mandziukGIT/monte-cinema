import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueMeta from 'vue-meta'
import vSelect from 'vue-select'
import VCalendar from 'v-calendar';
import BaseButton from '@/components/UI/BaseButton'
import BaseInput from '@/components/UI/BaseInput'
import BaseChip from '@/components/UI/BaseChip'
import BaseAlert from '@/components/UI/BaseAlert.vue'
import 'vue-select/dist/vue-select.css';
import VueCompositionAPI from '@vue/composition-api'

Vue.config.productionTip = false

import store from './store'
Vue.use(VueMeta)
Vue.use(VueCompositionAPI)
Vue.use(VCalendar, {
  componentPrefix: 'vc'
});

Vue.component('base-chip', BaseChip)
Vue.component('base-alert', BaseAlert)
Vue.component('base-button', BaseButton)
Vue.component('base-input', BaseInput)
Vue.component('v-select', vSelect)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
