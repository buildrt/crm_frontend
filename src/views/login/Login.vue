<template>
  <div id="login">
    <!--<img id="bcImg" src="../../assets/img/login/loginBac.jpg" alt="">-->
    <video loop="loop" autoplay="autoplay" width="100%" muted="muted">
      <source src="../../assets/img/login/loginBac.mp4" type="video/mp4"/>
    </video>

    <router-link to="/carousel" tag="button" id="CarRoute">界   面</router-link>

    <div class="info">
      <div id="title">
        <!-- 用图片代替文字 -->
        <img src="" alt="">
      </div>
      <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
        <el-form-item id="nameItem"  prop="username">
          <el-input class="loginInput" id="uname" size="large" v-model.trim="loginForm.username" autocomplete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item id="pwdItem"  prop="password">
          <el-input class="loginInput" id="pwd" type="password" size="large" v-model.trim="loginForm.password" show-password autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item id="subItem">
          <el-button type="primary" @click="Login('loginForm')">登录</el-button>
          <el-button type="primary" @click="ToRegister">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

  import {login} from "../../network/login/login";

  export default {
    name: "Login",
    data(){
      return {
        loginForm: {
          username: '',
          password: '',
        },
        loginRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      Login(forName) {
        this.$refs[forName].validate(valid => {
          console.log(valid);
          if (valid) {
            this.username = document.getElementById('uname').value;
            this.password = document.getElementById('pwd').value;
            console.log(this.username, this.password);
            login(this.username, this.password).then(res => {
              alert("登录成功");
              console.log(res);
            }).catch(err => {
              alert("登录失败");
              console.log(err);
            })
          }
        })
      },
      ToRegister() {
        this.$router.push('/register');
      },
    },
    mounted() {
      console.log("login--mounted");
    },
  }
</script>

<style>
  .loginInput .el-input__inner {
    background-color: rgba(0,0,0,0.5);
    border: none;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
  }
</style>

<style scoped>
  @import "../../assets/css/login_register/showdiv.css";

  #login {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  #CarRoute {
    position: absolute;
    top: 10%;
    left: 0;
    background-color: deeppink;
  }
  .info{
    position: absolute;
    top: 20%;
    left: 35%;
    width: 30%;
    height: 75%;
    /*padding-left: 4%;*/
    background-color: rgba(0,0,0,0.5);
    border-radius: 25px;
    box-shadow: 10px 10px 5px rgba(0,0,0,0.3);
  }
  .el-form {
    position: relative;
    top: 20%;
    width: 100%;
    height: 70%;
  }
  #nameItem {
    position: relative;
    top: 40%;
    width: 60%;
    height: 60px;
    left: 20%;
    text-align: center;
  }
  #pwdItem {
    position: absolute;
    top: 60%;
    width: 60%;
    height: 60px;
    left: 20%;
    text-align: center;
  }
  #subItem {
    position: absolute;
    top: 80%;
    width: 60%;
    height: 60px;
    left: 20%;
  }
  #subItem .el-button {
    width: 30%;
    font-size: 16px;
    margin-left: 13%;
  }
</style>
