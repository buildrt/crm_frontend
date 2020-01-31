<template>
  <div id="opportunity">
    <el-breadcrumb id="breadcrumb" separator="/">
      <el-breadcrumb-item>商业管理</el-breadcrumb-item>
      <el-breadcrumb-item>商机信息</el-breadcrumb-item>
    </el-breadcrumb>
    <p id="title">商机信息</p>
    <div id="opportunityTable">
      <p>商机</p>
      <div id="opporSearch">
        <el-form
          :inline="true"
          id="opporForm"
          :model="opporSearchData"
          :rules="opporSearchRules"
          ref="orderSearchData">
          <el-form-item prop="opporId">
            <el-input placeholder="请输入订单号" autocomplete="off" v-model="opporSearchData.opporId" type="text"></el-input>
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
          prop="opporId"
          label="商机ID"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          sortable
          prop="sale"
          label="关联销售"
          width="120">
        </el-table-column>
        <el-table-column
          prop="client"
          sortable
          label="关联客户"
          width="150">
        </el-table-column>
        <el-table-column
          prop="name"
          sortable
          label="名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="sta"
          sortable
          label="状态描述"
          width="120">
        </el-table-column>
        <el-table-column
          prop="credit"
          label="金额"
          width="120">
        </el-table-column>
        <el-table-column
          prop="changeTime"
          label="修改时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="description"
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
        :total="100">
      </el-pagination>
    </div>
    <div id="foot">

    </div>
  </div>
</template>

<script>
  export default {
    name: "Opportunity",
    data() {
      return {
        currpage: 1,
        pagesize: 8,
        opporSearchData: {
          opporId: ''
        },
        opporSearchRules: {

        }
      }
    }
  }
</script>

<style scoped>
  #opportunity {
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
  #opportunityTable {
    position: absolute;
    top: 23%;
    left: 2%;
    width: 96%;
    height: 600px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }
  #opportunityTable p{
    position: absolute;
    top: 6%;
    left: 2%;
    font-size: 18px;
    /*color: black;*/
    font-weight: bold;
  }
  #opporSearch {
    position: absolute;
    top: 6%;
    left: 25%;
    width: 25%;
  }
  #opporSearch #opporForm {
    position: absolute;
    width: 100%;
  }
  #opporForm .el-input {
    position: absolute;
    width: 200px;
  }
  #opporForm .el-button {
    position: absolute;
    left: 200px;
  }
  .el-table{
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
    top: 135%;
    width: 99%;
    height: 50px;
  }
</style>
