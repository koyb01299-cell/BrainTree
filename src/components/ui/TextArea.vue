<!-- src/components/ui/TextArea.vue -->
<template>
  <div
    class="bt-textarea__wrapper"
    :class="{
      'bt-textarea--error': error,
      'bt-textarea--disabled': disabled,
      'bt-textarea--focused': isFocused,
    }"
  >
    <!-- Label -->
    <label v-if="label" class="bt-textarea__label">
      {{ label }}
      <span v-if="required" class="bt-textarea__required">*</span>
    </label>

    <!-- Textarea field -->
    <textarea
      class="bt-textarea"
      :placeholder="placeholder"
      :disabled="disabled"
      :rows="rows"
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
      @focus="isFocused = true"
      @blur="isFocused = false"
    ></textarea>

    <!-- Helper / Error message -->
    <p
      v-if="error"
      class="bt-textarea__help bt-textarea__help--error"
    >
      {{ error }}
    </p>
    <p v-else-if="help" class="bt-textarea__help">
      {{ help }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{
  modelValue?: string;
  placeholder?: string;
  label?: string;
  help?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  rows?: number;
}>();

const isFocused = ref(false);
</script>

<style scoped>
/* ----------------------------------------------------------------
   BrainTree TextArea System
   라이트 골드 / 뉴트럴 테마에 맞춘 폼 필드
---------------------------------------------------------------- */

/* WRAPPER -------------------------------------------------------- */
.bt-textarea__wrapper {
  --bt-textarea-gold-main: #d1a037;
  --bt-textarea-gold-soft: #facc6b;
  --bt-textarea-surface: #fffbf4;
  --bt-textarea-surface-soft: #fffaf0;
  --bt-textarea-border: rgba(209, 213, 219, 0.9);
  --bt-textarea-border-soft: rgba(209, 213, 219, 0.7);
  --bt-textarea-border-focus: rgba(209, 160, 55, 0.95);
  --bt-textarea-shadow-focus: rgba(209, 160, 55, 0.28);
  --bt-textarea-placeholder: #9ca3af;
  --bt-textarea-text: #111827;
  --bt-textarea-label: #4b5563;
  --bt-textarea-muted: #6b7280;
  --bt-textarea-disabled-surface: #f5f3ef;

  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  width: 100%;
  color: var(--bt-textarea-text);
}

/* LABEL ---------------------------------------------------------- */
.bt-textarea__label {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--bt-textarea-label);
}

.bt-textarea__required {
  margin-left: 0.15rem;
  color: var(--bt-textarea-gold-main);
}

/* TEXTAREA ------------------------------------------------------- */
.bt-textarea {
  width: 100%;
  resize: vertical;
  padding: 0.75rem 0.9rem;

  font-size: 0.88rem;
  line-height: 1.55;
  font-weight: 400;

  border-radius: 0.65rem;

  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(255, 255, 255, 0.9),
      transparent 58%
    ),
    var(--bt-textarea-surface);
  border: 1px solid var(--bt-textarea-border-soft);

  color: var(--bt-textarea-text);
  outline: none;

  box-shadow:
    0 12px 26px rgba(15, 23, 42, 0.04),
    0 0 0 1px rgba(255, 255, 255, 0.9);

  transition:
    border-color 140ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 140ms cubic-bezier(0.16, 1, 0.3, 1),
    background-color 140ms cubic-bezier(0.16, 1, 0.3, 1),
    color 140ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 140ms cubic-bezier(0.16, 1, 0.3, 1);
}

.bt-textarea::placeholder {
  color: var(--bt-textarea-placeholder);
}

/* FOCUS ---------------------------------------------------------- */
.bt-textarea__wrapper.bt-textarea--focused .bt-textarea {
  border-color: var(--bt-textarea-border-focus);
  box-shadow:
    0 0 0 1px var(--bt-textarea-border-focus),
    0 12px 28px var(--bt-textarea-shadow-focus);
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(250, 204, 21, 0.25),
      transparent 60%
    ),
    var(--bt-textarea-surface-soft);
  transform: translateY(-0.5px);
}

/* DISABLED ------------------------------------------------------- */
.bt-textarea__wrapper.bt-textarea--disabled .bt-textarea {
  opacity: 0.7;
  pointer-events: none;
  background: var(--bt-textarea-disabled-surface);
  border-color: rgba(209, 213, 219, 0.8);
  box-shadow: none;
}

/* ERROR ---------------------------------------------------------- */
.bt-textarea__wrapper.bt-textarea--error .bt-textarea {
  border-color: rgba(239, 68, 68, 0.85);
  box-shadow:
    0 0 0 1px rgba(239, 68, 68, 0.75),
    0 10px 24px rgba(239, 68, 68, 0.21);
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(248, 113, 113, 0.18),
      transparent 60%
    ),
    #fff5f5;
}

/* HELP / ERROR TEXT ---------------------------------------------- */
.bt-textarea__help {
  margin: 0;
  font-size: 0.78rem;
  color: var(--bt-textarea-muted);
  line-height: 1.45;
}

.bt-textarea__help--error {
  color: #b91c1c;
}

/* RESPONSIVE ----------------------------------------------------- */
@media (max-width: 480px) {
  .bt-textarea {
    font-size: 0.84rem;
    padding: 0.7rem 0.75rem;
  }
}
</style>
