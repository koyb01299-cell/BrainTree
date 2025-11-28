<!-- src/pages/Home/sections/HomeCultureSection.vue -->
<template>
  <section
    class="home-culture"
    aria-label="BrainTree 팀 문화와 일하는 방식"
  >
    <div class="home-culture__bg" aria-hidden="true"></div>

    <div class="cc-container home-culture__shell">
      <div class="home-culture__inner">
        <!-- 헤더 ------------------------------------------------------ -->
        <header class="home-culture__header">
          <p class="home-culture__eyebrow">
            HOW WE WORK · CULTURE
          </p>

          <h2 class="home-culture__title">
            기획과 개발 사이,
            <span class="home-culture__title-highlight">
              실사용 가능한 ‘중간 레이어’를 만드는 팀
            </span>
          </h2>

          <p class="home-culture__subtitle">
            BrainTree는 화면 한 장, API 한 개도
            <span>업무 흐름과 시스템 구조를 함께 보며</span> 설계합니다.
            단기 구현보다 <span>오랫동안 버티는 제품 구조와 코드 품질</span>을 더 중요하게 생각합니다.
          </p>
        </header>

        <!-- 코어 문화 카드 3개 --------------------------------------- -->
        <div
          class="home-culture__grid"
          aria-label="BrainTree의 핵심 일하는 방식 3가지"
        >
          <!-- 카드 1 ------------------------------------------------- -->
          <article class="home-culture__card">
            <div class="home-culture__card-pill">
              <span class="home-culture__card-dot"></span>
              <span class="home-culture__card-pill-label">
                01 · SYSTEM &amp; FLOW FIRST
              </span>
            </div>

            <h3 class="home-culture__card-title">
              업무 흐름과 시스템 구조부터 설계합니다
            </h3>

            <p class="home-culture__card-body">
              사용자의 하루 동선을 먼저 쪼개어
              <strong>“어떤 순서로 무엇을 처리하는지”</strong>를 정리합니다.
              이 흐름을 기준으로 화면, API, 데이터 모델을 맞물리게 설계해
              프로그램이 실제 업무 위에서 자연스럽게 동작하도록 만듭니다.
            </p>

            <ul class="home-culture__card-list">
              <li class="home-culture__card-list-item">
                업무 단계별 <strong>프로세스 맵</strong>과 주요 이벤트 정의
              </li>
              <li class="home-culture__card-list-item">
                화면·필드·버튼 단위까지
                <strong>실제 사용자와 함께 검증</strong>
              </li>
            </ul>
          </article>

          <!-- 카드 2 ------------------------------------------------- -->
          <article class="home-culture__card home-culture__card--accent">
            <div
              class="home-culture__card-pill home-culture__card-pill--accent"
            >
              <span
                class="home-culture__card-dot home-culture__card-dot--accent"
              ></span>
              <span class="home-culture__card-pill-label">
                02 · CLEAR CONTEXT
              </span>
            </div>

            <h3 class="home-culture__card-title">
              결정의 이유와 맥락을 함께 남깁니다
            </h3>

            <p class="home-culture__card-body">
              한 번 구축된 엔터프라이즈 시스템은 오래 사용됩니다.
              그래서 <strong>“왜 이렇게 설계했는지”</strong>를 함께 남겨,
              이후 합류한 팀도 같은 맥락에서 기능을 이해하고 확장할 수 있도록 합니다.
            </p>

            <ul class="home-culture__card-list">
              <li class="home-culture__card-list-item">
                Notion · 이슈 트래커에 <strong>기능별 결정 로그</strong> 정리
              </li>
              <li class="home-culture__card-list-item">
                DM 대신, <strong>이력이 남는 채널</strong> 중심의 커뮤니케이션
              </li>
            </ul>
          </article>

          <!-- 카드 3 ------------------------------------------------- -->
          <article class="home-culture__card">
            <div class="home-culture__card-pill">
              <span class="home-culture__card-dot"></span>
              <span class="home-culture__card-pill-label">
                03 · LONG-TERM MAINTAINABLE
              </span>
            </div>

            <h3 class="home-culture__card-title">
              이후 팀도 유지보수 가능한 코드와 구조
            </h3>

            <p class="home-culture__card-body">
              프로젝트가 종료된 뒤에도
              <strong>“보고 이해할 수 있는 시스템”</strong>을 목표로 합니다.
              도메인 기준으로 경계를 나누고, 반복 패턴과 공통 로직은 모듈화해
              다음 팀이 이어서 작업하기 쉬운 형태로 남깁니다.
            </p>

            <ul class="home-culture__card-list">
              <li class="home-culture__card-list-item">
                도메인 기준 폴더 구조와
                <strong>네이밍 컨벤션</strong> 정리
              </li>
              <li class="home-culture__card-list-item">
                README와 간단한 <strong>아키텍처 개요 문서</strong>를 코드와 함께 제공
              </li>
            </ul>
          </article>
        </div>

        <!-- 하단: 가벼운 키워드 라인 ------------------------------- -->
        <section
          class="home-culture__bottom"
          aria-label="BrainTree가 일할 때 집중하는 세 가지 축"
        >
          <p class="home-culture__bottom-label">
            WHAT WE CARE ABOUT
          </p>

          <div class="home-culture__bottom-metrics">
            <div class="home-culture__metric">
              <p class="home-culture__metric-key">FLOW</p>
              <p class="home-culture__metric-text">
                실제 사용자 관점의 <strong>업무 동선</strong>을 기준으로
                프로그램 구조를 설계합니다.
              </p>
            </div>
            <div class="home-culture__metric">
              <p class="home-culture__metric-key">CLARITY</p>
              <p class="home-culture__metric-text">
                의사결정과 변경 이유를
                <strong>남길 수 있는 형태</strong>로 기록합니다.
              </p>
            </div>
            <div class="home-culture__metric">
              <p class="home-culture__metric-key">CONTINUITY</p>
              <p class="home-culture__metric-text">
                이후 팀이 바로 이어갈 수 있는
                <strong>코드와 문서</strong>를 남깁니다.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 프리젠테이션 전용 – 별도 로직 없음
