<template>
  <div id="clientInfo">
    <el-breadcrumb id="breadcrumb" separator="/">
      <el-breadcrumb-item>客户管理</el-breadcrumb-item>
      <el-breadcrumb-item>客户信息</el-breadcrumb-item>
    </el-breadcrumb>
    <div id="title">
      <p>客户信息</p>
    </div>
    <div id="infoTable">
      <div id="headTable"></div>
      <div id="mainTable">
        <el-table
          :data="clientData.slice((currpage-1)*pagesize,currpage*pagesize)"
          style="width: 100%;"
          border
          stripe
          height="330">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            fixed
            sortable
            prop="cid"
            label="客户ID"
            width="120">
          </el-table-column>
          <el-table-column
            fixed
            sortable
            prop="cname"
            label="客户名称"
            width="120">
          </el-table-column>
          <el-table-column
            prop="rank"
            sortable
            label="客户级别"
            width="150">
          </el-table-column>
          <el-table-column
            prop="source"
            sortable
            label="客户来源"
            width="120">
          </el-table-column>
          <el-table-column
            prop="remark"
            sortable
            label="备注"
            width="220">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机"
            width="120">
          </el-table-column>
        </el-table>
      </div>
      <div id="footTable">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currpage"
          :page-sizes="[2, 4, 6, 8]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="clientData.length">
        </el-pagination>
      </div>
    </div>
    <div id="foot">

    </div>
  </div>
</template>

<script>
  export default {
    name: "ClientInfo",
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pagesize=val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currpage=val;
      },
    },
    data() {
      return {
        clientData: [],
        pagesize: 8,  // 每页的数据数
        currpage: 1,  // 默认开始页面
      }
    }
  }
</script>

<style scoped>
  #clientInfo {
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
    left: 2%;
    top: 14%;
    font-size: 22px;
    color: #6e00ff;
  }
  #infoTable {
    position: absolute;
    left: 2%;
    top: 23%;
    margin-top: 20px;
    width: 96%;
    height: 500px;
    background-color: white;
    padding: 10px;
  }
  
  #mainTable {
    position: relative;
    top: 12%;
    text-align: center;
  }
  .el-table {
    font-size: 14px;
    text-align: center;
  }
  #footTable {
    position: absolute;
    top: 85%;
    right: 10%;
  }
  #foot {
    position: absolute;
    top: 115%;
    width: 100%;
    height: 80px;
  }
</style>
