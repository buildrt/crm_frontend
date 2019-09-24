<template>
  <div id="clientPage">
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
  #clientPage {
    margin-top: 20px;
  }
</style>
