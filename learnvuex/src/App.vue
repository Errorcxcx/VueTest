<template>
  <div id="app">
    <h2>{{message}}</h2>
    <h2>{{$store.state.count}}</h2>
    <button @click="jias">+</button>
    <button @click="jians">-</button>
    <h2>平方{{$store.getters.pingfang}}</h2>
    <h2>{{old20Stu}}</h2>
    <hellow-vuex></hellow-vuex>
  </div>
</template>

<script>
  import HellowVuex from "./components/HellowVuex";

  export default {
    name: 'App',
    data() {
      return {
        message: '我是APP组件',
        count: 1
      }
    },
    computed: {
      old20Stu() {
        return this.$store.getters.old15stu
      }
    },
    components: {
      HellowVuex
    },
    methods: {
      jias() {
        this.$store.commit('jia')
        console.log(this);
        console.log(this.$store);

      },
      jians() {
        this.$store.commit('jian')
      }
    }
  }
</script>

<style>
</style>
