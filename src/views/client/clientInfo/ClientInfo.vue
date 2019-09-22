<template>
  <div id="clientInfo">
    <div id="title">
      <p>客户管理</p>
    </div>
    <div id="infoTable">
      <div id="headTable"></div>
      <div id="mainTable">
        <table id="info" cellpadding="1" cellspacing="1" border="1px">
          <thead>
            <tr>
              <th>选择</th>
              <th>客户名称</th>
              <th>客户来源</th>
              <th>客户级别</th>
              <th>客户行业</th>
              <th>负责人</th>
              <th>成交状态</th>
              <th>网址</th>
              <th>更新时间</th>
              <th>创建时间</th>
              <th>备注</th>
              <th>下次联系时间</th>
              <th>电话</th>
              <th>创建人</th>
              <th>设置</th>
            </tr>
          </thead>
        </table>
      </div>
      <div id="footTable"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ClientInfo"
  }
</script>

<style scoped>
  #title {
    position: absolute;
    left: 200px;
    top: 10%;
    width: 84%;
    height: 15%;
    padding: 10px;
    margin-top: 20px;
  }
  #title p {
    position: relative;
    top: 30%;
    font-size: 22px;
  }
  #infoTable {
    position: absolute;
    left: 200px;
    top: 25%;
    margin-top: 20px;
    width: 84%;
    height: 68%;
    background-color: white;
    padding: 10px;
  }
  
  #mainTable {
    position: relative;
    top:30%;
    background-color: #000;
  }
</style>
