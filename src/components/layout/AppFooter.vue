<!-- src/components/layout/AppFooter.vue -->
<template>
  <footer class="footer">
    <div class="footer__bg" aria-hidden="true"></div>

    <div class="footer__container">
      <!-- 상단 : 3 컬럼 정보 -->
      <section class="footer__grid" aria-label="회사 기본 정보">
        <!-- 회사 / 주소 -->
        <div class="footer__col">
          <div class="footer__col-header">
            <span class="footer__icon" aria-hidden="true">🏢</span>
            <span class="footer__col-title">BRAINTREE STUDIO</span>
          </div>
          <p class="footer__col-tagline">
            기업용 웹·모바일 제품과 내부 업무 시스템을 만드는<br />
            소프트웨어 솔루션 스튜디오입니다.
          </p>
          <p class="footer__col-text">
            서울 금천구 벚꽃로36길 30<br />
            가산KS타워 10층 1026호
          </p>
        </div>

        <!-- 문의 메일 -->
        <div class="footer__col">
          <div class="footer__col-header">
            <span class="footer__icon" aria-hidden="true">✉️</span>
            <span class="footer__col-title">문의 이메일</span>
          </div>
          <p class="footer__col-text footer__col-text--single">
            <a
              href="mailto:hello@braintree.studio"
              class="footer__link"
            >
              hello@braintree.studio
            </a>
          </p>
        </div>

        <!-- 대표 번호 -->
        <div class="footer__col">
          <div class="footer__col-header">
            <span class="footer__icon" aria-hidden="true">📞</span>
            <span class="footer__col-title">대표 번호</span>
          </div>
          <p class="footer__col-text footer__col-text--single">
            <a
              href="tel:01040065700"
              class="footer__link"
            >
              010-4006-5700
            </a>
          </p>
        </div>
      </section>

      <!-- 하단 : 라인 + 카피라이트 -->
      <section class="footer__bottom" aria-label="저작권 정보">
        <p class="footer__copyright">
          © {{ currentYear }} BrainTree Studio · All Rights Reserved
        </p>
      </section>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  position: relative;
  padding: 2.6rem 0 2.1rem;
  background: #fff9f0;
  overflow: hidden;

  --footer-gold-main: #d1a037;
  --footer-gold-strong: #b7791f;
  --footer-text-strong: #111827;
  --footer-text-default: #374151;
  --footer-text-soft: #4b5563;
  --footer-text-muted: #9ca3af;
}

/* 기존 골드 톤 유지한 배경 */
.footer__bg {
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(circle at 8% 0%, rgba(252, 211, 77, 0.16), transparent 60%),
    radial-gradient(circle at 92% 110%, rgba(251, 191, 36, 0.13), transparent 65%),
    linear-gradient(180deg, #fff9f0, #f4ebdd);
}

.footer__container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.6rem;
}

/* 상단 3컬럼 ------------------------------------------------------ */
.footer__grid {
  display: grid;
  grid-template-columns: minmax(0, 2.1fr) repeat(2, minmax(0, 1.3fr));
  gap: 2rem 2.4rem;
  align-items: flex-start; /* 세 컬럼 모두 위쪽 정렬 */
}

/* 컬럼 공통 */
.footer__col {
  font-size: 0.86rem;
  color: var(--footer-text-default);
}

/* 헤더(아이콘 + 타이틀) 정렬 */
.footer__col-header {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-bottom: 0.4rem;
}

.footer__icon {
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem;
  background: rgba(209, 160, 55, 0.12);
  color: var(--footer-gold-strong);
}

.footer__col-title {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--footer-text-soft);
}

/* 텍스트 블록 */
.footer__col-tagline {
  margin: 0 0 0.35rem;
  font-size: 0.84rem;
  line-height: 1.6;
  color: var(--footer-text-soft);
}

.footer__col-text {
  margin: 0;
  font-size: 0.84rem;
  line-height: 1.6;
  color: var(--footer-text-default);
}

.footer__col-text--single {
  margin-top: 0.1rem;
}

/* 링크 ----------------------------------------------------------- */
.footer__link {
  color: var(--footer-text-default);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.16s ease-out, text-decoration-color 0.16s ease-out;
}

.footer__link:hover {
  color: var(--footer-gold-strong);
  text-decoration: underline;
  text-underline-offset: 2px;
}

/* 하단 카피라이트 ------------------------------------------------- */
.footer__bottom {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(209, 160, 55, 0.26);
}

.footer__copyright {
  margin: 0;
  font-size: 0.8rem;
  color: var(--footer-text-muted);
  text-align: center;
}

/* 반응형 ---------------------------------------------------------- */
@media (max-width: 900px) {
  .footer__grid {
    grid-template-columns: minmax(0, 1.7fr) minmax(0, 1.3fr);
  }
}

@media (max-width: 700px) {
  .footer__grid {
    grid-template-columns: minmax(0, 1fr);
    row-gap: 1.4rem;
  }

  .footer__bottom {
    margin-top: 1.6rem;
  }
}
</style>
