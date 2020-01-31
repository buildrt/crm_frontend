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
      <div id="orderSearch">
        <el-form
          :inline="true"
          id="orderForm"
          :model="orderSearchData"
          :rules="orderSearchRules"
          ref="orderSearchData">
          <el-form-item prop="orderId">
            <el-input id="orderName" placeholder="请输入订单号" autocomplete="off" v-model="orderSearchData.orderId" type="text"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-search"></el-button>
          </el-form-item>
        </el-form>
      </div>
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
          width="220"
          label="备注">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="handleEdit(scope.$index, scope.row)"
              size="mini">修改</el-button>
            <el-button
              size="mini"
              @click="handleDelete(scope.$index, scope.row)"
              type="danger">删除</el-button>
          </template>
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
        orderSearchData: {
          orderId: ''
        },
        orderSearchRules: {

        }
      }
    },
    mounted() {
      this.drawLine();
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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
  #orderSearch {
    position: absolute;
    top: 6%;
    left: 25%;
    width: 25%;
  }
  #orderSearch #orderForm {
    position: absolute;
    width: 100%;
  }
  #orderForm .el-input {
    position: absolute;
    width: 200px;
  }
  #orderForm .el-button {
    position: absolute;
    left: 200px;
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
