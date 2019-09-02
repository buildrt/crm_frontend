<template>
  <tab-bar>
    <tab-bar-item path="/home" id="homepage">
      <img slot="item-icon" src="~assets/img/tabbar/home/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home/home_active.svg"/>
      <div slot="item-text">首页</div>
    </tab-bar-item>

    <tab-bar-item path="/login" id="login" v-if="Existence">
      <img slot="item-icon" src="~assets/img/tabbar/login/login.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/login/login_active.svg"/>
      <div slot="item-text">登录</div>
    </tab-bar-item>

    <tab-bar-item path="/register" id="register" v-if="Existence">
      <img slot="item-icon" src="~assets/img/tabbar/register/register.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/register/register_active.svg" alt="">
      <div slot="item-text">注册</div>
    </tab-bar-item>

    <tab-bar-item path="/profile" id="profile" v-if="!Existence">
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
    data() {
      return {
        Existence: false, // 判断登录，注册和个人页面的出现关系
      }
    },
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
  #register {
    position: relative;
    left: 85%;
  }
  #login {
    position: relative;
    left: 83%;
  }
  #profile {
    position: relative;
    left: 85%;
  }
</style>
