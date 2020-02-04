<template>
  <div id="goods">
    <el-breadcrumb id="breadcrumb" separator="/">
      <el-breadcrumb-item>商业管理</el-breadcrumb-item>
      <el-breadcrumb-item>产品信息</el-breadcrumb-item>
    </el-breadcrumb>
    <p id="title">产品信息</p>
    <div id="goodsTable">
      <p>产品</p>
      <div id="goodsSearch">
        <el-button type="primary" id="searchGoodsBtn" @click="searchGoodsDrawer = true">按条件查询</el-button>
        <el-button type="primary" id="addGoodsBtn" @click="goodsAddDrawer = true">新建产品</el-button>
      </div>
      <el-table
        :data="goodsData.slice((currpage-1)*pagesize,currpage*pagesize)"
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
          prop="id"
          label="货物ID"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          sortable
          prop="thename"
          label="货物名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="thetype"
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
          prop="thelocation"
          label="位置"
          width="220">
        </el-table-column>
        <el-table-column
          prop="sources"
          label="来源"
          width="120">
        </el-table-column>
        <el-table-column
          prop="intime"
          label="入库时间"
          width="120">
        </el-table-column>
        <el-table-column
          prop="isreleased"
          label="上架状态"
          width="120">
        </el-table-column>
        <el-table-column
          prop="descriptions"
          width="300px"
          label="备注">
        </el-table-column>
        <el-table-column label="操作" width="200px">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="goodsEditBtn(scope.$index, scope.row)"
              size="mini">修改</el-button>
            <el-button
              size="mini"
              @click="goodsDelete(scope.$index, scope.row)"
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
        :total="goodsData.length">
      </el-pagination>
      <el-drawer
        title="查询产品信息"
        id="searchGoodsInfo"
        :visible.sync="searchGoodsDrawer"
        direction="rtl"
        size="30%">
        <el-form
          :model="goodsSearchData"
          :rules="goodsSearchRules"
          ref="goodsSearchData"
          id="goodsSearchDataForm"
          style="width: 96%"
          label-position="right">
          <el-form-item label="产品名称" label-width="100px" prop="goodsName" >
            <el-input type="text" v-model="goodsSearchData.goodsName"></el-input>
          </el-form-item>
          <el-form-item label="最低价" label-width="100px" prop="minCost" >
            <el-input type="text" v-model="goodsSearchData.minCost"></el-input>
          </el-form-item>
          <el-form-item label="最高价" label-width="100px" prop="maxCost" >
            <el-input type="text" v-model="goodsSearchData.maxCost"></el-input>
          </el-form-item>
          <el-form-item label="最少数量" label-width="100px" prop="minAmount" >
            <el-input type="text" v-model="goodsSearchData.minAmount"></el-input>
          </el-form-item>
          <el-form-item label="最大数量" label-width="100px" prop="MaxAmount" >
            <el-input type="text" v-model="goodsSearchData.MaxAmount"></el-input>
          </el-form-item>
          <el-form-item label="起始时间" label-width="100px" prop="minDate" >
            <el-input type="text" v-model="goodsSearchData.minDate"></el-input>
          </el-form-item>
          <el-form-item label="结束时间" label-width="100px" prop="maxDate" >
            <el-input type="text" v-model="goodsSearchData.maxDate"></el-input>
          </el-form-item>
          <el-form-item label-width="100px">
            <el-button type="primary" @click="searchGoodsInfoBtn('goodsSearchData')">查询</el-button>
            <el-button @click="goodsCancel('goodsSearchData')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
      <el-drawer
        title="修改一个产品信息"
        id="editOneGoodsByIdInfo"
        :visible.sync="goodsEditDrawer"
        direction="rtl"
        size="30%">
        <el-form
          :model="goodsEditData"
          :rules="goodsEditRules"
          ref="goodsEditData"
          id="editOneGoodsDataForm"
          style="width: 96%"
          label-position="right">
          <el-form-item label="名称" label-width="100px" prop="thename" >
            <el-input type="text" v-model="goodsEditData.thename"></el-input>
          </el-form-item>
          <el-form-item label="类别" label-width="100px" prop="thetype" >
            <el-input type="text" v-model="goodsEditData.thetype"></el-input>
          </el-form-item>
          <el-form-item label="数量" label-width="100px" prop="amount" >
            <el-input type="text" v-model="goodsEditData.amount"></el-input>
          </el-form-item>
          <el-form-item label="单价" label-width="100px" prop="cost" >
            <el-input type="text" v-model="goodsEditData.cost"></el-input>
          </el-form-item>
          <el-form-item label="位置" label-width="100px" prop="thelocation" >
            <el-input type="text" v-model="goodsEditData.thelocation"></el-input>
          </el-form-item>
          <el-form-item label="来源" label-width="100px" prop="sources" >
            <el-input type="text" v-model="goodsEditData.sources"></el-input>
          </el-form-item>
          <el-form-item label="备注" label-width="100px" prop="descriptions" >
            <el-input type="text" v-model="goodsEditData.descriptions"></el-input>
          </el-form-item>
          <el-form-item label="入库时间" label-width="100px" prop="intime" >
            <el-input type="text" v-model="goodsEditData.intime"></el-input>
          </el-form-item>
          <el-form-item label="上架状态" label-width="100px" prop="isreleased" >
            <el-input type="text" v-model="goodsEditData.isreleased"></el-input>
          </el-form-item>
          <el-form-item label-width="100px">
            <el-button type="primary" @click="editOneGoodsInfo('goodsEditData')">修改</el-button>
            <el-button @click="goodsCancel('goodsEditData')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
      <el-drawer
        title="添加一个产品信息"
        id="addOneGoodsByIdInfo"
        :visible.sync="goodsAddDrawer"
        direction="rtl"
        size="30%">
        <el-form
          :model="goodsAddData"
          :rules="goodsAddRules"
          ref="goodsAddData"
          id="addOneGoodsDataForm"
          style="width: 96%"
          label-position="right">
          <el-form-item label="产品id" label-width="100px" prop="id" >
            <el-input type="text" v-model="goodsAddData.id"></el-input>
          </el-form-item>
          <el-form-item label="产品名称" label-width="100px" prop="thename" >
            <el-input type="text" v-model="goodsAddData.thename"></el-input>
          </el-form-item>
          <el-form-item label="类别" label-width="100px" prop="thetype" >
            <el-input type="text" v-model="goodsAddData.thetype"></el-input>
          </el-form-item>
          <el-form-item label="数量" label-width="100px" prop="amount" >
            <el-input type="text" v-model="goodsAddData.amount"></el-input>
          </el-form-item>
          <el-form-item label="单价" label-width="100px" prop="cost" >
            <el-input type="text" v-model="goodsAddData.cost"></el-input>
          </el-form-item>
          <el-form-item label="位置" label-width="100px" prop="thelocation" >
            <el-input type="text" v-model="goodsAddData.thelocation"></el-input>
          </el-form-item>
          <el-form-item label="来源" label-width="100px" prop="sources" >
            <el-input type="text" v-model="goodsAddData.sources"></el-input>
          </el-form-item>
          <el-form-item label="备注" label-width="100px" prop="descriptions" >
            <el-input type="text" v-model="goodsAddData.descriptions"></el-input>
          </el-form-item>
          <el-form-item label="入库时间" label-width="100px" prop="intime" >
            <el-input type="text" v-model="goodsAddData.intime"></el-input>
          </el-form-item>
          <el-form-item label="上架状态" label-width="100px" prop="isreleased" >
            <el-input type="text" v-model="goodsAddData.isreleased"></el-input>
          </el-form-item>
          <el-form-item label-width="100px">
            <el-button type="primary" @click="addOneGoodsInfo('goodsAddData')">添加</el-button>
            <el-button @click="goodsCancel('goodsAddData')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
    </div>
    <div id="foot">

    </div>
  </div>
