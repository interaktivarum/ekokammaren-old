// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueFire from 'vuefire'
import Firebase from 'firebase'
import App from './App'
import router from './router'

import { store } from './store';

Vue.config.productionTip = false
Vue.use(VueFire)

import VueResource from 'vue-resource';
Vue.use(VueResource);

// Setup Firebase
var config = {
  apiKey: "AIzaSyCaku2UIVgQQ_hG5PtQKQ_XjkjsGUzFeiQ",
  authDomain: "http://localhost:8080",
  databaseURL: "https://ekokammaren.firebaseio.com"
}
let appDb = Firebase.initializeApp(config)
let db = appDb.database();

/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  firebase: function () {
    return {
      workshops: db.ref('workshops')
    }
  }
})
