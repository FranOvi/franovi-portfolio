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

const lightTheme = {
  dark: false,
  colors: {
    background: '#fff7ff',
    surface: '#fff7ff',
    'surface-variation': '#ede0f4',
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

const darkTheme = {
  dark: true,
  colors: {
    background: '#2c2b38',
    surface: '#2c2b38',
    'surface-variation': '#3e3c4e',
    dark: '#1e1d24',
    primary: '#F7931E',
    'primary-darken-1': '#3700B3',
    secondary: '#0071BC',
    'secondary-darken-1': '#018786',
    error: '#D4145A',
    info: '#696AE9',
    success: '#22B573',
    warning: '#FCBE35',
    'on-background': '#fff7ff',
    'on-surface': '#fff7ff',
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: localStorage.getItem('theme') ?? 'lightTheme',
    themes: {
      lightTheme,
      darkTheme
    }
  },
})
