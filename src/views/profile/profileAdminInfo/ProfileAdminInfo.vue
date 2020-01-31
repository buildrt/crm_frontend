<template>
  <div id="profileAdminInfo">
    <el-breadcrumb id="breadcrumb" separator="/">
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户信息</el-breadcrumb-item>
    </el-breadcrumb>
    <div id="title">
      <p>用户信息</p>
    </div>
    <div id="infoTable">
      <p>用户</p>
      <div id="profileAdminSearch">
        <el-form
          :inline="true"
          id="profileAdminForm"
          :model="profileAdminSearchData"
          :rules="profileAdminSearchRules"
          ref="profileAdminSearchData">
          <el-form-item>
            <el-button type="success" icon="el-icon-search" @click="selectPartDrawer = true">查询用户</el-button>
          </el-form-item>
          <el-form-item id="addUser">
            <el-select id="addSelect" v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-button type="primary" icon="el-icon-edit" @click="AddClient">新建用户</el-button>
          </el-form-item>
        </el-form>
      </div>
      <el-table
        :data="profileAdminData.slice((currpage-1)*pagesize,currpage*pagesize)"
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
          prop="thename"
          label="名字"
          width="120">
        </el-table-column>
        <el-table-column
          prop="gender"
          sortable
          fixed
          label="性别"
          width="100">
        </el-table-column>
        <el-table-column
          prop="age"
          sortable
          label="年龄"
          width="100">
        </el-table-column>
        <el-table-column
          width="150"
          prop="QQ"
          label="QQ号">
        </el-table-column>
        <el-table-column
          width="150"
          prop="tel"
          label="电话号">
        </el-table-column>
        <el-table-column
          width="150"
          prop="email"
          label="电子邮箱">
        </el-table-column>
        <el-table-column
          width="100"
          sortable
          prop="jobTime"
          label="工龄">
        </el-table-column>
        <el-table-column
          width="180"
          sortable
          prop="jobInDate"
          label="入职时间">
        </el-table-column>
        <el-table-column
          width="100"
          sortable
          prop="valid"
          label="有效">
        </el-table-column>
        <el-table-column
          prop="description"
          width="300"
          sortable
          label="备注">
        </el-table-column>
        <el-table-column label="操作"  width="200">
          <template slot-scope="scope">
            <el-button
              type="primary"
              @click="UserAdminEdit(scope.$index, scope.row)"
              size="mini">修改</el-button>
            <el-button
              size="mini"
              @click="UserAdminDelete(scope.$index, scope.row)"
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
        :total="profileAdminData.length">
      </el-pagination>
      <el-drawer
        title="添加一个用户信息"
        id="addOneInfo"
        :visible.sync="addOneDrawer"
        direction="rtl"
        size="30%">
        <el-form
          :model="addOneData"
          :rules="addOneRules"
          ref="addOneData"
          id="addOneForm"
          style="width: 96%"
          label-position="right">
          <el-form-item label="登录名" label-width="100px" prop="clientname">
            <el-input type="text" v-model="addOneData.clientname"></el-input>
          </el-form-item>
          <el-form-item label="密码" label-width="100px" prop="password">
            <el-input type="password" show-password v-model="addOneData.password"></el-input>
          </el-form-item>
          <el-form-item label="名字" label-width="100px" prop="thename" >
            <el-input type="text" v-model="addOneData.thename"></el-input>
          </el-form-item>
          <el-form-item label="性别" label-width="100px" prop="gender" >
            <el-input type="text" v-model="addOneData.gender"></el-input>
          </el-form-item>
          <el-form-item label="年龄" label-width="100px" prop="age" >
            <el-input type="text" v-model="addOneData.age"></el-input>
          </el-form-item>
          <el-form-item label="QQ" label-width="100px" prop="qq" >
            <el-input type="text" v-model="addOneData.qq"></el-input>
          </el-form-item>
          <el-form-item label="电话" label-width="100px" prop="tel" >
            <el-input type="text" v-model="addOneData.tel"></el-input>
          </el-form-item>
          <el-form-item label="邮件" label-width="100px" prop="email" >
            <el-input type="text" v-model="addOneData.email"></el-input>
          </el-form-item>
          <el-form-item label="工龄" label-width="100px" prop="jobTime" >
            <el-input type="text" v-model="addOneData.jobTime"></el-input>
          </el-form-item>
          <el-form-item label="入职时间" label-width="100px" prop="jobInDate" >
            <el-input type="text" v-model="addOneData.jobInDate"></el-input>
          </el-form-item>
          <el-form-item label="备注" label-width="100px" prop="description" >
            <el-input type="text" v-model="addOneData.description"></el-input>
          </el-form-item>
          <el-form-item label-width="100px">
            <el-button type="primary" @click="InsertOne('addOneData')">添加</el-button>
            <el-button @click="ProfileCancel('addOneData')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
      <el-drawer
        title="添加多个用户信息"
        id="addMoreInfo"
        :visible.sync="addMoreDrawer"
        direction="rtl"
        size="30%">
      </el-drawer>
      <el-drawer
      title="查询用户信息"
      id="selectPartInfo"
      :visible.sync="selectPartDrawer"
      direction="rtl"
      size="30%">
      <el-form
        :model="selectPartData"
        :rules="selectPartRules"
        ref="selectPartData"
        id="selectPartForm"
        style="width: 96%"
        label-position="right">
        <el-form-item label="名字" label-width="100px" prop="thename" >
          <el-input type="text" v-model="selectPartData.thename"></el-input>
        </el-form-item>
        <el-form-item label="性别" label-width="100px" prop="gender" >
          <el-input type="text" v-model="selectPartData.gender"></el-input>
        </el-form-item>
        <el-form-item label="年龄" label-width="100px" prop="age" >
          <el-input type="text" v-model="selectPartData.age"></el-input>
        </el-form-item>
        <el-form-item label="QQ" label-width="100px" prop="qq" >
          <el-input type="text" v-model="selectPartData.qq"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="100px" prop="tel" >
          <el-input type="text" v-model="selectPartData.tel"></el-input>
        </el-form-item>
        <el-form-item label="邮件" label-width="100px" prop="email" >
          <el-input type="text" v-model="selectPartData.email"></el-input>
        </el-form-item>
        <el-form-item label="工龄" label-width="100px" prop="jobTime" >
          <el-input type="text" v-model="selectPartData.jobTime"></el-input>
        </el-form-item>
        <el-form-item label="入职时间" label-width="100px" prop="jobInDate" >
          <el-input type="text" v-model="selectPartData.jobInDate"></el-input>
        </el-form-item>
        <el-form-item label="有效" label-width="100px" prop="valid" >
          <el-input type="text" v-model="selectPartData.valid"></el-input>
        </el-form-item>
        <el-form-item label="备注" label-width="100px" prop="description" >
          <el-input type="text" v-model="selectPartData.description"></el-input>
        </el-form-item>
        <el-form-item label-width="100px">
          <el-button type="primary" @click="selectPart('selectPartData')">查询</el-button>
          <el-button @click="selectPartCancel('selectPartData')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
      <el-drawer
        title="修改用户信息"
        id="updateInfo"
        :visible.sync="updateProfileAdminDrawer"
        direction="rtl"
        size="30%">
        <el-form
          :model="updateProfileAdminData"
          :rules="updateProfileAdminRules"
          ref="updateProfileAdminData"
          id="updateProfileAdminForm"
          style="width: 96%"
          label-position="right">
          <el-form-item label="登录名" label-width="100px" prop="clientname" >
            <el-input type="text" v-model="updateProfileAdminData.clientname"></el-input>
          </el-form-item>
          <el-form-item label="密码" label-width="100px" prop="password" >
            <el-input type="text" v-model="updateProfileAdminData.password"></el-input>
          </el-form-item>
          <el-form-item label="名字" label-width="100px" prop="thename" >
            <el-input type="text" v-model="updateProfileAdminData.thename"></el-input>
          </el-form-item>
          <el-form-item label="性别" label-width="100px" prop="gender" >
            <el-input type="text" v-model="updateProfileAdminData.gender"></el-input>
          </el-form-item>
          <el-form-item label="年龄" label-width="100px" prop="age" >
            <el-input type="text" v-model="updateProfileAdminData.age"></el-input>
          </el-form-item>
          <el-form-item label="QQ" label-width="100px" prop="qq" >
            <el-input type="text" v-model="updateProfileAdminData.qq"></el-input>
          </el-form-item>
          <el-form-item label="电话" label-width="100px" prop="tel" >
            <el-input type="text" v-model="updateProfileAdminData.tel"></el-input>
          </el-form-item>
          <el-form-item label="邮件" label-width="100px" prop="email" >
            <el-input type="text" v-model="updateProfileAdminData.email"></el-input>
          </el-form-item>
          <el-form-item label="工龄" label-width="100px" prop="jobTime" >
            <el-input type="text" v-model="updateProfileAdminData.jobTime"></el-input>
          </el-form-item>
          <el-form-item label="入职时间" label-width="100px" prop="jobInDate" >
            <el-input type="text" v-model="updateProfileAdminData.jobInDate"></el-input>
          </el-form-item>
          <el-form-item label="有效" label-width="100px" prop="valid" >
            <el-input type="text" v-model="updateProfileAdminData.valid"></el-input>
          </el-form-item>
          <el-form-item label="备注" label-width="100px" prop="description" >
            <el-input type="text" v-model="updateProfileAdminData.description"></el-input>
          </el-form-item>
          <el-form-item label-width="100px">
            <el-button type="primary" id="updateProfileAdminBtn" @click="updateOneProfile('updateProfileAdminData')">修改</el-button>
            <el-button id="updateProfileAdminCancelBtn" @click="selectPartCancel('updateProfileAdminData')">取消</el-button>
          </el-form-item>
        </el-form>
      </el-drawer>
    </div>
    <div id="foot">

    </div>
  </div>
