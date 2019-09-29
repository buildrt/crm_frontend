<template>
  <div class="loading"></div>
</template>

<script>
  export default {
    name: "Loading"
  }
</script>

<style scoped>
  .loading {
    position: absolute;
    background: url('../../assets/img/loading/Rolling.gif') center center no-repeat #fff;
    z-index: 1000;
    left: 200px;
    top: 10%;
    margin-top: 20px;
    width: 84%;
    height: 83%;
  }
</style>
