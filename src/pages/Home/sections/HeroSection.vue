<!-- src/pages/Home/sections/HeroSection.vue -->
<template>
  <section
    class="hero"
    aria-label="BrainTree 메인 소개 · 엔터프라이즈 개발 스튜디오"
  >
    <!-- 배경 그리드와 글로우 효과 -->
    <div class="hero__background" aria-hidden="true">
      <div class="hero__grid"></div>
      <div class="hero__glow hero__glow--top"></div>
      <div class="hero__glow hero__glow--bottom"></div>
    </div>

    <!-- 메인 컨텐츠 -->
    <div class="cc-container hero__container">
      <div class="hero__content">
        <!-- 상단 배지 -->
        <div class="hero__badge">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            aria-hidden="true"
          >
            <circle cx="6" cy="6" r="6" fill="url(#badge-gradient)" />
            <defs>
              <linearGradient
                id="badge-gradient"
                x1="0"
                y1="0"
                x2="12"
                y2="12"
              >
                <stop offset="0%" stop-color="#fbbf24" />
                <stop offset="100%" stop-color="#f59e0b" />
              </linearGradient>
            </defs>
          </svg>
          <span>Enterprise-Grade Software &amp; Solutions</span>
        </div>

        <!-- 메인 타이틀 -->
        <h1 class="hero__title">
          엔터프라이즈급 프로그램과<br />
          맞춤형 솔루션을 함께 만듭니다
        </h1>

        <!-- 서브 타이틀 -->
        <p class="hero__subtitle">
          BrainTree는 복잡한 비즈니스 요구를 해결하는
          <span class="hero__subtitle-em">
            맞춤형 프로그램 · 웹/모바일 서비스 · 엔터프라이즈 시스템
          </span>
          을 설계·개발하는 소프트웨어 스튜디오입니다. 기획 단계부터 론칭
          이후 운영까지 한 팀처럼 동행합니다.
        </p>

        <!-- 스택 / 역량 하이라이트 -->
        <div class="hero__stack">
          <div class="hero__stack-label">우리가 함께 만드는 것들</div>
          <div
            class="hero__stack-chips"
            aria-label="BrainTree 주요 전문 영역"
          >
            <span class="hero__chip">웹 · 모바일 서비스</span>
            <span class="hero__chip">B2B SaaS &amp; 대시보드</span>
            <span class="hero__chip">엔터프라이즈 업무 시스템</span>
            <span class="hero__chip">데이터 플랫폼 · 자동화</span>
          </div>
          <div class="hero__stack-tech">
            <span class="hero__stack-tech-label">Tech Stack</span>
            <span class="hero__stack-tech-list">
              Vue · React · Next.js · Node.js · NestJS · Laravel · PostgreSQL
            </span>
          </div>
        </div>

        <!-- CTA 버튼 -->
        <div class="hero__actions">
          <!-- 프로젝트 상담 요청하기: /contact로 이동 -->
          <RouterLink
            to="/contact"
            class="hero__button hero__button--primary"
            role="button"
          >
            <span>프로젝트 상담 요청하기</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 12L10 8L6 4"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </RouterLink>

          <!-- 포트폴리오 & 사례 보기: /work 로 이동 -->
          <RouterLink
            to="/work"
            class="hero__button hero__button--secondary"
            role="button"
          >
            <span>포트폴리오 &amp; 사례 보기</span>
          </RouterLink>
        </div>

        <p class="hero__actions-note">
          요구사항 정리부터 정보구조, 와이어프레임, 실제 사용자 온보딩까지
          <span>엔지니어 · 디자이너가 한 팀으로</span> 움직입니다.
        </p>

        <!-- 신뢰 지표 -->
        <div class="hero__trust">
          <div class="hero__trust-item">
            <div class="hero__trust-value">10+년</div>
            <div class="hero__trust-label">실무 경험</div>
          </div>
          <div class="hero__trust-divider"></div>
          <div class="hero__trust-item">
            <div class="hero__trust-value">70+개</div>
            <div class="hero__trust-label">완료된 프로젝트</div>
          </div>
          <div class="hero__trust-divider"></div>
          <div class="hero__trust-item">
            <div class="hero__trust-value">92%</div>
            <div class="hero__trust-label">재계약 · 추천 비율</div>
          </div>
        </div>

        <div class="hero__scroll-hint" aria-hidden="true">
          <span class="hero__scroll-dot"></span>
          <span>스크롤해서 더 많은 사례 보기</span>
        </div>
      </div>

      <!-- 우측 비주얼 영역 -->
      <div class="hero__visual" aria-hidden="true">
        <!-- 메인 카드: 프로젝트 딜리버리 콘솔 -->
        <div class="hero__card hero__card--main">
          <div class="hero__card-header">
            <div class="hero__card-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div class="hero__card-title">Product Delivery Console</div>
          </div>

          <div class="hero__card-tabs">
            <button
              class="hero__card-tab hero__card-tab--active"
              type="button"
            >
              Roadmap
            </button>
            <button class="hero__card-tab" type="button">Release</button>
            <button class="hero__card-tab" type="button">Systems</button>
          </div>

          <div class="hero__card-content">
            <!-- Metric -->
            <div class="hero__metric">
              <div class="hero__metric-label">
                이번 분기 진행 중인 엔터프라이즈 개발 프로젝트
              </div>
              <div class="hero__metric-value">12개</div>
              <div class="hero__metric-badges">
                <span
                  class="hero__metric-badge hero__metric-badge--primary"
                >
                  3개 신규 론칭 예약
                </span>
                <span
                  class="hero__metric-badge hero__metric-badge--ghost"
                >
                  평균 릴리즈 주기 2주
                </span>
              </div>
            </div>

            <!-- Roadmap-style Chart -->
            <div class="hero__chart">
              <div class="hero__chart-column">
                <div
                  class="hero__chart-bar"
                  style="--height: 38%"
                ></div>
                <span class="hero__chart-label">Ideation</span>
              </div>
              <div class="hero__chart-column">
                <div
                  class="hero__chart-bar"
                  style="--height: 62%"
                ></div>
                <span class="hero__chart-label">Spec</span>
              </div>
              <div class="hero__chart-column">
                <div
                  class="hero__chart-bar"
                  style="--height: 80%"
                ></div>
                <span class="hero__chart-label">Design</span>
              </div>
              <div class="hero__chart-column">
                <div
                  class="hero__chart-bar"
                  style="--height: 90%"
                ></div>
                <span class="hero__chart-label">Build</span>
              </div>
              <div class="hero__chart-column">
                <div
                  class="hero__chart-bar"
                  style="--height: 70%"
                ></div>
                <span class="hero__chart-label">QA</span>
              </div>
              <div class="hero__chart-column">
                <div
                  class="hero__chart-bar"
                  style="--height: 55%"
                ></div>
                <span class="hero__chart-label">Rollout</span>
              </div>
            </div>

            <!-- 작은 리스트: 공통 아키텍처 모듈 스냅샷 -->
            <div class="hero__modules">
              <div class="hero__modules-header">
                <span class="hero__modules-title">
                  지금 설계 중인 주요 기능 블록
                </span>
                <span class="hero__modules-pill">
                  반복 검증된 아키텍처 기반
                </span>
              </div>
              <div class="hero__modules-grid">
                <div class="hero__module-chip">
                  <span class="hero__module-dot"></span>
                  <div class="hero__module-text">
                    <span class="hero__module-label">
                      서비스 아키텍처 &amp; 도메인 설계
                    </span>
                    <span class="hero__module-desc">
                      요구사항을 기능·데이터 관점으로 구조화합니다.
                    </span>
                  </div>
                </div>
                <div class="hero__module-chip">
                  <span class="hero__module-dot"></span>
                  <div class="hero__module-text">
                    <span class="hero__module-label">
                      외부 서비스 · 결제/인증 연동
                    </span>
                    <span class="hero__module-desc">
                      파트너 시스템, 결제·로그인 등 필수 연동을 표준화합니다.
                    </span>
                  </div>
                </div>
                <div class="hero__module-chip">
                  <span class="hero__module-dot"></span>
                  <div class="hero__module-text">
                    <span class="hero__module-label">
                      로그·모니터링 &amp; 리포트
                    </span>
                    <span class="hero__module-desc">
                      운영과 의사결정을 위한 관측 가능성을 확보합니다.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 플로팅 카드 1: Alignment -->
        <div
          class="hero__card hero__card--float hero__card--float-1"
        >
          <div class="hero__card-mini-header">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <rect
                x="2"
                y="2"
                width="12"
                height="12"
                rx="2"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M5 8L7 10L11 6"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <span>주간 얼라인 완료</span>
          </div>
          <div class="hero__card-mini-value">Stakeholder 5팀</div>
          <p class="hero__card-mini-caption">
            기획 · 개발 · 비즈니스가 한 일정과 백로그 아래에서 조율됩니다.
          </p>
        </div>

        <!-- 플로팅 카드 2: Release cadence -->
        <div
          class="hero__card hero__card--float hero__card--float-2"
        >
          <div class="hero__card-mini-header">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle
                cx="8"
                cy="8"
                r="6"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M8 4.5V8L10.5 10.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <span>릴리즈 주기</span>
          </div>
          <div class="hero__card-mini-value">2주 단위</div>
          <p class="hero__card-mini-caption">
            기능 추가와 안정성을 동시에 고려한 배포 파이프라인을 설계합니다.
          </p>
        </div>

        <!-- 플로팅 카드 3: System coverage -->
        <div
          class="hero__card hero__card--float hero__card--float-3"
        >
          <div class="hero__card-mini-header">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 2V8L12 10"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="8"
                cy="8"
                r="6"
                stroke="currentColor"
                stroke-width="1.5"
              />
            </svg>
            <span>시스템 범위</span>
          </div>
          <div class="hero__card-mini-value">End-to-End</div>
          <p class="hero__card-mini-caption">
            런칭, 운영, 리포팅까지 한 번에 이어지는 제품·시스템 구성을 만듭니다.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
