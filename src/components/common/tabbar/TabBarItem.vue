<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else ><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle" id="textDiv"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        // 点击时颜色
        default: '#bfbfbf'
      }
    },
    data() {
      return {
        //isActive: true
      }
    },
    computed: {
      isActive() {
        // /home -> item1(/home) = true
        // /home -> item2(/category) = false
        // /home -> item2(/shopcart) = false
        // /home -> item2(/profile) = false
        // 获取当前路由的path和传过来的path对比，如果 =-1返回true
        return this.$route.path.indexOf(this.path) !== -1
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {}
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
    width: 80px;
    text-align: center;
  }
</style>
