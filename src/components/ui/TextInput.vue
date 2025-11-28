<!-- src/components/ui/TextInput.vue -->
<template>
  <div
    class="bt-input__wrapper"
    :class="{
      'bt-input--error': error,
      'bt-input--disabled': disabled,
      'bt-input--focused': isFocused,
      [`bt-input--${size}`]: true,
    }"
  >
    <!-- Label -->
    <label v-if="label" class="bt-input__label">
      {{ label }}
      <span v-if="required" class="bt-input__required">*</span>
    </label>

    <!-- Field -->
    <div class="bt-input__field">
      <div
        v-if="$slots.prefix"
        class="bt-input__affix bt-input__affix--prefix"
      >
        <slot name="prefix" />
      </div>

      <input
        :type="type"
        class="bt-input"
        :placeholder="placeholder"
        :disabled="disabled"
        :autocomplete="autocomplete"
        :inputmode="inputmode"
        :value="modelValue"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />

      <div
        v-if="$slots.suffix"
        class="bt-input__affix bt-input__affix--suffix"
      >
        <slot name="suffix" />
      </div>
    </div>

    <!-- Helper / Error -->
    <p v-if="error" class="bt-input__help bt-input__help--error">
      {{ error }}
    </p>
    <p v-else-if="help" class="bt-input__help">
      {{ help }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue?: string | number;
    type?: string;
    placeholder?: string;
    label?: string;
    help?: string;
    error?: string;
    disabled?: boolean;
    required?: boolean;
    size?: 'sm' | 'md' | 'lg';
    autocomplete?: string;
    inputmode?:
      | 'text'
      | 'search'
      | 'tel'
      | 'url'
      | 'email'
      | 'numeric'
      | 'decimal';
  }>(),
  {
    type: 'text',
    size: 'md',
    disabled: false,
    autocomplete: 'off',
    inputmode: 'text',
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number | undefined): void;
  (e: 'blur'): void;
  (e: 'focus'): void;
}>();

const isFocused = ref(false);

const onInput = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('update:modelValue', target.value);
};

const onFocus = () => {
  isFocused.value = true;
  emit('focus');
};

const onBlur = () => {
  isFocused.value = false;
  emit('blur');
};
</script>

<style scoped>
/* ----------------------------------------------------------------
   BrainTree TextInput – Light Gold / Neutral Enterprise System
   (Dark Navy 요소 완전 제거)
---------------------------------------------------------------- */

/* Wrapper -------------------------------------------------------- */
.bt-input__wrapper {
  --bt-input-surface: #fffdf8;           /* Warm White Sand */
  --bt-input-surface-soft: #fffaf2;
  --bt-input-border: rgba(209, 213, 219, 0.85);
  --bt-input-border-soft: rgba(209, 213, 219, 0.55);

  --bt-input-text: #111827;
  --bt-input-label: #4b5563;
  --bt-input-placeholder: #9ca3af;

  --bt-gold-main: #d1a037;
  --bt-gold-strong: #b7791f;
  --bt-gold-soft: #facc6b;

  --bt-focus-border: rgba(209, 160, 55, 0.9);
  --bt-focus-shadow: rgba(209, 160, 55, 0.25);

  --bt-error-border: rgba(220, 38, 38, 0.85);
  --bt-error-shadow: rgba(220, 38, 38, 0.25);

  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  width: 100%;
}

/* ---------------------------------------------------------------
   Label
---------------------------------------------------------------- */
.bt-input__label {
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  color: var(--bt-input-label);
}

.bt-input__required {
  margin-left: 0.12rem;
  color: var(--bt-gold-main);
}

/* ---------------------------------------------------------------
   Field Container
---------------------------------------------------------------- */
.bt-input__field {
  display: flex;
  align-items: center;

  border-radius: 0.65rem;

  background:
    radial-gradient(circle at 0% 0%, rgba(255, 255, 255, 0.95), transparent 60%),
    var(--bt-input-surface);

  border: 1px solid var(--bt-input-border-soft);

  box-shadow:
    0 10px 26px rgba(17, 24, 39, 0.06),
    0 0 0 1px rgba(255, 255, 255, 0.85);

  transition:
    border-color 140ms cubic-bezier(0.16, 1, 0.3, 1),
    box-shadow 140ms cubic-bezier(0.16, 1, 0.3, 1),
    background-color 140ms cubic-bezier(0.16, 1, 0.3, 1),
    transform 140ms cubic-bezier(0.16, 1, 0.3, 1);
}

/* ---------------------------------------------------------------
   Input
---------------------------------------------------------------- */
.bt-input {
  flex: 1 1 auto;
  border: none;
  outline: none;
  background: transparent;

  color: var(--bt-input-text);
  font-size: 0.88rem;
  line-height: 1.45;

  padding-inline: 0.85rem;
  padding-block: 0.6rem;
}

.bt-input::placeholder {
  color: var(--bt-input-placeholder);
}

/* Size Variants -------------------------------------------------- */
.bt-input--sm .bt-input {
  padding-block: 0.45rem;
  font-size: 0.83rem;
}

.bt-input--lg .bt-input {
  padding-block: 0.82rem;
  font-size: 0.95rem;
}

/* ---------------------------------------------------------------
   Affix Slots (prefix/suffix)
---------------------------------------------------------------- */
.bt-input__affix {
  display: inline-flex;
  align-items: center;
  padding-inline: 0.6rem;
  color: #6b7280;
  font-size: 0.85rem;
}

.bt-input__affix--prefix {
  padding-left: 0.9rem;
}
.bt-input__affix--suffix {
  padding-right: 0.9rem;
}

/* ---------------------------------------------------------------
   Focus
---------------------------------------------------------------- */
.bt-input--focused .bt-input__field {
  border-color: var(--bt-focus-border);

  box-shadow:
    0 0 0 1px var(--bt-focus-border),
    0 10px 28px var(--bt-focus-shadow);

  background:
    radial-gradient(circle at 0% 0%, rgba(250, 204, 21, 0.22), transparent 65%),
    var(--bt-input-surface-soft);

  transform: translateY(-0.5px);
}

/* ---------------------------------------------------------------
   Disabled
---------------------------------------------------------------- */
.bt-input--disabled .bt-input__field {
  opacity: 0.55;
  background: #f7f5f2;
  border-color: rgba(209, 213, 219, 0.7);
  box-shadow: none;
}

.bt-input--disabled .bt-input {
  cursor: not-allowed;
}

/* ---------------------------------------------------------------
   Error
---------------------------------------------------------------- */
.bt-input--error .bt-input__field {
  border-color: var(--bt-error-border);
  background:
    radial-gradient(circle at 0% 0%, rgba(252, 165, 165, 0.18), transparent 60%),
    #fff5f5;

  box-shadow:
    0 0 0 1px var(--bt-error-border),
    0 10px 24px var(--bt-error-shadow);
}

/* ---------------------------------------------------------------
   Help Text
---------------------------------------------------------------- */
.bt-input__help {
  margin: 0;
  font-size: 0.78rem;
  color: #6b7280;
}

.bt-input__help--error {
  color: #b91c1c;
}

/* ---------------------------------------------------------------
   Responsive
---------------------------------------------------------------- */
@media (max-width: 480px) {
  .bt-input__label {
    font-size: 0.82rem;
  }

  .bt-input {
    font-size: 0.84rem;
    padding-inline: 0.75rem;
  }
}
</style>
