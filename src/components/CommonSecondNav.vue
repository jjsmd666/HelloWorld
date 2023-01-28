<template>
  <!-- 二级路由导航组件 -->
  <div class="bottom-nav">
    <div class="menu_list">
      <div
        class="list-item"
        v-for="(item, index) in menuData"
        :key="index"
        :class="{ 'item-active': secondTopic == item.title }"
        @click="MenuChanege(item, index)"
      >
        <img :src="item.imgSrc" alt="" v-if="secondTopic != item.title" />
        <img :src="item.actImgSrc" alt="" v-else />
        <div
          class="item-title"
          :class="{ 'item-changeItem': secondTopic == item.title }"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menuData: {
      type: Array,
      default: () => {
        return [
          {
            imgSrc: require("../assets/images/hgjj_icon.png"),
            actImgSrc: require("../assets/images/hgjj_act_icon.png"),
            title: "短途态势",
            to: "/wgjt/dtts",
          },
          {
            imgSrc: require("../assets/images/cyyx_icon.png"),
            actImgSrc: require("../assets/images/cyyx_act_icon.png"),
            title: "枢纽态势",
            to: "/wgjt/snts",
          },
          {
            imgSrc: require("../assets/images/qyyx_icon.png"),
            actImgSrc: require("../assets/images/qyyx_act_icon.png"),
            title: "站点优化",
            to: "/wgjt/zdyh",
          },
        ];
      },
    },
  },
  created() {
    this.secondTopic = this.menuData[0].title;
    console.log(this.menuData)
  },
  data() {
    return {
      //导航默认选中
      currentIndex: 0,
      secondTopic: null,
    };
  },
  methods: {
    //底部导航切换方法
    MenuChanege(obj) {
      this.$router.push({ path: obj.to });
      this.secondTopic = obj.title;
    },
  },
  computed: {},
};
</script>
<style lang="less" scoped>
.item-active {
  background: url("../assets/images/active_item.png");
  width: 260px;
  height: 100px;
  background-size: 100% 100%;
}
.bottom-nav {
  pointer-events: all;
  width: 2160px;
  height: 139px;
  background: url("../assets/images/bottomNav.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  .menu_list {
    position: absolute;
    left: 50%;
    top: 35px;
    transform: translateX(-50%);
    width: 700px;
    display: flex;
    .list-item {
      text-align: center;
      width: 260px;
      height: 100px;
      img {
        width: 48px;
        height: 51px;
      }
      .item-title {
        font-family: "碳纤维正粗黑简体";
        font-size: 32px;
        background: linear-gradient(to bottom, #fff, #d5f7fd);
        -webkit-background-clip: text;
        color: transparent;
      }
      .item-changeItem {
        background: linear-gradient(to bottom, #fff, #ffd352);
        -webkit-background-clip: text;
        color: transparent;
      }
    }
  }
}
 .list-item + .list-item {
   margin-left: 25px;
 }
</style>
