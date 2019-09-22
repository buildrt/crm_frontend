<template>
  <div id="login">
    <div>
      <img id="bcImg" src="../../assets/img/login/loginBac.jpg" alt="">
    </div>

    <div class="info">
      <div id="title">
        <!-- 用图片代替文字 -->
        <img src="" alt="">
      </div>
      <form class="loginInfo" action="#" method="get" @submit.prevent>
        <table>
          <tr>
            <td>
              <img id="userImg" src="../../assets/img/login/userImg.svg" alt="">
              <input type="text" v-model="username" autocomplete="off" class="username" name="username" id="username" onFocus="this.value=''" value="请输入用户名"/>
            </td>
          </tr>
          <tr>
            <td>
              <img id="pwdImg" src="../../assets/img/login/pwdImg.svg" alt="">
              <input type="password" v-model="password" class="pwd" onFocus="this.value=''" value="*******" name="pwd" id="pwd">
            </td>
          </tr>
          <tr>
            <td>
              <button class="send" id="send" @click="Login">登  录</button>
              <router-link to="/register" tag="button">注   册</router-link>
            </td>
          </tr>
        </table>
      </form>
    </div>
  </div>
</template>

<script>
  import {request} from "../../network/request";

  export default {
    name: "Login",
    inject: ['reload'],
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
    },
    mounted() {
      this.reload();    // 调用自动刷新的方法,避免注销登录时，登录界面加载问题
    }
  }
</script>

<style scoped>
  @import "../../assets/css/login_register/showdiv.css";

  .info{
    position: absolute;
    top: 20%;
    left: 35%;
    width: 30%;
    height: 75%;
    padding-left: 4%;
    background-color: rgba(0,0,0,0.5);
    border-radius: 25px;
    box-shadow: 10px 10px 5px rgba(0,0,0,0.3);
  }

  .info form{
    position: relative;
    top: 50%;
  }

  .info form input[type="text"],[type='password']{
     height: 30px;
     width: 300px;
     font-size: 18px;
     padding-left: 10px;
     color: darkgrey;
     background-color: rgba(0,0,0,0.5);
     border: 0;
     border-radius: 5px;
     outline: none;
   }

  input[type="text"] {
    text-indent: 42px; /*input标签光标和输入框左边有点距离*/
    text-align: left;
  }

  #userImg {
    position: absolute;
    left: 8px;
  }

  .pwd {
    text-indent: 42px;
    text-align: left;
  }

  #pwdImg {
    position: absolute;
    left: 8px;
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
    background-color: deeppink;
    width: 100px;
    height: 40px;
    font-size: 18px;
    color: white;
  }

  #send {
    position: relative;
    margin-left: 9%;
    margin-right: 18%;
  }

</style>
