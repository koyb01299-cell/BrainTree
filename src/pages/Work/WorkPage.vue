<!-- src/pages/Work/WorkPage.vue -->
<template>
  <main class="work" aria-label="BrainTree 프로젝트 및 사례 소개">
    <!-- 상단 히어로 / 인트로 -->
    <section class="work-hero">
      <div class="work-hero__bg" aria-hidden="true"></div>

      <div class="cc-container">
        <div class="work-hero__inner">
          <header class="work-hero__header">
            <p class="work-hero__eyebrow">
              PROJECTS · CASE STUDIES
            </p>
            <h1 class="work-hero__title">
              
              <span class="work-hero__title-highlight">업무·운영 시스템</span>
              을<br />
              만들어왔습니다.
            </h1>
            <p class="work-hero__subtitle">
              BrainTree는 기업용
              <span>백오피스 · 콘솔 · 내부 업무 시스템</span>을 설계·개발하는
              소프트웨어 &amp; 솔루션 스튜디오입니다.
              결제/정산, 멤버십, 물류 발송, 메시징 등
              실제 매출과 트래픽이 흐르는 서비스의 전산·운영 화면을
              <span>기획 단계부터 고도화</span>까지 함께 만들어 왔습니다.
            </p>
          </header>

          <!-- 상단 하이라이트 메트릭 -->
          <div
            class="work-hero__metrics"
            aria-label="프로덕션 프로젝트 하이라이트 지표"
          >
            <div class="work-metric">
              <div class="work-metric__label">실제 상용 서비스</div>
              <div class="work-metric__value">20+개</div>
              <div class="work-metric__desc">
                B2B 솔루션, 커머스, 멤버십, 정산·물류 등에서 현재도 운영 중인
                업무/운영 시스템과 백오피스
              </div>
            </div>
            <div class="work-metric work-metric--divider"></div>
            <div class="work-metric">
              <div class="work-metric__label">실시간 트래픽/데이터</div>
              <div class="work-metric__value">수십억 건</div>
              <div class="work-metric__desc">
                월 단위 수백만~수천만 건 규모의 데이터·트랜잭션을 처리하는
                서비스 전산 경험
              </div>
            </div>
            <div class="work-metric work-metric--divider"></div>
            <div class="work-metric">
              <div class="work-metric__label">고객 유형</div>
              <div class="work-metric__value">엔터프라이즈 · SaaS</div>
              <div class="work-metric__desc">
                솔루션 기업, 브랜드, B2B SaaS, 리테일까지 가로지르는
                엔터프라이즈급 시스템 구축 경험
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 메인 프로젝트 그리드 (대표 사례) -->
    <section
      class="work-section work-section--featured"
      aria-label="대표 프로젝트 사례"
    >
      <div class="cc-container">
        <div class="work-section__inner">
          <div class="work-section__header">
            <div>
              <p class="work-section__eyebrow">
                FEATURED · 대표 프로젝트
              </p>
              <h2 class="work-section__title">
                결제와 재방문, 발송과 정산이 동시에 보이는
                <span class="work-section__title-highlight">
                  실서비스 레벨 프로젝트
                </span>
              </h2>
            </div>
            <p class="work-section__description">
              실명은 일부 마스킹 되었지만, 실제로
              <span>페이베리, 컴어게인, 보내자</span>와 같은 서비스의
              <span>전산 · 백오피스 · 운영툴</span>을 메인/서브로 함께 개발해
              왔습니다. 여기서는 흐름과 구조가 잘 드러나는 대표 사례만
              정리했습니다.
            </p>
          </div>

          <div class="work-grid">
            <!-- 대표 프로젝트 카드들 -->
            <article
              v-for="project in featuredProjects"
              :key="project.id"
              class="work-card"
            >
              <header class="work-card__header">
                <div class="work-card__badge-row">
                  <span class="work-card__badge">
                    {{ project.category }}
                  </span>
                  <span
                    v-if="project.label"
                    class="work-card__badge work-card__badge--soft"
                  >
                    {{ project.label }}
                  </span>
                </div>
                <h3 class="work-card__title">
                  {{ project.name }}
                </h3>
                <p class="work-card__subtitle">
                  {{ project.tagline }}
                </p>
              </header>

              <!-- 핵심 정보 / 역할 -->
              <dl class="work-card__meta">
                <div class="work-card__meta-item">
                  <dt>Our Role</dt>
                  <dd>{{ project.role }}</dd>
                </div>
                <div class="work-card__meta-item">
                  <dt>Scope</dt>
                  <dd>{{ project.scope }}</dd>
                </div>
                <div class="work-card__meta-item">
                  <dt>Stack</dt>
                  <dd>{{ project.stack }}</dd>
                </div>
              </dl>

              <!-- 문제 → 접근 → 결과 -->
              <div class="work-card__body">
                <h4 class="work-card__section-title">Context</h4>
                <p class="work-card__text">
                  {{ project.context }}
                </p>

                <h4 class="work-card__section-title">Approach</h4>
                <ul class="work-card__bullets">
                  <li
                    v-for="(item, index) in project.approach"
                    :key="index"
                  >
                    {{ item }}
                  </li>
                </ul>

                <h4 class="work-card__section-title">Outcome</h4>
                <ul class="work-card__tags" aria-label="성과 지표 및 결과">
                  <li
                    v-for="(outcome, index) in project.outcomes"
                    :key="index"
                  >
                    {{ outcome }}
                  </li>
                </ul>
              </div>

              <!-- 하단 푸터 라인 -->
              <footer class="work-card__footer">
                <p class="work-card__footer-text">
                  실제 운영팀과 매일 대화하며, 기획·디자인·개발이
                  <span>하나의 업무 시스템</span>으로 모이도록 설계했습니다.
                </p>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </section>

    <!-- 엔터프라이즈 콜렉션 / 더 많은 사례 -->
    <section
      class="work-section work-section--collection"
      aria-label="추가 엔터프라이즈 프로젝트 컬렉션"
    >
      <div class="cc-container">
        <div class="work-section__inner">
          <div class="work-section__header work-section__header--compact">
            <div>
              <p class="work-section__eyebrow">
                ENTERPRISE COLLECTION · SELECTED
              </p>
              <h2 class="work-section__title">
                공개가 어려운 프로젝트까지 포함하면,<br />
                <span class="work-section__title-highlight">
                  훨씬 더 많은 엔터프라이즈 사례
                </span>
                를 가지고 있습니다.
              </h2>
            </div>
            <p class="work-section__description">
              결제·정산, 멤버십, 매장/브랜드 분석, 발송/알림, 내부 운영툴 등
              다양한 도메인의 시스템을 설계해 왔습니다. NDA가 걸린 프로젝트는
              <span>별도의 상담</span>을 통해 흐름 위주로만 공유해 드립니다.
            </p>
          </div>

          <div class="work-collection">
            <div class="work-collection__column">
              <h3 class="work-collection__title">
                결제 · 정산 · 거래 관리
              </h3>
              <ul class="work-collection__list">
                <li v-for="item in enterpriseCollections.pg" :key="item">
                  {{ item }}
                </li>
              </ul>
            </div>

            <div class="work-collection__column">
              <h3 class="work-collection__title">
                커머스 · 멤버십 · 매장 분석
              </h3>
              <ul class="work-collection__list">
                <li
                  v-for="item in enterpriseCollections.commerce"
                  :key="item"
                >
                  {{ item }}
                </li>
              </ul>
            </div>

            <div class="work-collection__column">
              <h3 class="work-collection__title">
                B2B SaaS · 내부 운영툴
              </h3>
              <ul class="work-collection__list">
                <li v-for="item in enterpriseCollections.saas" :key="item">
                  {{ item }}
                </li>
              </ul>
            </div>
          </div>

          <!-- CTA: 상담 유도 -->
          <div class="work-cta">
            <div class="work-cta__content">
              <p class="work-cta__eyebrow">
                NEXT PROJECT · WORK WITH US
              </p>
              <h3 class="work-cta__title">
                우리 비즈니스에도 이런 수준의 업무·운영 시스템이 필요하다면,
                <span>간단한 요구사항 정리부터</span> 함께 시작할 수 있습니다.
              </h3>
              <p class="work-cta__description">
                기획서가 완성되어 있지 않아도 괜찮습니다.
                현재 사용 중인 도구와 엑셀, 프로세스만 가져오셔도
                실제 현업이 쓰는 화면을 기준으로 정보 구조를 그려 드립니다.
              </p>
            </div>

            <div class="work-cta__actions">
              <RouterLink
                to="/contact"
                class="work-cta__button work-cta__button--primary"
                role="button"
              >
                프로젝트 상담 요청하기
              </RouterLink>
              <RouterLink
                to="/studio"
                class="work-cta__button work-cta__button--secondary"
                role="button"
              >
                팀 소개 먼저 살펴보기
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
interface FeaturedProject {
  id: string;
  name: string;
  category: string;
  label?: string;
  tagline: string;
  role: string;
  scope: string;
  stack: string;
  context: string;
  approach: string[];
  outcomes: string[];
}

