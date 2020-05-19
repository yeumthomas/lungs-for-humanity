import Vue from 'vue'
import App from './App.vue';
import Home from './Home.vue';
import Donate from './Donate.vue';
import Contact from './Contact.vue';
import ApolloBVM from './ApolloBVM.vue';


//import 'element-ui/lib/theme-chalk/reset.css';
import Element from 'element-ui';
import 'element-theme-chalk';
import VueRouter from 'vue-router';

Vue.use('element-theme-chalk');
Vue.use(Element, { size: 'small', zIndex: 3000 });
Vue.use(VueRouter);

Vue.config.productionTip = false

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
