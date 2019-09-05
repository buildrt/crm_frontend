<template>
  <div id="login">
    <div id="showdiv">
      <div class="info">
        <form class="loginInfo" action="#" method="get" @submit.prevent>
          <table>
            <tr>
              <td>用户名:</td>
              <td>
                <input type="text" v-model="username" class="username" name="username" id="username" onFocus="this.value=''" value="请输入用户名"/>
              </td>
            </tr>
            <tr>
              <td>密码:</td>
              <td>
                <input type="password" v-model="password" class="pwd" onFocus="this.value=''" value="*******" name="pwd" id="pwd">
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <button class="send" id="send" @click="Login">登  录</button>
                <router-link to="/register" tag="button">注   册</router-link>
              </td>
            </tr>
          </table>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {request} from "../../network/request";

  export default {
    name: "Login",
    data(){
      return {
        username: 'Amazon',
        password: '123456'
      }
    },
    methods: {
      Login() {
        request({
          url: '/login'
        }).then(res => {
          let resData = res.data;
          let len = res.data.length;
          let userNameArr = [];
          let passWordArr = [];
          let ses = window.sessionStorage;
          for (let i=0; i<len; i++) {
            userNameArr.push(resData[i].username);
            passWordArr.push(resData[i].password);
          }
          // console.log(userNameArr, passWordArr);
          if (userNameArr.indexOf(this.username) === -1) {
            alert('账号不存在');
          }else {
            let index = userNameArr.indexOf(this.username);
            if (passWordArr[index] === this.password) {
              // 把token放在sessionStorage中
              ses.setItem('data', resData[index].token);

              alert('登录成功');
              // 跳转到首页
              this.$router.push('/home');
              this.$store.commit('loginJudgeChange'); //改变loginJudge参数，使Profile界面显示出来
            }else {
              alert('密码错误');
            }
          }
        }).catch(error => {
          console.log('连接数据库失败');
        })
      }
    }
  }
</script>

<style scoped>
  @import "../../assets/css/login_register/showdiv.css";

  .info{
    position: relative;
    top: -10%;
    left: -33%;
    width: 70%;
  }

  .info form{
    position: relative;
    top: 100px;
    left: 50%;
  }

  .info form input[type="text"],[type='password']{
     outline: solid 1px gainsboro;
     height: 30px;
     width: 300px;
     font-size: 18px;
     padding-left: 10px;
     color: darkgrey;
   }

  table {
    font-size: 18px;
  }

  table td{
    padding-bottom: 30px;
    padding-right: 20px;
  }

  .info form input[type="submit"], button{
    border:  0;
    background-color: #1E90FF;
    width: 100px;
    height: 40px;
    font-size: 18px;
    color: white;
  }

  #send {
    position: relative;
    margin-left: 26%;
    margin-right: 18%;
  }

</style>
