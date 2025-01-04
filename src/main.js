// 
import { createApp } from 'vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import "@mdi/font/css/materialdesignicons.css";

// Components
import App from './App.vue'

const vuetify = createVuetify({
  components,
  directives,
    theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
      },
      dark: {
        dark: true,
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    sets: {
      mdi: {
        component: 'VIcon',
      },
    },
  },
})

createApp(App).use(vuetify).mount('#app')