</template>

<script>
  import {addOneClient} from "../../../network/profile/addOneClient";
  import axios from "../../../network/axios";
  import {adminSearchUser} from "../../../network/profile/adminSearchUser";
  import {updateOneClient} from "../../../network/profile/updateOneClient";

  export default {
    name: "ProfileAdminInfo",
    mounted() {
      // this.getFullProfileData();
    },
    methods: {
      getFullProfileData() {

      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      UserAdminEdit(index, row) {
        console.log(index, row);
        this.updateProfileAdminData.clientid = row.clientid;
        this.updateProfileAdminData.id = row.id;
        this.updateProfileAdminDrawer = true
      },
      UserAdminDelete(index, row) {
        console.log(index, row);
        deleteOneProfile(row.clientid,row.id).then(res => {
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
        this.profileAdminData.splice(index,1);
      },
      AddClient() {
        console.log(this.value === 1);
        if (this.value === 1) {
          this.addOneDrawer = true;
        }else {
          this.addMoreDrawer = true;
        }
      },
      ProfileCancel(formName) {
        this.$refs[formName].resetFields();
        this.addOneDrawer = false;
      },
      selectPartCancel(formName) {
        this.$refs[formName].resetFields();
        this.selectPartDrawer = false;
        this.updateProfileAdminDrawer = false;
      },
      InsertOne(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            addOneClient(this.addOneData.clientname,this.addOneData.password,this.addOneData.thename,this.addOneData.gender,this.addOneData.age,this.addOneData.qq,this.addOneData.tel,this.addOneData.email,this.addOneData.jobTime,this.addOneData.jobInDate,this.addOneDrawer.valid,this.addOneData.description).then(res => {
              console.log(res);
              if (res === 1) {
                alert('添加成功');
                this.addOneDrawer = false;
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
      selectPart(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            adminSearchUser(this.selectPartData.thename,this.selectPartData.gender,this.selectPartData.age,this.selectPartData.qq,this.selectPartData.tel,this.selectPartData.email,this.selectPartData.jobTime,this.selectPartData.jobInDate,this.selectPartData.valid,this.selectPartData.description).then(res => {
              console.log(res);
            }).catch(err => {
              console.log(err);
            })
          }
        })
      },
      updateOneProfile(formName){
        this.$refs[formName].validate(valid => {
          if (valid) {
            updateOneClient(this.updateProfileAdminData.clientid,this.updateProfileAdminData.clientname,this.updateProfileAdminData.password,this.updateProfileAdminData.id,this.updateProfileAdminData.bindUserId,this.updateProfileAdminData.thename,this.updateProfileAdminData.gender,this.updateProfileAdminData.age,this.updateProfileAdminData.qq,this.updateProfileAdminData.tel,this.updateProfileAdminData.email,this.updateProfileAdminData.jobTime,this.updateProfileAdminData.jobInDate,this.updateProfileAdminData.valid,this.updateProfileAdminData.description).then(res => {
              console.log(res);
              if (res === 1) {
                alert('修改成功');
                this.updateProfileAdminDrawer = false;
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
    },
    data() {
      return {
        profileAdminData: [
          {
            clientid: 9,
            clientname: "wufan",
            password: "123456t",
            id: "8",
            bindUserId: "",
            thename: "张三",
            gender: "M",
            age: "22",
            qq: "1641552237",
            tel: "15161140255",
            email: "2673458456@qq.com",
            jobTime: "5",
            jobInDate: "2015-01-20",
            valid: 1,
            description: "233333333333",
          }
        ],
        pagesize: 8,  // 每页的数据数
        currpage: 1,  // 默认开始页面
        options: [{
          value: 1,
          label: '新建一个'
        }, {
          value: 2,
          label: '新建多个'
        }],
        value: 1, //新建用户下拉框默认
        addOneDrawer: false,
        addMoreDrawer: false,
        selectPartDrawer: false,
        updateProfileAdminDrawer: false,
        profileAdminSearchData: {
          profileId: ''
        },
        profileAdminSearchRules: {

        },
        addOneData: {
          clientname: "",
          password: "",
          thename: "",
          gender: "",
          age: "",
          qq: "",
          tel: "",
          email: "",
          jobTime: "",
          jobInDate: "",
          valid: 1,
          description: "",
        },
        addOneRules: {
          clientname:[
            { required: true, message: '请输入登录名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入登录密码', trigger: 'blur' },
          ],
          thename: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          valid: [
            { required: true, message: '请输入有效与否', trigger: 'blur' },
          ]
        },
        selectPartData: {
          thename: "",
          gender: "",
          age: "",
          qq: "",
          tel: "",
          email: "",
          jobTime: "",
          jobInDate: "",
          valid: "",
          description: "",
        },
        selectPartRules: {

        },
        updateProfileAdminData: {
          clientid: "",
          clientname: "",
          password: "",
          id: "",
          bindUserId: "",
          thename: "",
          gender: "",
          age: "",
          qq: "",
          tel: "",
          email: "",
          jobTime: "",
          jobInDate: "",
          valid: 1,
          description: "",
        },
        updateProfileAdminRules: {

        }
      }
    }
  }
</script>

<style scoped>
  #profileAdminInfo {
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
  #profileAdminSearch {
    position: absolute;
    top: 5%;
    /*border: 1px solid black;*/
    left: 10%;
    width: 50%;
    height: 8%;
  }
  #profileAdminSearch #profileAdminForm {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  #profileAdminForm #search1 {
    position: absolute;
    width: 200px;
  }
  #profileAdminForm .el-button {
    position: absolute;
    left: 100px;
    margin-left: 8px;
  }
  #addUser {
    position: absolute;
    left: 60%;
  }
  #addUser .el-select {
    position: absolute;
    width: 100px;
  }
  #addUser .el-button {
    position: absolute;
    left: 100px;
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
  #addOneInfo,#selectPartInfo ,#updateInfo{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 22px;
    font-weight: bolder;
  }
  #addOneForm, #selectPartForm{
    position: absolute;
    width: 100%;
    height: 150%;
    top: 8%;
    /*border: 1px solid black;*/
    margin-left: 2%;
  }
  #addOneForm .el-input,#selectPartForm .el-input,#updateProfileAdminForm .el-input {
    width: 200px;
  }
  #updateProfileAdminForm {
    position: absolute;
    width: 100%;
    height: 150%;
    top: 8%;
    /*border: 1px solid black;*/
  }
  #updateProfileAdminBtn {
    position: absolute;
    top: -450px;
    right: 0;
  }
  #updateProfileAdminCancelBtn {
    position: absolute;
    top: -350px;
    right: 0;
  }
  #foot {
    position: absolute;
    top: 135%;
    width: 99%;
    height: 50px;
  }
</style>
