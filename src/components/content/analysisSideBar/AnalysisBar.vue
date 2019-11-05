<template>
  <el-col :span="12">
    <hr id="titleLine">
    <el-menu
      default-active="2"
      background-color="#ffffff"
      text-color="#596b8c"
      active-text-color="#333333"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>

<script>
  export default {
    name: "AnalysisBar",
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
    left: 5%;
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
