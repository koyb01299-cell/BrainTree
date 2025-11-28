<!-- src/components/layout/AppHeader.vue -->
<template>
  <div
    class="app-header"
    :class="{
      'app-header--scrolled': isScrolled,
      'app-header--menu-open': isMenuOpen,
    }"
  >
    <div class="cc-container app-header__inner">
      <!-- 로고 영역 ------------------------------------------------------- -->
      <RouterLink
        to="/"
        class="app-header__brand"
        aria-label="BrainTree 홈으로 이동"
      >
        <div class="app-header__logo-mark" aria-hidden="true">
          <span class="app-header__logo-orbit"></span>
          <span class="app-header__logo-glyph">
            <span class="app-header__logo-branch app-header__logo-branch--left" />
            <span class="app-header__logo-branch app-header__logo-branch--center" />
            <span class="app-header__logo-branch app-header__logo-branch--right" />
            <span class="app-header__logo-node app-header__logo-node--top" />
            <span class="app-header__logo-node app-header__logo-node--left" />
            <span class="app-header__logo-node app-header__logo-node--right" />
          </span>
        </div>

        <div class="app-header__brand-text">
          <span class="app-header__brand-name">BrainTree</span>
          <span class="app-header__brand-tagline">
            백오피스 · 내부 업무 도구 스튜디오
          </span>
        </div>
      </RouterLink>

      <!-- 데스크톱 내비게이션 -------------------------------------------- -->
      <nav
        class="app-header__nav"
        aria-label="주요 페이지 내비게이션"
      >
        <button
          v-for="item in navItems"
          :key="item.to"
          type="button"
          class="app-header__nav-item"
          :class="{ 'app-header__nav-item--active': isActive(item.to) }"
          @click="handleNavClick(item.to)"
        >
          <span class="app-header__nav-label">{{ item.label }}</span>
        </button>
      </nav>

      <!-- 우측 액션 (데스크톱) : 프로젝트 문의만 남김 --------------------- -->
      <div class="app-header__actions">
        <button
          type="button"
          class="app-header__primary-btn"
          @click="handleNavClick('/contact')"
        >
          프로젝트 문의
        </button>
      </div>

      <!-- 모바일 메뉴 토글 ----------------------------------------------- -->
      <button
        type="button"
        class="app-header__menu-toggle"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-controls="mobile-nav"
        aria-label="모바일 내비게이션 열기"
        @click="toggleMenu"
      >
        <span class="app-header__menu-icon">
          <span></span>
          <span></span>
        </span>
      </button>
    </div>

    <!-- 모바일 드롭다운 --------------------------------------------------- -->
    <div
      id="mobile-nav"
      class="app-header__mobile"
      :class="{ 'app-header__mobile--open': isMenuOpen }"
    >
      <div class="app-header__mobile-inner cc-container">
        <nav
          class="app-header__mobile-nav"
          aria-label="모바일 주요 페이지 내비게이션"
        >
          <button
            v-for="item in navItems"
            :key="item.to"
            type="button"
            class="app-header__mobile-item"
            :class="{ 'app-header__mobile-item--active': isActive(item.to) }"
            @click="handleMobileItemClick(item.to)"
          >
            <span class="app-header__mobile-label">{{ item.label }}</span>
            <span class="app-header__mobile-desc">{{ item.desc }}</span>
          </button>
        </nav>

        <div class="app-header__mobile-actions">
          <button
            type="button"
            class="app-header__mobile-primary"
            @click="handleMobileItemClick('/contact')"
          >
            프로젝트 문의
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';

interface NavItem {
  label: string;
  to: string;
  desc: string;
}

const router = useRouter();
const route = useRoute();

/**
 * 상단 내비게이션
 * - 홈 / 회사 소개 / 프로젝트
 * - 프로젝트는 /work 탭으로만 진입 (중복 제거)
 * - 프로젝트 문의는 /contact CTA 버튼으로만 진입
 */
