import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import router from './router';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import 'v-credit-card/dist/VCreditCard.css';

import VCreditCard from 'v-credit-card';




Vue.config.productionTip = false
Vue.component('v-credit-card', VCreditCard);



new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
