<template>
  <home-tab-bar id="tab-bar">
    <table id="indexItem">
      <thead>
      <tr>
        <th>表格标题</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <home-tab-bar-item id="schedule">
            <img slot="item-icon" src="~assets/img/home/tabbar/schedule/schedule.svg" alt="">
            <div slot="item-text">联系人</div>
          </home-tab-bar-item>
        </td>
      </tr>
      <tr>
        <td>
          <home-tab-bar-item path="clientInfo" id="mission">
            <img slot="item-icon" src="~assets/img/home/tabbar/mission/mission.svg" alt="">
            <div slot="item-text">客户</div>
          </home-tab-bar-item>
        </td>
      </tr>
      <tr>
        <td>
          <home-tab-bar-item id="echarts">
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
  import HomeTabBar from "../../common/homeTabbar/HomeTabBar";
  import HomeTabBarItem from '../../../components/common/homeTabbar/HomeTabBarItem'
  export default {
    name: "ClientBar",
    components: {
      HomeTabBar,
      HomeTabBarItem
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
    width: 50px;
    text-align: left;
  }
</style>
