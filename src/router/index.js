import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/ztts',
    name: '总体形势',
    redirect: '/ztts/ztqs',
    component: () => import('../views/ZongTiTaiShi/ZongTiTaiShi.vue'),
    children: [
      {
        path: '/ztts/ztqs',
        name: '总体态势',
        component: () => import('../views/ZongTiTaiShi/ZongTiQingKuang.vue'),
      },
      {
        path: '/ztts/rkfv',
        name: '人口分布',
        component: () => import('../views/ZongTiTaiShi/RenKouFenBu.vue'),
      },
      {
        path: '/ztts/cxxq',
        name: '出行需求',
        component: () => import('../views/ZongTiTaiShi/ChuXingXuQiu.vue'),
      },
      {
        path: '/ztts/csjg',
        name: '城市结构',
        component: () => import('../views/ZongTiTaiShi/ChengShiJieGou.vue'),
      },
    ]
  },
  {
    path: '/qyjt',
    name: '区域交通',
    component: () => import('../views/QuYuJiaoTong/QuYuJiaoTong.vue'),
  },
  {
    path: '/wgjt',
    name: '微观交通',
    redirect: '/wgjt/dtts',
    component: () => import('../views/WeiGuanJiaoTong/WeiGuanJiaoTong.vue'),
    children: [
      {
        path: '/wgjt/dtts',
        name: '短途态势',
        component: () => import('../views/WeiGuanJiaoTong/DuanTuTaiShi.vue'),
      },
      {
        path: '/wgjt/snts',
        name: '枢纽态势',
        component: () => import('../views/WeiGuanJiaoTong/ShuNiuTaiShi.vue'),
      },
      {
        path: '/wgjt/zdyh',
        name: '站点优化',
        component: () => import('../views/WeiGuanJiaoTong/ZhanDianYouHua.vue'),
      },
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
