<template>
  <div id="info_reg">
    <div id="regInfo">
      <el-form :model="regForm" :rules="regRules" ref="regForm" label-position="left">
        <el-form-item prop="username" id="userItem">
          <el-input class="regInput" prefix-icon="el-icon-user" id="uname" size="large" v-model.trim="regForm.username" autocomplete="off" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="phone">
          <el-input class="regInput" prefix-icon="el-icon-mobile-phone" id="phone" size="large" v-model.trim="regForm.phone" autocomplete="off" placeholder="手机号码"></el-input>
        </el-form-item>
        <el-form-item prop="gender" id="genderItem">
          <el-radio-group v-model="regForm.gender" id="gender" size="mini">
            <el-radio label='0' @click="RadioOnClick0">男</el-radio>
            <el-radio label='1' @click="RadioOnClick1">女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="password">
          <el-input class="regInput" prefix-icon="el-icon-lock" id="pwd" type="password" size="large" v-model.trim="regForm.password" show-password autocomplete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item prop="password2">
          <el-input class="regInput" prefix-icon="el-icon-lock" id="pwd2" type="password" size="large" v-model.trim="regForm.password2" show-password autocomplete="off" placeholder="确认密码"></el-input>
        </el-form-item>
        <el-form-item id="subItem">
          <el-button type="primary" round @click="Register('regForm')">注册</el-button>
          <el-button type="primary" round @click="ToLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import {register} from "../../network/register/register";

  export default {
    name: "Login",
    data() {
      let validatePass = (rule, value, callback) => {
        console.log(value);
        if (value === '') {
          callback(new Error('请输入密码'));
        }else if(value.length < 6 || value.length > 12) {
          callback(new Error('请输入6 - 12位的密码'));
        } else {
          if (this.regForm.password2 !== '') {
            this.$refs.regForm.validateField('checkPass');
          }
          callback();
        }
      };
      let validatePass2 = (rule, value, callback) => {
        console.log(value);
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.regForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        regForm: {
          username: '',
          password: '',
          password2: '',
          phone: '',
          gender: 0
        },
        regRules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { validator: validatePass, trigger: 'blur' },
            { pattern: /^.*(?=.{6,20})(?=.*\d)(?=.*[a-z]{1,}).*$/, message: '密码弱', trigger: 'blur'}
          ],
          password2: [
            { required: true, message: '请输入确认密码', trigger: 'blur' },
            { validator: validatePass2, trigger: 'blur' }          ],
          phone: [
            { required: true, message: '请输入手机号码', trigger: 'blur' },
            { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur'}
          ],
          gender: [
            { required: true, message: '请输入性别', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      Register(forName) {
        this.$refs[forName].validate(valid => {
          console.log(valid);
          if (valid) {
            this.regForm.username = document.getElementById('uname').value;
            this.regForm.phone = document.getElementById('phone').value;
            this.regForm.password = document.getElementById('pwd').value;
            this.regForm.password2 = document.getElementById('pwd2').value;
            console.log(this.regForm.username, this.regForm.phone,this.regForm.gender,this.regForm.password,this.regForm.password2);
            register(this.regForm.username,this.regForm.password,this.regForm.phone,this.regForm.gender).then(res => {
              console.log(res);
              if (res === 1) {
                alert("注册成功");
                this.$router.push('/login');
              }else {
                alert("注册失败");
              }
            }).catch(err => {
              console.log(err);
            })
          }
        })
      },
      ToLogin() {
        this.$router.push('/login');
      },
      RadioOnClick0() {
        this.data().regForm.gender = 0;
      },
      RadioOnClick1() {
        this.data().regForm.gender = 1;
      },
    },
    mounted() {
    }
  }
</script>

<style>
  .regInput .el-input__inner {
    background-color: rgba(0,0,0,0);
    border: none;
    color: #fff;
    font-size: 16px;
    border-radius: 5px;
    margin-left: 12px;
  }
</style>

<style scoped>
  @import "../../assets/css/login_register/showdiv.css";

  #info_reg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #242645;
    overflow: hidden;
  }
  #regInfo {
    position: absolute;
    top: 8%;
    left: 36%;
    width: 28%;
    height: 85%;
    padding-left: 4%;
    background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
  }
  .el-form {
    position: relative;
    top: 25%;
    width: 80%;
    height: 70%;
  }
  .el-input {
    font-size: 20px;
  }
  #userItem {
    position: relative;
    left: 0;
    text-align: center;
  }
  #genderItem {
    position: relative;
    left: 10px;
  }
  #subItem .el-button {
    width: 35%;
    font-size: 16px;
    color: #409EFF;
    margin-left: 13%;
    border: 2px solid;
    background-color: rgba(0,0,0,0);
  }
  .el-radio {
    color: white;
  }
</style>
