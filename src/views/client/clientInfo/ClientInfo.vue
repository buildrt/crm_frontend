<template>
  <div id="clientInfo">
    <div id="title">
      <p>客户管理</p>
    </div>
    <div id="infoTable">
      <div id="headTable"></div>
      <div id="mainTable">
        <el-table
          :data="clientData.slice((currpage-1)*pagesize,currpage*pagesize)"
          style="width: 100%;"
          border
          stripe
          height="330">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            fixed
            sortable
            prop="cname"
            label="客户名称"
            width="250">
          </el-table-column>
          <el-table-column
            prop="rank"
            sortable
            label="客户级别"
            width="150">
          </el-table-column>
          <el-table-column
            prop="source"
            sortable
            label="客户来源"
            width="120">
          </el-table-column>
          <el-table-column
            prop="chargeMan"
            sortable
            label="负责人"
            width="90">
          </el-table-column>
          <el-table-column
            prop="updateTime"
            sortable
            label="更新时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="status"
            sortable
            label="成交状态"
            width="120">
          </el-table-column>
          <el-table-column
            prop="createTime"
            sortable
            label="创建时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="remark"
            sortable
            label="备注"
            width="220">
          </el-table-column>
          <el-table-column
            prop="nextTime"
            sortable
            label="下次联系时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机"
            width="120">
          </el-table-column>
        </el-table>
      </div>
      <div id="footTable">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currpage"
          :page-sizes="[2, 4, 6, 8]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="clientData.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import {request} from "../../../network/request";

  export default {
    name: "ClientInfo",
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pagesize=val;
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currpage=val;
      },
      getClientData() {
        request({
          url: '/tableInfo'
        }).then(res => {
          let clientData = res.data;
          let data = [];
          let len = clientData.length;
          // console.log(clientData);
          for (let i=0; i<len; i++ ){
            let obj = {};
            obj.cname = clientData[i].cname;
            obj.rank = clientData[i].rank;
            obj.source = clientData[i].source;
            obj.chargeMan = clientData[i].chargeMan;
            obj.updateTime = clientData[i].updateTime;
            obj.status = clientData[i].status;
            obj.createTime = clientData[i].createTime;
            obj.remark = clientData[i].remark;
            obj.nextTime = clientData[i].nextTime;
            obj.phone = clientData[i].phone;
            data[i] = obj;
          }
          this.clientData = data;
        }).catch(error => {
          console.log("数据获取失败");
        })
      }
    },
    created(){
      this.getClientData();
    },
    data() {
      return {
        clientData: [],
        pagesize: 8,  // 每页的数据数
        currpage: 1,  // 默认开始页面
      }
    }
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
    height: 70%;
    background-color: white;
    padding: 10px;
  }
  
  #mainTable {
    position: relative;
    top: 12%;
    text-align: center;
  }
  .el-table {
    font-size: 14px;
    text-align: center;
  }
  #footTable {
    position: absolute;
    top: 91%;
    right: 10%;
  }
</style>
