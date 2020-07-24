<template>
    <div>
      <h2>{{$store.state.count}}</h2>
      <h2>{{$store.getters.old15stu}}</h2>
      <h2>{{$store.getters.old15stuLength}}</h2>
      <h2>{{$store.getters.oldAgeStu(16)}}</h2>


    </div>
</template>

<script>
    export default {
        name: "HellowVuex"
    }
</script>

<style scoped>

</style>
