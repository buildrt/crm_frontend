<template>
  <div id="sale">
    <el-breadcrumb id="breadcrumb" separator="/">
      <el-breadcrumb-item>首页</el-breadcrumb-item>
      <el-breadcrumb-item>销售信息</el-breadcrumb-item>
    </el-breadcrumb>
    <p id="title">销售信息</p>
    <div id="saleTable">
      <p>销售</p>
      <div id="saleSearch">
        <el-form
          :inline="true"
          id="saleForm"
          :model="saleSearchData"
          :rules="saleSearchRules"
          ref="orderSearchData">
          <el-form-item prop="id">
            <el-input placeholder="请输入销售号查询" autocomplete="off" v-model="saleSearchData.id" type="text"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" icon="el-icon-search" @click="searchSaleByIdBtn"></el-button>
          </el-form-item>
          <el-form-item id="searchBySalename" prop="thename">
            <el-input placeholder="请输入销售名查询" autocomplete="off" v-model="saleSearchData.thename" type="text"></el-input>
          </el-form-item>
          <el-form-item id="searchBySalenameBtn">
            <el-button type="primary" icon="el-icon-search"  @click="searchSaleByNameBtn"></el-button>
          </el-form-item>
          <el-form-item id="addOneSaleByNameBtn">
            <el-button type="primary" @click="addOneSaleByNameDrawer = true">通过销售名新建</el-button>
          </el-form-item>
          <el-form-item id="addOneSaleByIdBtn">
            <el-button type="primary" @click="addOneSaleByIdDrawer = true">通过销售ID新建</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        :data="saleFullData.slice((currpage-1)*pagesize,currpage*pagesize)"
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
          label="销售id"
          width="120">
        </el-table-column>
        <el-table-column
          fixed
          sortable
          prop="thename"
          label="名字"
          width="120">
        </el-table-column>
        <el-table-column
          prop="salary"
          sortable
          label="薪资"
          width="150">
        </el-table-column>
        <el-table-column
          prop="score"
          sortable
          label="评分"
          width="120">
        </el-table-column>
        <el-table-column
          prop="trendType"
          sortable
          label="销售类别"
          width="220">
        </el-table-column>
        <el-table-column
          prop="descriptions"
          label="备注"
          width="300">
        </el-table-column>
        <el-table-column label="操作" width="200">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="editSaleInfo(scope.$index, scope.row)"
              size="mini">修改</el-button>
            <el-button
              size="mini"
              @click="deleteSaleInfo(scope.$index, scope.row)"
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
        :total="saleFullData.length">
      </el-pagination>
      <el-drawer
        title="修改销售信息"
        id="updateSaleInfo"
        :visible.sync="editSaleDrawer"
        direction="rtl"
        size="30%">
        <el-form
          :model="saleEditData"
          :rules="saleEditRules"
          ref="saleEditData"
          id="saleEditForm"
          style="width: 96%"
          label-position="right">
          <el-form-item label="名字" label-width="100px" prop="thename" >
            <el-input type="text" v-model="saleEditData.thename"></el-input>
          </el-form-item>
          <el-form-item label="销售类别" label-width="100px" prop="trendType" >
            <el-input type="text" v-model="saleEditData.trendType"></el-input>
          </el-form-item>
          <el-form-item label="薪资" label-width="100px" prop="salary" >
            <el-input type="text" v-model="saleEditData.salary"></el-input>
          </el-form-item>
          <el-form-item label="评分" label-width="100px" prop="score" >
            <el-input type="text" v-model="saleEditData.score"></el-input>
          </el-form-item>
          <el-form-item label="描述" label-width="100px" prop="descriptions" >
            <el-input type="text" v-model="saleEditData.descriptions"></el-input>
          </el-form-item>
          <el-form-item label-width="100px">
            <el-button type="primary" @click="editSaleBtn('saleEditData')">修改</el-button>
            <el-button @click="editSaleCancel('saleEditData')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
      <el-drawer
        title="添加一个销售信息"
        id="addOneSaleByNameInfo"
        :visible.sync="addOneSaleByNameDrawer"
        direction="rtl"
        size="30%">
        <el-form
          :model="addOneSaleByNameData"
          :rules="addOneSaleByNameRules"
          ref="addOneSaleByNameData"
          id="addOneSaleByNameForm"
          style="width: 96%"
          label-position="right">
          <el-form-item label="销售名" label-width="100px" prop="thename">
            <el-input type="text" v-model="addOneSaleByNameData.thename"></el-input>
          </el-form-item>
          <el-form-item label="薪资" label-width="100px" prop="salary">
            <el-input type="password" show-password v-model="addOneSaleByNameData.salary"></el-input>
          </el-form-item>
          <el-form-item label="评分" label-width="100px" prop="score" >
            <el-input type="text" v-model="addOneSaleByNameData.score"></el-input>
          </el-form-item>
          <el-form-item label="销售类别" label-width="100px" prop="trendType" >
            <el-input type="text" v-model="addOneSaleByNameData.trendType"></el-input>
          </el-form-item>
          <el-form-item label="备注" label-width="100px" prop="descriptions" >
            <el-input type="text" v-model="addOneSaleByNameData.descriptions"></el-input>
          </el-form-item>
          <el-form-item label-width="100px">
            <el-button type="primary" @click="InsertOneSaleByName('addOneSaleByNameData')">添加</el-button>
            <el-button @click="addSaleCancel('addOneSaleByNameData')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
      <el-drawer
        title="添加一个销售信息"
        id="addOneSaleByIdInfo"
        :visible.sync="addOneSaleByIdDrawer"
        direction="rtl"
        size="30%">
        <el-form
          :model="addOneSaleByIdData"
          :rules="addOneSaleByIdRules"
          ref="addOneSaleByIdData"
          id="addOneSaleByIdForm"
          style="width: 96%"
          label-position="right">
          <el-form-item label="销售ID" label-width="100px" prop="id">
            <el-input type="text" v-model="addOneSaleByIdData.id"></el-input>
          </el-form-item>
          <el-form-item label="销售名" label-width="100px" prop="thename">
            <el-input type="text" v-model="addOneSaleByIdData.thename"></el-input>
          </el-form-item>
          <el-form-item label="薪资" label-width="100px" prop="salary">
            <el-input type="password" show-password v-model="addOneSaleByIdData.salary"></el-input>
          </el-form-item>
          <el-form-item label="评分" label-width="100px" prop="score" >
            <el-input type="text" v-model="addOneSaleByIdData.score"></el-input>
          </el-form-item>
          <el-form-item label="销售类别" label-width="100px" prop="trendType" >
            <el-input type="text" v-model="addOneSaleByIdData.trendType"></el-input>
          </el-form-item>
          <el-form-item label="备注" label-width="100px" prop="descriptions" >
            <el-input type="text" v-model="addOneSaleByIdData.descriptions"></el-input>
          </el-form-item>
          <el-form-item label-width="100px">
            <el-button type="primary" @click="InsertOneSaleById('addOneSaleByIdData')">添加</el-button>
            <el-button @click="addSaleCancel('addOneSaleByIdData')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
    </div>
    <div id="foot">

    </div>
  </div>