</script>

<style scoped>
.home-culture {
  --home-culture-bg-upper: #fff9f0;
  --home-culture-bg-lower: #f5ece0;
  --home-culture-bg-soft: #fdf7ec;

  --home-culture-accent-main: #d1a037;
  --home-culture-accent-main-soft: #f4c76c;
  --home-culture-accent-main-strong: #b7791f;
  --home-culture-accent-secondary: #f97316;

  --home-culture-border-soft: rgba(209, 160, 55, 0.28);
  --home-culture-border-strong: rgba(180, 132, 36, 0.7);

  --home-culture-text-strong: #111827;
  --home-culture-text-default: #1f2933;
  --home-culture-text-soft: #4b5563;
  --home-culture-text-muted: #6b7280;

  position: relative;
  min-height: 100vh; /* HeroSection 과 동일한 세로 높이 기준 */
  display: flex;
  overflow: hidden;
  isolation: isolate;
}

/* 배경 ------------------------------------------------------------ */
.home-culture__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 0% 10%, rgba(252, 211, 77, 0.26), transparent 55%),
    radial-gradient(circle at 100% 90%, rgba(251, 191, 36, 0.2), transparent 55%),
    linear-gradient(180deg, var(--home-culture-bg-upper), var(--home-culture-bg-lower));
  z-index: -2;
}

