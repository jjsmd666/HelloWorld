<template>
  <div>
    <router-view></router-view>
    <CommonSecondNav :menuData="menuData" class="nav"></CommonSecondNav>
  </div>
</template>

<script>

import CommonSecondNav from "../../components/CommonSecondNav.vue";
export default {
  data() {
    return {
      menuData: [
        {
          imgSrc: require("../../assets/images/hgjj_icon.png"),
          actImgSrc: require("../../assets/images/hgjj_act_icon.png"),
          title: "总体态势",
          to: "/ztts/ztqs",
        },
        {
          imgSrc: require("../../assets/images/rkfb_icon.png"),
          actImgSrc: require("../../assets/images/rkfb_act_icon.png"),
          title: "人口分布",
          to: "/ztts/rkfv",
        },
        {
          imgSrc: require("../../assets/images/cxxq.png"),
          actImgSrc: require("../../assets/images/cxxq_act_icon.png"),
          title: "出行需求",
          to: "/ztts/cxxq",
        },
        {
          imgSrc: require("../../assets/images/cyyx_icon.png"),
          actImgSrc: require("../../assets/images/cyyx_act_icon.png"),
          title: "城市结构",
          to: "/ztts/csjg",
        },
      ],
    }
  },
  components: {
    CommonSecondNav
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  .nav {
    bottom: 0;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
  }
</style>