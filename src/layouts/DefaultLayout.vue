<!-- src/layouts/DefaultLayout.vue -->
<template>
  <div class="default-layout">
    <!-- 스킵 링크 (접근성) ---------------------------------------------- -->
    <a href="#main-content" class="default-layout__skip-link">
      본문 바로가기
    </a>

    <!-- 전체 배경 레이어 ------------------------------------------------ -->
    <div class="default-layout__bg" aria-hidden="true"></div>

    <!-- 상단 GNB ------------------------------------------------------- -->
    <header class="default-layout__header">
      <AppHeader />
    </header>

    <!-- 페이지 로딩 인디케이터 (라우팅 중 상단 라인) -------------------- -->
    <div
      v-if="isNavigating"
      class="default-layout__progress"
      aria-hidden="true"
    >
      <div class="default-layout__progress-bar"></div>
    </div>

    <!-- 메인 콘텐츠 영역 ----------------------------------------------- -->
    <main
      id="main-content"
      class="default-layout__main"
      :aria-busy="isNavigating ? 'true' : 'false'"
    >
      <div class="default-layout__main-inner">
        <RouterView v-slot="{ Component, route }">
          <transition
            name="default-layout-page"
            mode="out-in"
            @before-enter="onBeforeEnter"
            @after-enter="onAfterEnter"
          >
            <component
              :is="Component"
              :key="route.fullPath"
              class="default-layout__page"
            />
          </transition>
        </RouterView>
      </div>
    </main>

    <!-- 푸터 ----------------------------------------------------------- -->
    <footer class="default-layout__footer">
      <AppFooter />
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';

import AppHeader from '@/components/layout/AppHeader.vue';
import AppFooter from '@/components/layout/AppFooter.vue';

const router = useRouter();
const isNavigating = ref(false);

let removeBeforeEach: (() => void) | undefined;
let removeAfterEach: (() => void) | undefined;

const startNavigation = () => {
  isNavigating.value = true;
};

const endNavigation = () => {
  // 살짝 딜레이를 둬서 깜빡임 방지
  window.setTimeout(() => {
    isNavigating.value = false;
  }, 180);
};

const safeScrollToTop = () => {
  if (typeof window === 'undefined') return;

  try {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  } catch {
    window.scrollTo(0, 0);
  }
};

// 페이지 진입 시, 추가로 하고 싶은 처리 여지를 남김
const onBeforeEnter = () => {
  // 필요 시 여기에 페이지 진입 전 로직 추가
};

const onAfterEnter = () => {
  // 라우팅 완료 후 스크롤 상단으로
  safeScrollToTop();
};

onMounted(() => {
  removeBeforeEach = router.beforeEach((to, from, next) => {
    // 첫 진입은 네비게이션 인디케이터를 띄우지 않음
    if (from.fullPath) {
      startNavigation();
    }
    next();
  });

  removeAfterEach = router.afterEach(() => {
    endNavigation();
  });
});

onBeforeUnmount(() => {
  removeBeforeEach?.();
  removeAfterEach?.();
});
</script>

<style scoped>
.default-layout {
  --layout-bg-upper: #fffaf3;
  --layout-bg-lower: #f5ede2;
  --layout-bg-soft: #fdf7ec;

  --layout-grid-line: rgba(209, 213, 219, 0.28);

  --layout-accent-main: #d1a037;
  --layout-accent-main-strong: #b7791f;

  --layout-text-strong: #111827;
  --layout-text-default: #1f2933;
  --layout-text-soft: #4b5563;
  --layout-text-muted: #6b7280;

  min-height: 100vh;
  position: relative;
  color: var(--layout-text-default);
  background-color: #f9f6ef;
}

/* 전체 배경 + 그리드 ------------------------------------------------ */
.default-layout__bg {
  position: fixed;
  inset: 0;
  z-index: -2;
  background:
    radial-gradient(circle at 0% 10%, rgba(252, 211, 77, 0.26), transparent 55%),
    radial-gradient(circle at 100% 90%, rgba(251, 191, 36, 0.2), transparent 55%),
    linear-gradient(180deg, var(--layout-bg-upper), var(--layout-bg-lower));
  pointer-events: none;
}

.default-layout__bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: linear-gradient(
      to right,
      var(--layout-grid-line) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, var(--layout-grid-line) 1px, transparent 1px);
  background-size: 80px 80px;
  opacity: 0.35;
  mix-blend-mode: soft-light;
}