const featuredProjects: FeaturedProject[] = [
  {
    id: 'payvery',
    name: '페이베리 (가칭) · 정산/운영 통합 백오피스',
    category: 'Settlement · Operations',
    label: 'Main Build',
    tagline:
      '결제/정산, 가맹점, 수수료 구조를 한 화면에서 읽히도록 설계한 통합 운영 백오피스.',
    role: '백오피스 IA 설계, UX/UI, 프론트엔드, API 설계 협업',
    scope:
      '가맹점/거래 조회, 정산 일정/내역, 수수료/프로모션, 정산 리포트, 운영 권한·역할 관리',
    stack: 'Vue 3 · TypeScript · Vite · Node.js · PostgreSQL',
    context:
      '새로운 정산/운영 시스템을 갖추려는 상황에서, 기존 레거시 화면을 그대로 답습하지 않으면서도 운영팀이 바로 적응할 수 있는 구조가 필요했습니다.',
    approach: [
      '실제 운영/정산 담당자 인터뷰를 기반으로, 엑셀 양식과 기존 보고서를 분석해 정보 구조(IA)를 우선 설계.',
      '거래·정산·가맹점 정보를 각각 쪼개지 않고, “한 건의 흐름”으로 추적 가능한 타임라인·디테일 뷰 도입.',
      '정산 주기와 예외 케이스(수수료 조정, 클레임, 부분취소 등)를 별도 규칙 엔진 UI로 모듈화해서 재사용성을 확보.',
    ],
    outcomes: [
      '정산 관련 반복 문의(“이번 달 정산이 왜 이 금액인가요?”)가 론칭 후 수 주 내에 눈에 띄게 감소.',
      '운영팀 신규 인원 온보딩 기간을 기존 레거시 시스템 대비 절반 수준으로 단축.',
      '향후 선정산·대금지급 등 부가 솔루션을 붙일 수 있도록 데이터/도메인 구조를 백오피스 단계에서부터 정리.',
    ],
  },
  {
    id: 'comeagain',
    name: '컴어게인 (가칭) · 재방문/로열티 분석 콘솔',
    category: 'Loyalty · Analytics',
    label: 'Co-Build',
    tagline:
      '매장·브랜드의 재방문율과 구간별 LTV를 한눈에 파악하는 로열티 분석 콘솔 및 운영툴.',
    role: '서비스 UX 구조 설계, 대시보드/리포트 UI, 프론트엔드 개발',
    scope:
      '재방문·이탈 구간 분석, 기간/매장별 LTV, 프로모션 효과 측정, 고객 세그먼트 및 등급 관리',
    stack: 'React · Next.js · Node.js · Data Warehouse 연동',
    context:
      '재방문과 로열티가 중요한 서비스였지만, 데이터가 여러 시스템에 흩어져 있어 “지금 어떤 고객군이 핵심인지” 한눈에 보기 어려웠습니다.',
    approach: [
      '경영진/마케팅/매장 매니저 등 사용자 그룹별로 “하루에 진짜로 보는 지표”만 선별해 역할 기반 뷰 구성.',
      '기간·매장·캠페인 필터를 공통 컴포넌트로 설계해, 어느 화면에서도 동일한 필터 경험 제공.',
      '리포트는 전부 다운로드/공유 기준으로, 내부 보고서 포맷과 최대한 유사하게 맞춘 PDF/CSV 구조 제안.',
    ],
    outcomes: [
      '여러 시스템에 흩어져 있던 재방문 데이터를 한 콘솔에서 통합 조회 가능해짐.',
      '“이번 분기 재방문율이 떨어진 구간” 분석 시간이 수 시간 → 수 분 단위로 단축.',
      '내부 보고용 스크린샷·엑셀 편집 시간을 줄여 실제 액션 설계에 시간을 쓸 수 있도록 지원.',
    ],
  },
  {
    id: 'bonaeja',
    name: '보내자 (가칭) · 발송/문자 운영 백오피스',
    category: 'Messaging · Operations',
    label: 'Sub Build & Ops',
    tagline:
      '문자/알림 발송, 템플릿 관리, 발송 결과·정산까지 이어지는 발송 운영 프로세스를 한 화면에 정리한 백오피스.',
    role: '운영 플로우 정리, 운영툴 UX, 서브 모듈 프론트엔드',
    scope:
      '발송 캠페인 관리, 템플릿/채널 관리, 발송 결과/리포트, 발송 단가·정산 현황, 운영 권한 관리',
    stack: 'Vue 3 · TypeScript · REST API · Message Queue 연동',
    context:
      'CS/운영팀이 여러 화면에서 발송 결과를 확인해야 했고, 실패·재발송 발생 시 원인 추적과 재처리가 번거로운 상황이었습니다.',
    approach: [
      '“한 티켓 안에서 모든 정보를 본다”는 원칙으로, 캠페인·템플릿·발송 결과·정산 정보를 한 디테일 패널에 집약.',
      '발송 단계(요청 → 큐잉 → 채널별 발송 → 결과 수신)를 타임라인 UI로 시각화해, 병목 구간 파악이 쉽도록 구성.',
      '운영자가 자주 사용하는 필터/정렬/검색 조건을 저장해 두는 “운영 북마크” 기능을 제안하고 설계.',
    ],
    outcomes: [
      '발송 실패/재발송 관련 CS 처리 시간을 케이스당 수 분 단위로 단축.',
      '채널/템플릿별 성과를 데이터 기반으로 비교할 수 있어, 발송 전략 실험 속도가 빨라짐.',
      '운영 패턴이 정리되면서 이후 다른 내부툴 모듈에도 동일한 UI/UX 패턴을 확장 적용.',
    ],
  },
];

