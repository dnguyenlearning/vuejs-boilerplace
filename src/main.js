import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from "./router"
import {store} from "@/store"
import {setUpInterceptors} from "./client"
import VeeValidate from 'vee-validate';

setUpInterceptors()
Vue.config.productionTip = false
Vue.use(VeeValidate);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
