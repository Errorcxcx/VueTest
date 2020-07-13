<template>
  <div id="app">
    <!--    <router-link to="/home" tag="button" replace >首页</router-link>-->
    <!--    <router-link to="/about" tag="button" replace>关于</router-link>-->

    <!--    <button @click="homeClick" >首页</button>-->
    <!--    <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link v-bind:to="'/user/'+userId">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'lisi',height:1.88}}">关于</router-link>

    <keep-alive>
      <router-view/>
    </keep-alive>

  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      homeClick() {
        console.log(this.$route.path)
        if ('/home' != this.$route.path) {
          this.$router.push('home');
        }
      },
      aboutClick() {
        this.$router.push('about');

      }
    },
    data() {
      return {
        userId: 'lisi'
      };
    }
  }
</script>

<style>
  .active {
    color: red;
  }
</style>
