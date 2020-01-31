<template>
  <el-col v-if="$store.state.loginJudge">
    <div id="avatar" @click="ProfileClick">
      <el-avatar :size="35" icon="el-icon-user-solid"></el-avatar>
    </div>
    <hr id="titleLine">
    <table id="mainInfo" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td id="home" @click="HomeClick">
          <el-tooltip class="item" effect="dark" content="首页" placement="right-start">
            <i class="el-icon-s-home"></i>
          </el-tooltip>
        </td>
      </tr>
      <tr>
        <td @click="ClientClick">
          <el-tooltip class="item" effect="dark" content="客户管理" placement="right-start">
            <i class="el-icon-s-custom"></i>
          </el-tooltip>
        </td>
      </tr>
      <tr>
        <td @click="BusinessClick">
          <el-tooltip class="item" effect="dark" content="商业管理" placement="right-start">
            <i class="el-icon-s-data"></i>
          </el-tooltip>
        </td>
      </tr>
    </table>
  </el-col>
</template>

<script>
  export default {
    name: "mainBar",
    methods: {
      HomeClick() {
        this.$router.push('/home');
      },
      ClientClick() {
        this.$router.push('/client');
      },
      BusinessClick() {
        this.$router.push('/business');
      },
      ProfileClick() {
        this.$router.push('/profile');
      }
    }
  }
</script>

<style scoped>
  @import "../../../assets/css/titleLine/titleLine.css";
  .el-col {
    position: absolute;
    top: 0;
    width: 4.5%;
    left: 0;
    bottom: 0;
    height: 100%;
    text-align: center;
    background-image: linear-gradient(to top,#A208DE, #651EFF);
  }
  #avatar {
    position: relative;
    top: 2%;
  }
  #mainInfo {
    position: absolute;
    top: 30%;
    width: 100%;
  }
  #mainInfo tr {
    height: 60px;
  }
  #mainInfo td {
    width: 100%;
    font-size: 22px;
    color: white;
    text-align: center;
  }
</style>
