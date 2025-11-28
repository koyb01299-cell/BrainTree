<!-- src/pages/Contact/ContactPage.vue -->
<template>
  <main
    class="contact"
    aria-label="BrainTree 프로젝트 및 협업 문의 페이지"
  >
    <!-- 글로벌 배경 레이어 -->
    <div class="contact__bg" aria-hidden="true"></div>

    <!-- 중앙 정렬 영역 -->
    <div class="bt-container contact__shell">
      <section class="contact__panel">

        <!-- ========================== HEADER ========================== -->
        <header class="contact__header">
          <p class="contact__eyebrow">PROJECT · COLLABORATION · HIRING</p>

          <h1 class="contact__title">
            부담 없이
            <span class="contact__title-highlight">한 번 이야기부터</span>
            시작해요.
          </h1>

          <p class="contact__subtitle">
            PG · 정산 · 플랫폼 운영처럼
            <span>화면과 권한이 복잡한 백오피스</span>라면  
            현재 상황만 간단히 공유해 주세요.  
            예산과 기간은 대략적인 방향만 가지고도 충분히 논의할 수 있습니다.
          </p>

          <ul class="contact__tags">
            <li><UiTag tone="accent" size="md">PG · 정산 · 리스크 백오피스</UiTag></li>
            <li><UiTag tone="accent-soft" size="md">플랫폼 운영 · 파트너센터</UiTag></li>
            <li><UiTag tone="accent-soft" size="md">사내 도구 · 내부 관리자</UiTag></li>
          </ul>
        </header>

        <!-- ========================== FORM CARD ========================== -->
        <UiCard class="contact__card" variant="soft">
          <div class="contact__card-head">
            <p class="contact__card-eyebrow">간단한 정보만 적어 주세요</p>
            <p class="contact__card-helper">
              필수 항목은 최소화했습니다.  
              내부에서 먼저 검토한 뒤,
              <strong>1영업일 이내</strong>에 이메일로 회신 드립니다.
            </p>
          </div>

          <form class="contact__form" @submit.prevent="handleSubmit">
            <div class="contact__form-grid">
              <UiTextInput
                v-model="form.name"
                label="이름"
                placeholder="예: 김OO"
                autocomplete="name"
                required
              />

              <UiTextInput
                v-model="form.email"
                label="이메일"
                type="email"
                placeholder="예: you@company.com"
                autocomplete="email"
                required
              />

              <UiTextInput
                v-model="form.company"
                label="회사 / 팀명 (선택)"
                placeholder="예: OO페이 · 정산팀"
                autocomplete="organization"
              />

              <UiTextInput
                v-model="form.context"
                label="현재 서비스 링크 (선택)"
                placeholder="서비스 URL 또는 간단한 설명"
              />
            </div>

            <!-- ========================== OPTION CHIPS ========================== -->
            <div class="contact__form-field">
              <label class="contact__field-label">
                어떤 내용을 가장 먼저 함께 보고 싶으신가요?
                <span class="contact__field-optional">선택</span>
              </label>

              <div class="contact__options">
                <button
                  v-for="option in primaryTopics"
                  :key="option.value"
                  type="button"
                  class="contact__option-chip"
                  :class="{
                    'contact__option-chip--active': form.topic === option.value,
                  }"
                  @click="selectTopic(option.value)"
                >
                  {{ option.label }}
                </button>
              </div>
            </div>

            <!-- ========================== MESSAGE TEXTAREA ========================== -->
            <div class="contact__form-field">
              <UiTextArea
                v-model="form.message"
                label="간단한 배경과 고민"
                placeholder="현재 사용하는 정산/운영 화면, 불편한 점, 개선하고 싶은 흐름 등을 편하게 적어 주세요."
                rows="4"
              />
              <p class="contact__field-hint">
                정리가 덜 되었다면  
                <strong>“현재 사용하는 도구와 가장 답답한 지점”</strong>만 적어도 충분합니다.
              </p>
            </div>

            <!-- ========================== BUTTONS ========================== -->
            <div class="contact__actions">
              <UiButton type="submit" size="lg" variant="primary" class="contact__primary-btn">
                이 내용으로 문의 보내기
              </UiButton>

              <p class="contact__actions-note">
                <span>혹은 바로 이메일로 보내셔도 괜찮습니다.</span>
                <a href="mailto:hello@braintree.studio" class="contact__mail-link">
                  hello@braintree.studio
                </a>
              </p>
            </div>

            <!-- ========================== SUCCESS ========================== -->
            <transition name="contact-fade">
              <p v-if="submitted" class="contact__success" role="status">
                문의가 정상적으로 접수되었다고 가정합니다.  
                실제 전송은 아직 연동되어 있지 않지만,  
                <span>이 정보면 첫 미팅 준비에 충분합니다.</span>
              </p>
            </transition>
          </form>
        </UiCard>
      </section>
    </div>
  </main>
