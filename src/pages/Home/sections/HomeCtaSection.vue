<!-- src/pages/Home/sections/HomeCtaSection.vue -->
<template>
  <section
    class="home-cta"
    aria-label="BrainTree 프로젝트 상담 및 문의"
  >
    <!-- 배경 레이어 -->
    <div class="home-cta__bg" aria-hidden="true">
      <div class="home-cta__bg-glow home-cta__bg-glow--top"></div>
      <div class="home-cta__bg-glow home-cta__bg-glow--bottom"></div>
      <div class="home-cta__bg-grid"></div>
    </div>

    <div class="cc-container home-cta__shell">
      <div class="home-cta__inner">
        <!-- 상단 카피 영역 ------------------------------------------------ -->
        <header class="home-cta__header">
          <p class="home-cta__eyebrow">
            PROJECT &amp; CONTACT · NEXT STEP
          </p>

          <h2 class="home-cta__title">
            복잡한 요구를,
            <span class="home-cta__title-highlight">
              실사용 가능한 엔터프라이즈 솔루션
            </span>
            으로 전달합니다.
          </h2>

          <p class="home-cta__subtitle">
            BrainTree는 단순한 페이지 제작이 아닌
            <span>업무에 직접 사용되는 프로그램과 시스템을 제작</span>하는 팀입니다.
            기존 인프라와 데이터를 존중하면서,
            <span>서비스·플랫폼 전체 흐름을 다시 설계</span>해 드립니다.
          </p>

          <ul
            class="home-cta__bullets"
            aria-label="BrainTree와 함께 일할 때의 주요 포인트"
          >
            <li class="home-cta__bullet-item">
              <span class="home-cta__bullet-mark"></span>
              <span class="home-cta__bullet-text">
                기획 문서·엑셀·현재 사용하는 프로그램을
                <strong>먼저 분석한 후</strong> 현실적인 범위의 로드맵을 제안합니다.
              </span>
            </li>
            <li class="home-cta__bullet-item">
              <span class="home-cta__bullet-mark"></span>
              <span class="home-cta__bullet-text">
                프런트엔드·백엔드·인프라를 한 번에 고려해
                <strong>장기간 유지보수 가능한 구조</strong>를 우선합니다.
              </span>
            </li>
            <li class="home-cta__bullet-item">
              <span class="home-cta__bullet-mark"></span>
              <span class="home-cta__bullet-text">
                전면 재구축이 아니어도 좋습니다.
                <strong>부분 개선부터 단계적 확장</strong>까지 폭넓게 함께합니다.
              </span>
            </li>
          </ul>
        </header>

        <!-- 연락 및 진행 방식 카드 -------------------------------------- -->
        <section
          class="home-cta__contact"
          aria-label="연락처 및 프로젝트 진행 방식 안내"
        >
          <div class="home-cta__contact-header">
            <p class="home-cta__contact-label">
              CONTACT
            </p>

            <p class="home-cta__contact-email">
              contact@braintree.studio
            </p>

            <p class="home-cta__contact-email-note">
              별도의 양식 없이
              <span>일반 메일처럼 편하게</span>
              보내주셔도 됩니다.
              서비스 링크나 현재 사용 중인 화면 캡처가 있다면 함께 남겨 주세요.
            </p>
          </div>

          <div class="home-cta__contact-divider" aria-hidden="true"></div>

          <!-- 3컬럼 진행 안내 ------------------------------------------- -->
          <div class="home-cta__contact-grid">
            <!-- 블록 1: 처음 메일에 담으면 좋은 내용 ------------------- -->
            <article class="home-cta__contact-item">
              <p class="home-cta__contact-item-label">
                처음 보내실 때
              </p>
              <p class="home-cta__contact-item-text">
                한두 문단 정도로
                <span>현재 서비스·업무 흐름</span>과
                <span>어디가 가장 불편한지</span>를 적어 주세요.
                새로 만들 프로그램인지, 기존 시스템 개선인지 정도만 알려주셔도
                충분합니다.
              </p>

              <ul class="home-cta__pill-list" aria-label="간단 체크 포인트">
                <li class="home-cta__pill">웹 / 모바일 / 내부 시스템 중 무엇인지</li>
                <li class="home-cta__pill">대략적인 사용자 수(내부·외부)</li>
                <li class="home-cta__pill">희망하는 일정 범위</li>
              </ul>
            </article>

            <!-- 블록 2: 내부 검토 & 회신 ------------------------------ -->
            <article class="home-cta__contact-item">
              <p class="home-cta__contact-item-label">
                내부 검토 &amp; 회신
              </p>
              <p class="home-cta__contact-item-text">
                전달해 주신 내용을 기반으로
                <span>기술적으로 가능한 접근 방식</span>과
                <span>예상 공수·난이도</span>를 정리합니다.
                필요하다면 간단한
                <strong>와이어프레임 또는 구조 다이어그램</strong>으로 함께 회신합니다.
              </p>

              <p class="home-cta__meta-line">
                평균 회신 속도
                <strong>1 영업일 이내</strong>
                · 복잡한 프로젝트의 경우
                <strong>추가 질문</strong>이 동반될 수 있습니다.
              </p>
            </article>

            <!-- 블록 3: 특히 잘 맞는 프로젝트 -------------------------- -->
            <article class="home-cta__contact-item">
              <p class="home-cta__contact-item-label">
                특히 잘 맞는 프로젝트
              </p>
              <p class="home-cta__contact-item-text">
                신규 B2B / B2C 서비스의
                <span>1.0 버전 프로그램 구축</span>,
                운영 중인 플랫폼의
                <span>리디자인·재개발</span>처럼
                <strong>기능·흐름이 뚜렷한 엔터프라이즈 개발</strong>에 강합니다.
              </p>

              <ul class="home-cta__pill-list" aria-label="주요 사례 유형">
                <li class="home-cta__pill">결제·정산 등 트랜잭션이 많은 서비스</li>
                <li class="home-cta__pill">파트너/가맹점용 전용 콘솔·포털</li>
                <li class="home-cta__pill">데이터·리포트 중심 대시보드</li>
              </ul>
            </article>
          </div>

          <!-- 하단 메타 문장 ------------------------------------------- -->
          <p class="home-cta__contact-meta">
            “이 정도 규모도 문의해도 될까?”를 오래 고민하시기보다,
            <span>현재 상황을 간단히 공유해 주시면</span>
            예산과 범위 안에서 어떤 식으로 접근할 수 있을지
            조용히, 그러나 구체적으로 제안드립니다.
          </p>
        </section>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// 프리젠테이션 전용 – 별도 로직 없음
