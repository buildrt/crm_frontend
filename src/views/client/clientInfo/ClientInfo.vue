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
      <p>客户</p>
      <div id="clientSearch">
        <el-form
          :inline="true"
          id="clientForm"
          :model="clientSearchData"
          :rules="clientSearchRules"
          ref="clientSearchData">
          <el-form-item prop="clientId">
            <el-input placeholder="请输入客户名" autocomplete="off" v-model="clientSearchData.thename" type="text"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="selectCustomerBtn"></el-button>
          </el-form-item>
          <el-form-item id="addCustomerBtn">
            <el-button type="primary" @click="addCustomerDrawer = true">新建客户</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        :data="clientData.slice((currpage-1)*pagesize,currpage*pagesize)"
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
          label="客户ID"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          sortable
          prop="thename"
          label="客户名称"
          width="120">
        </el-table-column>
        <el-table-column
          prop="tel"
          sortable
          label="手机号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="sources"
          sortable
          label="客户来源"
          width="200">
        </el-table-column>
        <el-table-column
          width="150"
          prop="trendType"
          label="主营行业">
        </el-table-column>
        <el-table-column
          width="150"
          prop="cusPriority"
          label="优先级">
        </el-table-column>
        <el-table-column
          width="300"
          prop="descriptions"
          sortable
          label="备注">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="editCustomer(scope.$index, scope.row)"
              size="mini">修改</el-button>
            <el-button
              size="mini"
              @click="deleteCustomer(scope.$index, scope.row)"
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
        :total="clientData.length">
      </el-pagination>
      <el-drawer
        title="修改客户信息"
        id="updateCustomerInfo"
        :visible.sync="editCustomerDrawer"
        direction="rtl"
        size="30%">
        <el-form
          :model="customerEditData"
          :rules="customerEditRules"
          ref="customerEditData"
          id="customerEditForm"
          style="width: 96%"
          label-position="right">
          <el-form-item label="客户名称" label-width="100px" prop="thename" >
            <el-input type="text" v-model="customerEditData.thename"></el-input>
          </el-form-item>
          <el-form-item label="手机号" label-width="100px" prop="tel" >
            <el-input type="text" v-model="customerEditData.tel"></el-input>
          </el-form-item>
          <el-form-item label="主营行业" label-width="100px" prop="trendType" >
            <el-input type="text" v-model="customerEditData.trendType"></el-input>
          </el-form-item>
          <el-form-item label="客户来源" label-width="100px" prop="sources" >
            <el-input type="text" v-model="customerEditData.sources"></el-input>
          </el-form-item>
          <el-form-item label="优先级" label-width="100px" prop="cusPriority" >
            <el-input type="text" v-model="customerEditData.cusPriority"></el-input>
          </el-form-item>
          <el-form-item label="描述" label-width="100px" prop="descriptions" >
            <el-input type="text" v-model="customerEditData.descriptions"></el-input>
          </el-form-item>
          <el-form-item label-width="100px">
            <el-button type="primary" @click="editCustomerBtn('customerEditData')">修改</el-button>
            <el-button @click="editCustomerCancel('customerEditData')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
      <el-drawer
        title="添加一个客户信息"
        id="addOneCustomerByIdInfo"
        :visible.sync="addCustomerDrawer"
        direction="rtl"
        size="30%">
        <el-form
          :model="addOneCustomerByIdData"
          :rules="addOneCustomerByIdRules"
          ref="addOneCustomerByIdData"
          id="addOneCustomerByIdForm"
          style="width: 96%"
          label-position="right">
          <el-form-item label="客户ID" label-width="100px" prop="id" >
            <el-input type="text" v-model="addOneCustomerByIdData.id"></el-input>
          </el-form-item>
          <el-form-item label="客户名称" label-width="100px" prop="thename" >
            <el-input type="text" v-model="addOneCustomerByIdData.thename"></el-input>
          </el-form-item>
          <el-form-item label="手机号" label-width="100px" prop="tel" >
            <el-input type="text" v-model="addOneCustomerByIdData.tel"></el-input>
          </el-form-item>
          <el-form-item label="主营行业" label-width="100px" prop="trendType" >
            <el-input type="text" v-model="addOneCustomerByIdData.trendType"></el-input>
          </el-form-item>
          <el-form-item label="客户来源" label-width="100px" prop="sources" >
            <el-input type="text" v-model="addOneCustomerByIdData.sources"></el-input>
          </el-form-item>
          <el-form-item label="优先级" label-width="100px" prop="cusPriority" >
            <el-input type="text" v-model="addOneCustomerByIdData.cusPriority"></el-input>
          </el-form-item>
          <el-form-item label="描述" label-width="100px" prop="descriptions" >
            <el-input type="text" v-model="addOneCustomerByIdData.descriptions"></el-input>
          </el-form-item>
          <el-form-item label-width="100px">
            <el-button type="primary" @click="InsertOneCustomerById('addOneCustomerByIdData')">添加</el-button>
            <el-button @click="editCustomerCancel('addOneCustomerByIdData')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
    </div>
    <div id="foot">

    </div>
  </div>