const navItems = computed<NavItem[]>(() => [
  {
    label: '홈',
    to: '/',
    desc: '메인 · BrainTree 개요',
  },
  {
    label: '회사 소개',
    to: '/studio',
    desc: 'BrainTree · 팀 · 일하는 방식',
  },
  {
    label: '프로젝트',
    to: '/work',
    desc: '프로그램 · 솔루션 구축 사례',
  },
]);

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const isActive = (to: string): boolean => {
  if (to === '/') {
    return route.path === '/';
  }
  return route.path.startsWith(to);
};

const handleNavClick = async (to: string) => {
  if (route.path !== to) {
    await router.push(to);
  }
};

const handleMobileItemClick = async (to: string) => {
  isMenuOpen.value = false;
  if (route.path !== to) {
    await router.push(to);
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const updateScrolled = () => {
  isScrolled.value = window.scrollY > 12;
};

const handleResize = () => {
  const mdWidth = 900;
  if (window.innerWidth >= mdWidth && isMenuOpen.value) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  updateScrolled();
  window.addEventListener('scroll', updateScrolled, { passive: true });
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateScrolled);
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.app-header {
  /* Hero / CTA 와 동일 계열의 골드 팔레트 --------------------------- */
  --header-bg-upper: #fff9f0; /* HomeCtaSection 상단 배경 */
  --header-bg-lower: #f3ebe0; /* HomeCtaSection 하단 배경 */
  --header-bg-soft: #fdf7ec;

  --header-accent-main: #d1a037;          /* 골드 메인 */
  --header-accent-main-strong: #b7791f;   /* 진한 골드 */
  --header-accent-secondary: #f97316;     /* 오렌지 포인트 */

  --header-text-strong: #111827;
  --header-text-soft: #1f2933;
  --header-text-muted: #4b5563;

  --header-border-default: rgba(209, 160, 55, 0.7);
  --header-border-scrolled: rgba(180, 132, 36, 0.95);

  position: sticky;
  top: 0;
  z-index: var(--cc-z-header, 40);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.3), transparent 55%),
    radial-gradient(circle at 100% 0%, rgba(251, 191, 36, 0.2), transparent 55%),
    linear-gradient(180deg, var(--header-bg-upper), var(--header-bg-lower));
  border-bottom: 1px solid var(--header-border-default);
  box-shadow:
    0 0 0 1px rgba(209, 160, 55, 0.18),
    0 16px 40px rgba(148, 115, 30, 0.18);
  transition:
    border-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 160ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 160ms ease-out;
}

.app-header--scrolled {
  box-shadow:
    0 20px 50px rgba(148, 115, 30, 0.32),
    0 0 0 1px rgba(180, 132, 36, 0.3);
  border-bottom-color: var(--header-border-scrolled);
}

/* 내부 레이아웃 --------------------------------------------------- */
.app-header__inner {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  padding-block: 0.8rem;
  /* 로고가 너무 왼쪽에 붙지 않도록 여백 확보 */
  padding-inline: 1.8rem;
}

/* 브랜드 --------------------------------------------------------- */
.app-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
}

.app-header__logo-mark {
  position: relative;
  width: 2.3rem;
  height: 2.3rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  box-shadow:
    0 10px 30px rgba(148, 115, 30, 0.35),
    0 0 0 1px rgba(209, 160, 55, 0.7);
}

.app-header__logo-orbit {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border: 1px solid rgba(250, 204, 21, 0.7);
  background:
    radial-gradient(circle at 0% 0%, rgba(255, 251, 235, 0.98), transparent 55%),
    radial-gradient(circle at 120% 120%, rgba(248, 181, 70, 0.65), transparent 65%),
    radial-gradient(circle at 50% 100%, rgba(209, 160, 55, 0.32), transparent 72%);
}

