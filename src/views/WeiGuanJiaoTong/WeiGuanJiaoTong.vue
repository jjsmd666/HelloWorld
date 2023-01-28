<template>
  <div>
    <CommonSecondNav class="nav"></CommonSecondNav>
    <router-view></router-view>
  </div>
</template>

<script>
import CommonSecondNav from "../../components/CommonSecondNav.vue";
export default {
  components: {
    CommonSecondNav,
  },
};
</script>

<style lang="less" scoped>
  .nav {
    z-index: 999;
    position:fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: all;
    
  }
</style>
