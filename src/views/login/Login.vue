<template>
  <div id="login">
    <canvas id="canvas" width="100%" height="100%"></canvas>
    <!--<img id="bcImg" src="../../assets/img/login/loginBac.jpg" alt="">-->

    <transition name="el-zoom-in-bottom">
      <div class="info" v-show="formShow">
        <div id="title">
          <!-- 用图片代替文字 -->
          <img src="" alt="">
        </div>
        <el-form :model="loginForm" :rules="loginRules" ref="loginForm" label-position="left">
          <el-form-item id="nameItem"  prop="username">
            <el-input class="loginInput" prefix-icon="el-icon-user" id="uname" size="large" v-model.trim="loginForm.username" autocomplete="off" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item id="pwdItem"  prop="password">
            <el-input class="loginInput" prefix-icon="el-icon-lock" id="pwd" type="password" size="large" v-model.trim="loginForm.password" show-password autocomplete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item id="subItem">
            <el-button type="primary" round @click="Login('loginForm')">登录</el-button>
            <el-button type="primary" round @click="ToRegister">注册</el-button>
          </el-form-item>
        </el-form>
        <div id="foot">
          <p>欢迎登录CRM管理系统</p>
        </div>
      </div>
    </transition>
    <transition name="slide-fade">
      <div id="confirm" v-show="confirmShow">
        <img id="rolling" src="../../assets/img/login/Rolling.gif" alt="">
        <p>正在认证中...</p>
      </div>
    </transition>
    <transition name="el-zoom-in-bottom">
      <div id="result" v-show="resultShow">
        <p>登录成功</p>
        <p>欢迎你XXX</p>
      </div>
    </transition>
  </div>
</template>

<script>
  import {login} from "../../network/login/login";

  export default {
    name: "Login",
    data(){
      return {
        formShow: true,
        resultShow: false,
        confirmShow: false,
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
        },
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
            this.formShow = false;
            this.confirmShow = true;
            setTimeout(() => {
              this.confirmShow = false;
              if (1 === 1) {
                setTimeout(() => {
                  this.resultShow = true;
                  setTimeout(() => {
                    this.$store.state.loginJudge = true;
                    this.$router.replace('/home');
                  },1000);
                },300)
              } else {
                setTimeout(() => {
                  this.formShow = true;
                  this.$alert('用户名密码错误', {
                    confirmButtonText: '确定',
                  });
                },300)
              }
            },1000);
            // login(this.username, this.password).then(res => {
            //   console.log(res);
            //   if (res === 1) {
            //     alert("登录成功");
            //     this.$router.push('/home');
            //   }else {
            //     alert("登录失败");
            //   }
            // }).catch(err => {
            //   alert("登录失败");
            //   console.log(err);
            // })
          }
        })
      },
      ToRegister() {
        this.$router.push('/register');
      },
      canvas() {
        let _this = this;
        // 定义窗口大小变更通知事件
        window.onresize = function () {
          // 窗口高度
          _this.screenHeight = document.documentElement.clientHeight;
        };
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        let w = canvas.width = window.innerWidth;
        let h = canvas.height = window.innerHeight;
        let hue = 217;
        let stars = [];
        let count = 0;
        let maxStars = 1300; // 星星数量

        let canvas2 = document.createElement('canvas');
        let ctx2 = canvas2.getContext('2d');
        canvas2.width = 100;
        canvas2.height = 100;
        let half = canvas2.width / 2;
        let gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
        gradient2.addColorStop(0.025, '#CCC');
        gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
        gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
        gradient2.addColorStop(1, 'transparent');

        ctx2.fillStyle = gradient2;
        ctx2.beginPath();
        ctx2.arc(half, half, half, 0, Math.PI * 2);
        ctx2.fill();

        // End cache

        function random(min, max) {
          if (arguments.length < 2) {
            max = min;
            min = 0;
          }

          if (min > max) {
            let hold = max;
            max = min;
            min = hold;
          }

          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function maxOrbit(x, y) {
          let max = Math.max(x, y);
          let diameter = Math.round(Math.sqrt(max * max + max * max));
          return diameter / 2;
          // 星星移动范围，值越大范围越小，
        }

        let Star = function () {
          this.orbitRadius = random(maxOrbit(w, h));
          this.radius = random(60, this.orbitRadius) / 8;
          // 星星大小
          this.orbitX = w / 2;
          this.orbitY = h / 2;
          this.timePassed = random(0, maxStars);
          this.speed = random(this.orbitRadius) / 50000;
          // 星星移动速度
          this.alpha = random(2, 10) / 10;

          count++;
          stars[count] = this;
        };

        Star.prototype.draw = function () {
          let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX;
          let y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY;
          let twinkle = random(10);

          if (twinkle === 1 && this.alpha > 0) {
            this.alpha -= 0.05;
          } else if (twinkle === 2 && this.alpha < 1) {
            this.alpha += 0.05;
          }

          ctx.globalAlpha = this.alpha;
          ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
          this.timePassed += this.speed;
        };

        for (let i = 0; i < maxStars; i++) {
          /* eslint-disable no-new */
          new Star();
        }

        function animation() {
          ctx.globalCompositeOperation = 'source-over';
          ctx.globalAlpha = 0.5; // 尾巴
          ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
          ctx.fillRect(0, 0, w, h);

          ctx.globalCompositeOperation = 'lighter';
          for (let i = 1, l = stars.length; i < l; i++) {
            stars[i].draw();
          }

          window.requestAnimationFrame(animation);
        }

        animation();
      }
    },
    mounted() {
      console.log("login--mounted");
      // this.canvas();
    },
  }
