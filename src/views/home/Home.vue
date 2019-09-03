<template>
  <div id="homepage">
    <h2>首页</h2>
  </div>
</template>

<script>
  import {request} from "../../network/request";

  request({
    url: '/api/v1/home/multidata'
  }).then(res => {
    console.log(res);
  }).catch(err => {
    console.log(err);
  });

  export default {
    name: "Home"
  }
</script>

<style scoped>
  #homepage {
    margin-top: 20px;
  }
</style>
