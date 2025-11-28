<!-- src/pages/Home/sections/HomeHighlightsSection.vue -->
<template>
  <section
    class="home-highlights"
    aria-label="BrainTree가 제공하는 엔터프라이즈 개발 솔루션"
  >
    <div class="cc-container home-highlights__shell">
      <div class="home-highlights__inner">
        <!-- 헤더 ---------------------------------------------------- -->
        <header class="home-highlights__header">
          <p class="home-highlights__eyebrow">
            BRAINTRЕE · ENTERPRISE SOFTWARE STUDIO
          </p>

          <h2 class="home-highlights__title">
            복잡한 요구를,
            <span class="home-highlights__title-highlight">
              실사용 가능한 엔터프라이즈 솔루션
            </span>
            으로 구현합니다.
          </h2>

          <p class="home-highlights__subtitle">
            BrainTree는 <span>맞춤형 프로그램 개발과 시스템 통합</span>을 중심으로 일합니다.
            화면 몇 개를 빠르게 만드는 대신,
            <span>수년간 유지되는 제품 구조와 코드 품질</span>을 우선합니다.
          </p>
        </header>

        <!-- 3개 카드 : 항상 같은 높이로 정렬 ------------------------ -->
        <div
          class="home-highlights__grid"
          aria-label="BrainTree의 핵심 역량"
        >
          <!-- 카드 1 ------------------------------------------------ -->
          <article class="home-highlights__card">
            <div class="home-highlights__card-pill">
              <span class="home-highlights__card-dot"></span>
              <span class="home-highlights__card-pill-label">
                01 · SYSTEM &amp; PRODUCT PLANNING
              </span>
            </div>

            <h3 class="home-highlights__card-title">
              서비스 구조와 기능을 처음부터 함께 설계합니다
            </h3>

            <p class="home-highlights__card-body">
              사업 모델, 운영 방식, 데이터를 함께 분석해
              <strong>실행 가능한 요구사항</strong>으로 정리합니다.
              이후 개발·디자인 팀이 같은 기준으로 움직일 수 있도록
              <strong>제품 맵과 기능 우선순위</strong>를 명확히 정의합니다.
            </p>

            <ul class="home-highlights__card-list">
              <li class="home-highlights__card-list-item">
                비즈니스 플로우 분석 · <strong>핵심 기능 도출</strong>
              </li>
              <li class="home-highlights__card-list-item">
                화면이 아니라 도메인 기준 <strong>기능 구조도</strong> 작성
              </li>
              <li class="home-highlights__card-list-item">
                MVP → 확장 버전까지 <strong>단계별 로드맵</strong> 설계
              </li>
            </ul>
          </article>

          <!-- 카드 2 (강조 카드) ------------------------------------ -->
          <article
            class="home-highlights__card home-highlights__card--accent"
          >
            <div
              class="home-highlights__card-pill home-highlights__card-pill--accent"
            >
              <span
                class="home-highlights__card-dot home-highlights__card-dot--accent"
              ></span>
              <span class="home-highlights__card-pill-label">
                02 · FULL-STACK APPLICATION DEVELOPMENT
              </span>
            </div>

            <h3 class="home-highlights__card-title">
              프론트엔드부터 API, 데이터까지 한 팀에서 개발합니다
            </h3>

            <p class="home-highlights__card-body">
              Vue·React 기반 프론트엔드와
              Node·Python 기반 백엔드를 함께 설계·구현합니다.
              <strong>읽기 쉬운 코드와 모듈화</strong>를 기본 원칙으로,
              이후 팀에서도 유지보수와 기능 추가가 편하도록 구성합니다.
            </p>

            <ul class="home-highlights__card-list">
              <li class="home-highlights__card-list-item">
                Vue 3 / React / Next.js 기반 <strong>SPA · 대시보드 개발</strong>
              </li>
              <li class="home-highlights__card-list-item">
                Node.js · Python(FastAPI) · PostgreSQL 중심의
                <strong>비즈니스 로직 구현</strong>
              </li>
              <li class="home-highlights__card-list-item">
                공통 모듈 · 유틸 · 에러 핸들링을 표준화한
                <strong>엔터프라이즈 코드 구조</strong>
              </li>
            </ul>
          </article>

          <!-- 카드 3 ------------------------------------------------ -->
          <article class="home-highlights__card">
            <div class="home-highlights__card-pill">
              <span class="home-highlights__card-dot"></span>
              <span class="home-highlights__card-pill-label">
                03 · DEPLOYMENT, QA &amp; OPERATION
              </span>
            </div>

            <h3 class="home-highlights__card-title">
              배포 이후까지 책임지는 안정적인 운영 환경을 만듭니다
            </h3>

            <p class="home-highlights__card-body">
              Docker·CI/CD·모니터링을 기반으로
              <strong>개발·스테이징·운영 환경</strong>을 통합 관리합니다.
              장애 상황과 기능 확장을 모두 고려한
              <strong>장기 운영 기준</strong>을 함께 정리해 드립니다.
            </p>

            <ul class="home-highlights__card-list">
              <li class="home-highlights__card-list-item">
                Docker · GitHub Actions 기반 <strong>자동 배포 파이프라인</strong>
              </li>
              <li class="home-highlights__card-list-item">
                로그 &amp; 알림 체계를 포함한 <strong>운영 모니터링 설계</strong>
              </li>
              <li class="home-highlights__card-list-item">
                신규 기능 추가를 위한 <strong>버전·릴리즈 가이드</strong> 제공
              </li>
            </ul>
          </article>
        </div>

        <!-- 잘 맞는 프로젝트 유형 ----------------------------------- -->
        <div
          class="home-highlights__fit"
          aria-label="BrainTree와 잘 맞는 프로젝트"
        >
          <p class="home-highlights__fit-label">
            BRAINTRЕE IS A GOOD FIT FOR TEAMS THAT
          </p>

          <div class="home-highlights__fit-tags">
            <span class="home-highlights__fit-tag">
              “일단 만들어 보는 것”보다 <strong>완성도 높은 제품</strong>을 원하시는 팀
            </span>
            <span class="home-highlights__fit-tag">
              외주가 아닌 <strong>기술 파트너</strong>와 함께 장기 로드맵을 고민하는 팀
            </span>
            <span class="home-highlights__fit-tag">
              사내 개발자와 함께 <strong>유지보수 가능한 구조</strong>를 남기고 싶은 팀
            </span>
          </div>

          <div class="home-highlights__fit-foot">
            <span class="home-highlights__fit-foot-label">
              Tech Stack
            </span>
            <span class="home-highlights__fit-foot-text">
              Vue 3 · React · Next.js · TypeScript · Node.js · Python(FastAPI) ·
              PostgreSQL · Redis · Docker · GitHub Actions · AWS
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 프리젠테이션 전용 – 추가 로직 없음
</script>

