<!-- src/pages/Studio/StudioPage.vue -->
<template>
  <main
    class="studio"
    aria-label="BrainTree 스튜디오 소개 페이지"
  >
    <div class="studio__bg" aria-hidden="true"></div>

    <div class="cc-container studio__shell">
      <section class="studio__panel">
        <!-- 헤더: 중앙 정렬 ------------------------------------------------ -->
        <header class="studio__header">
          <p class="studio__eyebrow">
            ABOUT · STUDIO · HOW WE BUILD
          </p>

          <h1 class="studio__title">
            BrainTree는
            <span class="studio__title-highlight">
              업무·운영 시스템을 제품처럼
            </span>
            만드는 엔터프라이즈 개발 스튜디오입니다.
          </h1>

          <p class="studio__subtitle">
            우리는 새롭고 복잡한 비즈니스의
            <span>백오피스 · 콘솔 · 내부 운영툴</span>을 설계하고 개발합니다.
            결제, 멤버십, 물류, B2B SaaS처럼
            <strong>데이터와 권한이 촘촘한 환경</strong>에서
            실제 팀이 오랫동안 사용할 수 있는
            <span>프로그램·솔루션</span>을 만드는 데 집중합니다.
          </p>

          <ul class="studio__tags" aria-label="BrainTree가 집중하는 작업 영역">
            <li>
              <UiTag tone="accent" size="md">
                엔터프라이즈 웹 · 백오피스
              </UiTag>
            </li>
            <li>
              <UiTag tone="soft" size="md">
                내부 운영툴 &amp; 콘솔
              </UiTag>
            </li>
            <li>
              <UiTag tone="soft" size="md">
                데이터 · 정산 · 발송 시스템
              </UiTag>
            </li>
          </ul>
        </header>

        <!-- 본문: 팀 · 원칙 · 일하는 방식 · 핏 ----------------------------- -->
        <UiCard class="studio__card" variant="soft">
          <!-- 1. 팀과 역할 / 우리가 보는 관점 ----------------------------- -->
          <section
            class="studio__section studio__section--grid"
            aria-label="BrainTree 팀 구성과 관점"
          >
            <div class="studio__section-block">
              <h2 class="studio__section-title">
                작은 팀, 엔터프라이즈 시스템에 집중
              </h2>
              <p class="studio__section-body">
                BrainTree는 <strong>도메인 이해</strong>와
                <strong>제품 관점</strong>을 동시에 보는
                소수의 PM · 디자이너 · 개발자로 이루어진 팀입니다.
                더 많은 화면이 아니라,
                <strong>덜 헷갈리는 프로그램 구조</strong>를 만드는 것이 목표입니다.
              </p>
              <ul class="studio__list" aria-label="핵심 역할">
                <li class="studio__list-item">
                  비즈니스 구조와 운영 흐름을 함께 정리하는
                  <strong>도메인 파트너 / PM</strong>
                </li>
                <li class="studio__list-item">
                  사용자 여정과 정보 구조를 설계하는
                  <strong>프로덕트 디자이너</strong>
                </li>
                <li class="studio__list-item">
                  장기 운영을 전제로 코드를 설계하는
                  <strong>풀스택 · 프론트엔드 개발자</strong>
                </li>
              </ul>
            </div>

            <div class="studio__section-block">
              <h2 class="studio__section-title">
                “프로그램”을 끝까지 책임지는 솔루션 팀
              </h2>
              <p class="studio__section-body">
                우리는 단순 퍼블리싱이나 단기 페이지 제작이 아니라,
                <strong>실제 전산·운영을 떠받치는 프로그램과 솔루션</strong>을 다룹니다.
                기능 목록보다 <strong>“하루 업무 순서”</strong>를 먼저 듣고,
                그 흐름에 맞춰 데이터 모델·화면·API를 함께 설계합니다.
              </p>
              <ul class="studio__list" aria-label="솔루션 팀으로서 수행하는 일">
                <li class="studio__list-item">
                  현재 사용하는 <strong>화면 · 엑셀 · 시스템</strong>을 함께 보며
                  도메인 맵과 객체 구조를 정리
                </li>
                <li class="studio__list-item">
                  <strong>권한 · 상태 전이 · 예외 케이스</strong>를
                  운영 플로우 기준으로 정의하고 화면 구조에 녹여냄
                </li>
                <li class="studio__list-item">
                  프런트엔드 구조와 API 스펙, 에러 처리 방식을
                  <strong>같은 그림</strong>에서 논의할 수 있도록 문서화
                </li>
              </ul>
            </div>
          </section>

          <!-- 2. 설계와 개발을 관통하는 원칙 ----------------------------- -->
          <section
            class="studio__section studio__section--pillars"
            aria-label="BrainTree의 설계 · 개발 원칙"
          >
            <header class="studio__section-head studio__section-head--center">
              <h2 class="studio__section-title">
                BrainTree가 프로그램을 만들 때 지키는 세 가지 원칙
              </h2>
              <p class="studio__section-body studio__section-body--narrow">
                코드를 많이 짜는 것보다,
                <strong>오래 견디는 구조</strong>를 만드는 것이 중요합니다.
                화면과 코드, 운영 플로우가 서로 어긋나지 않도록
                아래 세 가지를 기준으로 판단합니다.
              </p>
            </header>

            <div class="studio__pillars">
              <article class="studio__pillar">
                <h3 class="studio__pillar-title">
                  01 · Domain First
                </h3>
                <p class="studio__pillar-text">
                  기능 요구사항보다 <strong>도메인 언어</strong>부터 정리합니다.
                  “이 팀이 매일 쓰는 단어가 무엇인지”,
                  “데이터가 실제로 어떤 순서로 흘러가는지”를 먼저 이해하고,
                  프로그램 구조와 화면에 그대로 반영합니다.
                </p>
                <ul class="studio__bullet-list">
                  <li>실제 사용 중인 문서·시트·툴을 기반으로 도메인 맵 작성</li>
                  <li>핵심 엔티티와 관계를 먼저 정의한 뒤 요구사항에 매핑</li>
                  <li>향후 모듈 추가를 고려한 느슨한 결합 구조 설계</li>
                </ul>
              </article>

              <article class="studio__pillar">
                <h3 class="studio__pillar-title">
                  02 · Product-grade UX
                </h3>
                <p class="studio__pillar-text">
                  내부툴이라도 <strong>제품처럼 다듬어진 UX</strong>를 지향합니다.
                  버튼과 테이블만 채워 넣는 것이 아니라,
                  실제 사용자가 에러 없이 업무를 끝낼 수 있는지 기준으로 판단합니다.
                </p>
                <ul class="studio__bullet-list">
                  <li>복잡한 화면은 단계별 플로우/마법사 구조로 분리</li>
                  <li>정책·예외 케이스를 인풋/경고/도움말로 자연스럽게 안내</li>
                  <li>자주 쓰는 액션과 자주 보는 데이터에 우선순위를 부여</li>
                </ul>
              </article>

              <article class="studio__pillar">
                <h3 class="studio__pillar-title">
                  03 · Maintainable Code
                </h3>
                <p class="studio__pillar-text">
                  현재 눈앞의 프로젝트뿐 아니라,
                  <strong>1~2년 뒤 합류할 개발자</strong>를 상정하고 코드를 작성합니다.
                  레이어를 나누고, 의사결정을 기록하면서
                  “왜 이렇게 만들었는지”까지 남깁니다.
                </p>
                <ul class="studio__bullet-list">
                  <li>도메인·UI·인프라 레이어를 분리한 폴더 구조 설계</li>
                  <li>반복되는 패턴을 컴포넌트·훅·유틸로 공통화</li>
                  <li>주요 트레이드오프와 제약사항을 문서로 남겨 향후 참고</li>
                </ul>
              </article>
            </div>
          </section>

          <!-- 3. 일하는 방식 (프로젝트 플로우) ----------------------------- -->
          <section
            class="studio__section"
            aria-label="BrainTree의 일하는 방식"
          >
            <header class="studio__section-head">
              <h2 class="studio__section-title">
                우리는 이렇게 프로젝트를 진행합니다
              </h2>
              <p class="studio__section-body studio__section-body--narrow">
                BrainTree는 <strong>한 번에 완벽한 스펙</strong>을 요구하지 않습니다.
                대신 <strong>도메인 이해 → 구조 설계 → 단계별 개발 · 검증</strong>으로
                리스크를 나누고, 실제 운영팀이 쓰면서 자연스럽게 다듬어 가는 방식을 택합니다.
              </p>
            </header>

            <ol class="studio__steps" aria-label="협업 기본 플로우">
              <li class="studio__step">
                <div class="studio__step-badge">
                  <span class="studio__step-index">01</span>
                </div>
                <p class="studio__step-title">도메인 인입 · 운영 인터뷰</p>
                <p class="studio__step-desc">
                  현재 사용하는 화면, 엑셀, 시스템을 함께 보면서
                  <strong>“어디에서 시간이 새고 있는지”</strong>를 먼저 찾습니다.
                  이 단계에서 수십 개 요구사항보다
                  <strong>실제 사례와 예외 상황</strong>을 많이 듣습니다.
                </p>
              </li>

              <li class="studio__step">
                <div class="studio__step-badge">
                  <span class="studio__step-index">02</span>
                </div>
                <p class="studio__step-title">
                  플로우 맵 · 화면 구조 · 데이터 설계
                </p>
                <p class="studio__step-desc">
                  도메인 플로우를 기준으로
                  <strong>화면 · 권한 · 상태 전이 · 데이터 모델</strong>을 정리합니다.
                  Figma/문서로 공유 가능한 구조를 만들고,
                  내부 팀과 짧은 주기로 여러 번 가볍게 조율합니다.
                </p>
              </li>

              <li class="studio__step">
                <div class="studio__step-badge">
                  <span class="studio__step-index">03</span>
                </div>
                <p class="studio__step-title">
                  단계별 개발 · 운영 시나리오 검증
                </p>
                <p class="studio__step-desc">
                  우선순위가 높은 플로우부터 개발하고,
                  운영팀과 함께 <strong>실제 업무 시나리오</strong>로 검증합니다.
                  이 과정에서 발견된 예외 케이스를 다시 구조에 반영하며,
                  점진적으로 시스템을 단단하게 만듭니다.
                </p>
              </li>

              <li class="studio__step">
                <div class="studio__step-badge">
                  <span class="studio__step-index">04</span>
                </div>
                <p class="studio__step-title">
                  핸드오프 · 내재화 · 후속 고도화
                </p>
                <p class="studio__step-desc">
                  내부 개발팀이 이어갈 수 있도록
                  <strong>폴더 구조, 컴포넌트 패턴, 의사결정 로그</strong>를 함께 전달합니다.
                  이후 고도화 단계에서는 신규 기능을
                  같은 설계 원칙 아래에서 쌓아갈 수 있도록 돕습니다.
                </p>
              </li>
            </ol>
          </section>

          <!-- 4. 핏 · 협업 방식 ------------------------------------------- -->
          <section
            class="studio__section studio__section--bottom"
            aria-label="BrainTree와 잘 맞는 프로젝트"
          >
            <div class="studio__bottom-head">
              <h2 class="studio__section-title">
                BrainTree와 잘 맞는 프로젝트
              </h2>
              <p class="studio__section-body studio__section-body--narrow">
                우리는 <strong>단기 랜딩 페이지나 마케팅 캠페인</strong>보다는,
                <strong>업무·운영에 가까운 프로그램과 솔루션</strong>에 더 잘 맞는 팀입니다.
                다음과 같은 상황이라면, BrainTree가 특히 도움이 될 수 있습니다.
              </p>
            </div>

            <div class="studio__fit-grid">
              <div class="studio__fit-card">
                <h3 class="studio__fit-title">
                  이런 팀과 잘 맞습니다
                </h3>
                <ul class="studio__fit-list">
                  <li>
                    “지금 쓰는 내부 화면이 너무 복잡해서 새로 정리하고 싶다”
                    는 고민이 있는 팀
                  </li>
                  <li>
                    <strong>실제 매출·트래픽이 흐르는 서비스</strong>의
                    백오피스·운영툴을 새로 만들거나 갈아엎어야 하는 팀
                  </li>
                  <li>
                    내부 개발 인력이 있지만,
                    <strong>초기 구조 설계와 UX</strong>를 함께 잡아 줄 파트너가 필요한 팀
                  </li>
                  <li>
                    코드가 <strong>2~3년 뒤에도 유지보수 가능</strong>하기를 원하는 팀
                  </li>
                </ul>
              </div>

              <div class="studio__fit-card studio__fit-card--muted">
                <h3 class="studio__fit-title">
                  이런 요청과는 거리가 있습니다
                </h3>
                <ul class="studio__fit-list">
                  <li>일회성 이벤트/캠페인 페이지 중심의 단기 제작</li>
                  <li>UI 시안만 필요한 순수 디자인 아웃풋</li>
                  <li>기존 구조를 그대로 복사하는 수준의 단순 마이그레이션</li>
                  <li>“아무 제약 없이 최대한 빨리, 싸게”만을 우선하는 프로젝트</li>
                </ul>
              </div>
            </div>

            <p class="studio__bottom-footnote">
              아직 구체적인 계획이 없더라도,
              <span>“지금 구조로 괜찮은지”</span>를 가볍게 점검받는 느낌으로
              연락 주셔도 좋습니다.
              BrainTree는 <strong>압박보다 이해</strong>에 먼저 시간을 씁니다.
            </p>

            <div class="studio__cta">
              <p class="studio__cta-text">
                우리 팀의 내부 프로그램이나 운영툴을
                <span>제품 수준으로 재정비</span>하고 싶으시다면,
                간단한 상황 설명만 공유해 주세요.
              </p>
              <div class="studio__cta-actions">
                <RouterLink
                  to="/contact"
                  class="studio__cta-button studio__cta-button--primary"
                  role="button"
                >
                  BrainTree와 프로젝트 상담하기
                </RouterLink>
                <RouterLink
                  to="/work"
                  class="studio__cta-button studio__cta-button--secondary"
                  role="button"
                >
                  진행했던 프로젝트 먼저 보기
                </RouterLink>
              </div>
            </div>
          </section>
        </UiCard>
      </section>
    </div>
  </main>