</template>

<script>
  import {searchCustomerByName} from "../../../network/customer/searchCustomerByName";
  import {deleteCustomerInfoByCommon} from "../../../network/customer/commonUser/deleteCustomerInfoByCommon";
  import {searchCustomerByNameByCommon} from "../../../network/customer/commonUser/searchCustomerByNameByCommon";
  import {insertCustomerByIdByCommon} from "../../../network/customer/commonUser/insertOneCustomerByIdByCommon";
  import {deleteCustomerInfo} from "../../../network/customer/deleteCustomerInfo";
  import {insertCustomerById} from "../../../network/customer/insertOneCustomerById";
  import {updateCustomerInfo} from "../../../network/customer/updateCustomerInfo";

  export default {
    name: "ClientInfo",
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      editCustomer(index, row) {
        console.log(index, row);
        this.customerEditData.id = row.id;
        this.editCustomerDrawer = true
      },
      deleteCustomer(index, row) {
        console.log(index, row);
        if (window.localStorage.getItem('isAdmin') === true) {
          deleteCustomerInfo(row.id).then(res => {
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
        }else {
          deleteCustomerInfoByCommon(row.id).then(res => {
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
        }
        this.clientData.splice(index,1);
      },
      selectCustomerBtn() {
        console.log(this.clientSearchData.thename);
        if (window.localStorage.getItem('isAdmin') === true) {
          searchCustomerByName(this.clientSearchData.thename).then(res => {
            console.log(res);
            console.log(res.length);
            this.clientData = [];
            this.clientData[0].id = res.id;
            this.clientData[0].thename = res.thename;
            this.clientData[0].trendType = res.trendType;
            this.clientData[0].tel = res.tel;
            this.clientData[0].cusPriority = res.cusPriority;
            this.clientData[0].sources = res.sources;
            this.clientData[0].descriptions = res.descriptions;
          }).catch(err => {
            console.log(err);
          })
        }else {
          searchCustomerByNameByCommon(this.clientSearchData.thename).then(res => {
            console.log(res);
            console.log(res.length);
            this.clientData = [];
            this.clientData[0].id = res.id;
            this.clientData[0].thename = res.thename;
            this.clientData[0].trendType = res.trendType;
            this.clientData[0].tel = res.tel;
            this.clientData[0].cusPriority = res.cusPriority;
            this.clientData[0].sources = res.sources;
            this.clientData[0].descriptions = res.descriptions;
          }).catch(err => {
            console.log(err);
          })
        }
      },
      //修改客户信息功能未做管理员与一般用户区分，原因是后端未提供一般用户修改功能接口
      editCustomerBtn(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            updateCustomerInfo(this.customerEditData.id,this.customerEditData.thename,this.customerEditData.cusPriority,this.customerEditData.sources,this.customerEditData.tel,this.customerEditData.trendType,this.customerEditData.descriptions).then(res => {
              console.log(res);
              if (res === 1) {
                alert('修改成功');
                this.editCustomerDrawer = false;
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
      editCustomerCancel(formName) {
        this.$refs[formName].resetFields();
        this.editCustomerDrawer = false;
        this.addCustomerDrawer = false;
      },
      InsertOneCustomerById(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            if (window.localStorage.getItem('isAdmin') === true) {
              insertCustomerById(this.addOneCustomerByIdData.id,this.addOneCustomerByIdData.thename,this.addOneCustomerByIdData.cusPriority,this.addOneCustomerByIdData.sources,this.addOneCustomerByIdData.tel,this.addOneCustomerByIdData.trendType,this.addOneCustomerByIdData.descriptions).then(res => {
                console.log(res);
                if (res === 1) {
                  alert('添加成功');
                  this.addCustomerDrawer = false;
                  this.$router.go(0);
                } else {
                  alert('添加失败');
                }
              }).catch(err => {
                console.log(err);
              })
            }else {
              insertCustomerByIdByCommon(this.addOneCustomerByIdData.id,this.addOneCustomerByIdData.thename,this.addOneCustomerByIdData.cusPriority,this.addOneCustomerByIdData.sources,this.addOneCustomerByIdData.tel,this.addOneCustomerByIdData.trendType,this.addOneCustomerByIdData.descriptions).then(res => {
                console.log(res);
                if (res === 1) {
                  alert('添加成功');
                  this.addCustomerDrawer = false;
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
    },
    data() {
      return {
        clientData: [
          {
            id: "1222",
            thename: "wwww",
            tel: "1546789023",
            trendType: "233",
            cusPriority: "222",
            sources: "dedefefe",
            descriptions: "2333333333333333333"
          }
        ],
        pagesize: 8,  // 每页的数据数
        currpage: 1,  // 默认开始页面
        clientSearchData: {
          thename: ''
        },
        clientSearchRules: {
          thename: [
            { required: true, message: '请输入客户名', trigger: 'blur' },
          ]
        },
        customerEditData: {
          id: "",
          thename: "",
          tel: "",
          trendType: "",
          cusPriority: "",
          sources: "",
          descriptions: ""
        },
        customerEditRules: {

        },
        editCustomerDrawer: false,
        addCustomerDrawer: false,
        addOneCustomerByIdData: {
          id: "",
          thename: "",
          tel: "",
          trendType: "",
          cusPriority: "",
          sources: "",
          descriptions: ""
        },
        addOneCustomerByIdRules: {
          id: [
            { required: true, message: '请输入客户ID', trigger: 'blur' },
          ]
        }
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
    top: 23%;
    left: 2%;
    width: 96%;
    height: 600px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }
  #infoTable p {
    position: absolute;
    top: 6%;
    left: 2%;
    font-size: 18px;
    /*color: black;*/
    font-weight: bold;
  }
  #clientSearch {
    position: absolute;
    top: 5%;
    left: 10%;
    height: 6%;
    width: 80%;
    /*border: 1px black solid;*/
  }
  #clientSearch #clientForm {
    position: absolute;
    width: 100%;
  }
  #clientForm .el-input {
    position: absolute;
    width: 200px;
  }
  #clientForm .el-button {
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
  #updateCustomerInfo, #addOneCustomerByIdInfo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 22px;
    font-weight: bolder;
  }
  #customerEditForm, #addOneCustomerByIdForm {
    position: absolute;
    width: 100%;
    height: 150%;
    top: 18%;
    /*border: 1px solid black;*/
    margin-left: 2%;
  }
  #customerEditForm .el-input, #addOneCustomerByIdForm .el-input {
    width: 200px;
  }
  #addCustomerBtn {
    position: absolute;
    left: 12%;
  }
</style>