// 프리젠테이션 전용 – 추가 로직 없음
</script>

<style scoped>
/* ============================================================
   VARIABLES & BASE – HomeHighlightsSection 골드 톤에 맞춘 라이트 테마
   ============================================================ */
.hero {
  --hero-bg-surface: #f9fafb;
  --hero-bg-soft: #fefcf6;
  --hero-gold-soft: #fef3c7;
  --hero-gold: #fbbf24;
  --hero-gold-strong: #d97706;
  --hero-gold-border-soft: rgba(209, 160, 55, 0.4);
  --hero-gold-border-strong: rgba(209, 160, 55, 0.9);

  --hero-text-primary: #111827;
  --hero-text-secondary: #4b5563;
  --hero-text-muted: #6b7280;

  --hero-border-soft: rgba(209, 213, 219, 0.9);
  --hero-border-strong: rgba(148, 163, 184, 0.9);

  --hero-card-bg: #ffffff;
  --hero-card-border: rgba(209, 213, 219, 0.9);

  position: relative;
  min-height: 100vh;
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.25), transparent 60%),
    radial-gradient(circle at 100% 0%, rgba(252, 211, 77, 0.15), transparent 55%),
    linear-gradient(180deg, var(--hero-bg-soft) 0%, var(--hero-bg-surface) 100%);
  overflow: hidden;

  font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR',
    -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', sans-serif;

  isolation: isolate;
}


