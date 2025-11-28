// src/router/index.ts
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import DefaultLayout from '../layouts/DefaultLayout.vue';

type AppRouteMeta = {
  /** 브라우저 탭 타이틀 */
  title: string;
  /** 레이아웃 타입 (확장용) */
  layout?: 'default';
};

declare module 'vue-router' {
  interface RouteMeta extends AppRouteMeta {}
}

/**
 * 라우트 정의
 * - 최상위에 DefaultLayout
 * - 그 안에 Home / Studio / Work / Contact를 children으로 배치
 */
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    meta: {
      layout: 'default',
    },
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('../pages/Home/HomePage.vue'),
        meta: {
          title: 'BrainTree · Backoffice & Internal Tools Studio',
        },
      },
      {
        path: 'studio',
        name: 'studio',
        component: () => import('../pages/Studio/StudioPage.vue'),
        meta: {
          title: 'Studio · BrainTree',
        },
      },
      {
        path: 'work',
        name: 'work',
        component: () => import('../pages/Work/WorkPage.vue'),
        meta: {
          title: 'Work · BrainTree',
        },
      },
      {
        path: 'contact',
        name: 'contact',
        component: () => import('../pages/Contact/ContactPage.vue'),
        meta: {
          title: 'Contact · BrainTree',
        },
      },
      // 404 fallback (필요하면 별도 NotFound 페이지로 교체 가능)
      {
        path: ':pathMatch(.*)*',
        name: 'not-found',
        component: () => import('../pages/Home/HomePage.vue'),
        meta: {
          title: 'BrainTree',
        },
      },
    ],
  },
];

/**
 * 라우터 인스턴스
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    }

    return { left: 0, top: 0, behavior: 'smooth' };
  },
});

/**
 * 전역 훅 – 페이지 타이틀 세팅
 */
router.beforeEach((to, _from, next) => {
  const baseTitle = 'BrainTree';
  if (to.meta?.title) {
    document.title = String(to.meta.title);
  } else {
    document.title = baseTitle;
  }
  next();
});

export default router;
