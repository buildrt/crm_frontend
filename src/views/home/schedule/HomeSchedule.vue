<template>
  <div id="schedule">
    <!--<transition name="fade">-->
      <!--<loading v-if="isLoading"></loading>-->
    <!--</transition>-->

    <div id="showdiv">
      <!--<el-calendar v-model="value" first-day-of-week="7">-->
        <!--<template-->
          <!--slot="dateCell"-->
          <!--slot-scope="{date, data}">-->
          <!--<p :class="data.isSelected ? 'is-selected':''">{{data.day.split('-').slice(2).join()}}</p>-->
        <!--</template>-->
      <!--</el-calendar>-->

    </div>
  </div>
</template>

<script>
  import Loading from '../../../components/loading/Loading'
  import {request} from "../../../network/axios";

  export default {
    name: "HomeSchedule",
    data() {
      return {
        value: new Date(),
        isLoading: true,
        transitionName: '',
      }
    },
    components: {
      Loading
    },
    mounted(){
      const me = this;
      me.loadPageData();
      console.log(this.isLoading);
    },
    methods: {
      loadPageData() {
        // axios 请求页面数据 .then 中将状态值修改  this.isLoading = false
        console.log(this.isLoading);
        setTimeout(()=>{
          this.isLoading = false
        }, 1000)
      }
    }
  }
</script>

<style scoped>
  #showdiv {
    position: absolute;
    left: 200px;
    top: 10%;
    margin-top: 20px;
    width: 84%;
    height: 83%;
    background-color: white;
    padding: 10px;
    overflow-y: hidden;
  }
  .el-calendar {
    position: relative;
    top: 10%;
    width: 50%;
    height: 90%;
    overflow-y: auto;
  }
  .is-selected {
    color: #1989FA;
  }
</style>
