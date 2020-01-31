<template>
  <div id="profile">
    <div id="profileTitle">
      <el-avatar id="profileAvatar" :size="140" :src="imgUrl"></el-avatar>
      <p id="name">张三</p>
      <table id="titleTable" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td>
            <button @click="JumpToInfo">职场信息</button>
          </td>
          <td>
            <button @click="JumpToInfo1">基本信息</button>
          </td>
          <td>
            <button @click="JumpToInfo2">其他信息</button>
          </td>
          <td>
            <button @click="JumpToInfo3">查询用户</button>
          </td>
          <td>
            <button @click="updateMyInfoDrawer = true">修改信息</button>
          </td>
          <td>
            <button @click="logOut">退出系统</button>
          </td>
        </tr>
      </table>
    </div>
    <div id="info">
      <p style="font-weight: bold; color: #333333; font-size: 18px; position: absolute; top: 10%; left: 5%;">职场信息:</p>

    </div>
    <div id="info1">
      <p style="font-weight: bold; color: #333333; font-size: 18px; position: absolute; top: 10%; left: 5%;">基本信息:</p>
      <table id="info1Table" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td class="info1td">
            <svg t="1573051708721" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6872" width="16" height="16"><path d="M662.641778 606.72c-3.128889-1.877333-6.826667-13.482667-0.199111-37.575111 70.769778-76.913778 114.432-187.107556 114.432-290.076445C776.874667 115.313778 663.466667 0 507.648 0c-155.477333 0-264.049778 114.375111-264.049778 278.129778 0 104.419556 44.117333 215.409778 115.569778 291.925333 7.168 24.035556-2.190222 32.682667-8.106667 35.384889C280.206222 631.068444 14.222222 724.736 14.222222 854.357333v169.614223h995.527111v-191.544889c-34.446222-118.812444-286.094222-205.624889-347.107555-225.706667zM85.674667 952.519111v-92.984889c0-48.981333 148.081778-130.190222 291.584-182.072889a96.881778 96.881778 0 0 0 52.195555-49.692444c8.448-18.545778 15.132444-49.464889-0.995555-91.790222l-2.816-7.424-5.603556-5.688889c-60.643556-61.952-99.811556-157.980444-99.811555-244.736 0-148.707556 100.977778-201.500444 187.420444-201.500445 86.698667 0 193.308444 53.959111 193.308444 202.695111 0 85.873778-39.196444 181.731556-99.811555 244.167112 0 0-25.713778 36.238222-25.344 62.293333 0.227556 17.180444 9.841778 38.769778 17.408 53.617778 14.250667 28.074667 37.632 37.432889 44.231111 39.623111 132.977778 44.003556 285.838222 102.712889 300.856889 154.453333v119.04H85.674667z" p-id="6873" fill="#515151"></path></svg>
            姓名：张三</td>
        </tr>
        <tr>
          <td class="info1td">
            <svg t="1573051673557" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6188" width="16" height="16"><path d="M312.888889 113.777778h56.888889v56.888889h-56.888889zM483.555556 113.777778h56.888888v56.888889h-56.888888zM654.222222 113.777778h56.888889v56.888889h-56.888889zM312.888889 227.555556h56.888889v199.111111h-56.888889zM483.555556 227.555556h56.888888v199.111111h-56.888888zM654.222222 227.555556h56.888889v199.111111h-56.888889z" fill="#515151" p-id="6189"></path><path d="M824.888889 853.333333V483.555556a28.444444 28.444444 0 0 0-28.444445-28.444445H227.555556a28.444444 28.444444 0 0 0-28.444445 28.444445v369.777777h625.777778zM227.555556 398.222222h568.888888a85.333333 85.333333 0 0 1 85.333334 85.333334v426.666666H142.222222V483.555556a85.333333 85.333333 0 0 1 85.333334-85.333334z" fill="#515151" p-id="6190"></path><path d="M28.444444 853.333333h967.111112v56.888889H28.444444z" fill="#515151" p-id="6191"></path></svg>
            年龄：35
          </td>
        </tr>
        <tr>
          <td class="info1td">
            <svg t="1573053268515" class="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9769" width="16" height="16"><path d="M347.093333 345.6 619.754667 72.96l0 206.656c0 11.776 9.557333 21.354667 21.376 21.354667 11.797333 0 21.376-9.578667 21.376-21.376L662.506667 0l-21.248 0c-0.085333 0-0.170667 0-0.256 0L382.890667 0c-11.797333 0-21.376 9.557333-21.354667 21.376 0 11.776 9.557333 21.354667 21.354667 21.354667l206.634667 0L316.138667 316.138667c-0.661333 0.661333-0.917333 1.514667-1.472 2.218667-32.192-21.653333-70.912-34.325333-112.533333-34.325333C90.666667 284.032 0 374.72 0 486.165333c0 111.466667 90.666667 202.176 202.133333 202.176 111.445333 0 202.112-90.709333 202.133333-202.176C404.266667 431.552 382.4 382.016 347.093333 345.6zM202.133333 645.589333c-87.872 0-159.402667-71.530667-159.402667-159.424 0-87.872 71.530667-159.381333 159.402667-159.381333s159.381333 71.509333 159.402667 159.381333C361.536 574.058667 290.005333 645.589333 202.133333 645.589333z" p-id="9770" fill="#515151"></path><path d="M821.866667 361.514667c-111.466667 0-202.154667 90.688-202.154667 202.133333 0 48.042667 16.917333 92.181333 45.034667 126.912l-165.674667 165.674667-101.098667-101.098667c-8.362667-8.384-21.845333-8.384-30.208 0-8.362667 8.362667-8.362667 21.845333 0 30.208l101.098667 101.098667L367.786667 987.52c-8.362667 8.362667-8.362667 21.845333 0 30.229333C371.946667 1021.909333 377.408 1024 382.890667 1024c5.461333 0 10.922667-2.090667 15.104-6.250667l101.098667-101.098667 101.098667 101.098667C604.352 1021.909333 609.813333 1024 615.296 1024c5.461333 0 10.922667-2.090667 15.104-6.250667 8.362667-8.384 8.362667-21.866667 0-30.229333l-101.077333-101.077333 165.674667-165.674667c34.730667 28.096 78.848 45.013333 126.890667 45.013333 111.445333 0 202.133333-90.709333 202.133333-202.154667S933.312 361.514667 821.866667 361.514667zM821.866667 723.050667c-87.872 0-159.424-71.552-159.424-159.402667 0-87.872 71.552-159.402667 159.424-159.402667s159.402667 71.530667 159.402667 159.402667C981.269333 651.498667 909.76 723.050667 821.866667 723.050667z" p-id="9771" fill="#515151"></path></svg>
            性别：男
          </td>
        </tr>
        <tr>
          <td class="info1td">
            <svg t="1573051641698" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5884" width="16" height="16"><path d="M772.654545 900.654545l-13.963636-4.654545C165.236364 714.472727 128 265.309091 125.672727 260.654545V232.727273l155.927273-116.363637 160.581818 209.454546-81.454545 90.763636c27.927273 95.418182 174.545455 200.145455 242.036363 242.036364l109.381819-74.472727 190.836363 169.890909-130.327273 146.618181zM172.218182 258.327273c2.327273 25.6 44.218182 416.581818 586.472727 588.8l83.781818-88.436364-128-114.036364-104.727272 69.818182-11.636364-6.981818c-9.309091-6.981818-249.018182-146.618182-279.272727-290.909091l-2.327273-11.636363 72.145454-79.127273L279.272727 183.854545l-107.054545 74.472728z" p-id="5885" fill="#515151"></path></svg>
            电话：15111111111</td>
        </tr>
        <tr>
          <td class="info1td">
            <svg t="1573051426146" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4683" width="16" height="16"><path d="M706.519 1000.53c-67.857 0-129.229-16.711-164.195-44.674-1.447-1.147-3.509-1.815-5.707-1.815-22.118 1.434-36.673 1.434-57.235 0-3.126 0.014-4.875 0.56-6.431 1.815-35.061 27.989-96.461 44.674-164.277 44.674-111.056 0-194.805-42.954-194.805-99.902 0-32.276 27.511-61.331 75.489-79.708 2.102-0.819 3.632-2.281 4.11-3.946 0.492-1.747-0.259-3.126-0.97-3.959-14.063-16.603-26.583-34.42-37.205-53.003-1.078-1.898-3.509-3.291-6.144-3.55-3.659 0.245-6.13 0.928-7.66 2.608-22.405 24.931-45.289 34.571-65.291 28.208-7.987-2.54-19.47-9.202-28.262-26.474-19.948-39.213-17.599-112.503 5.871-182.381 18.446-55.077 54.695-97.089 81.852-122.635 0.697-0.655 1.911-2.13 1.584-4.014-1.161-6.854-1.721-13.189-1.721-19.415 0-26.528 8.206-52.469 24.371-77.087 0.56-0.847 0.791-1.761 0.723-2.717-0.164-2.471-0.301-4.983-0.301-7.455 0-180.115 155.921-326.67 347.573-326.67 191.665 0 347.586 146.541 347.586 326.67 0 2.307-0.123 4.602-0.301 6.895-0.041 0.791 0.191 1.693 0.737 2.498 16.493 24.726 24.863 50.913 24.863 77.878 0 6.608-0.601 13.189-1.829 20.125-0.355 1.966 0.833 3.399 1.57 4.11 26.883 25.463 62.723 67.257 81.033 121.91 23.456 69.823 25.819 143.087 5.871 182.326-8.793 17.285-20.261 23.948-28.331 26.501a41.074 41.074 0 0 1-12.165 1.843c-21.408 0-40.619-16.247-52.947-29.873-1.516-1.693-3.782-2.622-6.267-2.622-3.959 0.314-6.308 1.666-7.401 3.578-10.732 18.665-23.293 36.468-37.328 52.934-0.518 0.628-1.488 2.13-0.97 3.973 0.45 1.584 2.034 3.113 4.205 3.946 48.429 18.691 75.121 46.954 75.121 79.571 0 56.894-83.749 99.834-194.819 99.834z m-169.902-87.449c11.373 0 22.474 3.809 31.212 10.718 27.198 21.763 81.593 35.772 138.69 35.772 93.921 0 153.859-34.898 153.859-58.914 0-13.653-19.211-29.887-48.947-41.37-14.049-5.447-24.821-17.012-28.822-30.953-4.068-14.513-0.655-30.037 9.107-41.643 12.507-14.663 23.606-30.393 33.055-46.859 7.714-13.462 21.886-22.419 37.86-23.893 1.556-0.177 3.317-0.259 5.066-0.259 14.117 0 27.484 5.899 36.7 16.165 10.758 11.892 19.524 16.343 22.514 16.343 10.117-5.762 25.273-68.881-4.219-156.686-15.633-46.654-46.871-82.944-70.342-105.171-11.36-10.718-16.507-26.118-13.735-41.165 0.779-4.397 1.174-8.642 1.174-12.82 0-18.719-6.035-37.26-17.954-55.105-5.598-8.356-8.206-18.091-7.537-28.14 0.109-1.447 0.191-2.731 0.191-4.028 0-157.532-137.557-285.71-306.626-285.71S201.25 187.54 201.25 345.073c0 1.53 0.096 3.1 0.205 4.588 0.71 9.953-1.829 19.661-7.359 28.071-11.701 17.845-17.641 36.209-17.641 54.613 0 3.905 0.369 8.001 1.133 12.521 2.554 14.828-2.622 30.051-13.83 40.673-23.797 22.391-55.392 58.874-71.134 105.895-29.505 87.873-14.336 151.006-3.741 156.905 1.829-0.109 9.953-3.1 22.214-16.753 10.459-11.497 25.996-17.449 41.875-15.92 15.892 1.474 30.065 10.431 37.834 23.934 9.407 16.452 20.48 32.208 32.918 46.899 9.83 11.591 13.258 27.156 9.134 41.629-3.959 13.995-14.759 25.614-28.863 31.007-29.873 11.455-49.18 27.716-49.18 41.466 0 24.044 59.924 58.942 153.845 58.942 57.071 0 111.507-14.009 138.704-35.717 9.995-8.001 22.201-11.782 35.226-10.636 17.872 1.229 31.744 1.257 50.517-0.028a70.953 70.953 0 0 1 3.509-0.082z" p-id="4684" fill="#515151"></path></svg>
            QQ号：798900704
          </td>
        </tr>
      </table>
    </div>
    <div id="info2">
      <p style="font-weight: bold; color: #333333; font-size: 18px; position: absolute; top: 10%; left: 5%;">其他信息:</p>
      <p style="position: absolute; top: 25%; left: 3%; font-size: 14px">&nbsp;&nbsp;Quisque vel tellus sit amet quam efficitur sagittis. Fusce aliquam pulvinar suscipit.</p>
      <p style="position: absolute; top: 45%; left: 3%; font-size: 14px">&nbsp;&nbsp;Proin eu fringilla dui.Pellentesque mattis lobortis mauris eu tincidunt. Maecenas hendrerit faucibus dolor, in commodo lectus mattis ac.</p>
    </div>
    <div id="info3">
      <div id="info3Title">
        <p>用户信息</p>
      </div>
      <div id="searchProfile">
        <el-button type="primary" icon="el-icon-search" @click="profileSearchDrawer = true">查询用户</el-button>
      </div>
      <el-table
        :data="profileData.slice((currpage-1)*pagesize,currpage*pagesize)"
        style="width: 90%;"
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
          width="150">
        </el-table-column>
        <el-table-column
          prop="gender"
          sortable
          fixed
          label="性别"
          width="120">
        </el-table-column>
        <el-table-column
          prop="age"
          sortable
          label="年龄"
          width="120">
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
          prop="email"
          label="电子邮箱">
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currpage"
        :page-sizes="[2, 4, 6, 8]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="profileData.length">
      </el-pagination>
      <el-drawer
        title="查询用户信息"
        id=""
        :visible.sync="profileSearchDrawer"
        direction="rtl"
        size="30%">
      </el-drawer>
    </div>
    <el-drawer
      title="修改个人信息"
      id="updateMyInfo"
      :visible.sync="updateMyInfoDrawer"
      direction="rtl"
      size="30%">
      <el-form
        :model="updateMyInfoData"
        :rules="updateMyInfoRules"
        ref="updateMyInfoData"
        id="updateMyInfoForm"
        style="width: 96%"
        label-position="right">
        <el-form-item label="密码" label-width="100px" prop="password" >
          <el-input type="text" v-model="updateMyInfoData.password"></el-input>
        </el-form-item>
        <el-form-item label="QQ" label-width="100px" prop="qq" >
          <el-input type="text" v-model="updateMyInfoData.qq"></el-input>
        </el-form-item>
        <el-form-item label="电话" label-width="100px" prop="tel" >
          <el-input type="text" v-model="updateMyInfoData.tel"></el-input>
        </el-form-item>
        <el-form-item label="邮件" label-width="100px" prop="email" >
          <el-input type="text" v-model="updateMyInfoData.email"></el-input>
        </el-form-item>
        <el-form-item label="备注" label-width="100px" prop="description" >
          <el-input type="text" v-model="updateMyInfoData.description"></el-input>
        </el-form-item>
        <el-form-item label-width="100px">
          <el-button type="primary" @click="updateMyData('updateMyInfoData')">修改</el-button>
          <el-button @click="MyEditCancel('updateMyInfoData')">取消</el-button>
        </el-form-item>
      </el-form>
    </el-drawer>
    <div id="foot"></div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueScrollTo from 'vue-scrollto'
  import axios from "../../network/axios";
  import {searchMyFullData} from "../../network/profile/searchMyFullData";
  Vue.use(VueScrollTo);

  export default {
    name: "account",
    mounted() {
      //this.getMyFullData();
    },
    components: {

    },
    data() {
      return {
        imgUrl: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        profileData: [],
        myId: "",   //需要后端登录信息传回id，然后放入vuex中
        MyData: {
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
          valid: "",
          description: "",
        },
        pagesize: 8,  // 每页的数据数
        currpage: 1,  // 默认开始页面
        profileSearchDrawer: false,
        updateMyInfoDrawer: false,
        updateMyInfoData: {
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
        updateMyInfoRules: {

        },
      }
    },
    methods: {
      getMyFullData(){
        searchMyFullData(this.myId).then(res => {
          console.log(res);
          console.log(res.length);
          this.MyData.clientid = res.clientid;
          this.MyData.clientname = res.clientname;
          this.MyData.password = res.password;
          this.MyData.id = res.id;
          this.MyData.bindUserId = res.bindUserId;
          this.MyData.thename = res.thename;
          this.MyData.gender = res.gender;
          this.MyData.age = res.age;
          this.MyData.qq = res.qq;
          this.MyData.tel = res.tel;
          this.MyData.email = res.email;
          this.MyData.jobTime = res.jobTime;
          this.MyData.jobInDate = res.jobInDate;
          this.MyData.valid = res.valid;
          this.MyData.description = res.description;
        }).catch(err => {
          console.log(err);
        })
      },
      logOut() {
        this.$store.commit('setIsLogin', false);
        window.localStorage.setItem('loginJudge', 'false');
        this.$router.replace('/login');
      },
      JumpToInfo() {
        document.getElementById("info").scrollIntoView({
          behavior: "smooth"
        });
      },
      JumpToInfo1() {
        document.getElementById("info1").scrollIntoView({
          behavior: "smooth"
        });
      },
      JumpToInfo2() {
        document.getElementById("info2").scrollIntoView({
          behavior: "smooth"
        });
      },
      JumpToInfo3() {
        document.getElementById("info3").scrollIntoView({
          behavior: "smooth"
        });
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      MyEditCancel(formName) {
        this.$refs[formName].resetFields();
        this.updateMyInfoDrawer = false;
      },
      updateMyData(formName) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            updateMyData(this.MyData.clientid,this.MyData.clientname,this.updateMyInfoData.password,this.MyData.id,this.MyData.bindUserId,this.MyData.thename,this.MyData.gender,this.MyData.age,this.updateMyInfoData.qq,this.updateMyInfoData.tel,this.updateMyInfoData.email,this.MyData.jobTime,this.MyData.jobInDate,this.MyData.valid,this.updateMyInfoData.description).then(res => {
              if (res === 1) {
                alert('修改成功');
                this.updateMyInfoDrawer = false;
                this.$router.go(0);
              } else {
                alert('修改失败');
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
  #profile {
    position: absolute;
    left: 18%;
    top: 11%;
    width: 81.99%;
    height: 88.99%;
    /*background-color: #ff5777;*/
    overflow-y: scroll;
  }
  #profileTitle {
    position: absolute;
    width: 96%;
    top: 30px;
    left: 1%;
    height: 300px;
    border-radius: 10px;
    background-image: url("../../assets/img/profile/bg3.jpg");
  }
  #profileAvatar {
    position: relative;
    top: 72%;
    left: 4%;
    border: white 4px solid;
  }
  #name {
    position: absolute;
    font-size: 22px;
    font-weight: bold;
    color: white;
    left: 20%;
    top: 88%;
  }
  #titleTable {
    position: absolute;
    width: 50%;
    height: 40px;
    right: 3%;
    top: 85%;
    text-align: center;
  }
  #titleTable button {
    color: white;
    font-size: 18px;
    font-weight: bold;
    border: 0;
    outline: 0;
    background-color: rgba(0,0,0,0);
  }
  #info {
    position: absolute;
    top: 400px;
    width: 25%;
    height: 400px;
    left: 1%;
    background-color: white;
    border-radius: 6px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }
  #info1 {
    position: absolute;
    top: 400px;
    width: 40%;
    height: 400px;
    left: 30%;
    background-color: white;
    border-radius: 6px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }
  #info2 {
    position: absolute;
    top: 400px;
    width: 20%;
    height: 350px;
    left: 74%;
    background-color: white;
    border-radius: 6px;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }

  #info1Table {
    position: absolute;
    top: 20%;
    width: 84%;
    margin-left: 8%;
    height: 75%;
  }
  #info1Table td {
    font-size: 16px;
  }
  .info1td {
    border-bottom: 1px dashed;
  }
  #info1Table tr {
    height: 20%;
  }
  #info1Table svg {
    margin-right: 5px;
    margin-left: 20px;
  }
  #info3 {
    position: absolute;
    top: 145%;
    width: 96%;
    height: 60%;
    left: 2%;
    background-color: white;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
  }
  #info3Title {
    position: absolute;
    width: 8%;
    height: 12%;
    top: 6%;
    left: 1.5%;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
  #searchProfile {
    position: absolute;
    top: 4%;
    left: 20%;
    width: 15%;
    height: 12%;
  }
  .el-table {
    position: absolute;
    top: 20%;
    left: 5%;
  }
  .el-pagination {
    position: absolute;
    bottom: 10%;
    right: 0;
  }
  #updateMyInfo {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    font-size: 22px;
    font-weight: bolder;
  }
  #updateMyInfoForm {
    position: absolute;
    width: 100%;
    height: 150%;
    top: 18%;
    margin-left: 2%;
  }
  #updateMyInfoForm .el-input {
    width: 200px;
  }
  #foot {
    position: absolute;
    top: 220%;
    width: 96%;
    height: 40px;
  }
</style>
