import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts'
import animated from 'animate.css'
import Element from 'element-ui'
import VueEventCalendar from 'vue-event-calendar'

Vue.config.productionTip = false;

Vue.use(animated);
Vue.use(Element, { size: 'small', zIndex: 3000 });

Vue.use(VueEventCalendar, {locale: 'zh'})

new Vue({
  render: h => h(App),
  router,
  store,
  created: function () {
    Vue.prototype.$echarts = echarts;
  }
}).$mount('#app');