/* ============================================================
   BACKGROUND
   ============================================================ */
.hero__background {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(148, 163, 184, 0.14) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(148, 163, 184, 0.14) 1px, transparent 1px);
  background-size: 80px 80px;
  opacity: 0.35;
  mask-image: radial-gradient(
    ellipse 85% 70% at 50% 35%,
    black 0%,
    transparent 100%
  );
}

.hero__glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  pointer-events: none;
}

.hero__glow--top {
  width: 560px;
  height: 560px;
  top: -18%;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(
    circle,
    rgba(252, 211, 77, 0.55) 0%,
    transparent 70%
  );
  opacity: 0.7;
  animation: glowPulseTop 10s ease-in-out infinite alternate;
}

.hero__glow--bottom {
  width: 520px;
  height: 520px;
  bottom: -20%;
  right: 8%;
  background: radial-gradient(
    circle,
    rgba(250, 204, 21, 0.35) 0%,
    transparent 70%
  );
  opacity: 0.6;
  animation: glowPulseBottom 12s ease-in-out infinite alternate;
}

@keyframes glowPulseTop {
  0% {
    opacity: 0.55;
    transform: translateX(-50%) translateY(0) scale(1);
  }
  100% {
    opacity: 0.85;
    transform: translateX(-50%) translateY(-12px) scale(1.06);
  }
}

@keyframes glowPulseBottom {
  0% {
    opacity: 0.45;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0.7;
    transform: translateY(-8px) scale(1.08);
  }
}

/* ============================================================
   CONTAINER
   ============================================================ */
