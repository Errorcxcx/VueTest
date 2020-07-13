<template>

  <div class="tab-bar-item">
    <div v-if="!isActive">
      <slot name="item-icon"/>
    </div>
    <div v-else>
      <slot name="item-icon-active"/>
    </div>
    <div :class="{active:isActive}">
      <slot name="item-text"/>
    </div>
  </div>


</template>

<script>
  export default {
    name: "TabBarItem",
    data() {
      return {
        isActive: false
      }
    }
  }
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    box-shadow: 0 -3px 1px rgba(100, 100, 100, .1);
    margin-top: 3px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    vertical-align: middle;
  }

  .active {
    color: red;
  }
</style>
