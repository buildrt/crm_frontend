<template>
  <home-tab-bar id="tab-bar">
    <table id="indexItem" cellspacing="1" cellpadding="1" border="1px">
      <thead>
        <tr>
          <th>表格标题</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <home-tab-bar-item path="schedule" id="schedule">
            <img slot="item-icon" src="~assets/img/home/tabbar/schedule/schedule.svg" alt="">
            <div slot="item-text">日历</div>
          </home-tab-bar-item>
        </td>
      </tr>
      <tr>
        <td>
          <home-tab-bar-item path="mission" id="mission">
            <img slot="item-icon" src="~assets/img/home/tabbar/mission/mission.svg" alt="">
            <div slot="item-text">任务</div>
          </home-tab-bar-item>
        </td>
      </tr>
      <tr>
        <td>
          <home-tab-bar-item path="echarts" id="echarts">
            <img slot="item-icon" src="~assets/img/home/tabbar/echarts/echarts.svg" alt="">
            <div slot="item-text">图表</div>
          </home-tab-bar-item>
        </td>
      </tr>
      <tr>
        <td>
          <home-tab-bar-item>
            <img slot="item-icon" src="~assets/img/tabbar/home/home.svg" alt="">
            <div slot="item-text">日历</div>
          </home-tab-bar-item>
        </td>
      </tr>
      <tr>
        <td>
          <home-tab-bar-item>
            <img slot="item-icon" src="~assets/img/tabbar/home/home.svg" alt="">
            <div slot="item-text">任务</div>
          </home-tab-bar-item>
        </td>
      </tr>
      <tr>
        <td>
          <home-tab-bar-item>
            <img slot="item-icon" src="~assets/img/tabbar/home/home.svg" alt="">
            <div slot="item-text">图表</div>
          </home-tab-bar-item>
        </td>
      </tr>
      </tbody>
    </table>
  </home-tab-bar>
</template>

<script>
  import HomeTabBar from 'components/common/homeTabbar/HomeTabBar'
  import HomeTabBarItem from 'components/common/homeTabbar/HomeTabBarItem'

  export default {
    name: "SideTabBar",
    data() {
      return {
        activeID: 'activeTD'
      }
    },
    components: {
      HomeTabBar,
      HomeTabBarItem
    },
    methods: {

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
  #indexItem {
    position: absolute;
    top: 12%;
    width: 100%;
    height: 60%;
  }
  tbody img {
    position: absolute;
    width: 25px;
    height: 25px;
    left: 23%;
  }
  tbody div {
    position: absolute;
    width: 40px;
  }
  
  #scheduleTD {
    background-color: rgba(0,0,0,.2);
  }
</style>