const enterpriseCollections = {
  pg: [
    '정산/거래 데이터 중심의 가맹점·수수료 관리 백오피스',
    '여러 정산 사이클을 동시에 다루는 정산 스케줄·리포트 시스템',
    '수수료·프로모션 규칙을 UI로 관리하는 규칙 엔진형 운영툴',
    '정산/거래 로그와 이상 징후 모니터링을 위한 운영 대시보드',
  ],
  commerce: [
    '오프라인 매장 + 온라인몰 통합 매출/정산 대시보드',
    '멤버십/포인트·스탬프 등급 관리와 재방문 분석 콘솔',
    '프로모션/쿠폰 성과 리포트 및 매장·브랜드 KPI 보드',
    '여러 브랜드가 함께 사용하는 B2B 주문/정산 포털 백오피스',
  ],
  saas: [
    'B2B SaaS의 온보딩/로그/사용량 분석 콘솔 및 과금 리포트',
    '사내 운영팀용 티켓/이슈·승인 플로우 관리 내부툴',
    '데이터 팀을 위한 실험/AB 테스트 관리 콘솔 프론트엔드',
    '복잡한 조직·권한 구조를 가진 고객사를 위한 Role 기반 접근제어 UI',
  ],
};
</script>

<style scoped>
/* ============================================================
   BASE · 전체 페이지 톤 (Hero 섹션과 동일한 금빛 라이트 테마 계열)
   ============================================================ */