.default-layout__bg::after {
  content: '';
  position: absolute;
  width: 620px;
  height: 620px;
  left: 50%;
  top: -18%;
  transform: translateX(-50%);
  border-radius: 999px;
  background: radial-gradient(circle at 30% 0%, #facc6b, #f97316);
  opacity: 0.3;
  filter: blur(42px);
  mix-blend-mode: multiply;
  animation: layoutGlow 24s ease-in-out infinite alternate;
}

/* 스킵 링크 -------------------------------------------------------- */
.default-layout__skip-link {
  position: absolute;
  z-index: 50;
  left: 50%;
  transform: translateX(-50%);
  top: -3rem;
  padding: 0.55rem 1.1rem;
  border-radius: 999px;
  background-color: #111827;
  color: #f9fafb;
  font-size: 0.82rem;
  text-decoration: none;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.35);
  transition:
    top 0.18s ease-out,
    opacity 0.18s ease-out;
  opacity: 0;
}

.default-layout__skip-link:focus-visible {
  top: 0.75rem;
  opacity: 1;
}

/* 헤더 ------------------------------------------------------------- */
.default-layout__header {
  position: relative;
  z-index: 10;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

/* 상단 프로그래스 바 ----------------------------------------------- */
.default-layout__progress {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 3px;
  z-index: 40;
  pointer-events: none;
}

.default-layout__progress-bar {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(250, 204, 21, 0.3),
    var(--layout-accent-main),
    var(--layout-accent-main-strong)
  );
  transform-origin: 0 50%;
  animation: layoutProgress 0.9s ease-in-out infinite;
}

/* 메인 ------------------------------------------------------------- */
.default-layout__main {
  position: relative;
  z-index: 1;
  min-height: calc(100vh - 200px);
  padding-bottom: 3rem;
}

.default-layout__main-inner {
  padding-top: 1.8rem;
}

/* 페이지 공통 래퍼 (각 페이지 루트에 적용) ------------------------ */
.default-layout__page {
  min-height: calc(100vh - 260px);
}

/* 푸터 ------------------------------------------------------------- */
.default-layout__footer {
  position: relative;
  z-index: 5;
  margin-top: auto;
  background: linear-gradient(
    180deg,
    rgba(17, 24, 39, 0) 0%,
    rgba(17, 24, 39, 0.06) 35%,
    rgba(17, 24, 39, 0.12) 100%
  );
}

/* 페이지 전환 애니메이션 ------------------------------------------- */
.default-layout-page-enter-active,
.default-layout-page-leave-active {
  transition:
    opacity 0.28s ease-out,
    transform 0.28s ease-out,
    filter 0.28s ease-out;
  transform-origin: 50% 20%;
}

.default-layout-page-enter-from {
  opacity: 0;
  transform: translateY(12px);
  filter: blur(4px);
}

.default-layout-page-enter-to {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.default-layout-page-leave-from {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0);
}

.default-layout-page-leave-to {
  opacity: 0;
  transform: translateY(-6px);
  filter: blur(3px);
}

/* 반응형 ----------------------------------------------------------- */
@media (max-width: 768px) {
  .default-layout__main-inner {
    padding-top: 1.4rem;
  }

  .default-layout__page {
    min-height: calc(100vh - 230px);
  }
}

/* 애니메이션 키프레임 --------------------------------------------- */
@keyframes layoutGlow {
  0% {
    transform: translate3d(-50%, 0, 0) scale(1);
  }
  100% {
    transform: translate3d(-46%, 24px, 0) scale(1.08);
  }
}

@keyframes layoutProgress {
  0% {
    transform: scaleX(0.15) translateX(-10%);
    opacity: 0.85;
  }
  50% {
    transform: scaleX(0.65) translateX(20%);
    opacity: 1;
  }
  100% {
    transform: scaleX(0.2) translateX(120%);
    opacity: 0.9;
  }
}

/* 모션 최소화 ------------------------------------------------------ */
@media (prefers-reduced-motion: reduce) {
  .default-layout__bg::after,
  .default-layout__progress-bar {
    animation: none !important;
  }

  .default-layout-page-enter-active,
  .default-layout-page-leave-active {
    transition: none !important;
  }

  .default-layout-page-enter-from,
  .default-layout-page-leave-to {
    transform: none !important;
    filter: none !important;
  }

  .default-layout__skip-link {
    transition: none !important;
  }
}
</style>