</template>

<script>
  import {selectGoodsInfo} from "../../../network/goods/selectGoodsInfo";
  import {deleteGoodsInfo} from "../../../network/goods/deleteGoodsInfo";
  import {updateOneGoodsInfo} from "../../../network/goods/updateOneGoodsInfo";
  import {insertOneGoodsInfo} from "../../../network/goods/insertOneGoodsInfo";

  export default {
    name: "GoodsInfo",
    data() {
      return {
        currpage: 1,
        pagesize: 8,
        goodsSearchData: {
          goodsName: "",
          minCost: "",
          maxCost: "",
          minAmount: "",
          MaxAmount: "",
          minDate: "",
          maxDate: "",
        },
        goodsSearchRules: {

        },
        searchGoodsDrawer: false,
        goodsData:[
          {
            id: "1001",
            thename: "wwe",
            thetype: "233",
            amount: "2333",
            cost: "23",
            thelocation: "43556",
            sources: "342343543",
            descriptions: "233333333333",
            intime: "2016-02-12",
            isreleased: "1"
          }
        ],
        goodsEditData: {
          id: "",
          thename: "",
          thetype: "",
          amount: "",
          cost: "",
          thelocation: "",
          sources: "",
          descriptions: "",
          intime: "",
          isreleased: ""
        },
        goodsEditRules: {

        },
        goodsEditDrawer: false,
        goodsAddData: {
          id: "",
          thename: "",
          thetype: "",
          amount: "",
          cost: "",
          thelocation: "",
          sources: "",
          descriptions: "",
          intime: "",
          isreleased: "1"
        },
        goodsAddRules: {

        },
        goodsAddDrawer: false,
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      goodsEditBtn(index, row) {
        console.log(index, row);
        this.goodsEditData.id = row.id;
        this.goodsEditDrawer = true;
      },
      editOneGoodsInfo(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            updateOneGoodsInfo(this.goodsEditData.id,this.goodsEditData.thename,this.goodsEditData.thetype,this.goodsEditData.amount,this.goodsEditData.cost,this.goodsEditData.thelocation,this.goodsEditData.sources,this.goodsEditData.descriptions,this.goodsEditData.intime,this.goodsEditData.isreleased).then(res => {
              console.log(res);
              if (res === 1) {
                alert('修改成功');
                this.goodsEditDrawer = false;
                this.$router.go(0);
              } else {
                alert('修改失败');
              }
            }).catch(err => {
              console.log(err);
            })
          }
        })
      },
      goodsDelete(index, row) {
        console.log(index, row);
        deleteGoodsInfo(row.id,row.thename, row.thetype, row.amount, row.cost, row.thelocation, row.sources, row.descriptions, row.intime, row.isreleased,).then(res => {
          console.log(res);
          if (res === 1) {
            alert('删除成功');
            this.$router.go(0);
          } else {
            alert("删除失败");
          }
        }).catch(err => {
          console.log(err);
        });
        this.goodsData.splice(index,1);
      },
      goodsCancel(formName) {
        this.$refs[formName].resetFields();
        this.searchGoodsDrawer = false;
        this.goodsEditDrawer = false;
        this.goodsAddDrawer = false;
      },
      searchGoodsInfoBtn(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            selectGoodsInfo(this.goodsSearchData.goodsName,this.goodsSearchData.minCost,this.goodsSearchData.maxCost,this.goodsSearchData.minAmount,this.goodsSearchData.MaxAmount,this.goodsSearchData.minDate,this.goodsSearchData.maxDate).then(res => {
              console.log(res);
              console.log(res.length);
              this.goodsData = [];
              let searchData = res;
              let data = [];
              let len = searchData.length;
              for (let i=0; i< len; i++) {
                let obj = {};
                obj.id = searchData.id;
                obj.thename = searchData.thename;
                obj.thetype = searchData.thetype;
                obj.amount = searchData.amount;
                obj.cost = searchData.cost;
                obj.thelocation = searchData.thelocation;
                obj.sources = searchData.sources;
                obj.descriptions = searchData.descriptions;
                obj.intime = searchData.intime;
                obj.isreleased = searchData.isreleased;
                data[i] = obj
              }
              this.goodsData = data;
            }).catch(err => {
              console.log(err);
            })
          }
        })
      },
      addOneGoodsInfo(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            insertOneGoodsInfo(this.goodsAddData.id,this.goodsAddData.thename,this.goodsAddData.thetype,this.goodsAddData.amount,this.goodsAddData.cost,this.goodsAddData.thelocation,this.goodsAddData.sources,this.goodsAddData.descriptions,this.goodsAddData.intime,this.goodsAddData.isreleased).then(res => {
              console.log(res);
              if (res === 1) {
                alert('添加成功');
                this.goodsAddDrawer = false;
                this.$router.go(0);
              } else {
                alert('添加失败');
              }
            }).catch(err => {
              console.log(err);
            })
          }
        })
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
    top: 5%;
    left: 10%;
    height: 6%;
    width: 80%;
    /*border: 1px black solid;*/
  }
  #searchGoodsBtn {
    position: absolute;
    left: 0;
  }
  #addGoodsBtn {
    position: absolute;
    left: 15%;
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
  #searchGoodsInfo, #editOneGoodsByIdInfo, #addOneGoodsByIdInfo{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 22px;
    font-weight: bolder;
  }
  #goodsSearchDataForm, #editOneGoodsDataForm, #addOneGoodsDataForm {
    position: absolute;
    width: 100%;
    height: 150%;
    top: 12%;
    /*border: 1px solid black;*/
    margin-left: 2%;
  }
  #goodsSearchDataForm .el-input, #editOneGoodsDataForm .el-input, #addOneGoodsDataForm .el-input {
    width: 200px;
  }
</style>
