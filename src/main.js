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