</script>

<style scoped>
/* ================================================================
   SECTION BASE – Hero / Highlights 와 톤을 맞춘 골드 라이트 테마
================================================================ */
.home-cta {
  --home-cta-bg-upper: #fff9f0;
  --home-cta-bg-lower: #f5ede0;
  --home-cta-bg-soft: #fdf7ec;

  --home-cta-gold: #fbbf24;
  --home-cta-gold-soft: #fef3c7;
  --home-cta-gold-strong: #b7791f;
  --home-cta-gold-border: rgba(209, 160, 55, 0.5);

  --home-cta-text-strong: #111827;
  --home-cta-text-default: #1f2933;
  --home-cta-text-soft: #4b5563;
  --home-cta-text-muted: #6b7280;

  --home-cta-border-soft: rgba(209, 213, 219, 0.95);

  position: relative;
  min-height: 100vh; /* Hero / Highlights 와 동일 기준 */
  display: flex;
  align-items: stretch;
  overflow: hidden;
  isolation: isolate;

  font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR',
    -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', sans-serif;
}

/* 배경 레이어 ------------------------------------------------------ */
.home-cta__bg {
  position: absolute;
  inset: 0;
  z-index: -2;
  background: linear-gradient(
    180deg,
    var(--home-cta-bg-upper) 0%,
    var(--home-cta-bg-lower) 100%
  );
}

/* 은은한 글로우 */
.home-cta__bg-glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(90px);
  mix-blend-mode: multiply;
  pointer-events: none;
}

.home-cta__bg-glow--top {
  width: 540px;
  height: 540px;
  top: -18%;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(
    circle,
    rgba(252, 211, 77, 0.48) 0%,
    transparent 70%
  );
  opacity: 0.7;
  animation: ctaGlowTop 18s ease-in-out infinite alternate;
}

.home-cta__bg-glow--bottom {
  width: 520px;
  height: 520px;
  right: -8%;
  bottom: -26%;
  background: radial-gradient(
    circle,
    rgba(250, 204, 21, 0.32) 0%,
    transparent 70%
  );
  opacity: 0.65;
  animation: ctaGlowBottom 20s ease-in-out infinite alternate;
}

