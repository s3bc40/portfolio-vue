import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './index.css'

const i18n = createI18n({
  locale: 'en'
})

const app = createApp(App)

app.use(i18n)
  .mount('#app')
