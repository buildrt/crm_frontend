<template>
  <div class="tab-bar-item" :style="activeStyle" @click="itemClick">
    <div><slot name="item-icon"></slot></div>
    <div style="color: white" id="textDiv"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "HomeTabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        // 点击时颜色
        default: 'rgba(0,0,0,.5)'
      }
    },
    data() {
      return {
        //isActive: true,
      }
    },
    computed: {
      isActive() {
        // 获取当前路由的path和传过来的path对比，如果 =-1返回true
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {backgroundColor: this.activeColor} : {}
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    position: relative;
    text-align: center;
    height: 100%;
    width: 100%;
    font-size: 16px;
    padding-bottom: 10px;
    margin-right: 20px;
  }

  .tab-bar-item img {
    margin-top: 15px;
    width: 30px;
    margin-right: 5px;
  }

  div {
    display: inline;
    float: left;
   }
  #textDiv {
    position: absolute;
    top: 40%;
    text-align: center;
  }
</style>
