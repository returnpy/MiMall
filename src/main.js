import axios from 'axios'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
// import env from './env'

const mock = false;
if (mock) {
  require('./mock/api')
}
// axios.defaults.baseURL = env.baseURL
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5e9fc8d78f206f68c74f6378'
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 5000

axios.interceptors.response.use(function (response) {
  let res = response.data
  
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login'
  } else {
    console.log('拦截器');
  }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