<style scoped>
/* 루트 섹션 ------------------------------------------------------ */
.home-highlights {
  position: relative;
  overflow: hidden;
  isolation: isolate;
  background: transparent;
}

.home-highlights__shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4.4rem 2rem 4rem; /* Hero보다 살짝 줄인 패딩 */
}

.home-highlights__inner {
  width: 100%;
  max-width: 1040px;
  margin: 0 auto;
  position: relative;
}

/* 헤더 ---------------------------------------------------------- */
.home-highlights__header {
  text-align: center;
  max-width: 720px;
  margin: 0 auto 2.4rem;
}

.home-highlights__eyebrow {
  display: inline-flex;
  align-items: center;
  padding: 0.36rem 1.2rem;
  border-radius: 999px;
  border: 1px solid rgba(212, 163, 38, 0.32);
  background:
    radial-gradient(circle at top left, rgba(253, 230, 138, 0.38), transparent 60%),
    rgba(255, 255, 255, 0.96);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 1rem;
}

.home-highlights__title {
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.045em;
  color: #111827;
  font-size: 2.2rem;
  line-height: 1.35;
}

.home-highlights__title-highlight {
  color: #b7791f;
}

@media (min-width: 768px) {
  .home-highlights__title {
    font-size: 2.4rem;
  }
}

.home-highlights__subtitle {
  margin: 1rem auto 0;
  max-width: 40rem;
  font-size: 0.98rem;
  line-height: 1.85;
  color: #4b5563;
}

.home-highlights__subtitle span {
  font-weight: 600;
  color: #1f2933;
}

/* 카드 그리드 --------------------------------------------------- */
.home-highlights__grid {
  margin: 2.3rem auto 2.6rem;
  display: grid;
  gap: 1.6rem;
}

@media (min-width: 960px) {
  .home-highlights__grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

/* 카드 : 높이 통일을 위해 flex 사용 ----------------------------- */
.home-highlights__card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 1.4rem;
  padding: 1.5rem 1.4rem 1.4rem;
  background:
    radial-gradient(circle at 0% 0%, rgba(248, 250, 252, 0.85), transparent 60%),
    rgba(255, 255, 255, 0.97);
  border: 1px solid rgba(209, 213, 219, 0.9);
  box-shadow:
    0 14px 40px rgba(15, 23, 42, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.98);
}