.work {
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.2), transparent 55%),
    radial-gradient(circle at 100% 0%, rgba(252, 211, 77, 0.12), transparent 55%),
    linear-gradient(180deg, #fefcf6 0%, #f9fafb 40%, #f3f4f6 100%);
  color: #111827;
  font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR',
    -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', sans-serif;
}

/* 공통 헤더/섹션 텍스트 스타일 */
.work-hero__eyebrow,
.work-section__eyebrow,
.work-cta__eyebrow {
  font-size: 0.78rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #a16207;
  font-weight: 600;
}

/* ============================================================
   HERO
   ============================================================ */
.work-hero {
  position: relative;
  padding: 3.8rem 0 3rem;
  overflow: hidden;
}

.work-hero__bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(209, 213, 219, 0.18) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(209, 213, 219, 0.18) 1px, transparent 1px);
  background-size: 90px 90px;
  opacity: 0.35;
  mask-image: radial-gradient(ellipse 80% 65% at 50% 25%, black 0%, transparent 100%);
  pointer-events: none;
}

.work-hero__inner {
  position: relative;
  z-index: 1;
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
  text-align: center;
}

.work-hero__header {
  max-width: 46rem;
}

.work-hero__title {
  margin: 0.6rem 0 0.9rem;
  font-size: clamp(2.1rem, 3.2vw, 3.2rem);
  line-height: 1.2;
  letter-spacing: -0.045em;
  font-weight: 700;
  color: #111827;
}