.hero__container {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: 4.8rem;
  align-items: center;
  min-height: 100vh;
  padding: 5.2rem 2rem 4.6rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* ============================================================
   CONTENT
   ============================================================ */
.hero__content {
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
}

/* Badge */
.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.4rem 1.1rem;
  border-radius: 999px;
  border: 1px solid rgba(209, 160, 55, 0.5);
  background:
    radial-gradient(
      circle at top left,
      rgba(252, 211, 77, 0.42),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.92);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.7),
    0 14px 40px rgba(148, 117, 38, 0.28);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #92400e;
  animation: fadeInUp 0.6s ease-out 0.1s both;
  transform-origin: center center;
}

.hero__badge svg {
  flex-shrink: 0;
}

/* Title */
.hero__title {
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.045em;
  color: var(--hero-text-primary);
  line-height: 1.15;
  font-size: clamp(2.1rem, 3.2vw, 3.3rem);
  animation: fadeInUp 0.6s ease-out 0.2s both;
}

/* Subtitle */
.hero__subtitle {
  margin: 0;
  font-size: clamp(0.98rem, 1.25vw, 1.12rem);
  line-height: 1.8;
  color: var(--hero-text-secondary);
  max-width: 36rem;
  animation: fadeInUp 0.6s ease-out 0.28s both;
}

.hero__subtitle-em {
  color: #b7791f;
  font-weight: 600;
}

/* Stack & Capability */
.hero__stack {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  margin-top: 0.1rem;
  animation: fadeInUp 0.6s ease-out 0.34s both;
}

.hero__stack-label {
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #6b7280;
}

.hero__stack-chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.hero__chip {
  padding: 0.38rem 0.8rem;
  border-radius: 999px;
  border: 1px solid rgba(229, 231, 235, 0.95);
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(252, 211, 77, 0.23),
      transparent 60%
    ),
    rgba(255, 255, 255, 0.96);
  font-size: 0.8rem;
  color: #4b5563;
  white-space: nowrap;
}

.hero__stack-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
  align-items: baseline;
  margin-top: 0.1rem;
}

.hero__stack-tech-label {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: #92400e;
}

.hero__stack-tech-list {
  font-size: 0.8rem;
  color: #6b7280;
}

/* ============================================================
   ACTIONS
   ============================================================ */
.hero__actions {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
  animation: fadeInUp 0.6s ease-out 0.4s both;
}

.hero__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.8rem 1.7rem;
  border-radius: 0.85rem;
  font-size: 0.9rem;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  text-decoration: none;
}

.hero__button--primary {
  background: linear-gradient(
    135deg,
    #fbbf24 0%,
    #f59e0b 40%,
    #d97706 100%
  );
  color: #111827;
  box-shadow:
    0 0 0 1px rgba(209, 160, 55, 0.5),
    0 16px 40px rgba(180, 132, 36, 0.4);
}

.hero__button--primary::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.4) 0%,
    transparent 70%
  );
  opacity: 0;
  transition: opacity 0.28s;
}

.hero__button--primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 0 0 1px rgba(209, 160, 55, 0.7),
    0 20px 50px rgba(180, 132, 36, 0.55);
}

.hero__button--primary:hover::before {
  opacity: 1;
}

.hero__button--primary:active {
  transform: translateY(-1px);
}

.hero__button--secondary {
  background: rgba(255, 255, 255, 0.92);
  color: var(--hero-text-primary);
  border: 1px solid rgba(209, 213, 219, 0.9);
  box-shadow: 0 10px 30px rgba(148, 163, 184, 0.25);
}

.hero__button--secondary:hover {
  background: #f9fafb;
  border-color: rgba(148, 163, 184, 0.9);
  transform: translateY(-2px);
}

.hero__button--secondary:active {
  transform: translateY(-1px);
}

.hero__actions-note {
  margin: 0;
  margin-top: 0.65rem;
  font-size: 0.84rem;
  color: #6b7280;
  animation: fadeInUp 0.6s ease-out 0.46s both;
}

.hero__actions-note span {
  font-weight: 600;
  color: #1f2933;
}

/* ============================================================
   TRUST INDICATORS
   ============================================================ */
.hero__trust {
  display: flex;
  align-items: center;
  gap: 1.8rem;
  padding-top: 0.9rem;
  animation: fadeInUp 0.6s ease-out 0.52s both;
}