</template>

<script setup lang="ts">
import UiCard from '@/components/ui/Card.vue';
import UiTag from '@/components/ui/Tag.vue';
</script>

<style scoped>
.studio {
  --studio-bg-upper: #fff9f0;
  --studio-bg-lower: #f4ebdd;
  --studio-bg-soft: #fdf7ec;

  --studio-accent-main: #d1a037;
  --studio-accent-main-strong: #b7791f;

  --studio-text-strong: #111827;
  --studio-text-default: #1f2933;
  --studio-text-soft: #4b5563;
  --studio-text-muted: #6b7280;

  position: relative;
  overflow: hidden;
  isolation: isolate;
  min-height: 100vh;
}

/* 배경 ------------------------------------------------------------ */
.studio__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.3), transparent 55%),
    radial-gradient(circle at 80% 100%, rgba(251, 191, 36, 0.18), transparent 60%),
    linear-gradient(180deg, var(--studio-bg-upper), var(--studio-bg-lower));
  z-index: -2;
}

.studio__bg::before {
  content: '';
  position: absolute;
  width: 520px;
  height: 520px;
  left: 50%;
  top: -10%;
  transform: translateX(-50%);
  border-radius: 999px;
  background: radial-gradient(circle at 30% 0%, #facc6b, #f97316);
  opacity: 0.3;
  filter: blur(38px);
  mix-blend-mode: multiply;
  animation: studioGlow 19s ease-in-out infinite alternate;
}

/* 셸: 중앙 정렬 --------------------------------------------------- */
.studio__shell {
  position: relative;
  max-width: 1080px;
  margin: 0 auto;
  padding: 4.4rem 1.6rem 4.4rem;
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR',
    -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', sans-serif;
}

.studio__panel {
  width: 100%;
  max-width: 960px;
  text-align: center;
}

/* 헤더 ------------------------------------------------------------ */
.studio__header {
  max-width: 680px;
  margin: 0 auto 2.2rem;
}

.studio__eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.36rem 1.15rem;
  border-radius: 999px;
  border: 1px solid rgba(209, 160, 55, 0.4);
  background:
    radial-gradient(circle at top left, rgba(252, 211, 77, 0.32), transparent 60%),
    var(--studio-bg-soft);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--studio-text-muted);
  margin-bottom: 0.9rem;
}