.work-hero__title-highlight {
  background: linear-gradient(120deg, #fbbf24, #f59e0b, #d97706);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.work-hero__subtitle {
  margin: 0;
  font-size: 0.98rem;
  line-height: 1.8;
  color: #4b5563;
}

.work-hero__subtitle span {
  font-weight: 600;
  color: #b45309;
}

/* Hero Metrics */
.work-hero__metrics {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  display: flex;
  align-items: stretch;
  gap: 1.6rem;
  padding: 1.4rem 1.5rem;
  border-radius: 1.4rem;
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.3), transparent 55%),
    rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(229, 231, 235, 0.95);
  box-shadow:
    0 18px 40px rgba(148, 117, 38, 0.16),
    0 0 0 1px rgba(255, 255, 255, 0.9);
}

.work-metric {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.work-metric__label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #6b7280;
}

.work-metric__value {
  font-size: 1.35rem;
  font-weight: 700;
  color: #111827;
  letter-spacing: -0.03em;
}

.work-metric__desc {
  font-size: 0.84rem;
  color: #4b5563;
  line-height: 1.7;
}

.work-metric--divider {
  max-width: 1px;
  background: linear-gradient(
    to bottom,
    rgba(209, 213, 219, 0),
    rgba(209, 213, 219, 0.9),
    rgba(209, 213, 219, 0)
  );
}

/* ============================================================
   SECTION 공통
   ============================================================ */
.work-section {
  padding: 1.6rem 0 3.4rem;
}

.work-section__inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  align-items: center;
}

.work-section__header {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;
}

.work-section__header--compact {
  align-items: center;
}