.hero__trust-item {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.hero__trust-value {
  font-size: 1.35rem;
  font-weight: 700;
  color: #111827;
  line-height: 1.1;
}

.hero__trust-label {
  font-size: 0.74rem;
  color: #6b7280;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.hero__trust-divider {
  width: 1px;
  height: 40px;
  background: rgba(209, 213, 219, 0.95);
}

/* Scroll hint */
.hero__scroll-hint {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.1rem;
  font-size: 0.78rem;
  color: #9ca3af;
  animation: fadeInUp 0.6s ease-out 0.58s both;
}

.hero__scroll-dot {
  width: 22px;
  height: 22px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.hero__scroll-dot::before {
  content: '';
  width: 4px;
  height: 10px;
  border-radius: 999px;
  background: rgba(148, 163, 184, 1);
  animation: scrollDotMove 1.8s ease-in-out infinite;
}

@keyframes scrollDotMove {
  0% {
    transform: translateY(-3px);
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  70% {
    transform: translateY(3px);
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

/* ============================================================
   VISUAL AREA – HomeHighlightsSection 카드 톤과 맞춘 화이트 카드
   ============================================================ */
.hero__visual {
  position: relative;
  height: 540px;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

/* Card Base Styles */
.hero__card {
  position: absolute;
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(248, 250, 252, 0.9),
      transparent 60%
    ),
    var(--hero-card-bg);
  border: 1px solid var(--hero-card-border);
  border-radius: 1.4rem;
  box-shadow:
    0 18px 48px rgba(15, 23, 42, 0.12),
    0 0 0 1px rgba(255, 255, 255, 0.9);
  overflow: hidden;
}

/* Main Card */
.hero__card--main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1.8rem 1.8rem 1.6rem;
  animation: cardFloat 6s ease-in-out infinite;
}

.hero__card-header {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 1.15rem;
}

.hero__card-dots {
  display: flex;
  gap: 0.35rem;
}

.hero__card-dots span {
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: rgba(209, 213, 219, 0.9);
}

.hero__card-dots span:nth-child(1) {
  background: #f87171;
}
.hero__card-dots span:nth-child(2) {
  background: #facc15;
}
.hero__card-dots span:nth-child(3) {
  background: #34d399;
}

.hero__card-title {
  font-size: 0.8rem;
  font-weight: 600;
  color: #6b7280;
  letter-spacing: 0.13em;
  text-transform: uppercase;
}

/* Card Tabs */
.hero__card-tabs {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.28rem;
  border-radius: 999px;
  background: rgba(249, 250, 251, 0.95);
  border: 1px solid rgba(229, 231, 235, 0.95);
  margin-bottom: 1.35rem;
}

.hero__card-tab {
  border: none;
  background: transparent;
  color: #6b7280;
  font-size: 0.74rem;
  padding: 0.32rem 0.78rem;
  border-radius: 999px;
  cursor: default;
  white-space: nowrap;
}

.hero__card-tab--active {
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(252, 211, 77, 0.32),
      transparent 60%
    ),
    #ffffff;
  color: #92400e;
  font-weight: 600;
}

/* Card Content */
.hero__card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}

/* Metric */
.hero__metric {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.hero__metric-label {
  font-size: 0.84rem;
  color: #6b7280;
}

.hero__metric-value {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.03em;
}

.hero__metric-badges {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.hero__metric-badge {
  font-size: 0.74rem;
  padding: 0.26rem 0.62rem;
  border-radius: 999px;
  border: 1px solid transparent;
}

.hero__metric-badge--primary {
  background: rgba(22, 163, 74, 0.07);
  border-color: rgba(22, 163, 74, 0.25);
  color: #15803d;
}

.hero__metric-badge--ghost {
  background: rgba(249, 250, 251, 0.9);
  border-color: rgba(209, 213, 219, 0.9);
  color: #4b5563;
}

/* Roadmap-like Chart */
.hero__chart {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  align-items: flex-end;
  gap: 0.7rem;
  height: 170px;
  padding: 1.15rem 1.1rem 1.05rem;
  border-radius: 0.9rem;
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(252, 211, 77, 0.32),
      transparent 60%
    ),
    #fefce8;
  border: 1px solid rgba(250, 204, 21, 0.4);
}

.hero__chart-column {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.35rem;
}

.hero__chart-bar {
  width: 100%;
  border-radius: 0.4rem;
  background: linear-gradient(
    180deg,
    rgba(245, 158, 11, 0.9) 0%,
    rgba(245, 158, 11, 0.3) 100%
  );
  height: var(--height);
  animation: chartBarGrow 1.1s ease-out backwards;
  transform-origin: bottom;
}

.hero__chart-label {
  font-size: 0.7rem;
  color: #6b7280;
}

.hero__chart-column:nth-child(1) .hero__chart-bar {
  animation-delay: 0.1s;
}
.hero__chart-column:nth-child(2) .hero__chart-bar {
  animation-delay: 0.18s;
}
.hero__chart-column:nth-child(3) .hero__chart-bar {
  animation-delay: 0.26s;
}
.hero__chart-column:nth-child(4) .hero__chart-bar {
  animation-delay: 0.34s;
}
.hero__chart-column:nth-child(5) .hero__chart-bar {
  animation-delay: 0.42s;
}
.hero__chart-column:nth-child(6) .hero__chart-bar {
  animation-delay: 0.5s;
}

/* Modules snapshot */
.hero__modules {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.hero__modules-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.45rem;
}

.hero__modules-title {
  font-size: 0.84rem;
  color: #111827;
  font-weight: 500;
}

.hero__modules-pill {
  font-size: 0.72rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  border: 1px solid rgba(209, 213, 219, 0.95);
  background: rgba(248, 250, 252, 0.98);
  color: #6b7280;
}

.hero__modules-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.05fr);
  gap: 0.7rem 1.4rem;
}

.hero__module-chip {
  display: flex;
  gap: 0.5rem;
}

.hero__module-dot {
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 0%, #e5b450, #f97316);
  margin-top: 0.25rem;
  box-shadow: 0 0 0 3px rgba(250, 204, 21, 0.32);
}

.hero__module-text {
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
}

.hero__module-label {
  font-size: 0.8rem;
  color: #111827;
}

.hero__module-desc {
  font-size: 0.76rem;
  color: #6b7280;
}

/* Floating Cards */
.hero__card--float {
  padding: 1rem 1.1rem 0.95rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  animation: cardFloat 5s ease-in-out infinite;
}

.hero__card--float-1 {
  top: 10%;
  right: -8%;
  width: 210px;
  animation-delay: 0.18s;
}

.hero__card--float-2 {
  bottom: 26%;
  right: -4%;
  width: 200px;
  animation-delay: 0.36s;
}

.hero__card--float-3 {
  bottom: 7%;
  left: -4%;
  width: 200px;
  animation-delay: 0.54s;
}

.hero__card-mini-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #6b7280;
  font-size: 0.76rem;
  font-weight: 500;
}

