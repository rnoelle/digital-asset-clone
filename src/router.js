import Vue from 'vue';
import Router from 'vue-router';
import Home from './components/view/Home.vue';
import Company from './components/view/Company.vue';

Vue.use(Router);
export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/company',
    name: 'Company',
    component: Company
  }]
})
