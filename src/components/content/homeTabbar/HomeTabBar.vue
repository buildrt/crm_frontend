<template>
  <tab-bar id="tab-bar">
    <tab-bar-item path="mission" id="mission">
      <img slot="item-icon" src="~assets/img/tabbar/home/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home/home_active.svg"/>
      <div slot="item-text">任务</div>
    </tab-bar-item>

    <tab-bar-item path="echarts" id="echarts">
      <img slot="item-icon" src="~assets/img/tabbar/home/home.svg" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home/home_active.svg"/>
      <div slot="item-text">图表</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "HomeTabBar",
    components: {
      TabBar,
      TabBarItem
    }
  }
</script>

<style scoped>
  #tab-bar {
    position: absolute;
    top: 0;
    width: 13%;
    height: 100%;
    background-color: #473C8B;
    box-shadow: 8px 0 5px rgba(100,100,100,.5);
  }
  #mission {
    position: relative;
    left: 3%;
  }
  #echarts {
    position: relative;
    top: 80%;
    left: -30%;
  }
</style>
