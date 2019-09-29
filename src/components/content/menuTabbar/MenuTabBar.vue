<template>
  <el-menu
    :default-active="this.$route.path"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
    text-color="#000"
    router
    active-text-color="#bfbfbf">
    <el-menu-item index="/home" id="homepage">首页</el-menu-item>
    <el-menu-item index="/client" id="client">客户管理</el-menu-item>
    <el-menu-item index="/analysis" id="data">数据分析</el-menu-item>
    <el-menu-item index="/login" id="login" v-if="$store.state.loginJudge">登录</el-menu-item>
    <el-menu-item index="/register" id="register" v-if="$store.state.loginJudge">注册</el-menu-item>
    <el-menu-item index="/profile" id="profile" v-if="!$store.state.loginJudge">我的</el-menu-item>
  </el-menu>
</template>

<script>
  export default {
    name: "MenuTabBar",
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .el-menu {
    position: absolute;
    top: 0;
    height: 10%;
    width: 100%;
    background-color: rgba(0,0,0,0);
    box-shadow: 0 5px 5px rgba(100,100,100,.2);
  }
  #homepage {
    margin-left: 18%;
  }
  .el-menu-item {
    font-size: 16px;
    top: 4%;
    background-color: rgba(0,0,0,0);
    margin-right: 20px;
  }
  #login {
    position: absolute;
    right: 10%;
  }
  #register {
    position: absolute;
    right: 4%;
  }
  #profile {
    position: absolute;
    right: 7%;
  }
</style>