.studio__title {
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.045em;
  color: var(--studio-text-strong);
  line-height: 1.35;
  font-size: 2.2rem;
}

.studio__title-highlight {
  color: var(--studio-accent-main-strong);
}

@media (min-width: 768px) {
  .studio__title {
    font-size: 2.5rem;
  }
}

.studio__subtitle {
  margin: 1rem 0 0;
  font-size: 0.98rem;
  line-height: 1.9;
  color: var(--studio-text-soft);
}

.studio__subtitle span {
  font-weight: 600;
  color: var(--studio-text-default);
}

.studio__subtitle strong {
  font-weight: 600;
  color: var(--studio-text-default);
}

/* 태그 ------------------------------------------------------------ */
.studio__tags {
  margin: 1.2rem 0 0.2rem;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.55rem;
}

/* 카드 ------------------------------------------------------------ */
.studio__card {
  margin: 0 auto;
  margin-top: 1.6rem;
  text-align: left;
  background:
    radial-gradient(circle at 0% 0%, rgba(248, 250, 252, 0.9), transparent 60%),
    rgba(255, 255, 255, 0.96);
  border-radius: 1.4rem;
  border: 1px solid rgba(209, 213, 219, 0.9);
  box-shadow:
    0 18px 50px rgba(15, 23, 42, 0.08),
    0 0 0 1px rgba(255, 255, 255, 0.6);
  padding: 1.8rem 1.6rem 1.8rem;
}

