<template>
  <tab-bar>
    <tab-bar-item path="/home" id="homepage">
      <img slot="item-icon" src="~assets/img/tabbar/home/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home/home_active.svg"/>
      <div slot="item-text">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/client" id="client">
      <img slot="item-icon" src="~assets/img/tabbar/home/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home/home_active.svg"/>
      <div slot="item-text">客户管理</div>
    </tab-bar-item>

    <tab-bar-item path="/analysis" id="data">
      <img slot="item-icon" src="~assets/img/tabbar/home/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home/home_active.svg"/>
      <div slot="item-text">数据分析</div>
    </tab-bar-item>

    <tab-bar-item path="/login" id="login" v-if="$store.state.loginJudge">
      <img slot="item-icon" src="~assets/img/tabbar/login/login.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/login/login_active.svg"/>
      <div slot="item-text">登录</div>
    </tab-bar-item>

    <tab-bar-item path="/register" id="register" v-if="$store.state.loginJudge">
      <img slot="item-icon" src="~assets/img/tabbar/register/register.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/register/register_active.svg" alt="">
      <div slot="item-text">注册</div>
    </tab-bar-item>

    <tab-bar-item path="/profile" id="profile" v-if="!$store.state.loginJudge">
      <img slot="item-icon" src="~assets/img/tabbar/profile/profile.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/profile/profile_active.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "MainTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  #homepage {
    position: relative;
    left: 20%;
  }
  #client {
    position: relative;
    left: 25%;
  }
  #data {
    position: relative;
    left: 32%;
  }
  #register {
    position: relative;
    left: 74%;
  }
  #login {
    position: relative;
    left: 72%;
  }
  #profile {
    position: relative;
    left: 73%;
  }
</style>
