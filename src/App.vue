<template>
  <div id="app">
    <div
      class="earthMap"
      :style="{
        transform: 'translate(-50%,-50%) scale(' + scale + ')',
      }"
    >
      <earthMap></earthMap>
    </div>
    <div
      class="bg"
      :style="{ transform: 'translate(-50%,-50%) scale(' + scale + ')' }"
    >
      <div class="screen">
        <header v-if="isEnlarge" ref="header">
          <div class="title">陕西省一网通管系统</div>
          <commonNav></commonNav>
        </header>
        <enlargeNarrow></enlargeNarrow>
        <main>
          <router-view />
        </main>
      </div>
    </div>
  </div>
</template>
<script>
import commonNav from "./components/commonNav.vue";
import earthMap from "./views/earthMap.vue";
import enlargeNarrow from "./components/common/enlargeNarrow.vue";
import { mapState } from "vuex";
export default {
  components: {
    commonNav,
    earthMap,
    enlargeNarrow,
  },
  data() {
    return {
      scale: 1,
    };
  },
  computed: {
    ...mapState(["isEnlarge"]),
  },
  watch: {
    // "$store.state.isEnlarge"(newVal) {
    //   if (newVal) {
    //     this.$refs.header.className = "headerss";
    //   }
    // },
  },
  mounted() {
    this.setScreen();
    window.addEventListener("resize", this.setScreen.bind(this));
  },
  methods: {
    //设置分辨率缩放系数
    setScreen() {
      // 可视区域的尺寸
      let visibleWidth = window.innerWidth;
      let visibleHeight = window.innerHeight;
      // 手动配置的面板尺寸
      let manualWidth = 3840;
      let manualHeight = 1080;
      // 计算横向和纵向的缩放系数
      var widthPercentage = (1.0 * visibleWidth) / manualWidth;
      var heightPercentage = (1.0 * visibleHeight) / manualHeight;
      // 取得最小缩放系数
      this.scale = Math.min(widthPercentage, heightPercentage);
    },
  },
};
</script>

<style lang="less">
* {
  user-select: none;
}
html,
body,
#app {
  user-select: none;
  cursor: pointer;
  width: 2000px;
  height: 1080px;
  overflow: hidden;
  pointer-events: all;
  background-color: #000;
  .earthMap {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 2000px;
    height: 1080px;
    pointer-events: none;
    // background-color: red;
  }
  .bg {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 3840px;
    height: 1080px;
    pointer-events: none;
    // background: url("./assets/bg.png") center center no-repeat;
    .screen {
      position: absolute;
      width: 3840px;
      height: 1080px;
      pointer-events: all;
      background-color: red;
      background: url("./assets/mask.png") center center no-repeat;
      > div {
        pointer-events: all;
      }
      .title {
        text-align: center;
        line-height: 100px;
        font-family: "汉仪菱心体简";
        font-size: 34px;
        color: #def3f8;
        height: 100px;
        background: url("./assets/title.png") center center no-repeat;
        letter-spacing: 5px;
        z-index: 999;
      }
    }
  }
}
</style>
