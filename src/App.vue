<!-- src/App.vue -->
<template>
  <div class="app" :class="appRouteClass">
    <!-- 키보드 사용자용 본문 바로가기 -->
    <a href="#main-content" class="app__skip-link">
      Skip to main
    </a>

    <!-- 전역 배경 레이어 -->
    <div class="app__background" aria-hidden="true"></div>

    <!-- 전역 프레임 -->
    <div class="app__shell">
      <RouterView v-slot="{ Component }">
        <Transition name="app-fade" mode="out-in">
          <component
            :is="Component"
            id="main-content"
            class="app__view"
          />
        </Transition>
      </RouterView>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import { computed, onMounted, watch, nextTick } from 'vue';

const route = useRoute();

const BASE_TITLE = 'BrainTree · Enterprise Software Studio';

const pageTitle = computed(() => route.meta?.title as string | undefined);

const appRouteClass = computed(() => {
  const name = (route.name as string | undefined) || 'unknown';
  return `app--route-${name.toLowerCase()}`;
});

const updateDocumentTitle = () => {
  if (pageTitle.value) {
    document.title = `${pageTitle.value} · BrainTree`;
  } else {
    document.title = BASE_TITLE;
  }
};

const scrollToTop = () => {
  nextTick(() => {
    try {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    } catch {
      window.scrollTo(0, 0);
    }
  });
};

onMounted(() => {
  updateDocumentTitle();
});

watch(
  () => route.fullPath,
  () => {
    updateDocumentTitle();
    scrollToTop();
  }
);
</script>

<style scoped>
/* --------------------------------------------------------------------------
   1) GLOBAL APP FRAME
   -------------------------------------------------------------------------- */
.app {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;

  /* 완전 라이트 · 골드 계열 기본 잉크 */
  color: var(--cc-ink-default, #3e392f);

  font-family:
    var(--cc-font-family-sans),
    'Pretendard',
    'Inter',
    'Noto Sans KR',
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    sans-serif;

  /* 전역 배경은 투명 (실제 배경은 background-layer가 담당) */
  background: transparent;

  /* iOS safe-area 대응 */
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}

/* --------------------------------------------------------------------------
   2) GLOBAL BACKGROUND (Hero / WorkPage와 톤 통일)
   -------------------------------------------------------------------------- */
.app__background {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;

  /* Stripe / Linear 스타일의 라이트 소프트 백드롭 */
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.22), transparent 55%),
    radial-gradient(circle at 78% 100%, rgba(249, 199, 122, 0.18), transparent 60%),
    linear-gradient(180deg, #fffaf3, #f5e8d4);
}

/* --------------------------------------------------------------------------
   3) MAIN SHELL
   -------------------------------------------------------------------------- */
.app__shell {
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  z-index: 1;
}

/* 페이지 컨테이너 --------------------------------------------------- */
.app__view {
  min-height: 100vh;
  display: block;
  position: relative;
  z-index: 10;
}

/* --------------------------------------------------------------------------
   4) ACCESSIBILITY: SKIP LINK
   -------------------------------------------------------------------------- */
.app__skip-link {
  position: absolute;
  left: 1rem;
  top: 1rem;
  z-index: 2000;

  padding: 0.45rem 1rem;
  border-radius: 12px;

  font-size: 0.8rem;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  background: #d7b46a;
  color: #3f2f0a;
  border: 1px solid rgba(255, 253, 245, 0.9);

  box-shadow:
    0 6px 24px rgba(185, 135, 50, 0.28),
    0 0 0 1px rgba(255, 255, 255, 0.25) inset;

  transform: translateY(-140%);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.18s ease-out, transform 0.18s ease-out;
}

.app__skip-link:focus-visible {
  outline: none;
  transform: translateY(0);
  opacity: 1;
  pointer-events: auto;
}

/* --------------------------------------------------------------------------
   5) PAGE TRANSITION (완전 모던)
   -------------------------------------------------------------------------- */
.app-fade-enter-active,
.app-fade-leave-active {
  transition:
    opacity 0.28s ease-out,
    filter 0.28s ease-out,
    transform 0.28s ease-out;
}

.app-fade-enter-from {
  opacity: 0;
  filter: blur(2px);
  transform: translateY(8px);
}

.app-fade-enter-to {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}

.app-fade-leave-from {
  opacity: 1;
  filter: blur(0);
  transform: translateY(0);
}

.app-fade-leave-to {
  opacity: 0;
  filter: blur(1px);
  transform: translateY(-6px);
}

/* --------------------------------------------------------------------------
   6) RESPONSIVE
   -------------------------------------------------------------------------- */
@media (max-width: 768px) {
  .app__skip-link {
    left: 0.75rem;
    top: 0.75rem;
  }
}

/* --------------------------------------------------------------------------
   7) REDUCED MOTION
   -------------------------------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  .app-fade-enter-active,
  .app-fade-leave-active {
    transition: none !important;
  }

  .app-fade-enter-from,
  .app-fade-enter-to,
  .app-fade-leave-from,
  .app-fade-leave-to {
    opacity: 1 !important;
    transform: none !important;
    filter: none !important;
  }
}
</style>
