<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户相关信息，嘿嘿嘿嘿额黑</p>
    <p>我的名字叫{{userId}}</p>
  </div>
</template>

<script>
  export default {
    name: "User",
    computed:{
      userId(){
        return this.$route.params.userId
      }
    }
  }
</script>

<style scoped>

</style>
