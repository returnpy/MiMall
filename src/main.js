import axios from 'axios'
import { Message } from 'element-ui'
import Vue from 'vue'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import VueLazyLoad from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
// import env from './env'

Vue.prototype.$message = Message

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
  let path = location.hash;
  
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    if (path !== '#/index') {
      window.location.href = '/#/login'
    }
    return Promise.reject(res)
  } else {
    Message.warning(res.msg)
    return Promise.reject(res)
  }
})

Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyLoad, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
