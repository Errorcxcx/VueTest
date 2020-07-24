<template>

  <div class="tab-bar-item" @click="btnClick">
    <div v-if="!isActive">
      <slot name="item-icon"/>
    </div>
    <div v-else>
      <slot name="item-icon-active"/>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"/>
    </div>
  </div>


</template>

<script>
  export default {
    name: "TabBarItem",
    computed: {
      isActive() {
        console.log('改变了1');
        return this.$route.path.indexOf(this.link) != -1;
      },
      activeStyle() {
        console.log('改变了2');

        return this.isActive ? {color: this.activeColor} : {};
      }
    },
    props: {
      link: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      btnClick() {
        if(this.$route.path!=this.link){
          console.log(this.$route.path);
          this.$router.replace(this.link);
        }
      }
    },
    activated() {
      this.isActive = false;
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
