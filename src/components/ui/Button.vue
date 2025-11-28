<!-- src/components/ui/Button.vue -->
<template>
  <component
    :is="tag"
    class="bt-button"
    :class="buttonClass"
    v-bind="rootAttrs"
  >
    <!-- 로딩 인디케이터 -->
    <span v-if="loading" class="bt-button__spinner" aria-hidden="true">
      <span class="bt-button__spinner-circle"></span>
    </span>

    <!-- leading 아이콘 -->
    <span
      v-if="$slots.leading || leadingIcon"
      class="bt-button__icon bt-button__icon--leading"
    >
      <slot name="leading">
        <component v-if="leadingIcon" :is="leadingIcon" aria-hidden="true" />
      </slot>
    </span>

    <!-- 라벨 -->
    <span class="bt-button__label">
      <slot />
    </span>

    <!-- trailing 아이콘 -->
    <span
      v-if="$slots.trailing || trailingIcon"
      class="bt-button__icon bt-button__icon--trailing"
    >
      <slot name="trailing">
        <component v-if="trailingIcon" :is="trailingIcon" aria-hidden="true" />
      </slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'subtle' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonTag = 'button' | 'a' | 'span';

const props = defineProps<{
  variant?: ButtonVariant;
  size?: ButtonSize;
  tag?: ButtonTag;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  leadingIcon?: any;
  trailingIcon?: any;
  ariaLabel?: string;
}>();

const emits = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const variant = computed<ButtonVariant>(() => props.variant ?? 'primary');
const size = computed<ButtonSize>(() => props.size ?? 'md');
const tag = computed<ButtonTag>(() => props.tag ?? 'button');

const isDisabledLike = computed(() => !!props.disabled || !!props.loading);

const buttonClass = computed(() => [
  `bt-button--variant-${variant.value}`,
  `bt-button--size-${size.value}`,
  {
    'bt-button--full-width': !!props.fullWidth,
    'bt-button--loading': !!props.loading,
    'bt-button--disabled': isDisabledLike.value,
  },
]);

const rootAttrs = computed(() => {
  const base: Record<string, unknown> = {
    href: tag.value === 'a' ? props.href : undefined,
    type: tag.value === 'button' ? (props.type ?? 'button') : undefined,
    'aria-label': props.ariaLabel,
    'aria-disabled': isDisabledLike.value ? 'true' : undefined,
    disabled: tag.value === 'button' ? isDisabledLike.value : undefined,
    role: undefined as string | undefined,
    tabindex: undefined as number | undefined,
    onClick: (event: MouseEvent) => {
      if (isDisabledLike.value) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      emits('click', event);
    },
  };

  // span / a 를 버튼처럼 쓸 때 접근성 보완
  if ((tag.value === 'span' || tag.value === 'a') && !isDisabledLike.value) {
    base.role = 'button';
    if (tag.value === 'span') {
      base.tabindex = 0;
    }
  }

  return base;
});
</script>

<style scoped>
.bt-button {
  /* BrainTree / 엔터프라이즈 공통 팔레트 --------------------------- */
  --bt-btn-gold-soft: #facc6b;
  --bt-btn-gold-strong: #d1a037;
  --bt-btn-gold-stronger: #b7791f;
  --bt-btn-gold-border: rgba(209, 160, 55, 0.9);
  --bt-btn-gold-border-soft: rgba(209, 160, 55, 0.6);

  --bt-btn-slate-bg: rgba(15, 23, 42, 0.96);
  --bt-btn-slate-bg-soft: rgba(15, 23, 42, 0.9);
  --bt-btn-slate-border: rgba(51, 65, 85, 0.92);
  --bt-btn-slate-border-soft: rgba(55, 65, 81, 0.85);

  --bt-btn-text-strong: #020617;
  --bt-btn-text-on-dark: #e5e7eb;
  --bt-btn-text-soft: #9ca3af;

  --bt-btn-danger-soft: rgba(248, 113, 113, 0.1);
  --bt-btn-danger-main: #dc2626;
  --bt-btn-danger-border: rgba(220, 38, 38, 0.9);

  --bt-btn-radius: 999px;
  --bt-btn-border-width: 1px;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  border-radius: var(--bt-btn-radius);
  border-width: var(--bt-btn-border-width);
  border-style: solid;
  font-weight: 600;
  font-family: inherit;
  letter-spacing: 0.04em;
  text-transform: none;
  line-height: 1.1;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  position: relative;
  overflow: hidden;
  transition:
    background-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 160ms cubic-bezier(0.16, 1, 0.3, 1),
    color 160ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 160ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 160ms cubic-bezier(0.16, 1, 0.3, 1),
    opacity 120ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* 사이즈 ----------------------------------------------------------- */
.bt-button--size-sm {
  padding: 0.36rem 0.9rem;
  font-size: 0.8rem;
}

.bt-button--size-md {
  padding: 0.48rem 1.1rem;
  font-size: 0.85rem;
}

.bt-button--size-lg {
  padding: 0.6rem 1.45rem;
  font-size: 0.9rem;
}

/* 전체 폭 --------------------------------------------------------- */
.bt-button--full-width {
  width: 100%;
}

/* 내용 ------------------------------------------------------------ */
.bt-button__label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.bt-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.bt-button__icon > * {
  width: 1rem;
  height: 1rem;
}

/* leading/trailing 여백 살짝 조정 */
.bt-button__icon--leading {
  margin-right: 0.05rem;
}

.bt-button__icon--trailing {
  margin-left: 0.05rem;
}

/* 로딩 상태 ------------------------------------------------------- */
.bt-button__spinner {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.25rem;
}

.bt-button__spinner-circle {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 999px;
  border-width: 2px;
  border-style: solid;
  border-color: currentColor;
  border-top-color: transparent;
  animation: bt-btn-spin 700ms linear infinite;
}

.bt-button--loading {
  pointer-events: none;
}

/* 비활성 ---------------------------------------------------------- */
.bt-button--disabled {
  opacity: 0.55;
  cursor: not-allowed;
  box-shadow: none;
  transform: none;
}

/* VARIANT: primary (골드 메인 CTA) -------------------------------- */
.bt-button--variant-primary {
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(250, 204, 21, 0.3),
      transparent 55%
    ),
    linear-gradient(135deg, var(--bt-btn-gold-soft), var(--bt-btn-gold-strong));
  border-color: var(--bt-btn-gold-border);
  color: var(--bt-btn-text-strong);
  box-shadow:
    0 14px 32px rgba(209, 160, 55, 0.45),
    0 0 0 1px rgba(15, 23, 42, 0.9);
}

