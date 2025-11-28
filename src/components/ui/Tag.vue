<!-- src/components/ui/Tag.vue -->
<template>
  <span
    class="bt-tag"
    :class="tagClass"
    role="status"
    :aria-label="ariaLabel"
  >
    <span v-if="$slots.icon" class="bt-tag__icon">
      <slot name="icon" />
    </span>

    <span class="bt-tag__label">
      <slot />
    </span>
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Variant = 'default' | 'gold' | 'slate' | 'blue' | 'outline' | 'soft';
type Size = 'sm' | 'md' | 'lg';

const props = defineProps<{
  variant?: Variant;
  size?: Size;
  rounded?: boolean;
  selected?: boolean;
  disabled?: boolean;
  ariaLabel?: string;
}>();

const tagClass = computed(() => [
  `bt-tag--${props.variant ?? 'default'}`,
  `bt-tag--size-${props.size ?? 'md'}`,
  {
    'bt-tag--rounded': props.rounded,
    'bt-tag--selected': props.selected,
    'bt-tag--disabled': props.disabled,
  },
]);
</script>

<style scoped>
/* ================================================================
   BrainTree Tag System – Light Gold / Neutral Theme
   (전역 골드 팔레트에 맞춘 라이트 칩 컴포넌트)
================================================================ */

/* 공통 스타일 ---------------------------------------------------- */
.bt-tag {
  --bt-tag-radius: 0.65rem;

  /* Gold / Neutral Token */
  --bt-tag-gold-strong: #d1a037;
  --bt-tag-gold-soft: #facc6b;
  --bt-tag-gold-surface: #fff9e8;
  --bt-tag-gold-border: rgba(209, 160, 55, 0.8);
  --bt-tag-gold-border-soft: rgba(209, 160, 55, 0.55);
  --bt-tag-gold-text-strong: #4b380a;
  --bt-tag-gold-text-soft: #5b4a17;

  --bt-tag-neutral-surface: #f7f3eb;
  --bt-tag-neutral-border: rgba(120, 110, 90, 0.35);
  --bt-tag-neutral-text: #4b463c;
  --bt-tag-neutral-soft: #faf7f2;

  --bt-tag-blue-surface: #eef4ff;
  --bt-tag-blue-border: rgba(59, 130, 246, 0.5);
  --bt-tag-blue-text: #1d4ed8;

  display: inline-flex;
  align-items: center;
  gap: 0.32rem;
  border-radius: var(--bt-tag-radius);

  border: 1px solid transparent;
  padding: 0.22rem 0.52rem;

  font-weight: 500;
  font-size: 0.78rem;
  line-height: 1;

  white-space: nowrap;
  vertical-align: middle;

  transition:
    background-color 140ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 140ms cubic-bezier(0.16, 1, 0.3, 1),
    color 140ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 140ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 140ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* icon slot ------------------------------------------------------ */
.bt-tag__icon {
  display: inline-flex;
  align-items: center;
  font-size: 0.85em;
}

.bt-tag__label {
  display: inline-flex;
}

/* disabled ------------------------------------------------------- */
.bt-tag--disabled {
  opacity: 0.55;
  pointer-events: none;
}

/* rounded pill style --------------------------------------------- */
.bt-tag--rounded {
  border-radius: 999px;
}

/* sizes ---------------------------------------------------------- */
.bt-tag--size-sm {
  font-size: 0.72rem;
  padding: 0.16rem 0.45rem;
}

.bt-tag--size-md {
  font-size: 0.78rem;
  padding: 0.23rem 0.6rem;
}

.bt-tag--size-lg {
  font-size: 0.86rem;
  padding: 0.3rem 0.8rem;
}

/* ================================================================
   Variants  (모두 라이트 톤 / 네이비 배경 제거)
================================================================ */

/* DEFAULT – 뉴트럴 라이트 칩 ------------------------------------ */
.bt-tag--default {
  background:
    radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.7), transparent 55%),
    var(--bt-tag-neutral-soft);
  border-color: var(--bt-tag-neutral-border);
  color: var(--bt-tag-neutral-text);
}

/* SLATE – 예전 슬레이트 네이밍 유지, 색은 라이트 뉴트럴 ---------- */
.bt-tag--slate {
  background:
    linear-gradient(135deg, #f3eee4, var(--bt-tag-neutral-surface));
  border-color: var(--bt-tag-neutral-border);
  color: var(--bt-tag-neutral-text);
}

/* SOFT – 가장 옅은 화이트 칩 ------------------------------------ */
.bt-tag--soft {
  background:
    radial-gradient(circle at 0 0, rgba(255, 255, 255, 0.85), transparent 55%),
    #fffcf8;
  border-color: rgba(210, 210, 210, 0.7);
  color: #4b5563;
}

/* GOLD – 브랜드 하이라이트 -------------------------------------- */
.bt-tag--gold {
  background:
    radial-gradient(circle at 0 0, rgba(250, 204, 21, 0.24), transparent 60%),
    var(--bt-tag-gold-surface);
  border-color: var(--bt-tag-gold-border-soft);
  color: var(--bt-tag-gold-text-soft);
  box-shadow:
    0 6px 16px rgba(209, 160, 55, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.9);
}

/* GOLD selected -------------------------------------------------- */
.bt-tag--gold.bt-tag--selected {
  background:
    linear-gradient(
      135deg,
      rgba(250, 204, 21, 0.4),
      rgba(209, 160, 55, 0.25)
    ),
    #fffaf0;
  border-color: var(--bt-tag-gold-border);
  color: var(--bt-tag-gold-text-strong);
  box-shadow:
    0 0 0 1px rgba(209, 160, 55, 0.4),
    0 8px 20px rgba(209, 160, 55, 0.28);
}

/* BLUE – 인포/카테고리용 소프트 블루 ---------------------------- */
.bt-tag--blue {
  background:
    radial-gradient(circle at 0 0, rgba(147, 197, 253, 0.32), transparent 60%),
    var(--bt-tag-blue-surface);
  border-color: var(--bt-tag-blue-border);
  color: var(--bt-tag-blue-text);
}

/* OUTLINE – 배경 투명, 라이트 보더 ------------------------------- */
.bt-tag--outline {
  background: transparent;
  border-color: rgba(206, 212, 218, 0.9);
  color: #4b5563;
}

/* outline selected ----------------------------------------------- */
.bt-tag--outline.bt-tag--selected {
  border-color: var(--bt-tag-gold-border);
  color: var(--bt-tag-gold-text-soft);
  box-shadow:
    0 0 0 1px rgba(209, 160, 55, 0.35),
    0 4px 14px rgba(209, 160, 55, 0.18);
}

/* 선택 상태 공통 강조 -------------------------------------------- */
.bt-tag--selected {
  transform: translateY(-0.5px);
}

/* hover 같은 인터랙션이 필요해지면 여기에서 확장 가능 */
</style>
