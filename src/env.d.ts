// src/env.d.ts
/// <reference types="vite/client" />

/**
 * 전역 타입 선언 파일
 * - .vue SFC 타입
 * - 정적 자원(import) 타입
 * - Vite 환경변수 타입(ImportMetaEnv)
 */

/* --------------------------------------------------------------------------
 * Vue Single File Component (*.vue)
 * -------------------------------------------------------------------------- */

declare module '*.vue' {
  import type { DefineComponent } from 'vue';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component: DefineComponent<Record<string, unknown>, Record<string, unknown>, any>;
  export default component;
}

/* --------------------------------------------------------------------------
 * Static Assets
 *
 * CodeCanvus에서 사용할 수 있는 정적 자원 타입 선언
 * - 이미지: hero / work / studio / logo 등
 * - 아이콘: svg (inline / img 모두 허용)
 * -------------------------------------------------------------------------- */

declare module '*.svg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

/**
 * Lottie / JSON data 파일
 * - 애니메이션 / 정적 데이터 등에서 활용 가능
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare module '*.json' {
  const value: any;
  export default value;
}

/* --------------------------------------------------------------------------
 * Vite Environment Variables (ImportMetaEnv)
 *
 * env 파일 예시:
 * - .env
 * - .env.development
 * - .env.production
 *
 * 반드시 'VITE_' prefix 필수.
 * -------------------------------------------------------------------------- */

interface ImportMetaEnv {
  /**
   * 서비스 이름
   * 예: "CodeCanvus"
   */
  readonly VITE_APP_NAME?: string;

  /**
   * 배포 환경 태그
   * 예: "local" | "development" | "staging" | "production"
   */
  readonly VITE_APP_ENV?: string;

  /**
   * 퍼블릭 사이트 URL
   * 예: "https://codecanvus.com"
   */
  readonly VITE_APP_BASE_URL?: string;

  /**
   * analytics / 로그 수집용 키
   * 예: Amplitude, GA, Sentry 등
   */
  readonly VITE_APP_ANALYTICS_KEY?: string;
  readonly VITE_APP_ERROR_TRACKING_DSN?: string;

  /**
   * API 엔드포인트
   * 예: "https://api.codecanvus.com"
   */
  readonly VITE_API_BASE_URL?: string;

  /**
   * 실험/플래그 토글
   * 예: "true" | "false"
   */
  readonly VITE_FEATURE_EXPERIMENTAL_UI?: string;
  readonly VITE_FEATURE_ENABLE_LOGGING?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
