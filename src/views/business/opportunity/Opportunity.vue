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
            <el-input placeholder="请输入关联客户ID" autocomplete="off" v-model="opporSearchData.cid" type="text"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="commonGetOppoData"></el-button>
          </el-form-item>
          <el-form-item id="addNewOpporBtn">
            <el-button type="primary" icon="el-icon-search" @click="addOneOpporDrawer = true">新建商机</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        :data="opporData.slice((currpage-1)*pagesize,currpage*pagesize)"
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
          label="商机ID"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          sortable
          prop="sid"
          label="关联销售"
          width="120">
        </el-table-column>
        <el-table-column
          prop="cid"
          sortable
          label="关联客户"
          width="150">
        </el-table-column>
        <el-table-column
          prop="thename"
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
          prop="descriptions"
          width="300"
          label="备注">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="editOppor(scope.$index, scope.row)"
              size="mini">修改</el-button>
            <el-button
              size="mini"
              @click="deleteOppor(scope.$index, scope.row)"
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
        :total="opporData.length">
      </el-pagination>
      <el-drawer
        title="添加一个商机信息"
        id="addOneOpporByIdInfo"
        :visible.sync="addOneOpporDrawer"
        direction="rtl"
        size="30%">
        <el-form
          :model="addOneOpporData"
          :rules="addOneOpporRules"
          ref="addOneOpporData"
          id="addOneOpporDataForm"
          style="width: 96%"
          label-position="right">
          <el-form-item label="商机ID" label-width="100px" prop="id" >
            <el-input type="text" v-model="addOneOpporData.id"></el-input>
          </el-form-item>
          <el-form-item label="创建时间" label-width="100px" prop="createTime" >
            <el-input type="text" v-model="addOneOpporData.createTime"></el-input>
          </el-form-item>
          <el-form-item label="关联销售" label-width="100px" prop="sid" >
            <el-input type="text" v-model="addOneOpporData.sid"></el-input>
          </el-form-item>
          <el-form-item label="关联客户" label-width="100px" prop="cid" >
            <el-input type="text" v-model="addOneOpporData.cid"></el-input>
          </el-form-item>
          <el-form-item label="名称" label-width="100px" prop="thename" >
            <el-input type="text" v-model="addOneOpporData.thename"></el-input>
          </el-form-item>
          <el-form-item label="状态描述" label-width="100px" prop="sta" >
            <el-input type="text" v-model="addOneOpporData.sta"></el-input>
          </el-form-item>
          <el-form-item label="备注" label-width="100px" prop="descriptions" >
            <el-input type="text" v-model="addOneOpporData.descriptions"></el-input>
          </el-form-item>
          <el-form-item label="金额" label-width="100px" prop="credit" >
            <el-input type="text" v-model="addOneOpporData.credit"></el-input>
          </el-form-item>
          <el-form-item label="修改时间" label-width="100px" prop="changeTime" >
            <el-input type="text" v-model="addOneOpporData.changeTime"></el-input>
          </el-form-item>
          <el-form-item label-width="100px">
            <el-button type="primary" @click="addOneOpporInfo('addOneOpporData')">添加</el-button>
            <el-button @click="editOpporCancel('addOneOpporData')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
      <el-drawer
        title="添加一个商机信息"
        id="editOneOpporByIdInfo"
        :visible.sync="editOneOpporDrawer"
        direction="rtl"
        size="30%">
        <el-form
          :model="editOneOpporData"
          :rules="editOneOpporRules"
          ref="editOneOpporData"
          id="editOneOpporDataForm"
          style="width: 96%"
          label-position="right">
          <el-form-item label="创建时间" label-width="100px" prop="createTime" >
            <el-input type="text" v-model="editOneOpporData.createTime"></el-input>
          </el-form-item>
          <el-form-item label="关联销售" label-width="100px" prop="sid" >
            <el-input type="text" v-model="editOneOpporData.sid"></el-input>
          </el-form-item>
          <el-form-item label="关联客户" label-width="100px" prop="cid" >
            <el-input type="text" v-model="editOneOpporData.cid"></el-input>
          </el-form-item>
          <el-form-item label="名称" label-width="100px" prop="thename" >
            <el-input type="text" v-model="editOneOpporData.thename"></el-input>
          </el-form-item>
          <el-form-item label="状态描述" label-width="100px" prop="sta" >
            <el-input type="text" v-model="editOneOpporData.sta"></el-input>
          </el-form-item>
          <el-form-item label="备注" label-width="100px" prop="descriptions" >
            <el-input type="text" v-model="editOneOpporData.descriptions"></el-input>
          </el-form-item>
          <el-form-item label="金额" label-width="100px" prop="credit" >
            <el-input type="text" v-model="editOneOpporData.credit"></el-input>
          </el-form-item>
          <el-form-item label="修改时间" label-width="100px" prop="changeTime" >
            <el-input type="text" v-model="editOneOpporData.changeTime"></el-input>
          </el-form-item>
          <el-form-item label-width="100px">
            <el-button type="primary" @click="editOneOpporInfo('editOneOpporData')">修改</el-button>
            <el-button @click="editOpporCancel('editOneOpporData')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
    </div>
    <div id="foot">

    </div>
  </div>
