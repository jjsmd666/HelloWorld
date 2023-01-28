<template>
  <div class="enlarge" @click="enlargeClick">
    <img src="" alt="" />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "enlargeNarrow",
  data() {
    return {
      isShow: false,
    };
  },
  computed: {
    ...mapMutations(["setIsEnlarge"]),
  },
  methods: {
    // 放大按钮
    enlargeClick() {
      if (this.$store.state.isEnlarge) {
        document.documentElement.webkitRequestFullscreen();
        this.$store.commit("setIsEnlarge", !this.$store.state.isEnlarge);
      } else {
        document.webkitExitFullscreen();
        this.$store.commit("setIsEnlarge", !this.$store.state.isEnlarge);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.enlarge {
  width: 50px;
  height: 50px;
  background-color: red;
  position: absolute;
  right: 50px;
}
</style>