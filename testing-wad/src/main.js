//color codes = #4ABDAC,#FC4A1A,#F7B733,#DFDCE3

import './assets/main.css';
import '../../css/style.css'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import '../node_modules/bootstrap/dist/css/bootstrap.css';


// Make BootstrapVue available throughout your project

// Optionally install the BootstrapVue icon components plugin

import { createApp } from 'vue';
import CalendlyVue from 'calendly-vue'
import App from './App.vue';
import router from './router';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import * as labsComponents from 'vuetify/labs/components'


const vuetify = createVuetify({
  components,
  directives,
  labsComponents,
})

const app = createApp(App);

app.use(vuetify)
app.use(CalendlyVue)
app.use(router);
app.mount('#app');