.work-section__title {
  margin: 0.5rem 0 0.4rem;
  font-size: clamp(1.6rem, 2.2vw, 2.1rem);
  line-height: 1.5;
  letter-spacing: -0.03em;
  color: #111827;
}

.work-section__title-highlight {
  color: #b45309;
  font-weight: 700;
}

.work-section__description {
  margin: 0;
  max-width: 32rem;
  font-size: 0.92rem;
  color: #4b5563;
  line-height: 1.8;
}

.work-section__description span {
  font-weight: 600;
  color: #92400e;
}

/* ============================================================
   FEATURED PROJECT GRID
   ============================================================ */
.work-grid {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}

/* Card base */
.work-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 1.4rem 1.3rem 1.3rem;
  border-radius: 1.2rem;
  background:
    radial-gradient(circle at 0% 0%, rgba(254, 243, 199, 0.65), transparent 60%),
    #ffffff;
  border: 1px solid rgba(229, 231, 235, 0.98);
  box-shadow:
    0 16px 36px rgba(15, 23, 42, 0.06),
    0 0 0 1px rgba(255, 255, 255, 0.9);
  overflow: hidden;
}

/* Header */
.work-card__header {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  margin-bottom: 0.9rem;
}

.work-card__badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.work-card__badge {
  font-size: 0.72rem;
  padding: 0.18rem 0.55rem;
  border-radius: 999px;
  border: 1px solid rgba(217, 119, 6, 0.65);
  background: rgba(251, 191, 36, 0.12);
  color: #92400e;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.work-card__badge--soft {
  border-color: rgba(209, 213, 219, 0.9);
  background: rgba(249, 250, 251, 0.95);
  color: #6b7280;
}

.work-card__title {
  margin: 0;
  font-size: 1.02rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #111827;
}

.work-card__subtitle {
  margin: 0;
  font-size: 0.86rem;
  color: #4b5563;
  line-height: 1.6;
}

/* Meta */
.work-card__meta {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.85rem;
  margin: 0.9rem 0;
}

.work-card__meta-item {
  display: flex;
  flex-direction: column;
  gap: 0.12rem;
}

.work-card__meta dt {
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.11em;
  color: #9ca3af;
}

.work-card__meta dd {
  margin: 0;
  font-size: 0.8rem;
  color: #374151;
}

/* Body */
.work-card__body {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  margin-top: 0.4rem;
}

.work-card__section-title {
  margin: 0;
  font-size: 0.8rem;
  font-weight: 600;
  color: #92400e;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.work-card__text {
  margin: 0;
  font-size: 0.84rem;
  color: #4b5563;
  line-height: 1.7;
}

.work-card__bullets {
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.32rem;
}

.work-card__bullets li {
  font-size: 0.82rem;
  color: #4b5563;
  line-height: 1.6;
}

/* Outcome tags */
.work-card__tags {
  margin: 0.1rem 0 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.work-card__tags li {
  font-size: 0.78rem;
  padding: 0.22rem 0.6rem;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.96);
  border: 1px dashed rgba(209, 213, 219, 0.9);
  color: #374151;
}

/* Footer */
.work-card__footer {
  margin-top: 0.9rem;
  padding-top: 0.7rem;
  border-top: 1px dashed rgba(209, 213, 219, 0.85);
}

.work-card__footer-text {
  margin: 0;
  font-size: 0.8rem;
  color: #6b7280;
}

.work-card__footer-text span {
  font-weight: 600;
  color: #111827;
}

/* ============================================================
   ENTERPRISE COLLECTION
   ============================================================ */
.work-collection {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.6rem;
}

.work-collection__column {
  padding: 1.1rem 1.1rem 1.1rem;
  border-radius: 1.1rem;
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(229, 231, 235, 0.98);
  box-shadow: 0 12px 32px rgba(15, 23, 42, 0.04);
}

.work-collection__title {
  margin: 0 0 0.6rem;
  font-size: 0.96rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #111827;
}