</template>

<script>
  import {searchSaleDataById} from "../../../network/sale/searchSaleDataById";
  import {searchSaleDataByName} from "../../../network/sale/searchSaleDataByName";
  import {insertOneSaleByName} from "../../../network/sale/insertOneSaleByName";
  import {deleteSaleData} from "../../../network/sale/deleteSale";
  import {insertOneSaleById} from "../../../network/sale/insertOneSaleById";
  import {updateSaleData} from "../../../network/sale/updateSaleData";

  export default {
    name: "HomeSale",
    data() {
      return {
        currpage: 1,
        pagesize: 8,
        addOneSaleByNameDrawer: false,
        addOneSaleByIdDrawer: false,
        addOneSaleByNameData: {
          id: "",
          bindUser: "",
          thename: "",
          salary: "",
          score: "",
          trendType: "",
          descriptions: "",
        },
        addOneSaleByNameRules: {
          thename: [
            { required: true, message: '请输入销售名', trigger: 'blur' },
          ]
        },
        addOneSaleByIdData: {
          id: "",
          bindUser: "",
          thename: "",
          salary: "",
          score: "",
          trendType: "",
          descriptions: "",
        },
        addOneSaleByIdRules: {
          id: [
            { required: true, message: '请输入销售ID', trigger: 'blur' },
          ]
        },
        saleSearchData: {
          id: "",
          bindUser: "",
          thename: "",
          salary: "",
          score: "",
          trendType: "",
          descriptions: "",
        },
        saleSearchRules: {

        },
        saleFullData: [
          {
            id: "1222",
            bindUser: "12",
            thename: "wf",
            salary: "23333",
            score: "98",
            trendType: "2",
            descriptions: "23333333333333333",
          }
        ],
        saleEditData: {
          id: "",
          bindUser: "",
          thename: "",
          salary: "",
          score: "",
          trendType: "",
          descriptions: "",
        },
        saleEditRules: {

        },
        editSaleDrawer: false,
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      editSaleInfo(index, row) {
        console.log(index, row);
        this.saleEditData.id = row.id;
        this.saleEditData.bindUser = row.bindUser;
        this.editSaleDrawer = true;
      },
      deleteSaleInfo(index, row) {
        console.log(index, row);
        deleteSaleData(row.id).then(res => {
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
        this.saleFullData.splice(index,1);
      },
      searchSaleByIdBtn() {
        console.log(this.saleSearchData.id);
        searchSaleDataById(this.saleSearchData.id).then(res => {
          console.log(res);
          console.log(res.length);
          this.saleFullData = [];
          this.saleFullData[0].id = res.id;
          this.saleFullData[0].bindUser = res.bindUser;
          this.saleFullData[0].thename = res.thename;
          this.saleFullData[0].salary = res.salary;
          this.saleFullData[0].score = res.score;
          this.saleFullData[0].trendType = res.trendType;
          this.saleFullData[0].descriptions = res.descriptions;
        }).catch(err => {
          console.log(err);
        })
      },
      searchSaleByNameBtn() {
        console.log(this.saleSearchData.thename);
        searchSaleDataByName(this.saleSearchData.thename).then(res => {
          console.log(res);
          console.log(res.length);
          this.saleFullData = [];
          this.saleFullData[0].id = res.id;
          this.saleFullData[0].bindUser = res.bindUser;
          this.saleFullData[0].thename = res.thename;
          this.saleFullData[0].salary = res.salary;
          this.saleFullData[0].score = res.score;
          this.saleFullData[0].trendType = res.trendType;
          this.saleFullData[0].descriptions = res.descriptions;
        }).catch(err => {
          console.log(err);
        })
      },
      editSaleBtn(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            updateSaleData(this.saleEditData.id,this.saleEditData.bindUser,this.saleEditData.thename,this.saleEditData.salary,this.saleEditData.score,this.saleEditData.trendType,this.saleEditData.descriptions).then(res => {
              console.log(res);
              if (res === 1) {
                alert('修改成功');
                this.editSaleDrawer = false;
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
      editSaleCancel(formName) {
        this.$refs[formName].resetFields();
        this.editSaleDrawer = false;
      },
      InsertOneSaleByName(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            insertOneSaleByName(this.addOneSaleByNameData.thename,this.addOneSaleByNameData.salary,this.addOneSaleByNameData.score,this.addOneSaleByNameData.trendType,this.addOneSaleByNameData.descriptions).then(res => {
              console.log(res);
              if (res === 1) {
                alert('添加成功');
                this.addOneSaleByNameDrawer = false;
                this.$router.go(0);
              } else {
                alert('添加失败');
              }
            }).catch(err => {
              console.log(err);
            })
          }
        })
      },
      addSaleCancel(formName) {
        this.$refs[formName].resetFields();
        this.addOneSaleByNameDrawer = false;
        this.addOneSaleByIdDrawer = false;
      },
      InsertOneSaleById(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            insertOneSaleById(this.addOneSaleByIdData.id,this.addOneSaleByIdData.thename,this.addOneSaleByIdData.salary,this.addOneSaleByIdData.score,this.addOneSaleByIdData.trendType,this.addOneSaleByIdData.descriptions).then(res => {
              console.log(res);
              if (res === 1) {
                alert('添加成功');
                this.addOneSaleByNameDrawer = false;
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
  #sale {
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
  #saleTable {
    position: absolute;
    top: 23%;
    left: 2%;
    width: 96%;
    height: 600px;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }
  #saleTable p{
    position: absolute;
    top: 6%;
    left: 2%;
    font-size: 18px;
    /*color: black;*/
    font-weight: bold;
  }
  #saleSearch {
    position: absolute;
    top: 5%;
    left: 10%;
    width: 60%;
    height: 6%;
    /*border: 1px solid black;*/
  }
  #searchBySalename {
    position: absolute;
    left: 50%;
  }
  #searchBySalenameBtn {
    position: absolute;
    left: 51%;
  }
  #saleSearch #saleForm {
    position: absolute;
    width: 100%;
  }
  #saleForm .el-input {
    position: absolute;
    width: 200px;
  }
  #saleForm .el-button {
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
  #updateSaleInfo, #addOneSaleByNameInfo,#addOneSaleByIdInfo{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 22px;
    font-weight: bolder;
  }
  #saleEditForm, #addOneSaleByNameForm, #addOneSaleByIdForm{
    position: absolute;
    width: 100%;
    height: 150%;
    top: 18%;
    /*border: 1px solid black;*/
    margin-left: 2%;
  }
  #saleEditForm .el-input,#addOneSaleByNameForm .el-input, #addOneSaleByIdForm .el-input {
    width: 200px;
  }
  #addOneSaleByNameBtn {
    position: absolute;
    right: 35%;
  }
  #addOneSaleByIdBtn {
    position: absolute;
    right: 15%;
  }
  #foot {
    position: absolute;
    top: 135%;
    width: 99%;
    height: 50px;
  }
</style>
