<template>
  <el-col :span="12">
    <hr id="titleLine">
    <el-menu
      :default-active="this.$route.path"
      background-color="#ffffff"
      text-color="#596b8c"
      active-text-color="#333333"
      class="el-menu-vertical-demo"
      router
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="/home/orderInfo">
        <i class="el-icon-menu"></i>
        <span slot="title">订单信息</span>
      </el-menu-item>
      <el-menu-item index="/home/saleInfo">
        <i class="el-icon-document"></i>
        <span slot="title">销售信息</span>
      </el-menu-item>
      <el-menu-item index="/client/clientInfo">
        <i class="el-icon-menu"></i>
        <span slot="title">客户信息</span>
      </el-menu-item>
      <el-menu-item index="/business/goodsInfo">
        <i class="el-icon-setting"></i>
        <span slot="title">货物信息</span>
      </el-menu-item>
      <el-menu-item index="/business/opportunity">
        <i class="el-icon-document"></i>
        <span slot="title">商机信息</span>
      </el-menu-item>
      <el-menu-item index="/profile">
        <i class="el-icon-setting"></i>
        <span slot="title">个人信息</span>
      </el-menu-item>
      <el-menu-item index="/profileAdmin">
        <i class="el-icon-document"></i>
        <span slot="title">用户管理</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
  export default {
    name: "SideTabBar",
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/titleLine/titleLine.css";
  .el-col {
    position: absolute;
    top: 0;
    width: 12%;
    left: 4.5%;
    bottom: 0;
    background-color: #ffffff;
    box-shadow: 4px 0 3px rgba(100,100,100,.2);
  }
  .el-menu {
    top: 18%;
    font-weight: bold;
    overflow-y: hidden;
  }
  .el-menu-item i {
    margin-right: 15px;
    margin-left: 10px;
  }
</style>
