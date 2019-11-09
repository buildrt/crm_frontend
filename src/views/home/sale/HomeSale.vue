<template>
  <div id="sale">
    <el-breadcrumb id="breadcrumb" separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>销售信息</el-breadcrumb-item>
    </el-breadcrumb>
    <p id="title">销售信息</p>
    <div id="saleChart">

    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeSale"
  }
</script>

<style scoped>
  #sale {
    position: absolute;
    left: 18%;
    top: 11%;
    width: 81.99%;
    height: 88.99%;
    /*background-color: #ff5777;*/
    overflow-y: scroll;
  }
  #breadcrumb {
    position: absolute;
    top: 7%;
    left: 2%;
    font-size: 15px;
  }
  #title {
    position: absolute;
    top: 14%;
    left: 2%;
    font-size: 22px;
    color: #6e00ff;
  }
  #saleChart {
    position: absolute;
    top: 23%;
    left: 2%;
    width: 65%;
    height: 400px;
    background-color: #fff;
  }
</style>
