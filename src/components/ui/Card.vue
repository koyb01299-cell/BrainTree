<!-- src/components/ui/Card.vue -->
<template>
  <component
    :is="asTag"
    v-bind="rootAttrs"
    class="bt-card"
    :class="cardClass"
  >
    <!-- HEADER -->
    <header v-if="$slots.header" class="bt-card__header">
      <slot name="header" />
    </header>

    <!-- CONTENT -->
    <div class="bt-card__body">
      <slot />
    </div>

    <!-- FOOTER -->
    <footer v-if="$slots.footer" class="bt-card__footer">
      <slot name="footer" />
    </footer>
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type Variant = 'solid' | 'soft' | 'outline' | 'glow' | 'gradient';
type Padding = 'sm' | 'md' | 'lg';

const props = defineProps<{
  variant?: Variant;
  padding?: Padding;
  hover?: boolean;
  bordered?: boolean;
  interactive?: boolean;
  as?: string;
  href?: string;
  ariaLabel?: string;
}>();

const emits = defineEmits<{
  (e: 'click', ev: MouseEvent): void;
}>();

const asTag = computed(() => props.as ?? (props.interactive ? 'button' : 'div'));

const cardClass = computed(() => [
  `bt-card--variant-${props.variant ?? 'soft'}`,
  `bt-card--padding-${props.padding ?? 'md'}`,
  {
    'bt-card--hover': props.hover,
    'bt-card--bordered': props.bordered,
    'bt-card--interactive': props.interactive,
  },
]);

const rootAttrs = computed(() => {
  const base: Record<string, any> = {
    href: props.as === 'a' ? props.href : undefined,
    'aria-label': props.ariaLabel,
    onClick: (e: MouseEvent) => emits('click', e),
  };

  if (props.interactive && props.as === 'div') {
    base.role = 'button';
    base.tabindex = 0;
  }
  return base;
});
</script>

<style scoped>
/* ================================================================
   BrainTree Enterprise Gold Card System
   (네이비 완전 제거, 라이트 골드/아이보리 기반)
================================================================= */

.bt-card {
  --bt-card-radius: 1rem;

  /* 밝은 골드 계열 팔레트 */
  --bt-card-bg-base: #fffaf2;
  --bt-card-bg-soft: #fdf7ec;
  --bt-card-bg-solid: #f9f0df;

  --bt-card-border-soft: rgba(209, 160, 55, 0.35);
  --bt-card-border-strong: rgba(209, 160, 55, 0.65);

  --bt-card-gold-strong: #d1a037;

  border-radius: var(--bt-card-radius);
  background: var(--bt-card-bg-soft);
  border: 1px solid var(--bt-card-border-soft);
  color: #3b3428;
  position: relative;
  overflow: hidden;

  box-shadow:
    0 12px 24px rgba(209, 160, 55, 0.16),
    0 0 0 1px rgba(255, 255, 255, 0.4) inset;

  transition:
    box-shadow 0.22s ease,
    transform 0.18s ease,
    border-color 0.22s ease,
    background 0.3s ease;
}

/* ================================================================
   Padding
================================================================= */

.bt-card--padding-sm {
  padding: 0.85rem 1rem;
}
.bt-card--padding-md {
  padding: 1.25rem 1.35rem;
}
.bt-card--padding-lg {
  padding: 1.9rem 2rem;
}

/* ================================================================
   Variants
================================================================= */

/* SOFT (기본) */
.bt-card--variant-soft {
  background:
    radial-gradient(circle at 0% 0%, rgba(255, 233, 171, 0.45), transparent 65%),
    var(--bt-card-bg-soft);
  border-color: var(--bt-card-border-soft);
}

/* SOLID (조금 더 강조된 카드) */
.bt-card--variant-solid {
  background:
    radial-gradient(circle at 0% 0%, rgba(255,228,150,0.35), transparent 70%),
    var(--bt-card-bg-solid);
  border-color: var(--bt-card-border-strong);
  box-shadow:
    0 16px 36px rgba(209, 160, 55, 0.25),
    0 0 0 1px rgba(255, 255, 255, 0.5) inset;
}

/* OUTLINE (투명 + 선만) */
.bt-card--variant-outline {
  background: rgba(255, 255, 255, 0.5);
  border-color: rgba(209, 160, 55, 0.3);
  backdrop-filter: blur(12px);
}

/* GLOW (많이 쓰지는 않지만 강조용) */
.bt-card--variant-glow {
  background:
    radial-gradient(circle at 0% 0%, rgba(255, 214, 130, 0.52), transparent 60%),
    var(--bt-card-bg-base);
  border-color: var(--bt-card-border-strong);

  box-shadow:
    0 18px 42px rgba(209, 160, 55, 0.32),
    0 0 0 1px rgba(255, 255, 255, 0.45) inset;
}

/* GRADIENT (프리미엄 카드) */
.bt-card--variant-gradient {
  background:
    linear-gradient(
      135deg,
      rgba(255, 235, 200, 0.75),
      rgba(249, 220, 160, 0.75),
      rgba(253, 240, 200, 0.78)
    );
  border-color: var(--bt-card-border-strong);

  box-shadow:
    0 22px 48px rgba(209, 160, 55, 0.28),
    0 0 0 1px rgba(255,255,255,0.45) inset;
}

/* ================================================================
   Hover
================================================================= */

.bt-card--hover:hover,
.bt-card--interactive:hover {
  transform: translateY(-2px);
  box-shadow:
    0 26px 52px rgba(209, 160, 55, 0.38),
    0 0 0 1px rgba(255, 255, 255, 0.55) inset;
}

/* ================================================================
   Header / Body / Footer
================================================================= */

.bt-card__header {
  font-size: 1.02rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #3b3428;
}

.bt-card__body {
  font-size: 0.9rem;
  line-height: 1.65;
  color: #544a3f;
}

.bt-card__footer {
  margin-top: 1rem;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(209,160,55,0.28);
  font-size: 0.82rem;
  color: #7a6e57;
}

/* ================================================================
   Focus Ring
================================================================= */

.bt-card--interactive:focus-visible {
  outline: 2px solid var(--bt-card-gold-strong);
  outline-offset: 4px;
}
</style>
