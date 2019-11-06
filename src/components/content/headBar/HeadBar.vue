<template>
  <div id="headBar">
    <table id="headTable" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td width="50px">
          <i class="el-icon-s-fold"></i>
        </td>
        <td width="50px">
          <i class="el-icon-full-screen" id="fullScreen" @click="FullOrExit"></i>
        </td>
        <td width="50px">
          <i class="el-icon-search" id="search"></i>
        </td>
        <td></td>
        <td width="50px">
          <i class="el-icon-message" id="message"></i>
        </td>
        <td width="50px">
          <i class="el-icon-message-solid"></i>
        </td>
        <td width="50px">
          <el-avatar :size="35" icon="el-icon-user-solid"></el-avatar>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "HeadBar",
    data() {
      return {
        fullOrExit: true,
      }
    },
    methods: {
      FullScreen() {
        let el = document.documentElement;
        let rfs = el.requestFullScreen || el.webkitRequestFullScreen ||
          el.mozRequestFullScreen || el.msRequestFullScreen;
        if(typeof rfs !== "undefined" && rfs) {
          rfs.call(el);
        } else if(typeof window.ActiveXObject !== "undefined") {
          //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏
          let wscript = new ActiveXObject("WScript.Shell");
          if(wscript != null) {
            wscript.SendKeys("{F11}");
          }
        }
      },
      ExitFullScreen() {
        let el = document;
        let cfs = el.cancelFullScreen || el.webkitCancelFullScreen ||
          el.mozCancelFullScreen || el.exitFullScreen;
        if(typeof cfs !== "undefined" && cfs) {
          cfs.call(el);
        } else if(typeof window.ActiveXObject !== "undefined") {
          //for IE，这里和fullScreen相同，模拟按下F11键退出全屏
          let wscript = new ActiveXObject("WScript.Shell");
          if(wscript != null) {
            wscript.SendKeys("{F11}");
          }
        }
      },
      FullOrExit() {
        if (this.fullOrExit === true) {
          this.FullScreen();
        } else {
          this.ExitFullScreen();
        }
        this.fullOrExit = !this.fullOrExit;
      }
    }
  }
</script>

<style scoped>
  #headBar {
    position: absolute;
    top: 0;
    width: 99.9%;
    height: 60px;
    background-color: #F1F3F6;
    left: 0;
  }
  #headTable {
    position: absolute;
    top: 0;
    left: 17.5%;
    width: 81%;
  }
  #headTable tr {
    height: 60px;
  }
  #headTable td {
    text-align: center;
    font-size: 18px;
  }
  #headTable td i[id='fullScreen'],[id='search'],[id='message'] {
    font-weight: bold;
  }
</style>
