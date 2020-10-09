import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../components/HelloWorld.vue';
import Hello from '../components/Hello.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/mtc',
    name: 'Home',
    component: Home,
  },
  {
    path: '/',
    name: 'Hello',
    component: Hello,
  },
 
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
