<template>
  <div id="analysisPage">
    <analysis-bar></analysis-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import AnalysisBar from '../../components/content/analysisSideBar/AnalysisBar'
  export default {
    name: "Analysis",
    components: {
      AnalysisBar
    }
  }
</script>

<style scoped>
  #analysisPage {
    margin-top: 20px;
  }
</style>
