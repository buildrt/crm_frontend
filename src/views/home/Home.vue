<template>
  <div id="homepage">
    <h2>首页</h2>
    <h2>{{$store.state.counter}}</h2>
    <h2>{{$store.state.loginJudge}}</h2>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>

<style scoped>
  #homepage {
    margin-top: 20px;
  }
</style>