</template>


<script setup lang="ts">
import { reactive, ref } from 'vue';

import UiButton from '@/components/ui/Button.vue';
import UiCard from '@/components/ui/Card.vue';
import UiTag from '@/components/ui/Tag.vue';
import UiTextArea from '@/components/ui/TextArea.vue';
import UiTextInput from '@/components/ui/TextInput.vue';

interface ContactForm {
  name: string;
  email: string;
  company: string;
  context: string;
  topic: string | null;
  message: string;
}

interface TopicOption {
  label: string;
  value: string;
}

const form = reactive<ContactForm>({
  name: '',
  email: '',
  company: '',
  context: '',
  topic: null,
  message: '',
});

const submitted = ref(false);

const primaryTopics: TopicOption[] = [
  { label: 'PG · 정산 백오피스 개편', value: 'pg-settlement' },
  { label: '플랫폼 운영 / 파트너센터', value: 'platform-ops' },
  { label: '사내 도구 / 내부 자동화', value: 'internal-tools' },
  { label: '아직 정확히 모르겠어요', value: 'not-sure' },
];

const selectTopic = (value: string) => {
  form.topic = form.topic === value ? null : value;
};

const handleSubmit = () => {
  submitted.value = true;
};
</script>


<style scoped>
/* ===========================================================
   BrainTree Contact Page — Enterprise Gold Edition
=========================================================== */
.contact {
  --bt-bg-upper: #fffaf2;
  --bt-bg-lower: #f4ebdd;
  --bt-bg-soft: #fdf7ec;

  --bt-text-strong: #221d16;
  --bt-text-default: #373026;
  --bt-text-soft: #6b5e4a;
  --bt-text-muted: #8b7d66;

  --bt-accent-main: #d1a037;
  --bt-accent-strong: #b7791f;

  position: relative;
  overflow: hidden;
  isolation: isolate;
  min-height: 100vh;
}

/* ========================== BACKGROUND ========================== */
.contact__bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 211, 77, 0.28), transparent 55%),
    radial-gradient(circle at 75% 100%, rgba(251, 191, 36, 0.18), transparent 60%),
    linear-gradient(180deg, var(--bt-bg-upper), var(--bt-bg-lower));
  z-index: -2;
}

.contact__bg::before {
  content: '';
  position: absolute;
  width: 520px;
  height: 520px;
  left: 50%;
  top: -10%;
  transform: translateX(-50%);
  border-radius: 999px;
  background: radial-gradient(circle at 30% 0%, #facc6b, #f97316);
  opacity: 0.32;
  filter: blur(38px);
  mix-blend-mode: multiply;
  animation: contactGlow 19s ease-in-out infinite alternate;
}

/* ========================== SHELL ========================== */
.contact__shell {
  max-width: 960px;
  margin: 0 auto;
  padding: 4.4rem 1.6rem 4.4rem;
  min-height: calc(100vh - 4.5rem);
  display: flex;
  align-items: center;
  justify-content: center;

  font-family: 'Pretendard', 'Apple SD Gothic Neo', 'Noto Sans KR',
    -apple-system, BlinkMacSystemFont, system-ui, 'Segoe UI', sans-serif;
}

.contact__panel {
  width: 100%;
  max-width: 840px;
  text-align: center;
}

/* ========================== HEADER ========================== */
.contact__eyebrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.45rem;
  padding: 0.36rem 1.15rem;
  border-radius: 999px;
  border: 1px solid rgba(209, 160, 55, 0.4);
  background:
    radial-gradient(circle at top left, rgba(252, 211, 77, 0.32), transparent 60%),
    var(--bt-bg-soft);
  font-size: 0.72rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--bt-text-muted);
  margin-bottom: 0.9rem;
}

