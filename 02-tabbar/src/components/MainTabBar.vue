<template>

  <tab-bar>
    <tab-bar-item link="/home" activeColor="blue">
      <img src="../assets/img/tabbar/home.png" slot="item-icon">
      <img src="../assets/img/tabbar/home_c.png" slot="item-icon-active">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item link="/category" activeColor="blue">
      <img src="../assets/img/tabbar/find.png" slot="item-icon">
      <img src="../assets/img/tabbar/find_c.png" slot="item-icon-active">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item link="/cart" activeColor="blue">
      <img src="../assets/img/tabbar/view.png" slot="item-icon">
      <img src="../assets/img/tabbar/view_c.png" slot="item-icon-active">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item link="/profile" activeColor="blue">
      <img src="../assets/img/tabbar/mine.png" slot="item-icon">
      <img src="../assets/img/tabbar/mine_c.png" slot="item-icon-active">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>

</template>

<script>
  import TabBar from "./tabbar/TabBar";
  import TabBarItem from "./tabbar/TabBarItem";

  export default {
    name: "MainTabBar",
    components: {TabBarItem, TabBar}

  }
</script>

<style scoped>

</style>
