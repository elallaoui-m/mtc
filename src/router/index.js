import Vue from 'vue';
import VueRouter from 'vue-router';

import Form from '../components/Form.vue';
import Home from '../components/Home.vue'

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
 
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
