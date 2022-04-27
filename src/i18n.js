import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

function loadLocaleMessages () {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key)
    }
  })
  return messages
}

const dateTimeFormats = {
  'en': {
    '2-digit': {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    },
    'weekday': {
      weekday: 'short'
    }
  },
  'pl': {
    '2-digit': {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric'
    },
    'weekday': {
      weekday: 'short'
    }
  }
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  messages: loadLocaleMessages(),
  dateTimeFormats
})
