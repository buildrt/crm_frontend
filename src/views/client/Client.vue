<template>
  <div id="clientpage">
    <client-bar></client-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import ClientBar from '../../components/content/clientSideBar/ClientBar'

  export default {
    name: "Client",
    components: {
      ClientBar,
    }
  }
</script>

<style scoped>
  #clientpage {
    margin-top: 20px;
  }
</style>
