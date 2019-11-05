<template>
  <div id="headBar">
    <table id="headTable" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td width="50px">
          <i class="el-icon-s-fold"></i>
        </td>
        <td width="50px">
          <i class="el-icon-full-screen" id="fullScreen"></i>
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
    name: "HeadBar"
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
