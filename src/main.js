import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app');


// 封装request模块
// import {request} from "./network/request";
//
// request({
//   url: '/api/v1/home/multidata'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

