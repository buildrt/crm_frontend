<template>
  <el-col :span="12">
    <el-menu
      :default-active="this.$route.path"
      background-color="#473C8B"
      text-color="#fff"
      active-text-color="#ffd04b"
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
  .el-col {
    position: absolute;
    top: 0;
    width: 13%;
    height: 100%;
    background-color: #473C8B;
    box-shadow: 8px 0 5px rgba(100,100,100,.5);
  }
  .el-menu {
    top: 18%;
    overflow-y: hidden;
  }
  .el-menu-item i {
    margin-right: 15px;
    margin-left: 10px;
  }
</style>
