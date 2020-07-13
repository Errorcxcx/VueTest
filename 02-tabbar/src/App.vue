<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img src="./assets/img/tabbar/home.png" slot="item-icon">
        <img src="./assets/img/tabbar/home_c.png" slot="item-icon-active">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/tabbar/find.png" slot="item-icon">
        <img src="./assets/img/tabbar/find_c.png" slot="item-icon-active">

        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/tabbar/view.png" slot="item-icon">
        <img src="./assets/img/tabbar/view_c.png" slot="item-icon-active">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/tabbar/mine.png" slot="item-icon">
        <img src="./assets/img/tabbar/mine_c.png" slot="item-icon-active">

        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "./components/tabbar/TabBar";
  import TabBarItem from "./components/tabbar/TabBarItem";

  export default {
    name: 'App',
    components: {TabBarItem, TabBar},
    TabBar,
    TabBarItem
  }
</script>

<style>
  @import "./assets/css/base.css";

</style>
