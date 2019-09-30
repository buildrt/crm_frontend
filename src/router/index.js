import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const HomeMission = () => import('../views/home/mission/HomeMission');
const HomeEcharts = () => import('../views/home/echarts/HomeEcharts');
const HomeSchedule = () => import('../views/home/schedule/HomeSchedule');

const Client = () => import('../views/client/Client');
const ClientInfo = () => import('../views/client/clientInfo/ClientInfo');
const Contacts = () => import('../views/client/contacts/Contacts');

const Analysis = () => import('../views/analysis/Analysis');

const Register = () => import('../views/register/Register');
const Login = () => import('../views/login/Login');
const Profile = () => import('../views/profile/Profile');

const Carousel = () => import('../views/carousel/Carousel');

// 1.安装插件
Vue.use(VueRouter);

// 2.创建router
const routes = [
  {
    path: '',
    redirect: './carousel'
  },
  {
    path: '/carousel',
    component: Carousel,
    meta: {
      title: 'CRM管理系统'
    }
  },
  {
    path: '/login',
    component: Login,
    meta: {
      title: '登录',
      needLogin: false,
      index: 0
    }
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页',
      needLogin: true,   // 判断每次路由跳转的链接是否需要登录
      index: 1,          // 判断页面是否添加动画
    },
    children: [
      {
        path: '',
        redirect: 'mission'
      },
      {
        path: 'schedule',
        component: HomeSchedule
      },
      {
        path: 'mission',
        component: HomeMission
      },
      {
        path: 'echarts',
        component: HomeEcharts
      }
    ]
  },
  {
    path: '/client',
    component: Client,
    meta: {
      title: '客户管理',
      index: 1
    },
    children: [
      {
        path: '',
        redirect: 'clientInfo'
      },
      {
        path: 'clientInfo',
        component: ClientInfo
      },
      {
        path: 'contacts',
        component: Contacts
      }
    ]
  },
  {
    path: '/analysis',
    component: Analysis,
    meta: {
      title: '数据分析',
      index: 1
    }
  },
  {
    path: '/register',
    component: Register,
    meta: {
      title: '注册',
      index: 0
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '个人空间',
      needLogin: true
    }
  },

];

const router = new VueRouter({
  routes,
  mode: 'history'
});

//全局导航守卫
router.beforeEach((to, from, next) => {
  // document.title = to.matched[0].meta.title;
  // next();

  //路由中设置的needLogin字段就在to当中
  if (window.sessionStorage.data) {
    console.log(window.sessionStorage);
    if (to.path === '/login') {
      // 在已经登录状态下，访问Login.vue页面 会跳到Home.vue
      document.title = to.matched[0].meta.title;
      next({
        path: '/home'
      });
    }else {
      document.title = to.matched[0].meta.title;
      next();
    }
  }else {
    // 如果没有session ,访问任何页面。都会进入到 登录页
    if (to.path === '/login' || to.path === '/register' || to.path === '/carousel') {  // 如果是登录页面的话，直接next()
      document.title = to.matched[0].meta.title;
      next();
    }else {
      // 否则 跳转到登录页面
      next({
        path: '/login'
      });
      alert("你必须先登录")
    }
  }
});

// 3.导出
export default router
