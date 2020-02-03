import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'

const Home = () => import('../views/home/Home');
const HomeSale = () => import('../views/home/sale/HomeSale');
const HomeOrder = () => import('../views/home/order/HomeOrder');

const Client = () => import('../views/client/Client');
const ClientInfo = () => import('../views/client/clientInfo/ClientInfo');

const Business = () => import('../views/business/Business');
const GoodsInfo = () => import('../views/business/goodsInfo/GoodsInfo');
const Opportunity = () => import('../views/business/opportunity/Opportunity');

const Register = () => import('../views/register/Register');
const Login = () => import('../views/login/Login');
const Profile = () => import('../views/profile/Profile');
const ProfileAdmin = () => import('../views/profile/ProfileAdmin');
const ProfileAdminInfo = () => import('../views/profile/profileAdminInfo/ProfileAdminInfo');

// 1.安装插件
Vue.use(VueRouter);

// 2.创建router
const routes = [
  {
    path: '',
    redirect: './login'
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
      index: 1,          // 判断页面是否添加动画
    },
    children: [
      {
        path: '',
        redirect: 'orderInfo'
      },
      {
        path: 'saleInfo',
        component: HomeSale
      },
      {
        path: 'orderInfo',
        component: HomeOrder
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
    ]
  },
  {
    path: '/business',
    component: Business,
    meta: {
      title: '数据分析',
      index: 1
    },
    children: [
      {
        path: '',
        redirect: 'goodsInfo'
      },
      {
        path: 'goodsInfo',
        component: GoodsInfo
      },
      {
        path: 'opportunity',
        component: Opportunity
      }
    ]
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
    }
  },
  {
    path: '/profileAdmin',
    component: ProfileAdmin,
    meta: {
      title: '用户管理',
    },
    children: [
      {
        path: '',
        redirect: 'profileAdminInfo'
      },
      {
        path: 'profileAdminInfo',
        component: ProfileAdminInfo
      },
    ]
  },
];

if (window.localStorage.getItem('loginJudge') === 'true') {
  store.commit('setIsLogin',Boolean(window.localStorage.getItem('loginJudge')));
}

if (window.localStorage.getItem('isAdmin') === true) {
  console.log(Boolean(window.localStorage.getItem('isAdmin')));
  store.commit('setIsAdmin',Boolean(window.localStorage.getItem('isAdmin')));
}

window.onbeforeunload = function (e) {
  e = e || window.event;

  // 兼容IE8和Firefox 4之前的版本
  if (e) {
    e.returnValue = '关闭提示';
  }
  store.commit('setIsLogin', false);
  window.localStorage.setItem('loginJudge', 'false');
  // Chrome, Safari, Firefox 4+, Opera 12+ , IE 9+
  return '关闭提示';
};


const router = new VueRouter({
  routes,
  mode: 'hash'
});

//全局导航守卫
router.beforeEach((to, from, next) => {
  // document.title = to.matched[0].meta.title;
  // next();
  // console.log(store.getters.isLogin);
  if(store.getters.isLogin === true) {
    console.log(store.getters.isLogin);
    if (to.path === '/login' || to.path === '/register' || to.path === '/carousel') {
      //在已经登录状态下，访问Login.vue页面 会跳到Home.vue
      document.title = to.matched[0].meta.title;
      next({
        path: '/home'
      });
    }else {
      document.title = to.matched[0].meta.title;
      next();
    }
  }else {
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
