<template>
  <div id="clientInfo">
    <div id="title">
      <p>客户管理</p>
    </div>
    <div id="infoTable">
      <div id="headTable"></div>
      <div id="mainTable">
        <el-table
          :data="tableData"
          style="width: 100%"
          height="250">
          <el-table-column
            fixed
            prop="date"
            label="日期"
            width="150">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
          </el-table-column>
          <el-table-column
            prop="province"
            label="省份"
            width="120">
          </el-table-column>
          <el-table-column
            prop="city"
            label="市区"
            width="120">
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
            width="300">
          </el-table-column>
          <el-table-column
            prop="zip"
            label="邮编"
            width="120">
          </el-table-column>
        </el-table>
      </div>
      <div id="footTable"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ClientInfo",
    data() {
      return {
        tableData : [
          {
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-05',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-07',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
          {
            date: '2016-05-06',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
          },
        ]
      }
    }
  }
</script>

<style scoped>
  #title {
    position: absolute;
    left: 200px;
    top: 10%;
    width: 84%;
    height: 15%;
    padding: 10px;
    margin-top: 20px;
  }
  #title p {
    position: relative;
    top: 30%;
    font-size: 22px;
  }
  #infoTable {
    position: absolute;
    left: 200px;
    top: 25%;
    margin-top: 20px;
    width: 84%;
    height: 68%;
    background-color: white;
    padding: 10px;
  }
  
  #mainTable {
    position: relative;
    top: 12%;
    text-align: center;
  }
  .el-table {
    font-size: 16px;
    text-align: center;
  }
</style>
