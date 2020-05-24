import Vue from 'vue'
import App from './App.vue';
import Home from './Home.vue';
import Donate from './Donate.vue';
import Contact from './Contact.vue';
import ApolloBVM from './ApolloBVM.vue';

import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/reset.css';
import 'element-theme-chalk';
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'

Vue.use('element-theme-chalk');
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

//Set up Routes
const routes = [
  { path: '/', component: Home },
  { path: '/donate', component: Donate },
  { path: '/contact', component: Contact },
  { path: '/apollobvm', component: ApolloBVM }
];

const router = new VueRouter({
  routes: routes,
  mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