.bt-button--variant-primary:hover:not(.bt-button--disabled) {
  transform: translateY(-1px);
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(250, 204, 21, 0.4),
      transparent 60%
    ),
    linear-gradient(135deg, var(--bt-btn-gold-soft), var(--bt-btn-gold-stronger));
  box-shadow:
    0 20px 44px rgba(209, 160, 55, 0.6),
    0 0 0 1px rgba(15, 23, 42, 0.96);
}

.bt-button--variant-primary:active:not(.bt-button--disabled) {
  transform: translateY(0);
  box-shadow:
    0 10px 28px rgba(209, 160, 55, 0.5),
    0 0 0 1px rgba(15, 23, 42, 0.98);
}

/* VARIANT: secondary (다크 슬레이트) ------------------------------ */
.bt-button--variant-secondary {
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(15, 23, 42, 0.85),
      transparent 60%
    ),
    var(--bt-btn-slate-bg-soft);
  border-color: var(--bt-btn-slate-border);
  color: var(--bt-btn-text-on-dark);
  box-shadow: 0 10px 28px rgba(15, 23, 42, 0.7);
}

.bt-button--variant-secondary:hover:not(.bt-button--disabled) {
  transform: translateY(-1px);
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(15, 23, 42, 0.9),
      transparent 60%
    ),
    var(--bt-btn-slate-bg);
  border-color: var(--bt-btn-slate-border-soft);
  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.85);
}

/* VARIANT: outline ------------------------------------------------- */
.bt-button--variant-outline {
  background: rgba(15, 23, 42, 0.02);
  border-color: rgba(148, 163, 184, 0.8);
  color: #e5e7eb;
}

.bt-button--variant-outline:hover:not(.bt-button--disabled) {
  background: rgba(15, 23, 42, 0.1);
  border-color: rgba(209, 213, 219, 0.9);
}

/* VARIANT: ghost --------------------------------------------------- */
.bt-button--variant-ghost {
  background: transparent;
  border-color: transparent;
  color: #e5e7eb;
}

.bt-button--variant-ghost:hover:not(.bt-button--disabled) {
  background: rgba(15, 23, 42, 0.3);
}

/* VARIANT: subtle (라이트 톤 / 압박 적은 보조 액션) ---------------- */
.bt-button--variant-subtle {
  background: rgba(15, 23, 42, 0.08);
  border-color: rgba(31, 41, 55, 0.6);
  color: var(--bt-btn-text-soft);
}

.bt-button--variant-subtle:hover:not(.bt-button--disabled) {
  background: rgba(15, 23, 42, 0.14);
  border-color: rgba(148, 163, 184, 0.8);
  color: #e5e7eb;
}

/* VARIANT: danger -------------------------------------------------- */
.bt-button--variant-danger {
  background: var(--bt-btn-danger-soft);
  border-color: var(--bt-btn-danger-border);
  color: var(--bt-btn-danger-main);
}

.bt-button--variant-danger:hover:not(.bt-button--disabled) {
  background: rgba(248, 113, 113, 0.16);
  border-color: rgba(220, 38, 38, 1);
}

/* 포커스 링 -------------------------------------------------------- */
.bt-button:focus-visible {
  outline: 2px solid #facc15;
  outline-offset: 2px;
}

/* 스피너 애니메이션 ------------------------------------------------ */
@keyframes bt-btn-spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
