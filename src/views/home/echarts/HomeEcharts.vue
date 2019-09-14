<template>
  <div id="echarts">
    <div id="showdiv">
      <div id="myChart"></div>
    </div>

    <div id="sidebar">
      <h2>图表侧栏</h2>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeEcharts",
    mounted() {
      this.drawLine();
    },
    methods: {
      drawLine() {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption({
          title: { text: '在Vue中使用echarts' },
          tooltip: {},
          xAxis: {
            data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }]
        });
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/home/mainStyle.css";

  #myChart {
    width: 600px;
    height: 400px;
  }
</style>