/* 얇은 그리드 */
.home-cta__bg-grid {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(248, 250, 252, 0.36) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(248, 250, 252, 0.36) 1px, transparent 1px);
  background-size: 72px 72px;
  mask-image: radial-gradient(
    ellipse 90% 80% at 50% 35%,
    black 0%,
    transparent 100%
  );
  opacity: 0.65;
}

/* 컨테이너 -------------------------------------------------------- */
.home-cta__shell {
  position: relative;
  flex: 1;
  max-width: 1120px;
  margin: 0 auto;
  padding: 4.6rem 1.8rem 4.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

.home-cta__inner {
  width: 100%;
  max-width: 720px;
}

/* 헤더 영역 -------------------------------------------------------- */
.home-cta__header {
  text-align: center;
}

/* 상단 라벨 */
.home-cta__eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.38rem 1.25rem;
  border-radius: 999px;
  border: 1px solid var(--home-cta-gold-border);
  background:
    radial-gradient(
      circle at top left,
      rgba(252, 211, 77, 0.38),
      transparent 60%
    ),
    var(--home-cta-bg-soft);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--home-cta-text-muted);
  margin-bottom: 0.95rem;
  animation: ctaPillIn 0.7s ease-out both;
  transform-origin: center center;
}

/* 타이틀 */
.home-cta__title {
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.045em;
  color: var(--home-cta-text-strong);
  line-height: 1.35;
  font-size: 2.1rem;
  animation: ctaTitleIn 0.8s ease-out 0.08s both;
}

.home-cta__title-highlight {
  color: var(--home-cta-gold-strong);
}

@media (min-width: 768px) {
  .home-cta__title {
    font-size: 2.3rem;
  }
}

/* 서브 카피 */
.home-cta__subtitle {
  margin: 1rem auto 0;
  max-width: 36rem;
  font-size: 0.98rem;
  line-height: 1.9;
  color: var(--home-cta-text-soft);
  animation: ctaFadeUpSoft 0.7s ease-out 0.22s both;
}

.home-cta__subtitle span {
  font-weight: 600;
  color: var(--home-cta-text-default);
}

/* 포인트 리스트 ---------------------------------------------------- */
.home-cta__bullets {
  margin: 1.25rem auto 0;
  padding: 0;
  list-style: none;
  max-width: 36rem;
}

.home-cta__bullet-item {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 0.6rem;
  font-size: 0.95rem;
  color: var(--home-cta-text-soft);
  opacity: 0;
  transform: translateY(10px);
  animation: ctaFadeUpSoft 0.55s ease-out forwards;
}

.home-cta__bullet-item + .home-cta__bullet-item {
  margin-top: 0.45rem;
}

.home-cta__bullet-item:nth-child(1) {
  animation-delay: 0.32s;
}
.home-cta__bullet-item:nth-child(2) {
  animation-delay: 0.44s;
}
.home-cta__bullet-item:nth-child(3) {
  animation-delay: 0.56s;
}

.home-cta__bullet-mark {
  margin-top: 0.6rem;
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: radial-gradient(circle at 30% 0%, #facc6b, #f97316);
  box-shadow: 0 0 0 3px rgba(209, 160, 55, 0.26);
}

.home-cta__bullet-text {
  line-height: 1.8;
}

.home-cta__bullet-text strong {
  font-weight: 600;
  color: var(--home-cta-text-default);
}

/* 연락 카드 -------------------------------------------------------- */
.home-cta__contact {
  margin: 2.1rem auto 0;
  max-width: 40rem;
  padding: 1.8rem 1.8rem 1.7rem;
  border-radius: 1.35rem;
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(248, 250, 252, 0.9),
      transparent 60%
    ),
    #ffffff;
  border: 1px solid var(--home-cta-border-soft);
  box-shadow:
    0 20px 55px rgba(15, 23, 42, 0.12),
    0 0 0 1px rgba(255, 255, 255, 0.9);
  animation: ctaFadeUpSoft 0.7s ease-out 0.7s both;
}

/* 상단 이메일 블럭 */
.home-cta__contact-header {
  text-align: center;
}

.home-cta__contact-label {
  margin: 0 0 0.35rem;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--home-cta-text-muted);
}

.home-cta__contact-email {
  margin: 0;
  font-size: 0.98rem;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: var(--home-cta-text-default);
}

