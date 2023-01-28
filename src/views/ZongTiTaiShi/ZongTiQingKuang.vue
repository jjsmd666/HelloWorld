<template>
  <div class="about">
  </div>
</template>
<script>

export default {
  data() {
    return {
      list: [],
    };
  },
  created() {
    // this.login();
  },
  mounted() {
  },

  methods: {

  },
};
</script>

<style lang="less" scoped>
.about {
   pointer-events: none;
 /deep/ .vjs-control-bar {
    display: none;
    pointer-events: none;
  }
}
</style>