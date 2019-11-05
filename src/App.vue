<template>
  <div id="app">
    <head-bar></head-bar>
    <hr id="titleLine">
    <main-bar></main-bar>
    <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="isRouterAlive"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/index.css';
  import 'vue-event-calendar/dist/style.css'
  import MainBar from "./components/content/mainTabbar/mainBar";
  import HeadBar from "./components/content/headBar/HeadBar";

  export default {
    name: 'app',
    components: {
      HeadBar,
      MainBar,
    },
    data() {
      return {
        transitionName: '',
        isRouterAlive: true,
        isShow: true
      }
    },
    watch: {
      $route(to, from) {
        // 如果to索引大于from索引,判断为前进状态,反之则为后退状态,若下个页面的索引为0，则不加动画
        if(to.meta.index > from.meta.index){
          //设置动画名称
          this.transitionName = 'slide-left';
        }else if(to.meta.index === 0){
          this.transitionName=''
        } else {
          this.transitionName='slide-right'
        }
      }
    },
    // 自动刷新网页
    provide() {
      return {
        reload: this.reload
      }
    },
    methods: {
      reload() {
        this.isRouterAlive = false;
        this.$nextTick(function () {
          this.isRouterAlive = true;
        })
      }
    }
  }
</script>

<style>
  @import "assets/css/base.css";
  @import "assets/css/Animation/appStyle.css";
  @import "assets/css/titleLine/titleLine.css";
</style>