.home-culture__bg::before {
  content: '';
  position: absolute;
  width: 520px;
  height: 520px;
  left: 50%;
  top: -18%;
  transform: translateX(-50%);
  border-radius: 999px;
  background: radial-gradient(circle at 30% 0%, #facc6b, #f97316);
  opacity: 0.3;
  filter: blur(36px);
  mix-blend-mode: multiply;
  animation: cultureGlow 19s ease-in-out infinite alternate;
}

/* 셸: Hero 와 동일하게 중앙 정렬 ------------------------------- */
.home-culture__shell {
  position: relative;
  flex: 1;

  max-width: 1120px;
  margin-left: auto;
  margin-right: auto;

  padding: 4.4rem 1.6rem 4.4rem;

  display: flex;
  align-items: center;   /* 세로 중앙 */
  justify-content: center; /* 가로 중앙 */
  text-align: center;

  font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR',
    -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', sans-serif;
}

.home-culture__inner {
  width: 100%;
  max-width: 820px; /* Hero 와 비슷한 읽기 폭 */
  margin: 0 auto;
}

/* 헤더 ------------------------------------------------------------ */
.home-culture__header {
  margin: 0 auto 2.2rem;
}

.home-culture__eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.34rem 1.1rem;
  border-radius: 999px;
  border: 1px solid var(--home-culture-border-soft);
  background:
    radial-gradient(circle at top left, rgba(252, 211, 77, 0.32), transparent 60%),
    var(--home-culture-bg-soft);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--home-culture-text-muted);
  margin-bottom: 0.9rem;
  animation: culturePillIn 0.7s ease-out both;
  transform-origin: center center;
}

.home-culture__title {
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.045em;
  color: var(--home-culture-text-strong);
  line-height: 1.4;
  font-size: 2.05rem;
  animation: cultureTitleIn 0.8s ease-out 0.08s both;
}

.home-culture__title-highlight {
  display: inline-block;
  color: var(--home-culture-accent-main-strong);
}

@media (min-width: 768px) {
  .home-culture__title {
    font-size: 2.25rem;
  }
}

.home-culture__subtitle {
  margin: 1rem auto 0;
  font-size: 0.98rem;
  line-height: 1.9;
  color: var(--home-culture-text-soft);
  max-width: 36rem;
  animation: cultureFadeUpSoft 0.7s ease-out 0.22s both;
}

.home-culture__subtitle span {
  font-weight: 600;
  color: var(--home-culture-text-default);
}

/* 그리드: 카드 3개 ---------------------------------------------- */
.home-culture__grid {
  display: grid;
  gap: 1.4rem;
  margin: 0 auto 2.2rem;
}

@media (min-width: 880px) {
  .home-culture__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.6rem;
  }
}

.home-culture__card {
  position: relative;
  border-radius: 1.4rem;
  padding: 1.35rem 1.3rem 1.25rem;
  background:
    radial-gradient(circle at 0% 0%, rgba(248, 250, 252, 0.75), transparent 60%),
    rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(209, 213, 219, 0.85);
  box-shadow: 0 18px 50px rgba(15, 23, 42, 0.08);
  overflow: hidden;
  transform: translateY(8px);
  opacity: 0;
  animation: cultureCardIn 0.7s ease-out forwards;
  text-align: left; /* 카드 내용만 좌측 정렬 */
}

.home-culture__card:nth-child(1) {
  animation-delay: 0.25s;
}
.home-culture__card:nth-child(2) {
  animation-delay: 0.32s;
}
.home-culture__card:nth-child(3) {
  animation-delay: 0.39s;
}

.home-culture__card--accent {
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.32), transparent 60%),
    rgba(255, 255, 255, 0.96);
  border-color: rgba(209, 160, 55, 0.7);
  box-shadow:
    0 0 0 1px rgba(209, 160, 55, 0.4),
    0 22px 60px rgba(180, 132, 36, 0.26);
}

.home-culture__card::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 120% 0%, rgba(249, 115, 22, 0.18), transparent 65%);
  opacity: 0.4;
  pointer-events: none;
}

/* 카드 상단 pill ------------------------------------------------- */
.home-culture__card-pill {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.26rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(209, 213, 219, 0.95);
  background: rgba(255, 255, 255, 0.88);
  font-size: 0.73rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--home-culture-text-muted);
  margin-bottom: 0.7rem;
}

.home-culture__card-pill--accent {
  border-color: rgba(209, 160, 55, 0.88);
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.35), transparent 60%),
    rgba(255, 255, 255, 0.96);
}

