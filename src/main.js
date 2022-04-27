import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueMeta from 'vue-meta'
import VCalendar from 'v-calendar';
import BaseSelect from '@/components/UI/BaseSelect'
import BaseButton from '@/components/UI/BaseButton'
import BaseInput from '@/components/UI/BaseInput'
import BaseChip from '@/components/UI/BaseChip'
import BaseAlert from '@/components/UI/BaseAlert.vue'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(VCalendar, {
  componentPrefix: 'vc'
});

Vue.component('base-chip', BaseChip)
Vue.component('base-alert', BaseAlert)
Vue.component('base-button', BaseButton)
Vue.component('base-input', BaseInput)
Vue.component('base-select', BaseSelect)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
