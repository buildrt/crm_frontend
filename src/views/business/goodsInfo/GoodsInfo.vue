<template>
  <div id="goods">
    <el-breadcrumb id="breadcrumb" separator="/">
      <el-breadcrumb-item>商业管理</el-breadcrumb-item>
      <el-breadcrumb-item>货物信息</el-breadcrumb-item>
    </el-breadcrumb>
    <p id="title">货物信息</p>
    <div id="goodsTable">
      <p>货物</p>
      <div id="goodsSearch">
        <el-form
          :inline="true"
          id="goodsForm"
          :model="goodsSearchData"
          :rules="goodsSearchRules"
          ref="clientSearchData">
          <el-form-item prop="goodsId">
            <el-input placeholder="请输入销售号" autocomplete="off" v-model="goodsSearchData.goodsId" type="text"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button icon="el-icon-search"></el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        style="width: 96%;"
        border
        stripe>
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          fixed
          sortable
          prop="goodsId"
          label="货物ID"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          sortable
          prop="goodsName"
          label="货物名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="type"
          sortable
          label="类别"
          width="150">
        </el-table-column>
        <el-table-column
          prop="amount"
          sortable
          label="数量"
          width="120">
        </el-table-column>
        <el-table-column
          prop="cost"
          sortable
          label="单价"
          width="120">
        </el-table-column>
        <el-table-column
          prop="location"
          label="位置"
          width="220">
        </el-table-column>
        <el-table-column
          prop="source"
          label="来源"
          width="120">
        </el-table-column>
        <el-table-column
          prop="inTime"
          label="入库时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="status"
          label="上架状态"
          width="120">
        </el-table-column>
        <el-table-column
          prop="description"
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
        :total="100">
      </el-pagination>
    </div>
    <div id="foot">

    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsInfo",
    data() {
      return {
        currpage: 1,
        pagesize: 8,
        goodsSearchData: {
          goodsId: ''
        },
        goodsSearchRules: {

        }
      }
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
  #goods {
    position: absolute;
    left: 18%;
    top: 11%;
    width: 81.99%;
    height: 88.99%;
    /*background-color: #ff5777;*/
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
  #goodsTable {
    position: absolute;
    top: 23%;
    left: 2%;
    width: 96%;
    height: 600px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }
  #goodsTable p{
    position: absolute;
    top: 6%;
    left: 2%;
    font-size: 18px;
    /*color: black;*/
    font-weight: bold;
  }
  #goodsSearch {
    position: absolute;
    top: 6%;
    left: 25%;
    width: 25%;
  }
  #goodsSearch #goodsForm {
    position: absolute;
    width: 100%;
  }
  #goodsForm .el-input {
    position: absolute;
    width: 200px;
  }
  #goodsForm .el-button {
    position: absolute;
    left: 200px;
  }
  .el-table{
    position: absolute;
    top: 15%;
    left: 2%;
  }
  .el-pagination {
    position: absolute;
    top: 85%;
    right: 5%;
  }
  #foot {
    position: absolute;
    top: 135%;
    width: 99%;
    height: 50px;
  }
</style>
