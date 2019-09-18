import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import animated from 'animate.css'
import Element from 'element-ui'

Vue.config.productionTip = false;

Vue.use(animated);
Vue.use(Element, { size: 'small', zIndex: 3000 });

new Vue({
  render: h => h(App),
  router,
  store,
  created: function () {
    Vue.prototype.$echarts = echarts;
  }
}).$mount('#app');

//判断token失效跳转
// import axios from 'axios'
//
// axios.interceptors.response.use(response => {
//   if (response) {
//     switch (response.data.code) {
//
//       case 1001: //与后台约定登录失效的返回码,根据实际情况处理
//         sessionStorage.removeItem('username');     //删除用户
//         sessionStorage.removeItem('token');     //删除用户登录验证的key值，即token值
//         router.replace({
//           path: '/login',
//           query: {
//             redirect: router.currentRoute.fullPath
//           }
//         })
//     }
//   }
//   return response;
// }, error => {
//
//   return Promise.reject(error.response.data) //返回接口返回的错误信息
// });