/* BrainTree 로고 glyph (브랜치 + 노드) --------------------------- */
.app-header__logo-glyph {
  position: relative;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 0.9rem 0.9rem 0.75rem 0.75rem;
  background: radial-gradient(circle at 0% 0%, #fff9f0, #facc6b);
  box-shadow:
    0 6px 18px rgba(148, 115, 30, 0.35),
    0 0 0 1px rgba(209, 160, 55, 0.7);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* 가지(트리 + 네트워크) ------------------------------------------ */
.app-header__logo-branch {
  position: absolute;
  width: 1px;
  border-radius: 999px;
  background: rgba(120, 53, 15, 0.9);
}

.app-header__logo-branch--center {
  height: 0.9rem;
  bottom: 0.12rem;
}

.app-header__logo-branch--left {
  height: 0.65rem;
  bottom: 0.3rem;
  left: 0.3rem;
  transform: rotate(-24deg);
}

.app-header__logo-branch--right {
  height: 0.65rem;
  bottom: 0.3rem;
  right: 0.3rem;
  transform: rotate(24deg);
}

/* 노드(시냅스 느낌) ----------------------------------------------- */
.app-header__logo-node {
  position: absolute;
  width: 0.2rem;
  height: 0.2rem;
  border-radius: 999px;
  background: #fff9f0;
  box-shadow: 0 0 0 2px rgba(120, 53, 15, 0.7);
}

.app-header__logo-node--top {
  top: 0.13rem;
  left: 50%;
  transform: translateX(-50%);
}

.app-header__logo-node--left {
  top: 0.46rem;
  left: 0.27rem;
}

.app-header__logo-node--right {
  top: 0.46rem;
  right: 0.27rem;
}

.app-header__brand-text {
  display: flex;
  flex-direction: column;
}

.app-header__brand-name {
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--header-text-strong);
}

.app-header__brand-tagline {
  font-size: 0.74rem;
  color: var(--header-text-muted);
}

/* 데스크톱 내비 --------------------------------------------------- */
.app-header__nav {
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.app-header__nav-item {
  position: relative;
  border-radius: 999px;
  padding: 0.42rem 0.98rem;
  border: 1px solid transparent;
  background: transparent;
  color: var(--header-text-muted);
  font-size: 0.79rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  transition:
    color 160ms cubic-bezier(0.16, 1, 0.3, 1),
    background-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 160ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 160ms cubic-bezier(0.16, 1, 0.3, 1);
}

.app-header__nav-item::after {
  content: '';
  position: absolute;
  left: 18%;
  right: 18%;
  bottom: 0.16rem;
  height: 1px;
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(209, 160, 55, 0.9),
    transparent
  );
  opacity: 0;
  transform: scaleX(0.5);
  transform-origin: center;
  transition:
    opacity 160ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 160ms cubic-bezier(0.16, 1, 0.3, 1);
}

.app-header__nav-item:hover {
  color: var(--header-text-soft);
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.18), transparent 60%),
    rgba(255, 251, 235, 0.96);
  border-color: rgba(209, 160, 55, 0.85);
  box-shadow: 0 10px 24px rgba(148, 115, 30, 0.22);
  transform: translateY(-0.5px);
}

.app-header__nav-item:hover::after {
  opacity: 1;
  transform: scaleX(1);
}

.app-header__nav-item--active {
  color: var(--header-text-soft);
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.32), transparent 60%),
    rgba(255, 251, 235, 0.98);
  border-color: rgba(209, 160, 55, 0.95);
  box-shadow:
    0 0 0 1px rgba(209, 160, 55, 0.5),
    0 14px 32px rgba(148, 115, 30, 0.25);
}

.app-header__nav-item--active::after {
  opacity: 1;
  transform: scaleX(1);
}

.app-header__nav-label {
  white-space: nowrap;
}

/* 데스크톱 우측 액션 --------------------------------------------- */
.app-header__actions {
  margin-left: 1.25rem;
  display: flex;
  align-items: center;
}

