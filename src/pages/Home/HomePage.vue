<!-- src/pages/Home/HomePage.vue -->
<template>
  <main class="home-page" aria-label="CodeCanvus 메인 페이지">

    <!-- Hero -->
    <section id="hero" class="home-page__section home-page__section--hero">
      <HeroSection />
    </section>

    <!-- 자연스러운 그라데이션 전환 -->
    <div class="home-page__transition home-page__transition--hero" aria-hidden="true"></div>

    <!-- Highlights -->
    <section id="highlights" class="home-page__section">
      <HomeHighlightsSection />
    </section>

    <div class="home-page__transition home-page__transition--highlights" aria-hidden="true"></div>

    <!-- Culture -->
    <section id="culture" class="home-page__section">
      <HomeCultureSection />
    </section>

    <div class="home-page__transition home-page__transition--culture" aria-hidden="true"></div>

    <!-- CTA -->
    <section id="contact" class="home-page__section">
      <HomeCtaSection />
    </section>

  </main>
</template>

<script setup lang="ts">
import HeroSection from './sections/HeroSection.vue';
import HomeHighlightsSection from './sections/HomeHighlightsSection.vue';
import HomeCultureSection from './sections/HomeCultureSection.vue';
import HomeCtaSection from './sections/HomeCtaSection.vue';
</script>

<style scoped>
/* ================================================================
   1) 페이지 전체 연속 배경 (핵심)
================================================================ */
.home-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;

  background:
    radial-gradient(circle at 0% 0%, rgba(255, 244, 220, 0.85), transparent 70%),
    radial-gradient(circle at 100% 100%, rgba(250, 227, 183, 0.72), transparent 70%),
    linear-gradient(180deg, #fff9f0 0%, #f9f1df 35%, #f3ebdd 70%, #efe3d1 100%);
}

/*
  모든 섹션 배경 제거 → 자연스럽게 연결됨
*/
.home-page__section {
  position: relative;
  z-index: 10;
  background: transparent !important;
}

/* Hero만 자기 높이가 있으므로 마진 없음 */
.home-page__section--hero {
  z-index: 20;
}

/* ================================================================
   2) 섹션 전환부: 엔터프라이즈 톤앤매너용 "연속 그라데이션"
================================================================ */
.home-page__transition {
  position: relative;
  height: 140px; /* 얇은 선 대신 자연스러운 톤 전환 레이어 */
  pointer-events: none;
  z-index: 5;
  mix-blend-mode: soft-light;
  opacity: 0.55;
}

/* Hero → Highlights */
.home-page__transition--hero {
  margin-top: -60px;
  background:
    radial-gradient(
      circle at 50% 100%,
      rgba(250, 225, 180, 0.60),
      rgba(255, 247, 235, 0.18) 60%,
      transparent 100%
    );
}

/* Highlights → Culture */
.home-page__transition--highlights {
  background:
    linear-gradient(
      180deg,
      rgba(252, 242, 220, 0.4),
      rgba(245, 233, 205, 0.25),
      rgba(240, 224, 190, 0) 90%
    );
}

/* Culture → CTA */
.home-page__transition--culture {
  background:
    linear-gradient(
      180deg,
      rgba(240, 226, 200, 0.4),
      rgba(247, 236, 212, 0.25),
      rgba(255, 250, 240, 0.07),
      transparent
    );
}

/* ================================================================
   3) Mobile 대응
================================================================ */
@media (max-width: 768px) {
  .home-page {
    background:
      radial-gradient(circle at 0% 0%, rgba(255, 246, 230, 0.9), transparent 70%),
      linear-gradient(180deg, #fff9f0, #f7eddd 40%, #f0e4d4 100%);
  }

  .home-page__transition {
    height: 90px;
    opacity: 0.7;
  }
}
</style>
