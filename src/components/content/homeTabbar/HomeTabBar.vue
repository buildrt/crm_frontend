<template>
  <tab-bar id="tab-bar">
    <table id="indexItem" cellspacing="1" cellpadding="1" border="1px">
      <thead>
        <tr>
          <th>表格标题</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          <tab-bar-item path="schedule" id="schedule">
            <img slot="item-icon" src="~assets/img/home/tabbar/schedule/schedule.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/home/tabbar/schedule/schedule_active.svg"/>
            <div slot="item-text">日历</div>
          </tab-bar-item>
        </td>
      </tr>
      <tr>
        <td>
          <tab-bar-item path="mission" id="mission">
            <img slot="item-icon" src="~assets/img/home/tabbar/mission/mission.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/home/tabbar/mission/mission_active.svg"/>
            <div slot="item-text">任务</div>
          </tab-bar-item>
        </td>
      </tr>
      <tr>
        <td>
          <tab-bar-item path="echarts" id="echarts">
            <img slot="item-icon" src="~assets/img/home/tabbar/echarts/echarts.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/home/tabbar/echarts/echarts_active.svg"/>
            <div slot="item-text">图表</div>
          </tab-bar-item>
        </td>
      </tr>
      <tr>
        <td>
          <tab-bar-item>
            <img slot="item-icon" src="~assets/img/tabbar/home/home.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/home/home_active.svg"/>
            <div slot="item-text">日历</div>
          </tab-bar-item>
        </td>
      </tr>
      <tr>
        <td>
          <tab-bar-item>
            <img slot="item-icon" src="~assets/img/tabbar/home/home.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/home/home_active.svg"/>
            <div slot="item-text">任务</div>
          </tab-bar-item>
        </td>
      </tr>
      <tr>
        <td>
          <tab-bar-item>
            <img slot="item-icon" src="~assets/img/tabbar/home/home.svg" alt="">
            <img slot="item-icon-active" src="~assets/img/tabbar/home/home_active.svg"/>
            <div slot="item-text">图表</div>
          </tab-bar-item>
        </td>
      </tr>
      </tbody>
    </table>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/common/tabbar/TabBar'
  import TabBarItem from 'components/common/tabbar/TabBarItem'

  export default {
    name: "HomeTabBar",
    data() {
      return {
        activeID: 'activeTD'
      }
    },
    components: {
      TabBar,
      TabBarItem
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
  tbody td {
    padding-left: 10px;
  }
  tbody img {
    position: absolute;
    width: 25px;
    height: 25px;
  }
  tbody div {
    position: absolute;
    width: 40px;
  }
  
  #scheduleTD {
    background-color: rgba(0,0,0,.2);
  }
</style>