/* 프라이머리 버튼: Hero / CTA와 같은 골드 계열 ------------------- */
.app-header__primary-btn {
  border-radius: 999px;
  padding: 0.5rem 1.3rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: #111827;
  background: linear-gradient(135deg, #facc6b, #d1a037);
  border: 1px solid rgba(180, 132, 36, 0.95);
  box-shadow:
    0 16px 34px rgba(209, 160, 55, 0.45),
    0 0 0 1px rgba(148, 115, 30, 0.65);
  transition:
    transform 160ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 160ms cubic-bezier(0.16, 1, 0.3, 1),
    filter 160ms cubic-bezier(0.16, 1, 0.3, 1);
}

.app-header__primary-btn:hover {
  transform: translateY(-1px);
  box-shadow:
    0 22px 46px rgba(209, 160, 55, 0.6),
    0 0 0 1px rgba(148, 115, 30, 0.9);
  filter: brightness(1.04);
}

/* 모바일 토글 ----------------------------------------------------- */
.app-header__menu-toggle {
  margin-left: auto;
  display: none;
  border-radius: 999px;
  padding: 0.4rem 0.65rem;
  border: 1px solid rgba(209, 160, 55, 0.8);
  background: rgba(255, 251, 235, 0.95);
}

.app-header__menu-icon {
  position: relative;
  width: 1.15rem;
  height: 1.15rem;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.24rem;
}

.app-header__menu-icon span {
  display: block;
  height: 1px;
  border-radius: 999px;
  background-color: var(--header-text-soft);
  transition:
    transform 160ms cubic-bezier(0.16, 1, 0.3, 1),
    opacity 160ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* 모바일 열렸을 때 햄버거 → X 모양 -------------------------------- */
.app-header--menu-open .app-header__menu-icon span:first-child {
  transform: translateY(2px) rotate(45deg);
}

.app-header--menu-open .app-header__menu-icon span:last-child {
  transform: translateY(-2px) rotate(-45deg);
}

/* 모바일 패널 ----------------------------------------------------- */
.app-header__mobile {
  max-height: 0;
  overflow: hidden;
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.32), transparent 55%),
    linear-gradient(180deg, #fff9f0, #f3ebe0);
  border-bottom: 1px solid rgba(209, 160, 55, 0.85);
  transition:
    max-height 190ms cubic-bezier(0.16, 1, 0.3, 1),
    opacity 160ms cubic-bezier(0.16, 1, 0.3, 1);
  opacity: 0;
}

.app-header__mobile--open {
  max-height: 480px;
  opacity: 1;
}

.app-header__mobile-inner {
  padding-block: 0.75rem 1rem;
}

.app-header__mobile-nav {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-bottom: 0.75rem;
}

.app-header__mobile-item {
  width: 100%;
  text-align: left;
  border-radius: 0.95rem;
  padding: 0.64rem 0.98rem;
  border: 1px solid rgba(209, 160, 55, 0.55);
  background: rgba(255, 251, 235, 0.98);
  color: var(--header-text-soft);
  transition:
    background-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 160ms cubic-bezier(0.16, 1, 0.3, 1);
}

.app-header__mobile-item--active {
  border-color: rgba(180, 132, 36, 0.95);
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.38), transparent 60%),
    rgba(255, 251, 235, 1);
  box-shadow: 0 12px 28px rgba(148, 115, 30, 0.25);
}

.app-header__mobile-label {
  display: block;
  font-size: 0.86rem;
  font-weight: 600;
}

.app-header__mobile-desc {
  display: block;
  margin-top: 0.12rem;
  font-size: 0.78rem;
  color: var(--header-text-muted);
}

.app-header__mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  margin-top: 0.35rem;
}

/* 모바일: 프라이머리 버튼 ---------------------------------------- */
.app-header__mobile-primary {
  width: 100%;
  border-radius: 999px;
  padding: 0.54rem 1.05rem;
  font-size: 0.82rem;
  border: 1px solid rgba(180, 132, 36, 0.95);
  background: linear-gradient(135deg, #facc6b, #d1a037);
  color: #111827;
  font-weight: 600;
}

/* 반응형 ---------------------------------------------------------- */
@media (max-width: 900px) {
  .app-header__nav,
  .app-header__actions {
    display: none;
  }

  .app-header__menu-toggle {
    display: inline-flex;
  }

  .app-header__inner {
    padding-block: 0.7rem;
    padding-inline: 1.4rem;
  }
}

@media (max-width: 640px) {
  .app-header__brand-name {
    font-size: 0.92rem;
  }

  .app-header__brand-tagline {
    display: none;
  }
}

/* 모션 최소화 ----------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  .app-header,
  .app-header__mobile,
  .app-header__menu-icon span {
    transition: none;
  }
}
</style>
