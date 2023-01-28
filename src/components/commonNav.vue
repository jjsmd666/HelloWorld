<template>
  <div class="nav">
    <router-link
      tag="div"
      v-for="nav in dataList"
      :key="nav.name"
      :to="nav.path"
      active-class="activeItem"
      class="menu_item"
    >
      <div class="txt">{{ nav.name }}</div>
      <div class="txt1">{{ nav.name }}</div>
    </router-link>
  </div>
</template>

<script>
export default {
  created() {
    this.dataList = this.$router.options.routes.filter((item) => {
      return item.path != "/";
    });
  },
  data() {
    return {
      dataList: [],
    };
  },
};
</script>

<style lang="less" scoped>
.nav {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 621px;
  height: 59px;
  display: flex;
  justify-content: space-between;
  pointer-events: all;
  .menu_item {
    font-family: "汉仪菱心体简";
    width: 160px;
    height: 50px;
    font-size: 28px;
    text-align: center;
    line-height: 38px;
    background: url("../assets/nav.png") no-repeat center center;
    position: relative;
    .txt {
      width: 100%;
      text-align: center;
      background: linear-gradient(to bottom, #fff, #d5f7fd);
      -webkit-background-clip: text;
      color: transparent;
      position: absolute;
      z-index: 2;
    }
    .txt1 {
      width: 100%;
      position: absolute;
      z-index: 1;
      color: transparent;
      text-shadow: 0px 1px 15px rgba(0, 0, 0, 0.75);
    }
  }
  .activeItem {
    background: url("../assets/nav-active.png") no-repeat center
      center;
    .txt {
      background: linear-gradient(to bottom, #fff, #d8b14e);
      -webkit-background-clip: text;
      color: transparent;
    }
  }
}
</style>