</script>

<style>
  .loginInput .el-input__inner {
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

  #login {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #242645;
    overflow: hidden;
  }
  #canvas {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  #CarRoute {
    position: absolute;
    top: 10%;
    left: 0;
    background-color: deeppink;
  }
  .info{
    position: absolute;
    top: 8%;
    left: 36%;
    width: 28%;
    height: 85%;
    /*padding-left: 4%;*/
    background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
  }
  #foot {
    position: absolute;
    bottom: 6%;
    left: 15%;
    color: #d3d7f7;
    font-size: 14px;
  }
  .el-form {
    position: relative;
    top: 20%;
    width: 100%;
    height: 70%;
  }
  .el-input {
    font-size: 20px;
  }
  #nameItem {
    position: relative;
    top: 30%;
    width: 62%;
    height: 60px;
    left: 15%;
    text-align: center;
  }
  #pwdItem {
    position: absolute;
    top: 45%;
    width: 62%;
    height: 60px;
    left: 15%;
    text-align: center;
  }
  #subItem {
    position: absolute;
    top: 65%;
    width: 80%;
    height: 60px;
    left: 10%;
  }
  #subItem .el-button {
    width: 30%;
    font-size: 16px;
    color: #409EFF;
    margin-left: 13%;
    border: 2px solid;
    background-color: rgba(0,0,0,0);
  }
  #confirm {
    position: absolute;
    top: 30%;
    left: 42%;
    width: 497px;
    height: 308px;
    /*padding-left: 4%;*/
    background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
  }
  #confirm p {
    position: absolute;
    top: 38%;
    left: 35%;
    font-size: 26px;
    color: white;
  }
  #confirm #rolling {
    position: absolute;
    top: 10%;
    left: 8%;
    width: 60px;
  }
  .slide-fade-enter-active {
    transition: all 2s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter{
    transform: translateX(-20px);
    opacity: 0;
  }
  .slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
  }
  #result {
    position: absolute;
    top: 8%;
    left: 36%;
    width: 28%;
    height: 85%;
    /*padding-left: 4%;*/
    background: linear-gradient(230deg, rgba(53, 57, 74, 0) 0%, rgb(0, 0, 0) 100%);
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
  }
  #result p {
    position: relative;
    top: 25%;
    left: 38%;
    font-size: 18px;
    margin-bottom: 30px;
    color: #dcdfe6;
  }
</style>
