<template>
  <div id="order">
    <el-breadcrumb id="breadcrumb" separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>订单信息</el-breadcrumb-item>
    </el-breadcrumb>
    <p id="title">订单信息</p>
    <div id="orderChart">

    </div>
    <div id="chartSide">

    </div>
    <div id="orderTable">
      <p>订单</p>
      <el-table
        border
        style="width: 96%">
        <el-table-column
          label="客户"
          width="80"
          fixed>
        </el-table-column>
        <el-table-column
          label="销售名"
          width="150"
          fixed>
        </el-table-column>
        <el-table-column
          width="200"
          label="货物">
        </el-table-column>
        <el-table-column
          width="80"
          label="数量">
        </el-table-column>
        <el-table-column
          width="80"
          label="总金额">
        </el-table-column>
        <el-table-column
          width="80"
          label="完成状态">
        </el-table-column>
        <el-table-column
          width="200"
          label="创建时间">
        </el-table-column>
        <el-table-column
          label="备注">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currpage"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="10">
      </el-pagination>
    </div>
    <div id="foot">

    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeOrder",
    data() {
      return {
        pagesize: 8,  // 每页的数据数
        currpage: 1,  // 默认开始页面
      }
    },
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
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
  }
</script>

<style scoped>
  #order {
    position: absolute;
    left: 18%;
    top: 11%;
    width: 81.99%;
    height: 88.99%;
    overflow-y: scroll;
  }
  #breadcrumb {
    position: absolute;
    top: 7%;
    left: 2%;
    font-size: 15px;
  }
  #title {
    position: absolute;
    top: 14%;
    left: 2%;
    font-size: 22px;
    color: #6e00ff;
  }
  #orderChart {
    position: absolute;
    top: 23%;
    left: 2%;
    width: 65%;
    height: 500px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }
  #chartSide {
    position: absolute;
    top: 23%;
    right: 2%;
    width: 28%;
    height: 500px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }
  #orderTable {
    position: absolute;
    top: 120%;
    width: 96%;
    left: 2%;
    height: 600px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }
  #orderTable p {
    position: absolute;
    top: 6%;
    left: 2%;
    font-size: 18px;
    /*color: black;*/
    font-weight: bold;
  }
  #orderTable .el-table {
    position: absolute;
    top: 15%;
    left: 2%;
    height: 60%;
  }
  .el-pagination {
    position: absolute;
    top: 85%;
    right: 5%;
  }
  #foot {
    position: absolute;
    top: 230%;
    width: 100%;
    height: 80px;
  }
</style>
