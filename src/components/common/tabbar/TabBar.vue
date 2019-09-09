<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "TabBar"
  }
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: rgba(0,0,0,0);

    left: 0;
    right: 0;
    bottom: 0;

    box-shadow: 0 5px 5px rgba(100,100,100,.2);
  }
</style>
