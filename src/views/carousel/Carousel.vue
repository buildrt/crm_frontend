<template>
  <div id="carousel">
    <el-carousel :interval="5000" arrow="always" loop>
      <el-carousel-item v-for="item in titleImg" :key="item">
        <el-image :src="item.img"></el-image>
      </el-carousel-item>
    </el-carousel>

    <div>
      <router-link to="/login" >登录</router-link>
    </div>
  </div>
</template>

<script>
  import title1 from '../../assets/img/carousel/title1.png'
  import title2 from '../../assets/img/carousel/title2.png'
  import title3 from '../../assets/img/carousel/title3.jpeg'
  export default {
    name: "Carousel",
    data() {
      return {
        titleImg: [
          {img: title1},
          {img: title2},
          {img: title3}
        ]
      }
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
    height: 120%;
    background-color: black;
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