@media (min-width: 768px) {
  .studio__card {
    padding: 2.1rem 2rem 2rem;
  }
}

/* 섹션 공통 ------------------------------------------------------- */
.studio__section {
  padding-top: 1.3rem;
}

.studio__section + .studio__section {
  border-top: 1px dashed rgba(209, 213, 219, 0.85);
}

.studio__section--grid {
  display: grid;
  gap: 1.2rem;
  padding-top: 0.5rem;
  padding-bottom: 1.1rem;
  border-top: none;
}

@media (min-width: 880px) {
  .studio__section--grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.6rem;
  }
}

.studio__section-head {
  text-align: left;
  margin-bottom: 0.9rem;
}

.studio__section-head--center {
  text-align: center;
}

.studio__section-title {
  margin: 0 0 0.4rem;
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--studio-text-default);
}

.studio__section-body {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.8;
  color: var(--studio-text-soft);
}

.studio__section-body strong {
  font-weight: 600;
  color: var(--studio-text-default);
}

.studio__section-body--narrow {
  max-width: 38rem;
}

/* 그리드 블록 ----------------------------------------------------- */
.studio__section-block {
  padding: 0.5rem 0.3rem 0.3rem;
}

.studio__section-block + .studio__section-block {
  border-top: 1px dashed rgba(229, 231, 235, 0.9);
  padding-top: 0.9rem;
}

