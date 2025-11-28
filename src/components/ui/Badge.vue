<!-- src/components/ui/Badge.vue -->
<template>
  <component
    :is="tag"
    class="bt-badge"
    :class="badgeClass"
    v-bind="rootAttrs"
  >
    <!-- Leading Icon -->
    <span
      v-if="$slots.leading || leadingIcon"
      class="bt-badge__icon bt-badge__icon--leading"
    >
      <slot name="leading">
        <component v-if="leadingIcon" :is="leadingIcon" aria-hidden="true" />
      </slot>
    </span>

    <!-- Label -->
    <span class="bt-badge__label">
      <slot />
    </span>

    <!-- Trailing Icon -->
    <span
      v-if="$slots.trailing || trailingIcon"
      class="bt-badge__icon bt-badge__icon--trailing"
    >
      <slot name="trailing">
        <component v-if="trailingIcon" :is="trailingIcon" aria-hidden="true" />
      </slot>
    </span>
  </component>
</template>

<script setup lang="ts">
import { computed } from "vue";

type BadgeVariant = "solid" | "soft" | "outline" | "ghost";
type BadgeTone =
  | "gold"
  | "neutral"
  | "success"
  | "danger"
  | "info";
type BadgeSize = "xs" | "sm" | "md";
type BadgeTag = "span" | "button" | "a";

const props = defineProps<{
  variant?: BadgeVariant;
  tone?: BadgeTone;
  size?: BadgeSize;
  tag?: BadgeTag;

  href?: string;
  disabled?: boolean;
  interactive?: boolean;

  leadingIcon?: any;
  trailingIcon?: any;

  ariaLabel?: string;
}>();

const emits = defineEmits<{
  (e: "click", ev: MouseEvent): void;
}>();

const variant = computed(() => props.variant ?? "soft");
const tone = computed(() => props.tone ?? "gold");
const size = computed(() => props.size ?? "sm");
const tag = computed(() => props.tag ?? "span");

const badgeClass = computed(() => [
  `bt-badge--variant-${variant.value}`,
  `bt-badge--tone-${tone.value}`,
  `bt-badge--size-${size.value}`,
  {
    "bt-badge--interactive":
      props.interactive ||
      tag.value === "button" ||
      tag.value === "a",
    "bt-badge--disabled": !!props.disabled,
  },
]);

const rootAttrs = computed(() => {
  const base: Record<string, any> = {
    href: tag.value === "a" ? props.href : undefined,
    disabled: tag.value === "button" ? props.disabled : undefined,
    type: tag.value === "button" ? "button" : undefined,
    "aria-disabled": props.disabled ? "true" : undefined,
    "aria-label": props.ariaLabel,
    onClick: (ev: MouseEvent) => {
      if (props.disabled) {
        ev.preventDefault();
        ev.stopPropagation();
        return;
      }
      emits("click", ev);
    },
  };

  if (tag.value === "span" && (props.interactive || props.href)) {
    base.role = "button";
    base.tabindex = props.disabled ? -1 : 0;
  }

  return base;
});
</script>

<style scoped>
/* ================================================================
   BrainTree Badge Component — Enterprise Gold Edition
   모든 색상 시스템은 Light Gold Theme 기준 통일
================================================================ */
.bt-badge {
  --bt-badge-radius: 999px;
  --bt-badge-border-width: 1px;

  /* Gold Core */
  --bt-gold-strong: #d1a037;
  --bt-gold-soft: #facc6b;
  --bt-gold-surface: #fff9e8;
  --bt-gold-border: rgba(209, 160, 55, 0.85);
  --bt-gold-border-soft: rgba(209, 160, 55, 0.55);
  --bt-gold-text-strong: #4b380a;
  --bt-gold-text-soft: #5b4a17;

  /* Neutral (Light Gray/Brownish Gray — BrainTree Tone) */
  --bt-neutral-bg: #faf7f2;
  --bt-neutral-border: rgba(120, 110, 90, 0.35);
  --bt-neutral-text: #4b463c;

  /* Success */
  --bt-success-bg: rgba(34, 197, 94, 0.12);
  --bt-success-border: rgba(22, 163, 74, 0.5);
  --bt-success-text: #167a44;

  /* Danger */
  --bt-danger-bg: rgba(240, 71, 71, 0.12);
  --bt-danger-border: rgba(220, 53, 69, 0.55);
  --bt-danger-text: #c03a3a;

  /* Info */
  --bt-info-bg: rgba(59, 130, 246, 0.12);
  --bt-info-border: rgba(37, 99, 235, 0.55);
  --bt-info-text: #2563eb;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--bt-badge-radius);
  border-width: var(--bt-badge-border-width);
  border-style: solid;

  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  white-space: nowrap;

  transition:
    background-color 150ms cubic-bezier(0.16, 1, 0.3, 1),
    border-color 150ms cubic-bezier(0.16, 1, 0.3, 1),
    color 150ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 150ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 150ms cubic-bezier(0.16, 1, 0.3, 1);

  user-select: none;
}

/* ======================== SIZE ======================== */
.bt-badge--size-xs {
  padding: 0.12rem 0.46rem;
  font-size: 0.62rem;
}

.bt-badge--size-sm {
  padding: 0.16rem 0.64rem;
  font-size: 0.72rem;
}

.bt-badge--size-md {
  padding: 0.22rem 0.88rem;
  font-size: 0.8rem;
}

