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
import VueCompositionAPI from '@vue/composition-api'
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false

Vue.use(VueMeta)
Vue.use(VueCompositionAPI)
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
  render: h => h(App)
}).$mount('#app')
