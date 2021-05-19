import Vue from 'vue'
import VuePaginate from 'vue-paginate'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;
Vue.use(VuePaginate);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
