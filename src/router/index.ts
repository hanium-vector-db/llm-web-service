import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AnalyzeView from '@/views/AnalyzeView.vue';
import ScrapView from '@/views/ScrapView.vue';
import MyPageView from '@/views/MyPageView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/analyze',
    name: 'Analyze',
    component: AnalyzeView,
  },
  {
    path: '/scrap',
    name: 'Scrap',
    component: ScrapView,
  },
  {
    path: '/mypage',
    name: 'MyPage',
    component: MyPageView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