.contact__title {
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.045em;
  color: var(--bt-text-strong);
  font-size: 2.3rem;
  line-height: 1.35;
}

.contact__title-highlight {
  color: var(--bt-accent-strong);
}

.contact__subtitle {
  margin-top: 1rem;
  font-size: 1rem;
  line-height: 1.82;
  color: var(--bt-text-soft);
}

.contact__subtitle span {
  font-weight: 600;
  color: var(--bt-text-default);
}

/* ========================== TAGS ========================== */
.contact__tags {
  margin-top: 1.2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.55rem;
}

/* ========================== CARD ========================== */
.contact__card {
  margin: 1.6rem auto 0;
  max-width: 820px;
  padding: 1.8rem 1.7rem 1.7rem;
}

.contact__card-head {
  text-align: left;
  margin-bottom: 1.25rem;
}

.contact__card-eyebrow {
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 0.2rem;
  color: var(--bt-text-muted);
}

.contact__card-helper {
  font-size: 0.86rem;
  color: var(--bt-text-soft);
  line-height: 1.75;
}

.contact__card-helper strong {
  color: var(--bt-text-default);
}

/* ========================== FORM ========================== */
.contact__form {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.contact__form-grid {
  display: grid;
  gap: 1rem;
}

@media (min-width: 720px) {
  .contact__form-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ========================== FIELDS ========================== */
.contact__form-field {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.contact__field-label {
  font-size: 0.84rem;
  font-weight: 500;
  color: var(--bt-text-default);
}

.contact__field-optional {
  font-size: 0.76rem;
  color: var(--bt-text-muted);
}

/* ========================== OPTION CHIPS ========================== */
.contact__options {
  margin-top: 0.3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.contact__option-chip {
  border-radius: 999px;
  padding: 0.34rem 0.85rem;
  border: 1px solid rgba(209, 213, 219, 0.8);
  background-color: #ffffff;
  font-size: 0.8rem;
  color: var(--bt-text-soft);
  cursor: pointer;

  transition:
    background-color 160ms,
    border-color 160ms,
    box-shadow 160ms,
    color 160ms;
}

.contact__option-chip:hover {
  border-color: rgba(209, 160, 55, 0.6);
  background:
    radial-gradient(circle at 0% 0%, rgba(252,211,77,0.15), transparent 60%),
    #fff;
  color: var(--bt-text-default);
}

.contact__option-chip--active {
  border-color: rgba(209, 160, 55, 0.9);
  background:
    radial-gradient(circle at 0% 0%, rgba(252,211,77,0.25), transparent 55%),
    #fffef7;
  box-shadow: 0 0 0 1px rgba(209,160,55,0.25);
  color: var(--bt-text-default);
}

/* ========================== TEXTAREA HINT ========================== */
.contact__field-hint {
  margin-top: 0.35rem;
  font-size: 0.82rem;
  color: var(--bt-text-muted);
  line-height: 1.65;
}

.contact__field-hint strong {
  color: var(--bt-text-default);
}

/* ========================== ACTIONS ========================== */
.contact__actions {
  margin-top: 0.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.contact__actions-note {
  font-size: 0.82rem;
  color: var(--bt-text-muted);
}

.contact__mail-link {
  color: var(--bt-accent-strong);
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.contact__mail-link:hover {
  color: #f97316;
}

/* ========================== SUCCESS ========================== */
.contact__success {
  margin-top: 0.45rem;
  font-size: 0.82rem;
  color: var(--bt-text-soft);
}

.contact__success span {
  color: var(--bt-text-default);
  font-weight: 600;
}

/* ========================== FADE ========================== */
.contact-fade-enter-active,
.contact-fade-leave-active {
  transition: opacity 160ms, transform 160ms;
}

.contact-fade-enter-from,
.contact-fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}

/* ========================== ANIMATION ========================== */
@keyframes contactGlow {
  0% { transform: translate3d(0,0,0) scale(1); }
  100% { transform: translate3d(55px, 28px, 0) scale(1.08); }
}
</style>
