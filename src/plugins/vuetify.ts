/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#fffbff',
    surface: '#fffbff',
    'surface-variation': '#f1f0fe',
    dark: '#353454',
    primary: '#F7931E',
    'primary-darken-1': '#3700B3',
    secondary: '#0071BC',
    'secondary-darken-1': '#018786',
    error: '#D4145A',
    info: '#696AE9',
    success: '#22B573',
    warning: '#FCBE35',
    'on-background': '#212121',
    'on-surface': '#353454',
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    }
    /*defaultTheme: 'dark',
    themes: {
      light: {
        colors: {
          primary: '#1867C0',
          secondary: '#5CBBF6',
        },
      },
    },*/
  },
})