.work-collection__list {
  margin: 0;
  padding-left: 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}

.work-collection__list li {
  font-size: 0.82rem;
  color: #4b5563;
  line-height: 1.5;
}

/* ============================================================
   CTA
   ============================================================ */
.work-cta {
  width: 100%;
  margin-top: 2.3rem;
  padding: 1.4rem 1.5rem;
  border-radius: 1.3rem;
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.38), transparent 60%),
    linear-gradient(135deg, #fef3c7, #fffbeb);
  border: 1px solid rgba(234, 179, 8, 0.7);
  box-shadow:
    0 20px 45px rgba(180, 132, 36, 0.3),
    0 0 0 1px rgba(255, 255, 255, 0.9);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.8rem;
  align-items: center;
}

.work-cta__content {
  max-width: 32rem;
}

.work-cta__title {
  margin: 0.5rem 0 0.5rem;
  font-size: 1.12rem;
  line-height: 1.7;
  letter-spacing: -0.02em;
  color: #78350f;
}

.work-cta__title span {
  font-weight: 700;
}

.work-cta__description {
  margin: 0;
  font-size: 0.9rem;
  color: #854d0e;
  line-height: 1.7;
}

.work-cta__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  align-items: center;
}

.work-cta__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.8rem 1.6rem;
  border-radius: 999px;
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: none;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease,
    border-color 0.18s ease;
  white-space: nowrap;
}

.work-cta__button--primary {
  background: linear-gradient(135deg, #fbbf24, #f59e0b, #d97706);
  color: #111827;
  box-shadow:
    0 12px 32px rgba(180, 132, 36, 0.4),
    0 0 0 1px rgba(234, 179, 8, 0.8);
}

.work-cta__button--primary:hover {
  transform: translateY(-2px);
  box-shadow:
    0 16px 42px rgba(180, 132, 36, 0.55),
    0 0 0 1px rgba(202, 138, 4, 0.9);
}

.work-cta__button--secondary {
  background: rgba(255, 255, 255, 0.98);
  color: #78350f;
  border: 1px solid rgba(253, 224, 71, 0.8);
  box-shadow: 0 10px 30px rgba(180, 132, 36, 0.28);
}

.work-cta__button--secondary:hover {
  background: #fefce8;
  transform: translateY(-2px);
}

/* ============================================================
   RESPONSIVE
   ============================================================ */
@media (max-width: 1024px) {
  .work-hero {
    padding-top: 3.2rem;
  }

  .work-hero__inner {
    padding: 0 1.4rem;
  }

  .work-hero__metrics {
    flex-direction: column;
  }

  .work-metric--divider {
    height: 1px;
    max-width: none;
    background: linear-gradient(
      to right,
      rgba(209, 213, 219, 0),
      rgba(209, 213, 219, 0.9),
      rgba(209, 213, 219, 0)
    );
  }

  .work-section__inner {
    padding: 0 1.4rem;
  }

  .work-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .work-collection {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .work-cta {
    align-items: flex-start;
  }
}

@media (max-width: 768px) {
  .work-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .work-collection {
    grid-template-columns: minmax(0, 1fr);
  }

  .work-cta {
    flex-direction: column;
  }

  .work-cta__actions {
    width: 100%;
  }

  .work-cta__button {
    flex: 1;
    justify-content: center;
  }
}

@media (max-width: 640px) {
  .work-hero {
    padding: 3rem 0 2.4rem;
  }

  .work-section {
    padding: 1.4rem 0 2.6rem;
  }

  .work-card {
    padding: 1.2rem 1.05rem 1.1rem;
  }

  .work-card__meta {
    grid-template-columns: minmax(0, 1fr);
  }
}

/* ============================================================
   ACCESSIBILITY
   ============================================================ */
.work-cta__button:focus-visible {
  outline: 2px solid #fbbf24;
  outline-offset: 3px;
}
</style>
