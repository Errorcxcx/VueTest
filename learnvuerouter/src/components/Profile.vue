<template>
    <div>
      <h2>我的界面</h2>
      <p>{{$route.query.name}}</p>
      <p>{{$route.query.height}}</p>
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped>

</style>
