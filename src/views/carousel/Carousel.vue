<template>
  <div id="carousel">
    <el-carousel :interval="5000" arrow="always" loop>
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>

    <div>
      <router-link to="/login" >登录</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Carousel",
    methods: {
     
    }
  }
</script>

<style scoped>
  #carousel {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
  }
  .el-carousel {
    position: relative;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
