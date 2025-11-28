// .eslintrc.cjs
/**
 * CodeCanvus 엔터프라이즈급 프론트엔드 코드 품질 기준
 * - Vue 3 + TypeScript + Vite 환경 최적화
 * - 대규모 컴포넌트 구조 / 섹션화된 UI 설계에 적합한 규칙만 엄선
 */

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },

  /**
   * 코드 파서 및 파서 옵션
   */
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: false,
    },
  },

  /**
   * 관련 플러그인 로드
   */
  plugins: ['vue', '@typescript-eslint', 'import', 'unused-imports'],

  /**
   * 프레임워크/언어별 recommended 규칙 + CodeCanvus 기준 강화 규칙 포함
   */
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier', // 항상 마지막 (ESLint와 Prettier 충돌 방지)
  ],

  /**
   * 상세 규칙
   */
  rules: {
    /* Vue 규칙 --------------------------------------------------- */
    'vue/multi-word-component-names': 'off', // SFC 이름 단일 단어 허용(프로젝트 단위 섹션 구성 때문)
    'vue/no-v-html': 'warn',
    'vue/require-default-prop': 'off',
    'vue/no-mutating-props': 'warn',

    /* TypeScript -------------------------------------------------- */
    '@typescript-eslint/no-unused-vars': 'off', // unused-imports 플러그인으로 대체
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      },
    ],

    /* Import rules ------------------------------------------------ */
    'import/no-unresolved': 'error',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin', // fs, path 등
          'external', // vue, vue-router 등
          'internal', // @/*
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],

    /* unused-imports 플러그인 ------------------------------------ */
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],

    /* 일반 코드 품질 --------------------------------------------- */
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-debugger': 'error',
    'prefer-const': 'error',
    'no-var': 'error',
    'object-shorthand': 'warn',
    'arrow-body-style': ['warn', 'as-needed'],
  },

  /**
   * import resolver – TS paths 지원
   */
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['./tsconfig.json'],
      },
    },
  },
};
