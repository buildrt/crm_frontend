<template>
  <div id="info_reg">
    <div id="showdiv">
      <div>
        <!--<video autoplay loop muted>-->
          <!--<source src="../../assets/video/loginBac.mp4" type="video/mp4"/>-->
        <!--</video>-->
        <img id="bcImg" src="../../assets/img/login/loginBac.jpg" alt="">
      </div>

      <div id="regInfo">
        <form action="#" method="get" @submit="checkSub">
          <table>
            <tr>
              <td width="80px">用户名:</td>
              <td width="300px">
                <input type="text" autocomplete="off" name="uname" id="uname" value="" @blur="checkUname" alt="用户名"/>&nbsp;
                <span id="unameSpan">*2-4位汉字</span>
              </td>
            </tr>
            <tr>
              <td>密码:</td>
              <td>
                <input type="password" name="pwd" id="pwd" value="" @blur="checkPwd"/>&nbsp;
                <span id="pwdSpan">*6-20位</span>
              </td>
            </tr>
            <tr>
              <td>确认密码:</td>
              <td>
                <input type="password" name="pwd2" id="pwd2" value="" @blur="checkPwd2"/>&nbsp;
                <span id="pwd2Span"></span>
              </td>
            </tr>
            <tr>
              <td>手机号:</td>
              <td>
                <input type="text" autocomplete="off" name="phone" id="phone" value="" @blur="checkPhone" alt="手机号"/>&nbsp;
                <span id="phoneSpan"></span>
              </td>
            </tr>
            <tr>
              <td>邮箱:</td>
              <td>
                <input type="text" autocomplete="off" name="mail" id="mail" value="" @blur="checkMail" alt="邮箱"/>&nbsp;
                <span id="mailSpan"></span>
              </td>
            </tr>
            <tr>
              <td>性别:</td>
              <td>
                男	<input type="radio" name="sex" id="sex0" value="0" checked="checked"/>&nbsp;&nbsp;&nbsp;
                女	<input type="radio" name="sex" id="sex1" value="1" />
              </td>
            </tr>
            <tr>
              <td>验证码:</td>
              <td>
                <input type="text" autocomplete="off" name="code" id="code" value="" style="width: 100px;" @blur="checkCode"/>&nbsp;&nbsp;
                <span id="codeSpan" @click="createCode">{{code}}</span>&nbsp;
                <span id="codeAppendSpan"></span>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <input type="checkbox" name="" id="agree" value="" @click="checkAgree()"/>&nbsp;&nbsp;相遇即是缘分
              </td>
            </tr>
            <tr>
              <td>
                <button id="sub" disabled="disabled" @click="checkSub">注 册</button>
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
    name: "Login",
    data() {
      return {
        code: {
          type: String
        }
      }
    },
    methods: {
      //常见验证码
      createCode(){
        //创建随机四位
        let code1="";
        let codeChars=new Array(0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e',
          'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u',
          'v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K',
          'L','M','N','O','P','Q','R','S','T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        for (let i = 0; i < 4; i++) {
          let charNum = Math.floor(Math.random()*62);
          code1 += codeChars[charNum];
        }
        this.code = code1;
      },
      //检查验证码
      checkCode(){
        //获取显示区生成的验证码
        let code=document.getElementById("codeSpan").innerHTML;
        //获取输入的验证码
        let inputCode=document.getElementById("code").value;
        //console.log(code);
        //console.log(inputCode);
        let span=document.getElementById("codeAppendSpan");
        if(inputCode.length<=0){
          span.innerHTML="*请输入验证码！";
          span.style.color="red";
          return false;
        }else if(inputCode.toUpperCase()!=code.toUpperCase()){
          span.innerHTML="*输入验证码有误！";
          span.style.color="red";
          this.createCode();
          return false;
        }else{
          span.innerHTML="*验证码正确！";
          span.style.color="green";
          return true;
        }
      },
      //验证用户名
      checkUname(){
        //获取用户的用户名信息
        var uname=document.getElementById("uname").value;
        //创建校验规则
        var reg=/^[\u4e00-\u9fa5]{2,4}$/; //正则表达式，汉字匹配用户名2--4个汉字
        //获取span对象
        var span=document.getElementById("unameSpan");
        //开始校验
        if(uname=="" || uname==null){
          //输出校验结果
          span.innerHTML="*用户名不能为空";
          span.style.color="red";
          return false;
        }else if(reg.test(uname)){
          //输出校验结果
          span.innerHTML="*用户名OK";
          span.style.color="green";
          return true;
        }else{
          //输出校验结果
          span.innerHTML="*用户名不符合规范";
          span.style.color="red";
          return false;
        }
      },
      //验证密码
      checkPwd(){
        //获取用户的密码信息
        let pwd=document.getElementById("pwd").value;
        //创建校验规则
        const regStrong = /^.*(?=.{6,20})(?=.*\d)(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[!@#$%^&*?\(\)]).*$/;
        const regMid = /^.*(?=.{6,20})(?=.*\d)(?=.*[A-Z]{1,})(?=.*[a-z]{1,}).*$/;
        const regWeek = /^.*(?=.{6,20})(?=.*\d)(?=.*[a-z]{1,}).*$/;
        //获取span对象
        let span=document.getElementById("pwdSpan");
        //开始校验
        if(pwd==""||pwd==null){
          //输出校验结果
          span.innerHTML="*密码不能为空！";
          span.style.color="red";
          return false;
        }else if(regStrong.test(pwd)){
          //输出校验结果
          //span.innerHTML="*密码强度高";
          span.innerHTML="*密码强度高<div style='position: absolute;right: 80px; top: 59px; border: solid 1px gray; width: 60px;height: 8px; border-radius: 5px;'><div style='border: solid 1px green; margin: 1px; width: 56px;height: 4px; border-radius: 5px; background: green;'></div></div>";
          span.style.color="green";
          return true;
        }else if(regMid.test(pwd)){
          //输出校验结果
          span.innerHTML="*密码强度中<div style='position: absolute;right: 80px; top: 59px; border: solid 1px gray; width: 60px;height: 8px; border-radius: 5px;float: left;'><div style='border: solid 1px #FFB90F; margin: 1px; width: 60%;height: 4px; border-radius: 5px; background: #FFB90F;'></div></div>";
          span.style.color="#FFB90F";
          return true;
        }else if(regWeek.test(pwd)){
          //输出校验结果
          span.innerHTML="*密码强度弱<div style='position: absolute;right: 80px; top: 59px; border: solid 1px gray; width: 60px;height: 8px; border-radius: 5px;float: left;'><div style='border: solid 1px red; margin: 1px; width: 30%;height: 4px; border-radius: 5px; background: red;'></div></div>";
          span.style.color="red";
          return false;
        }else{
          //输出校验结果
          span.innerHTML="密码格式不正确！";
          span.style.color="red";
          return false;
        }
      },
      //校验确认密码
      checkPwd2(){
        //获取第一次密码
        let pwd = document.getElementById("pwd").value;
        //获取确认密码
        let pwd2 = document.getElementById("pwd2").value;
        //获取span对象
        let span = document.getElementById("pwd2Span");
        //比较两次密码是否相同
        if(pwd2 == ""||pwd2 == null){
          span.innerHTML = "*确认密码不能为空！";
          span.style.color = "red";
          return false;
        }else if(pwd == pwd2){
          span.innerHTML = "*确认密码OK";
          span.style.color = "green";
          return true;
        }else{
          span.innerHTML = "*两次密码不一致！";
          span.style.color = "red";
          return false;
        }
      },
      //封装校验:相同的保留，不同的传参。
      checkField(id,reg){
        //获取用户数据
        let inp=document.getElementById(id);
        let va=inp.value;
        let alt=inp.alt;
        //创建校验规则
        //获取span对象
        let span=document.getElementById(id+"Span");
        //开始校验
        if(va==""||va==null){
          //输出校验结果
          span.innerHTML="*"+alt+"不能为空！";
          span.style.color="red";
          return false;
        }else if(reg.test(va)){
          //输出校验结果
          span.innerHTML="*"+alt+"OK";
          span.style.color="green";
          return true;
        }else{
          //输出校验结果
          span.innerHTML="*"+alt+"不符合规则";
          span.style.color="red";
          return false;
        }
      },
      //校验手机号
      checkPhone(){
        return this.checkField("phone",/^1[34578]\d{9}$/);  //调用封装校验
      },
      //校验邮箱
      checkMail(){
        return this.checkField("mail",/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/);
      },
      //校验是否同意公司协议
       checkAgree(){
        //获取提交按钮的disabled属性
        //alert(document.getElementById("sub").disabled);  disable为true时提交不了
        //取反 sub.disabled和agree.checked取值相反
        document.getElementById("sub").disabled=!document.getElementById("agree").checked;
        if (document.getElementById("sub").disabled == true) {
          document.getElementById("sub").style.backgroundColor = '#dbdbdb';
        }else {
          document.getElementById("sub").style.backgroundColor = '#1E90FF';
        }
      },
      //提交判断
      checkSub(event){
        //注册前再全体校验
        console.log(this.checkUname());
        console.log(this.checkPwd());
        console.log(this.checkPwd2());
        console.log(this.checkPhone());
        console.log(this.checkMail());
        console.log(this.checkCode());
        if (this.checkUname()&&this.checkPwd()&&this.checkPwd2()&&this.checkPhone()&&this.checkMail()&&this.checkCode()) {
          this.form.submit();
          this.$router.push('/login');
          // this.$store.commit('loginJudgeChange'); //改变loginJudge参数，使Profile界面显示出来
        }else {
          event.preventDefault();
        }
      }
    },
    created() {
      this.createCode();
    }
  }
</script>

<style scoped>
  @import "../../assets/css/login_register/showdiv.css";

  #regInfo {
    position: absolute;
    top: 13%;
    left: 30%;
    width: 40%;
    height: 83%;
    padding-left: 4%;
    background-color: rgba(0,0,0,0.5);
    border-radius: 25px;
    box-shadow: 10px 10px 5px rgba(0,0,0,0.3);
  }

  #regInfo form {
    position: relative;
    top: 23%;
  }

  td {
    color: #1E90FF;
    font-size: 18px;
    font-weight: bold;
  }

  table{
    margin-left: 12px;
    width: 500px;
    text-align: left;
  }
  tr{
    height: 40px;
  }
  span{
    font-size:13px;
  }
  #codeSpan {
    background-image: url("../../assets/img/register/code.gif");
    font-size: 16px;
    color: #000;
  }
  #sub {
    border: 0;
    background-color: #dbdbdb;
    width: 100px;
    height: 40px;
    font-size: 18px;
    color: white;
  }

  input {
    outline: none;
    background-color: rgba(0,0,0,0.5);
    border: 0;
    border-radius: 5px;
    height: 28px;
    text-indent: 12px;
    color: darkgrey;
    vertical-align: middle;
  }
</style>