@media (min-width: 880px) {
  .studio__section-block + .studio__section-block {
    border-top: none;
    border-left: 1px dashed rgba(229, 231, 235, 0.9);
    padding-left: 1.2rem;
  }
}

/* 리스트 ---------------------------------------------------------- */
.studio__list {
  margin: 0.65rem 0 0;
  padding: 0;
  list-style: none;
}

.studio__list-item {
  position: relative;
  padding-left: 0.9rem;
  font-size: 0.84rem;
  line-height: 1.7;
  color: var(--studio-text-muted);
}

.studio__list-item + .studio__list-item {
  margin-top: 0.3rem;
}

.studio__list-item::before {
  content: '·';
  position: absolute;
  left: 0.25rem;
  top: -0.02rem;
  font-size: 1rem;
  color: var(--studio-accent-main-strong);
}

.studio__list-item strong {
  font-weight: 600;
  color: var(--studio-text-default);
}

/* Pillars -------------------------------------------------------- */
.studio__section--pillars {
  padding-bottom: 1rem;
}

.studio__pillars {
  margin-top: 0.8rem;
  display: grid;
  gap: 0.9rem;
}

@media (min-width: 880px) {
  .studio__pillars {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

.studio__pillar {
  border-radius: 1rem;
  padding: 0.9rem 0.95rem 0.85rem;
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.18), transparent 60%),
    rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(229, 231, 235, 0.96);
}

.studio__pillar-title {
  margin: 0 0 0.35rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--studio-text-default);
}

.studio__pillar-text {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.7;
  color: var(--studio-text-soft);
}

.studio__bullet-list {
  margin: 0.55rem 0 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.studio__bullet-list li {
  font-size: 0.8rem;
  line-height: 1.6;
  color: var(--studio-text-muted);
}

/* 스텝 ------------------------------------------------------------ */
.studio__steps {
  margin: 0.9rem 0 1rem;
  padding: 0;
  list-style: none;
  display: grid;
  gap: 0.8rem;
}

@media (min-width: 880px) {
  .studio__steps {
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.95rem;
  }
}

.studio__step {
  position: relative;
}

.studio__step-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.45rem;
  padding: 0.24rem 0.7rem;
  border-radius: 999px;
  background: rgba(249, 250, 251, 0.98);
  border: 1px solid rgba(209, 213, 219, 0.95);
}

.studio__step-index {
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--studio-text-muted);
}

.studio__step-title {
  margin: 0 0 0.25rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--studio-text-default);
}

.studio__step-desc {
  margin: 0;
  font-size: 0.82rem;
  line-height: 1.7;
  color: var(--studio-text-soft);
}

