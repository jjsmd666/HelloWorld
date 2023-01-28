<template>
  <div id="app">
    <div
      class="bg"
      :style="{ transform: 'translate(-50%,-50%) scale(' + scale + ')' }"
    >
      <div class="screen">
        <header>
          <div class="title">城市智能交通运营指挥中心</div>
            <commonNav></commonNav>
            <main>
              <router-view />
            </main>
        </header>
      </div>
    </div>
  </div>
</template>
<script>
import commonNav from './components/commonNav.vue'
export default {
  components: {
    commonNav
  },
  data() {
    return {
      scale: 1,
    };
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
      let manualWidth = 1920;
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
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  pointer-events: all;
  background-color: #000;
  .bg {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 1920px;
    height: 1080px;
    pointer-events: none;
    background: url("./assets/bg.png") center center no-repeat;
    .screen {
      position: absolute;
      width: 1920px;
      height: 1080px;
      pointer-events: all;
      background-color: red;
      background: url("./assets/mask.png") center center no-repeat;
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
