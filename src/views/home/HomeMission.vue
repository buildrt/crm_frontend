<template>
  <div id="mission">
    <div id="showdiv">
      <h2>任务标题</h2>
    </div>

    <div id="sidebar">
      <h2>任务侧栏</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Mission"
  }
</script>

<style scoped>
  /* 主内容的样式 */
  #showdiv {
    position: absolute;
    left: 200px;
    top: 10%;
    margin-top: 20px;
    width: 50%;
    height: 83%;
    background-color: white;
    padding: 10px;
  }
  /* 侧栏的样式 */
  #sidebar {
    position: absolute;
    right: 0;
    top: 10%;
    margin-top: 20px;
    background-color: white;
    width: 34%;
    height: 83%;
  }
</style>
