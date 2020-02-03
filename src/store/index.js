import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 1.安装插件
Vue.use(Vuex);

const state = {
  counter: 1000,
  loginJudge: false, // 判断登录，注册和个人页面的出现关系
  isAdmin: false,
};

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});

export default store