/* ======================= LABEL ======================== */
.bt-badge__label {
  line-height: 1;
}

/* ======================= ICONS ======================== */
.bt-badge__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.bt-badge__icon--leading {
  margin-right: 0.18rem;
}
.bt-badge__icon--trailing {
  margin-left: 0.18rem;
}
.bt-badge__icon > * {
  width: 0.78em;
  height: 0.78em;
}

/* ======================= VARIANTS ====================== */
/* SOLID — Premium Gold */
.bt-badge--variant-solid.bt-badge--tone-gold {
  background:
    radial-gradient(circle at 0% 0%, rgba(250, 204, 21, 0.33), transparent 60%),
    linear-gradient(135deg, var(--bt-gold-soft), var(--bt-gold-strong));
  color: #2e1f05;
  border-color: var(--bt-gold-border);
  box-shadow:
    0 8px 24px rgba(209, 160, 55, 0.4),
    0 0 0 1px rgba(180, 140, 40, 0.9);
}

.bt-badge--variant-solid.bt-badge--tone-gold.bt-badge--interactive:hover:not(.bt-badge--disabled) {
  box-shadow:
    0 14px 36px rgba(209, 160, 55, 0.55),
    0 0 0 1px rgba(180, 140, 40, 1);
}

/* SOLID — Neutral */
.bt-badge--variant-solid.bt-badge--tone-neutral {
  background: linear-gradient(135deg, #f1ece3, #e6dfd2);
  border-color: var(--bt-neutral-border);
  color: var(--bt-neutral-text);
}

/* SOLID — Other tones */
.bt-badge--variant-solid.bt-badge--tone-success {
  background: linear-gradient(135deg, #4ade80, #16a34a);
  border-color: var(--bt-success-border);
  color: #052e16;
}

.bt-badge--variant-solid.bt-badge--tone-danger {
  background: linear-gradient(135deg, #fca5a5, #dc2626);
  border-color: var(--bt-danger-border);
  color: #450a0a;
}

.bt-badge--variant-solid.bt-badge--tone-info {
  background: linear-gradient(135deg, #93c5fd, #3b82f6);
  border-color: var(--bt-info-border);
  color: #1e3a8a;
}

/* ======================= SOFT ========================== */
.bt-badge--variant-soft.bt-badge--tone-gold {
  background:
    radial-gradient(circle at 0% 0%, rgba(250, 204, 21, 0.2), transparent 60%),
    #fffdfa;
  color: var(--bt-gold-text-soft);
  border-color: var(--bt-gold-border-soft);
}

.bt-badge--variant-soft.bt-badge--tone-neutral {
  background: #f9f6f1;
  border-color: var(--bt-neutral-border);
  color: var(--bt-neutral-text);
}

.bt-badge--variant-soft.bt-badge--tone-success {
  background: var(--bt-success-bg);
  border-color: var(--bt-success-border);
  color: var(--bt-success-text);
}

.bt-badge--variant-soft.bt-badge--tone-danger {
  background: var(--bt-danger-bg);
  border-color: var(--bt-danger-border);
  color: var(--bt-danger-text);
}

.bt-badge--variant-soft.bt-badge--tone-info {
  background: var(--bt-info-bg);
  border-color: var(--bt-info-border);
  color: var(--bt-info-text);
}

/* ======================= OUTLINE ======================= */
.bt-badge--variant-outline {
  background: transparent;
}

.bt-badge--variant-outline.bt-badge--tone-gold {
  border-color: var(--bt-gold-border);
  color: var(--bt-gold-text-soft);
}

.bt-badge--variant-outline.bt-badge--tone-neutral {
  border-color: var(--bt-neutral-border);
  color: var(--bt-neutral-text);
}

.bt-badge--variant-outline.bt-badge--tone-success {
  border-color: var(--bt-success-border);
  color: var(--bt-success-text);
}

.bt-badge--variant-outline.bt-badge--tone-danger {
  border-color: var(--bt-danger-border);
  color: var(--bt-danger-text);
}

.bt-badge--variant-outline.bt-badge--tone-info {
  border-color: var(--bt-info-border);
  color: var(--bt-info-text);
}

/* ======================= GHOST ========================= */
.bt-badge--variant-ghost {
  background: transparent;
  border-color: transparent;
}

.bt-badge--variant-ghost.bt-badge--tone-gold {
  color: var(--bt-gold-text-soft);
}

.bt-badge--variant-ghost.bt-badge--tone-neutral {
  color: var(--bt-neutral-text);
}

.bt-badge--variant-ghost.bt-badge--tone-success {
  color: var(--bt-success-text);
}

.bt-badge--variant-ghost.bt-badge--tone-danger {
  color: var(--bt-danger-text);
}

.bt-badge--variant-ghost.bt-badge--tone-info {
  color: var(--bt-info-text);
}

/* ======================= INTERACTIVE ==================== */
.bt-badge--interactive {
  cursor: pointer;
}

.bt-badge--interactive:hover:not(.bt-badge--disabled) {
  transform: translateY(-1px);
}

/* ======================= DISABLED ======================= */
.bt-badge--disabled {
  opacity: 0.55;
  cursor: not-allowed;
  box-shadow: none;
}

/* ======================= FOCUS ========================== */
.bt-badge--interactive:focus-visible {
  outline: 2px solid #facc15;
  outline-offset: 2px;
}
</style>