.studio__step-desc strong {
  font-weight: 600;
  color: var(--studio-text-default);
}

/* 하단 섹션 / 핏 -------------------------------------------------- */
.studio__section--bottom {
  padding-top: 1.4rem;
}

.studio__bottom-head {
  text-align: left;
  margin-bottom: 1rem;
}

.studio__fit-grid {
  display: grid;
  gap: 0.9rem;
}

@media (min-width: 880px) {
  .studio__fit-grid {
    grid-template-columns: minmax(0, 1.4fr) minmax(0, 1.1fr);
    gap: 1rem;
  }
}

.studio__fit-card {
  border-radius: 1.1rem;
  padding: 0.95rem 1rem 0.9rem;
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.18), transparent 60%),
    rgba(255, 255, 255, 0.98);
  border: 1px solid rgba(229, 231, 235, 0.96);
}

.studio__fit-card--muted {
  background:
    radial-gradient(circle at 0% 0%, rgba(148, 163, 184, 0.12), transparent 55%),
    rgba(248, 250, 252, 0.98);
}

.studio__fit-title {
  margin: 0 0 0.35rem;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--studio-text-default);
}

.studio__fit-list {
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.studio__fit-list li {
  font-size: 0.82rem;
  line-height: 1.6;
  color: var(--studio-text-soft);
}

.studio__bottom-footnote {
  margin: 0.9rem 0 0.4rem;
  font-size: 0.8rem;
  line-height: 1.7;
  color: var(--studio-text-muted);
}

.studio__bottom-footnote span {
  font-weight: 600;
  color: var(--studio-text-default);
}

/* CTA ------------------------------------------------------------- */
.studio__cta {
  margin-top: 1.1rem;
  padding: 1rem 1.1rem;
  border-radius: 1.1rem;
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.32), transparent 60%),
    linear-gradient(135deg, #fef3c7, #fffbeb);
  border: 1px solid rgba(234, 179, 8, 0.7);
  box-shadow:
    0 14px 32px rgba(180, 132, 36, 0.28),
    0 0 0 1px rgba(255, 255, 255, 0.9);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: space-between;
}

.studio__cta-text {
  margin: 0;
  font-size: 0.86rem;
  line-height: 1.7;
  color: #78350f;
}

.studio__cta-text span {
  font-weight: 700;
}

.studio__cta-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
}

.studio__cta-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.55rem;
  border-radius: 999px;
  font-size: 0.86rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: none;
  white-space: nowrap;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease,
    border-color 0.18s ease;
}

.studio__cta-button--primary {
  background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
  color: #111827;
  box-shadow:
    0 12px 32px rgba(180, 132, 36, 0.4),
    0 0 0 1px rgba(234, 179, 8, 0.8);
}

.studio__cta-button--primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 16px 42px rgba(180, 132, 36, 0.55),
    0 0 0 1px rgba(202, 138, 4, 0.9);
}

.studio__cta-button--secondary {
  background: rgba(255, 255, 255, 0.98);
  color: #78350f;
  border: 1px solid rgba(253, 224, 71, 0.8);
  box-shadow: 0 10px 30px rgba(180, 132, 36, 0.24);
}

.studio__cta-button--secondary:hover {
  background: #fefce8;
  transform: translateY(-2px);
}

/* 반응형 ---------------------------------------------------------- */
@media (max-width: 768px) {
  .studio__shell {
    padding: 3.6rem 1.3rem 3.8rem;
    min-height: calc(100vh - 3.8rem);
  }

  .studio__title {
    font-size: 2.1rem;
  }

  .studio__card {
    margin-top: 1.3rem;
    padding: 1.7rem 1.4rem 1.7rem;
  }

  .studio__cta {
    flex-direction: column;
    align-items: flex-start;
  }

  .studio__cta-actions {
    width: 100%;
  }

  .studio__cta-button {
    flex: 1;
    justify-content: center;
  }
}

/* 모션 최소화 ----------------------------------------------------- */
@media (prefers-reduced-motion: reduce) {
  .studio__bg::before {
    animation: none !important;
    transform: none !important;
  }
}

/* 애니메이션 ------------------------------------------------------ */
@keyframes studioGlow {
  0% {
    transform: translate3d(0, 0, 0) scale(1);
  }
  100% {
    transform: translate3d(52px, 24px, 0) scale(1.08);
  }
}

.studio__cta-button:focus-visible {
  outline: 2px solid #fbbf24;
  outline-offset: 3px;
}
</style>
