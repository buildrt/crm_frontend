import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home');
const Register = () => import('../views/register/Register');
const Login = () => import('../views/login/Login');
const Profile = () => import('../views/profile/Profile');

// 1.安装插件
Vue.use(VueRouter);

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/profile',
    component: Profile
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

// 3.导出
export default router