.home-cta__contact-email-note {
  margin: 0.4rem 0 0.8rem;
  font-size: 0.82rem;
  line-height: 1.7;
  color: var(--home-cta-text-soft);
}

.home-cta__contact-email-note span {
  font-weight: 600;
  color: var(--home-cta-text-default);
}

/* 구분선 */
.home-cta__contact-divider {
  margin: 0.35rem auto 1rem;
  width: 100%;
  max-width: 20rem;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(209, 213, 219, 0),
    rgba(209, 213, 219, 0.9),
    rgba(209, 213, 219, 0)
  );
}

/* 내부 그리드 */
.home-cta__contact-grid {
  display: grid;
  gap: 1rem;
  text-align: left;
}

@media (min-width: 840px) {
  .home-cta__contact-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.1rem;
  }
}

/* 그리드 아이템 */
.home-cta__contact-item {
  padding: 0.65rem 0.65rem 0.7rem;
  border-radius: 0.95rem;
  background: rgba(249, 250, 251, 0.98);
  border: 1px solid rgba(229, 231, 235, 0.98);
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.home-cta__contact-item-label {
  margin: 0;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--home-cta-text-muted);
}

.home-cta__contact-item-text {
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.7;
  color: var(--home-cta-text-soft);
}

.home-cta__contact-item-text span {
  font-weight: 600;
  color: var(--home-cta-text-default);
}

/* 작은 메타 라인 */
.home-cta__meta-line {
  margin: 0.1rem 0 0;
  font-size: 0.76rem;
  line-height: 1.6;
  color: var(--home-cta-text-muted);
}

.home-cta__meta-line strong {
  font-weight: 600;
  color: var(--home-cta-text-default);
}

/* 칩 형태 리스트 */
.home-cta__pill-list {
  margin: 0.1rem -0.15rem 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.home-cta__pill {
  padding: 0.22rem 0.55rem;
  border-radius: 999px;
  border: 1px solid rgba(229, 231, 235, 0.95);
  background: rgba(255, 255, 255, 0.96);
  font-size: 0.74rem;
  line-height: 1.4;
  color: var(--home-cta-text-muted);
}

/* 하단 메타 카피 */
.home-cta__contact-meta {
  margin: 1.1rem 0 0;
  font-size: 0.8rem;
  line-height: 1.8;
  color: var(--home-cta-text-muted);
  text-align: center;
}

.home-cta__contact-meta span {
  font-weight: 600;
  color: var(--home-cta-text-default);
}

/* 반응형 ---------------------------------------------------------- */
@media (max-width: 880px) {
  .home-cta__shell {
    padding: 4rem 1.5rem 3.8rem;
  }

  .home-cta__title {
    font-size: 2rem;
  }

  .home-cta__contact {
    margin-top: 1.9rem;
    padding: 1.6rem 1.4rem 1.5rem;
  }
}

@media (max-width: 640px) {
  .home-cta__shell {
    padding: 3.6rem 1.2rem 3.4rem;
  }

  .home-cta__title {
    font-size: 1.9rem;
  }

  .home-cta__subtitle {
    font-size: 0.95rem;
  }

  .home-cta__bullet-item {
    align-items: flex-start;
  }

  .home-cta__contact {
    padding: 1.5rem 1.25rem 1.4rem;
  }
}

/* 애니메이션 ------------------------------------------------------ */
@keyframes ctaGlowTop {
  0% {
    opacity: 0.6;
    transform: translateX(-50%) translateY(0) scale(1);
  }
  100% {
    opacity: 0.85;
    transform: translateX(-52%) translateY(-16px) scale(1.06);
  }
}

@keyframes ctaGlowBottom {
  0% {
    opacity: 0.45;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0.7;
    transform: translateY(-12px) scale(1.08);
  }
}

@keyframes ctaPillIn {
  0% {
    opacity: 0;
    transform: translateY(6px) scale(0.96);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes ctaTitleIn {
  0% {
    opacity: 0;
    transform: translateY(16px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes ctaFadeUpSoft {
  0% {
    opacity: 0;
    transform: translateY(9px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 모션 최소화 ----------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  .home-cta__bg-glow,
  .home-cta__eyebrow,
  .home-cta__title,
  .home-cta__subtitle,
  .home-cta__bullet-item,
  .home-cta__contact {
    animation: none !important;
    transform: none !important;
    opacity: 1 !important;
  }
}
</style>
