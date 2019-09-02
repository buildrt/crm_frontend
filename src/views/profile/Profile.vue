<template>
  <div>

    <profile_-edit :ename="name" :ephone="phone" :eemail="email" :egender="gender"></profile_-edit>

    <div id="showdiv">
      <div id="edit">
        <button id="editInfo" @click="editInfo">修改信息</button>
        <button id="editBack" @click="editBack">返回</button>
      </div>

      <div id="profile_info">
        <table>
          <thead>
            <tr>
              <th>基本信息</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>姓名</td>
            <td>{{name}}</td>
            <td></td>
            <td>性别</td>
            <td>{{gender}}</td>
          </tr>
          <tr>
            <td>手机号</td>
            <td>{{phone}}</td>
            <td></td>
            <td>邮箱</td>
            <td>{{email}}</td>
          </tr>
          <tr>
            <td>部门</td>
            <td>{{department}}</td>
            <td></td>
            <td>岗位</td>
            <td>{{job}}</td>
          </tr>
          <tr>
            <td>直属上级</td>
            <td>{{master}}</td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
  import Profile_Edit from "./Profile_Edit";
  export default {
    name: "account",
    components: {
      Profile_Edit
    },
    data() {
      return {
        name: 'buildrt',
        gender: '男',
        phone: '15161150422',
        email: '2673464538@qq.com',
        department: '办公室',
        job: '经理',
        master: 'exaid'
      }
    },
    methods: {
      editInfo() {
        document.getElementById('light').style.display='block';
        document.getElementById('fade').style.display='block'
      },
      editBack() {
        this.$router.push('/home');
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/login_register/showdiv.css";
  @import "../../assets/css/profile/edit.css";

  #edit {
    position: absolute;
    top: 5%;
    right: 3%;
  }
  #edit Button {
    background-color: #1E90FF;
    font-size: 14px;
    color: white;
    border: 0;
  }
  #editBack {
    margin-right: 10px;
    width: 50px;
    height: 30px;
  }
  #editInfo {
    width: 80px;
    height: 30px;
    margin-right: 10px;
  }
  tr {
    height: 30px;
  }
  td{
    width: 100px;
    font-size: 14px;
    text-align: left;
  }

  th{
    text-align: left;
    padding-bottom: 10px;
  }

  table {
    position: absolute;
    left: 20%;
    top: 42%;
  }
</style>
