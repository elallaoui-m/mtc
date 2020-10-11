import Vue from 'vue';
import VueRouter from 'vue-router';

import Form from '../components/Form.vue';
import Home from '../components/Home.vue';
import Payement from '../components/Payement.vue';
import PrePayement from '../components/PrePayement.vue';
import Error from '../components/Error.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/mtc',
    name: 'Form',
    component: Form,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/payement',
    name: 'PrePayement',
    component: PrePayement,
  },
  {
    path: '/payementFin',
    name: 'Payement',
    component: Payement,
  },
  {
    path: '/error',
    name: 'Error',
    component: Error,
  },
 
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
