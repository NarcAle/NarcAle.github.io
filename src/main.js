import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'
import AOS from 'aos';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueIconFont from 'vue-icon-font'
import VueTypedJs from 'vue-typed-js'
import { SkillBar } from 'vue-skill-bar'

Vue.component('skill-bar', SkillBar)


import '../custom.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  once: true
});

global.config = require('../config.json');

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueIconFont)
Vue.use(VueTypedJs)

Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