.home-culture__card-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 0%, #e5b450, #f97316);
  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.3);
}

.home-culture__card-dot--accent {
  background: radial-gradient(circle at 30% 0%, #facc6b, #f97316);
}

/* 카드 텍스트 ----------------------------------------------------- */
.home-culture__card-title {
  margin: 0 0 0.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: var(--home-culture-text-default);
  letter-spacing: -0.015em;
}

.home-culture__card-body {
  margin: 0 0 0.6rem;
  font-size: 0.9rem;
  line-height: 1.8;
  color: var(--home-culture-text-soft);
}

.home-culture__card-body strong {
  font-weight: 600;
  color: var(--home-culture-text-default);
}

.home-culture__card-list {
  margin: 0.1rem 0 0;
  padding: 0;
  list-style: none;
}

.home-culture__card-list-item {
  position: relative;
  padding-left: 0.9rem;
  font-size: 0.82rem;
  line-height: 1.7;
  color: var(--home-culture-text-muted);
}

.home-culture__card-list-item + .home-culture__card-list-item {
  margin-top: 0.22rem;
}

.home-culture__card-list-item::before {
  content: '·';
  position: absolute;
  left: 0.28rem;
  top: 0;
  font-size: 1rem;
  color: var(--home-culture-accent-main-strong);
}

/* 하단: 키워드 라인 ---------------------------------------------- */
.home-culture__bottom {
  margin: 0 auto;
  max-width: 640px;
  padding: 1.1rem 1.1rem 1rem;
  border-radius: 1.4rem;
  background:
    radial-gradient(circle at 0% 0%, rgba(248, 250, 252, 0.92), transparent 60%),
    rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(209, 213, 219, 0.9);
  box-shadow: 0 18px 55px rgba(15, 23, 42, 0.08);
  position: relative;
  overflow: hidden;
}

.home-culture__bottom::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 120% 0%, rgba(252, 211, 77, 0.32), transparent 65%);
  opacity: 0.5;
  pointer-events: none;
}

.home-culture__bottom-label {
  margin: 0 0 0.7rem;
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--home-culture-text-muted);
}

.home-culture__bottom-metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.7rem;
}

@media (max-width: 640px) {
  .home-culture__bottom-metrics {
    grid-template-columns: minmax(0, 1fr);
  }
}

.home-culture__metric {
  padding: 0.45rem 0.4rem;
  border-radius: 0.9rem;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(229, 231, 235, 0.95);
}

.home-culture__metric-key {
  margin: 0 0 0.18rem;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--home-culture-text-muted);
}

.home-culture__metric-text {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.7;
  color: var(--home-culture-text-soft);
}

.home-culture__metric-text strong {
  font-weight: 600;
  color: var(--home-culture-text-default);
}

/* 반응형 ---------------------------------------------------------- */
@media (max-width: 768px) {
  .home-culture__shell {
    padding: 3.6rem 1.3rem 3.6rem;
    align-items: center;
    justify-content: center;
  }

  .home-culture__inner {
    max-width: 100%;
  }

  .home-culture__title {
    font-size: 2rem;
  }

  .home-culture__subtitle {
    font-size: 0.95rem;
  }

  .home-culture__card {
    padding: 1.25rem 1.2rem 1.15rem;
  }
}

/* 애니메이션 ------------------------------------------------------ */
@keyframes cultureGlow {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  100% {
    transform: translate3d(48px, 18px, 0) scale(1.07);
  }
}

@keyframes culturePillIn {
  0% {
    opacity: 0;
    transform: translateY(6px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes cultureTitleIn {
  0% {
    opacity: 0;
    transform: translateY(15px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cultureFadeUpSoft {
  0% {
    opacity: 0;
    transform: translateY(9px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cultureCardIn {
  0% {
    opacity: 0;
    transform: translateY(14px) scale(0.99);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* 모션 최소화 ----------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  .home-culture__bg::before,
  .home-culture__eyebrow,
  .home-culture__title,
  .home-culture__subtitle,
  .home-culture__card,
  .home-culture__bottom {
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
</style>