.home-highlights__card--accent {
  background:
    radial-gradient(circle at 0% 0%, rgba(253, 224, 150, 0.32), transparent 60%),
    rgba(255, 255, 255, 0.98);
  border-color: rgba(212, 163, 38, 0.9);
  box-shadow:
    0 0 0 1px rgba(212, 163, 38, 0.42),
    0 18px 46px rgba(180, 132, 36, 0.24);
}

/* 카드 pill ----------------------------------------------------- */
.home-highlights__card-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.28rem 0.9rem;
  border-radius: 999px;
  border: 1px solid rgba(209, 213, 219, 0.95);
  background: rgba(255, 255, 255, 0.96);
  font-size: 0.73rem;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #6b7280;
  margin-bottom: 0.7rem;
}

.home-highlights__card-pill--accent {
  border-color: rgba(212, 163, 38, 0.95);
  background:
    radial-gradient(circle at 0% 0%, rgba(253, 230, 138, 0.38), transparent 60%),
    rgba(255, 255, 255, 0.98);
}

.home-highlights__card-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 0%, #e5b450, #f97316);
  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.32);
}

.home-highlights__card-dot--accent {
  background: radial-gradient(circle at 30% 0%, #facc6b, #d97706);
}

/* 카드 텍스트 --------------------------------------------------- */
.home-highlights__card-title {
  margin: 0 0 0.55rem;
  font-size: 1.02rem;
  font-weight: 600;
  color: #1f2933;
}

.home-highlights__card-body {
  margin: 0 0 0.8rem;
  font-size: 0.9rem;
  line-height: 1.75;
  color: #4b5563;
}

.home-highlights__card-body strong {
  font-weight: 600;
  color: #1f2933;
}

/* 카드 리스트 ---------------------------------------------------- */
.home-highlights__card-list {
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: auto; /* 내용 위는 고정, 리스트가 아래를 채우며 높이 맞춤 */
}

.home-highlights__card-list-item {
  position: relative;
  padding-left: 0.9rem;
  font-size: 0.84rem;
  line-height: 1.7;
  color: #6b7280;
}

.home-highlights__card-list-item + .home-highlights__card-list-item {
  margin-top: 0.25rem;
}

.home-highlights__card-list-item::before {
  content: '·';
  position: absolute;
  left: 0.26rem;
  top: 0;
  font-size: 1rem;
  color: #b7791f;
}

/* “좋은 핏” 영역 ------------------------------------------------- */
.home-highlights__fit {
  max-width: 980px;
  margin: 0 auto;
  padding: 1.3rem 1.5rem 1.4rem;
  border-radius: 1.3rem;
  background: rgba(255, 255, 255, 0.97);
  border: 1px solid rgba(229, 231, 235, 0.95);
  box-shadow: 0 12px 34px rgba(15, 23, 42, 0.06);
  text-align: left;
}

.home-highlights__fit-label {
  margin: 0 0 0.7rem;
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #6b7280;
}

.home-highlights__fit-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  margin-bottom: 0.75rem;
}

.home-highlights__fit-tag {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.85rem;
  border-radius: 999px;
  border: 1px solid rgba(229, 231, 235, 0.95);
  background: rgba(248, 250, 252, 0.98);
  font-size: 0.8rem;
  color: #4b5563;
}

.home-highlights__fit-tag strong {
  font-weight: 600;
  color: #1f2933;
}

/* Tech Stack 라인 ----------------------------------------------- */
.home-highlights__fit-foot {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  align-items: baseline;
  border-top: 1px dashed rgba(209, 213, 219, 0.9);
  padding-top: 0.7rem;
  margin-top: 0.3rem;
}

.home-highlights__fit-foot-label {
  font-size: 0.78rem;
  font-weight: 600;
  color: #92400e;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.home-highlights__fit-foot-text {
  font-size: 0.8rem;
  color: #6b7280;
}

/* 반응형 -------------------------------------------------------- */
@media (max-width: 960px) {
  .home-highlights__shell {
    padding: 3.8rem 1.4rem 3.6rem;
  }

  .home-highlights__grid {
    margin: 2rem auto 2.3rem;
  }

  .home-highlights__card {
    padding: 1.4rem 1.3rem 1.3rem;
  }
}

@media (max-width: 640px) {
  .home-highlights__title {
    font-size: 1.9rem;
  }

  .home-highlights__fit-tag {
    width: 100%;
  }

  .home-highlights__fit-foot {
    flex-direction: column;
  }
}

/* 모션 최소화 ---------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  .home-highlights__inner {
    transition: none;
  }
}
</style>
