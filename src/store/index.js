import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'


Vue.use(Vuex)

const state = {
  username: '',  // 登陆用户名
  cartCount: -1  // 商品数量
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})