/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap')

window.Vue = require('vue')
import Vuex from 'vuex'
import router from './router'
import { store } from './store.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'jquery/dist/jquery'
import { globalMixin } from './globalMixin'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import 'animate.css'

Vue.use(Vuex)
Vue.mixin(globalMixin)
Vue.use(VueCodemirror, /* { 
    options: { theme: 'base16-dark', ... },
    events: ['scroll', ...]
  } */)
const app = new Vue({
    el: '#app',
    mode: 'history',
    router,
    store,
});
