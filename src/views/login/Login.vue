<template>
  <div id="login">
    <div id="showdiv">
      <div class="info">
        <form class="loginInfo" action="#" method="get">
          <table>
            <tr>
              <td>用户名:</td>
              <td>
                <input type="text" class="username" name="username" id="username" onFocus="this.value=''" value="请输入用户名"/>
              </td>
            </tr>
            <tr>
              <td>密码:</td>
              <td>
                <input type="password" class="pwd" onFocus="this.value=''" value="*******" name="pwd" id="pwd">
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <input type="submit" class="send" id="send" value="登    录"/>
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
  export default {
    name: "Login"
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
    outline:  0;
    background-color: palevioletred;
    width: 100px;
    height: 40px;
    font-size: 18px;
    color: white;
  }

  #send {
    position: relative;
    margin-left: 16%;
    margin-right: 18%;
  }

</style>
