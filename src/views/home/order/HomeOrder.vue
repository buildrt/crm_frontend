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
        <el-button type="primary" id="searchOrderBtn" @click="commonGetOrderInfo">查询订单</el-button>
        <el-button type="primary" id="addOrderBtn" @click="orderAddDrawer = true">新建订单</el-button>
      </div>
      <el-table
        :data="orderData.slice((currpage-1)*pagesize,currpage*pagesize)"
        border
        stripe
        style="width: 96%">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          label="订单ID"
          width="80"
          prop="id"
          fixed>
        </el-table-column>
        <el-table-column
          label="创建时间"
          width="150"
          prop="createTime"
          fixed>
        </el-table-column>
        <el-table-column
          width="80"
          prop="sId"
          label="关联销售">
        </el-table-column>
        <el-table-column
          width="80"
          prop="cId"
          label="关联客户">
        </el-table-column>
        <el-table-column
          width="80"
          prop="goodsIds"
          label="关联客户">
        </el-table-column>
        <el-table-column
          width="100"
          prop="amounts"
          label="数量组">
        </el-table-column>
        <el-table-column
          width="100"
          prop="cost"
          label="总金额">
        </el-table-column>
        <el-table-column
          width="100"
          prop="isOpen"
          label="完成状态">
        </el-table-column>
        <el-table-column
          width="300"
          prop="descriptions"
          label="备注">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="orderOneEdit(scope.$index, scope.row)"
              size="mini">修改</el-button>
            <el-button
              size="mini"
              @click="orderOneDelete(scope.$index, scope.row)"
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
        :total="orderData.length">
      </el-pagination>
      <el-drawer
        title="修改一个订单信息"
        id="editOneOrderByIdInfo"
        :visible.sync="orderEditDrawer"
        direction="rtl"
        size="30%">
        <el-form
          :model="orderEditData"
          :rules="orderEditData"
          ref="orderEditData"
          id="editOneOrderDataForm"
          style="width: 96%"
          label-position="right">
          <el-form-item label="创建时间" label-width="100px" prop="createTime" >
            <el-input type="text" v-model="orderEditData.createTime"></el-input>
          </el-form-item>
          <el-form-item label="关联销售" label-width="100px" prop="sId" >
            <el-input type="text" v-model="orderEditData.sId"></el-input>
          </el-form-item>
          <el-form-item label="关联客户" label-width="100px" prop="cId" >
            <el-input type="text" v-model="orderEditData.cId"></el-input>
          </el-form-item>
          <el-form-item label="关联货物" label-width="100px" prop="goodsIds" >
            <el-input type="text" v-model="orderEditData.goodsIds"></el-input>
          </el-form-item>
          <el-form-item label="数量组" label-width="100px" prop="amounts" >
            <el-input type="text" v-model="orderEditData.amounts"></el-input>
          </el-form-item>
          <el-form-item label="总金额" label-width="100px" prop="cost" >
            <el-input type="text" v-model="orderEditData.cost"></el-input>
          </el-form-item>
          <el-form-item label="完成状态" label-width="100px" prop="isOpen" >
            <el-input type="text" v-model="orderEditData.isOpen"></el-input>
          </el-form-item>
          <el-form-item label="备注" label-width="100px" prop="descriptions" >
            <el-input type="text" v-model="orderEditData.descriptions"></el-input>
          </el-form-item>
          <el-form-item label-width="100px">
            <el-button type="primary" @click="editOneOrderInfo('orderEditData')">修改</el-button>
            <el-button @click="orderCancel('orderEditData')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
      <el-drawer
        title="添加一个订单信息"
        id="addOneOrderByIdInfo"
        :visible.sync="orderAddDrawer"
        direction="rtl"
        size="30%">
        <el-form
          :model="orderAddData"
          :rules="orderAddData"
          ref="orderAddData"
          id="addOneOrderDataForm"
          style="width: 96%"
          label-position="right">
          <el-form-item label="创建时间" label-width="100px" prop="createTime" >
            <el-input type="text" v-model="orderAddData.createTime"></el-input>
          </el-form-item>
          <el-form-item label="关联销售" label-width="100px" prop="sId" >
            <el-input type="text" v-model="orderAddData.sId"></el-input>
          </el-form-item>
          <el-form-item label="关联客户" label-width="100px" prop="cId" >
            <el-input type="text" v-model="orderAddData.cId"></el-input>
          </el-form-item>
          <el-form-item label="关联货物" label-width="100px" prop="goodsIds" >
            <el-input type="text" v-model="orderAddData.goodsIds"></el-input>
          </el-form-item>
          <el-form-item label="数量组" label-width="100px" prop="amounts" >
            <el-input type="text" v-model="orderAddData.amounts"></el-input>
          </el-form-item>
          <el-form-item label="总金额" label-width="100px" prop="cost" >
            <el-input type="text" v-model="orderAddData.cost"></el-input>
          </el-form-item>
          <el-form-item label="完成状态" label-width="100px" prop="isOpen" >
            <el-input type="text" v-model="orderAddData.isOpen"></el-input>
          </el-form-item>
          <el-form-item label="备注" label-width="100px" prop="descriptions" >
            <el-input type="text" v-model="orderAddData.descriptions"></el-input>
          </el-form-item>
          <el-form-item label-width="100px">
            <el-button type="primary" @click="addOneOrderInfo('orderAddData')">修改</el-button>
            <el-button @click="orderCancel('orderAddData')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
    </div>
    <div id="foot">

    </div>
  </div>