.hero__card-mini-header svg {
  stroke: #b7791f;
}

.hero__card-mini-value {
  font-size: 1.2rem;
  font-weight: 700;
  color: #111827;
}

.hero__card-mini-caption {
  font-size: 0.74rem;
  color: #6b7280;
  line-height: 1.6;
}

/* ============================================================
   ANIMATIONS
   ============================================================ */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(18px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes cardFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes chartBarGrow {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 1024px) {
  .hero__container {
    grid-template-columns: 1fr;
    gap: 3.2rem;
    padding: 4.2rem 1.6rem 3.8rem;
  }

  .hero__visual {
    height: 480px;
  }

  .hero__card--float-1 {
    right: -2%;
  }

  .hero__card--float-2 {
    right: 4%;
  }

  .hero__card--float-3 {
    left: 0;
  }

  .hero__modules-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (max-width: 640px) {
  .hero__container {
    padding: 3.5rem 1.2rem 3.1rem;
  }

  .hero__content {
    gap: 1.4rem;
  }

  .hero__title {
    font-size: clamp(1.9rem, 7vw, 2.4rem);
  }

  .hero__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .hero__button {
    width: 100%;
  }

  .hero__trust {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.8rem;
  }

  .hero__trust-divider {
    display: none;
  }

  .hero__visual {
    height: 400px;
  }

  .hero__card--main {
    padding: 1.5rem 1.3rem 1.3rem;
  }

  .hero__card--float {
    display: none;
  }

  .hero__chip {
    font-size: 0.78rem;
  }

  .hero__modules-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* ============================================================
   REDUCED MOTION
   ============================================================ */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }

  .hero__glow--top,
  .hero__glow--bottom {
    animation: none !important;
  }

  .hero__card--main,
  .hero__card--float {
    animation: none !important;
  }

  .hero__chart-bar {
    animation: none !important;
  }

  .hero__scroll-dot::before {
    animation: none !important;
  }
}

/* ============================================================
   ACCESSIBILITY
   ============================================================ */
.hero__button:focus-visible {
  outline: 2px solid #fbbf24;
  outline-offset: 3px;
}
</style>