</template>

<script>
  import axios from "../../../network/axios";
  import {searchOpporDataByCommon} from "../../../network/opportunity/commonUser/searchOpporDataByCommon";
  import {deleteOpporByAdmin} from "../../../network/opportunity/deleteOpporByAdmin";
  import {deleteOpporByCommon} from "../../../network/opportunity/commonUser/deleteOpporByCommon";
  import {insertOpporByAdmin} from "../../../network/opportunity/insertOneOpporByAdmin";
  import {insertOpporByCommon} from "../../../network/opportunity/commonUser/insertOneOpporByCommon";
  import {updateOpporByAdmin} from "../../../network/opportunity/updateOneOpporByAdmin";
  import {updateOpporByCommon} from "../../../network/opportunity/commonUser/updateOneOpporByCommon";

  export default {
    name: "Opportunity",
    mounted() {
      // if (window.localStorage.getItem('isAdmin') === true) {
      //   this.adminGetOppoData();
      // }
    },
    data() {
      return {
        currpage: 1,
        pagesize: 8,
        opporData: [
          {
            id: "123",
            createTime: "2010-02-12",
            sid: "2345",
            cid: "3456",
            thename: "wddwdw",
            sta: "344",
            descriptions: "23333333333",
            credit: "150000",
            changeTime: "2012-02-15"
          }
        ],
        opporSearchData: {
          cid: ""
        },
        opporSearchRules: {

        },
        addOneOpporData: {
          id: "",
          createTime: "",
          sid: "",
          cid: "",
          thename: "",
          sta: "",
          descriptions: "",
          credit: "",
          changeTime: ""
        },
        addOneOpporRules: {
          thename: [
            { required: true, message: '请输入商机名称', trigger: 'blur' },
          ]
        },
        addOneOpporDrawer: false,
        editOneOpporData: {
          id: "",
          createTime: "",
          sid: "",
          cid: "",
          thename: "",
          sta: "",
          descriptions: "",
          credit: "",
          changeTime: ""
        },
        editOneOpporRules: {

        },
        editOneOpporDrawer: false,
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      adminGetOppoData() {
        axios({
          url: '/Admin/searchOpportunities'
        }).then(res => {
          console.log(res);
          console.log(res.length);
          let OpporData = res;
          let data = [];
          let len = OpporData.length;
          for (let i=0;i< len; i++) {
            let obj = {};
            obj.id = OpporData[i].id;
            obj.createTime = OpporData[i].createTime;
            obj.sid = OpporData[i].sid;
            obj.cid = OpporData[i].cid;
            obj.thename = OpporData[i].thename;
            obj.sta = OpporData[i].sta;
            obj.descriptions = OpporData[i].descriptions;
            obj.credit = OpporData[i].credit;
            obj.changeTime = OpporData[i].changeTime;
            data[i] = obj;
          }
          this.opporData = data;
        }).catch(err => {
          console.log(err);
        })
      },
      commonGetOppoData() {
        console.log(this.opporSearchData.cid);
        searchOpporDataByCommon(this.opporSearchData.cid).then(res => {
          console.log(res);
          console.log(res.length);
          let OpporData = res;
          let data = [];
          let len = OpporData.length;
          for (let i=0;i< len; i++) {
            let obj = {};
            obj.id = OpporData[i].id;
            obj.createTime = OpporData[i].createTime;
            obj.sid = OpporData[i].sid;
            obj.cid = OpporData[i].cid;
            obj.thename = OpporData[i].thename;
            obj.sta = OpporData[i].sta;
            obj.descriptions = OpporData[i].descriptions;
            obj.credit = OpporData[i].credit;
            obj.changeTime = OpporData[i].changeTime;
            data[i] = obj;
          }
          this.opporData = data;
        }).catch(err => {
          console.log(err);
        })
      },
      deleteOppor(index, row) {
        console.log(index, row);
        if (window.localStorage.getItem('isAdmin') === true) {
          deleteOpporByAdmin(row.id).then(res =>{
            console.log(res);
            if (res === 1) {
              alert('删除成功');
              this.$router.go(0);
            } else {
              alert("删除失败");
            }
          }).catch(err => {
            console.log(err);
          })
        }else {
          deleteOpporByCommon(row.id).then(res =>{
            console.log(res);
            if (res === 1) {
              alert('删除成功');
              this.$router.go(0);
            } else {
              alert("删除失败");
            }
          }).catch(err => {
            console.log(err);
          })
        }
      },
      editOppor(index, row) {
        console.log(index, row);
        this.editOneOpporData.id = row.id;
        this.editOneOpporDrawer = true;

      },
      editOpporCancel(formName) {
        this.$refs[formName].resetFields();
        this.addOneOpporDrawer = false;
        this.editOneOpporDrawer = false;
      },
      addOneOpporInfo(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            if (window.localStorage.getItem('isAdmin') === true) {
              insertOpporByAdmin(this.addOneOpporData.id,this.addOneOpporData.createTime,this.addOneOpporData.sid,this.addOneOpporData.cid,this.addOneOpporData.thename,this.addOneOpporData.sta,this.addOneOpporData.descriptions,this.addOneOpporData.credit,this.addOneOpporData.changeTime).then(res => {
                console.log(res);
                if (res === 1) {
                  alert('添加成功');
                  this.addOneOpporDrawer = false;
                  this.$router.go(0);
                } else {
                  alert('添加失败');
                }
              }).catch(err => {
                console.log(err);
              })
            }else {
              insertOpporByCommon(this.addOneOpporData.id,this.addOneOpporData.createTime,this.addOneOpporData.sid,this.addOneOpporData.cid,this.addOneOpporData.thename,this.addOneOpporData.sta,this.addOneOpporData.descriptions,this.addOneOpporData.credit,this.addOneOpporData.changeTime).then(res => {
                console.log(res);
                if (res === 1) {
                  alert('添加成功');
                  this.addOneOpporDrawer = false;
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
      },
      editOneOpporInfo(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            if (window.localStorage.getItem('isAdmin') === true) {
              updateOpporByAdmin(this.editOneOpporData.id,this.editOneOpporData.createTime,this.editOneOpporData.sid,this.editOneOpporData.cid,this.editOneOpporData.thename,this.editOneOpporData.sta,this.editOneOpporData.descriptions,this.editOneOpporData.credit,this.editOneOpporData.changeTime).then(res => {
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
            }else {
              updateOpporByCommon(this.editOneOpporData.id,this.editOneOpporData.createTime,this.editOneOpporData.sid,this.editOneOpporData.cid,this.editOneOpporData.thename,this.editOneOpporData.sta,this.editOneOpporData.descriptions,this.editOneOpporData.credit,this.editOneOpporData.changeTime).then(res => {
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
          }
        })
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
    top: 5%;
    left: 10%;
    height: 6%;
    width: 80%;
    border: 1px black solid;
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
  #addNewOpporBtn {
    position: absolute;
    left: 12%;
  }
  #addOneOpporByIdInfo, #editOneOpporByIdInfo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 22px;
    font-weight: bolder;
  }
  #addOneOpporDataForm, #editOneOpporDataForm{
    position: absolute;
    width: 100%;
    height: 150%;
    top: 12%;
    /*border: 1px solid black;*/
    margin-left: 2%;
  }
  #addOneOpporDataForm .el-input,#editOneOpporDataForm .el-input{
    width: 200px;
  }
</style>
