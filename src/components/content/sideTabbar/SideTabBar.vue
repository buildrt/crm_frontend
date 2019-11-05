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
      <el-menu-item index="/home/mission">
        <i class="el-icon-document"></i>
        <span slot="title">任务</span>
      </el-menu-item>
      <el-menu-item index="/home/schedule">
        <i class="el-icon-menu"></i>
        <span slot="title">日程</span>
      </el-menu-item>
      <el-menu-item index="/home/echarts">
        <i class="el-icon-setting"></i>
        <span slot="title">图表</span>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-document"></i>
        <span slot="title">任务</span>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-menu"></i>
        <span slot="title">日历</span>
      </el-menu-item>
      <el-menu-item>
        <i class="el-icon-setting"></i>
        <span slot="title">图表</span>
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
