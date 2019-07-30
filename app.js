import Vue from 'vue';

import Vuetify from 'vuetify';
Vue.use(Vuetify, {
  options: {
    theme: {
      customProperties: true,
    },
  }
});

import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});