</template>

<script>
  import {deleteOneOrderByAdmin} from "../../../network/order/deleteOneOrderByAdmin";
  import axios from "../../../network/axios";
  import {selectOrderInfoByCommon} from "../../../network/order/commonUser/selectOrderInfoByCommon";
  import {updateOneOrderByAdmin} from "../../../network/order/updateOneOrderByAdmin";
  import {insertOneOrderByAdmin} from "../../../network/order/insertOneOrderByAdmin";
  import {insertOneOrderByCommon} from "../../../network/order/commonUser/insertOneOrderByCommon";

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

        },
        orderData:[
          {
            id: "1001",
            createTime: "2010-02-13",
            sId: "2002",
            cId: "3003",
            goodsIds: "40002",
            amounts: "2000",
            cost: "50000",
            isOpen: "1",
            descriptions: "23333333333333333"
          }
        ],
        orderEditData: {
          id: "",
          createTime: "",
          sId: "",
          cId: "",
          goodsIds: "",
          amounts: "",
          cost: "",
          isOpen: "",
          descriptions: "",
        },
        orderEditRules: {

        },
        orderEditDrawer: false,
        orderAddData: {
          id: "",
          createTime: "",
          sId: "",
          cId: "",
          goodsIds: "",
          amounts: "",
          cost: "",
          isOpen: "",
          descriptions: "",
        },
        orderAddRules: {

        },
        orderAddDrawer: false,
      }
    },
    mounted() {
      // this.drawLine();
      // if (window.localStorage.getItem('isAdmin') === true) {
      //   this.adminGetOrderInfo();
      // }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      orderOneEdit(index, row) {
        console.log(index, row);
        this.orderEditData.id = row.id;
        this.orderEditDrawer = true;
      },
      editOneOrderInfo(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            updateOneOrderByAdmin(this.orderEditData.id,this.orderEditData.createTime,this.orderEditData.sId,this.orderEditData.cId,this.orderEditData.goodsIds,this.orderEditData.amounts,this.orderEditData.cost,this.orderEditData.isOpen,this.orderEditData.descriptions).then(res => {
              console.log(res);
              if (res === 1) {
                alert('修改成功');
                this.orderEditDrawer = false;
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
      orderOneDelete(index, row) {
        console.log(index, row);
        let id = row.id;
        if (window.localStorage.getItem('isAdmin') === true) {
          deleteOneOrderByAdmin(id).then(res => {
            console.log(res);
            if (res === 1) {
              alert('删除成功');
              this.$router.go(0);
            } else {
              alert("删除失败");
            }
          })
        }else {
          alert("没有权限");
        }
      },
      orderCancel(formName) {
        this.$refs[formName].resetFields();
        this.orderEditDrawer = false;
        this.orderAddDrawer = false;
      },
      adminGetOrderInfo() {
        axios({
          url: '/Admin/searchOrders',
        }).then(res => {
          console.log(res);
          console.log(res.length);
          let OrderData = res;
          let data = [];
          let len = OrderData.length;
          for (let i=0;i< len; i++) {
            let obj = {};
            obj.id = OrderData[i].id;
            obj.createTime = OrderData[i].createTime;
            obj.sId = OrderData[i].sId;
            obj.cId = OrderData[i].cId;
            obj.goodsIds = OrderData[i].goodsIds;
            obj.amounts = OrderData[i].amounts;
            obj.cost = OrderData[i].cost;
            obj.isOpen = OrderData[i].isOpen;
            obj.descriptions = OrderData[i].descriptions;
            data[i] = obj;
          }
          this.orderData = data;
        }).catch(err => {
          console.log(err);
        })
      },
      commonGetOrderInfo() {
        let id; // 此处id为vuex中保存的用户ID,现阶段未在vuex中定义
        selectOrderInfoByCommon(id).then(res => {
          console.log(res);
          console.log(res.length);
          this.orderData = [];
          let OrderData = res;
          let data = [];
          let len = OrderData.length;
          for (let i=0;i< len; i++) {
            let obj = {};
            obj.id = OrderData[i].id;
            obj.createTime = OrderData[i].createTime;
            obj.sId = OrderData[i].sId;
            obj.cId = OrderData[i].cId;
            obj.goodsIds = OrderData[i].goodsIds;
            obj.amounts = OrderData[i].amounts;
            obj.cost = OrderData[i].cost;
            obj.isOpen = OrderData[i].isOpen;
            obj.descriptions = OrderData[i].descriptions;
            data[i] = obj;
          }
          this.orderData = data;
        }).catch(err => {
          console.log(err);
        })
      },
      addOneOrderInfo(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            if (window.localStorage.getItem('isAdmin') === true) {
              insertOneOrderByAdmin(this.orderAddData.id,this.orderAddData.createTime,this.orderAddData.sId,this.orderAddData.cId,this.orderAddData.goodsIds,this.orderAddData.amounts,this.orderAddData.cost,this.orderAddData.isOpen,this.orderAddData.descriptions).then(res => {
                console.log(res);
                if (res === 1) {
                  alert('添加成功');
                  this.orderAddDrawer = false;
                  this.$router.go(0);
                } else {
                  alert('添加失败');
                }
              }).catch(err => {
                console.log(err);
              })
            }else {
              insertOneOrderByCommon(this.orderAddData.id,this.orderAddData.createTime,this.orderAddData.sId,this.orderAddData.cId,this.orderAddData.goodsIds,this.orderAddData.amounts,this.orderAddData.cost,this.orderAddData.isOpen,this.orderAddData.descriptions).then(res => {
                console.log(res);
                if (res === 1) {
                  alert('添加成功');
                  this.orderAddDrawer = false;
                  this.$router.go(0);
                } else {
                  alert('添加失败');
                }
              }).catch(err => {
                console.log(err);
              })
            }
          }
        })
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
    top: 5%;
    left: 10%;
    height: 6%;
    width: 80%;
    /*border: 1px black solid;*/
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
  #editOneOrderByIdInfo, #addOneOrderByIdInfo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 22px;
    font-weight: bolder;
  }
  #editOneOrderDataForm, #addOneOrderDataForm {
    position: absolute;
    width: 100%;
    height: 150%;
    top: 12%;
    /*border: 1px solid black;*/
    margin-left: 2%;
  }
  #editOneOrderDataForm .el-input, #addOneOrderDataForm .el-input {
    width: 200px;
   }
  #searchOrderBtn {
    position: absolute;
    left: 0;
  }
  #addOrderBtn {
    position: absolute;
    left: 15%;
  }
</style>
